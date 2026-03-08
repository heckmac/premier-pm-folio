import { useState, useRef, useEffect, Suspense, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { PARTIALS_REGISTRY } from "@/components/partials/registry";
import ExpandablePartial from "@/components/partials/ExpandablePartial";
import { ChatStreamContext } from "@/components/partials/ChatStreamContext";
import FadeIn from "@/components/FadeIn";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/portfolio-chat`;

const CHIPS = [
  "Tell me about yourself",
  "I'm hiring for a product role",
  "Show me your product strategy work",
  "Show me your product UX work",
  "How do you approach complex products?",
  "Download CV",
];

const RENDER_REGEX = /\[RENDER:([a-z0-9-]+)\]/;
const SUGGESTIONS_REGEX = /\[SUGGESTIONS:\s*([^\]]+)\]/;

function parseTags(text: string): { cleanText: string; partialId: string | null; suggestions: string[] } {
  let partialId: string | null = null;
  let suggestions: string[] = [];

  const renderMatch = text.match(RENDER_REGEX);
  if (renderMatch) {
    partialId = renderMatch[1];
    text = text.replace(RENDER_REGEX, "");
  }

  const suggestionsMatch = text.match(SUGGESTIONS_REGEX);
  if (suggestionsMatch) {
    suggestions = suggestionsMatch[1].split("|").map(s => s.trim()).filter(Boolean);
    text = text.replace(SUGGESTIONS_REGEX, "");
  }

  return { cleanText: text.trim(), partialId, suggestions };
}

async function streamChat({
  messages,
  onDelta,
  onDone,
}: {
  messages: Msg[];
  onDelta: (delta: string) => void;
  onDone: () => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok || !resp.body) throw new Error("Failed to start stream");

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let textBuffer = "";
  let streamDone = false;

  while (!streamDone) {
    const { done, value } = await reader.read();
    if (done) break;
    textBuffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
      let line = textBuffer.slice(0, newlineIndex);
      textBuffer = textBuffer.slice(newlineIndex + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") { streamDone = true; break; }
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch {
        textBuffer = line + "\n" + textBuffer;
        break;
      }
    }
  }

  if (textBuffer.trim()) {
    for (let raw of textBuffer.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (raw.startsWith(":") || raw.trim() === "") continue;
      if (!raw.startsWith("data: ")) continue;
      const jsonStr = raw.slice(6).trim();
      if (jsonStr === "[DONE]") continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch { /* ignore */ }
    }
  }

  onDone();
}

// A stream item is either an assistant message, a rendered partial, or suggestions
type StreamItem =
  | { type: "user-message"; content: string; id: number }
  | { type: "assistant-message"; content: string; id: number }
  | { type: "partial"; partialId: string; id: number }
  | { type: "suggestions"; suggestions: string[]; id: number };

let nextItemId = 0;

const ChatPortfolio = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamItems, setStreamItems] = useState<StreamItem[]>([]);
  const [renderedPartials, setRenderedPartials] = useState<Set<string>>(new Set());
  const [streamingContent, setStreamingContent] = useState<string | null>(null);
  const contentStreamRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const streamingRef = useRef<string>("");

  const injectPartial = useCallback((partialId: string): string | null => {
    if (!PARTIALS_REGISTRY[partialId]?.component || renderedPartials.has(partialId)) return null;
    const itemId = nextItemId++;
    const domId = `stream-item-${itemId}`;
    setRenderedPartials(prev => new Set(prev).add(partialId));
    setStreamItems(prev => [...prev, { type: "partial", partialId, id: itemId }]);
    return domId;
  }, [renderedPartials]);

  const handleTagsFromResponse = useCallback((fullText: string) => {
    const { partialId, suggestions } = parseTags(fullText);
    if (partialId) injectPartial(partialId);
    if (suggestions.length > 0) {
      setStreamItems(prev => [...prev, { type: "suggestions", suggestions, id: nextItemId++ }]);
    }
  }, [injectPartial]);

  const send = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Msg = { role: "user", content: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setStreamItems(prev => [...prev, { type: "user-message", content: text.trim(), id: nextItemId++ }]);
    setInput("");
    setIsLoading(true);
    streamingRef.current = "";
    setStreamingContent("");

    let assistantSoFar = "";

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: (chunk) => {
          assistantSoFar += chunk;
          const { cleanText } = parseTags(assistantSoFar);
          streamingRef.current = cleanText;
          setStreamingContent(cleanText);
          // no auto-scroll — user controls scrolling
        },
        onDone: () => {
          const { cleanText } = parseTags(assistantSoFar);
          // Only add text message if there's actual content (not just tags)
          if (cleanText) {
            setStreamItems(prev => [...prev, { type: "assistant-message", content: cleanText, id: nextItemId++ }]);
          }
          setStreamingContent(null);
          // Always store in conversation history for context (use original text so AI knows what it said)
          setMessages(prev => [...prev, { role: "assistant", content: assistantSoFar }]);
          setIsLoading(false);
          handleTagsFromResponse(assistantSoFar);
        },
      });
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      setStreamingContent(null);
      const errorMsg = "Mi dispiace, c'è stato un errore. Riprova.";
      setStreamItems(prev => [...prev, { type: "assistant-message", content: errorMsg, id: nextItemId++ }]);
      setMessages(prev => [...prev, { role: "assistant", content: errorMsg }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const hasStarted = streamItems.length > 0 || streamingContent !== null;

  const chatStreamActions = useMemo(() => ({ injectPartial }), [injectPartial]);

  return (
    <ChatStreamContext.Provider value={chatStreamActions}>
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero — same as Home/About */}
      <section className="pt-28 pb-8 lg:pt-40 lg:pb-10 flex-shrink-0">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <FadeIn>
            <p className="text-xs font-bold text-muted-foreground tracking-[0.3em] uppercase mb-8">
              Product Strategist
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.85] tracking-tighter uppercase">
              Mario<br />Ciardulli
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 mb-10 h-[3px] w-20 bg-primary" />
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg font-normal text-muted-foreground leading-relaxed max-w-md">
              I turn complex systems into products people actually want to use —
              at the intersection of strategy, design, and engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Stream */}
      <div ref={contentStreamRef} className="flex-1 pb-32">
        {/* Onboarding / Welcome */}
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          {!hasStarted && (
            <FadeIn>
              <div className="py-10 space-y-8">
                <div className="border-l-3 border-primary pl-5 max-w-[85%]">
                  <p className="text-foreground text-lg md:text-xl font-black uppercase tracking-[0.15em] leading-relaxed">
                    Ask me anything.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CHIPS.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => send(chip)}
                      className="text-[11px] font-bold uppercase tracking-wide px-3 py-2 border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary text-foreground transition-colors"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>

        {/* Stream items: messages, user messages, and partials */}
        <AnimatePresence>
          {streamItems.map((item) => {
            if (item.type === "user-message") {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="container mx-auto px-6 lg:px-8 max-w-3xl py-4"
                >
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground px-4 py-2.5 text-sm font-bold uppercase tracking-wide max-w-[85%]">
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (item.type === "assistant-message") {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl py-5"
                >
                  <div className="border-l-3 border-primary pl-5 max-w-[85%]">
                    <div className="prose-chat max-w-none">
                      <ReactMarkdown>{item.content}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (item.type === "partial") {
              const entry = PARTIALS_REGISTRY[item.partialId];
              if (!entry?.component) return null;
              const PartialComponent = entry.component;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t-2 border-border"
                >
                  {entry.expandable ? (
                    <ExpandablePartial
                      Component={PartialComponent}
                      label={entry.expandLabel}
                      heroImage={entry.heroImage}
                    />
                  ) : (
                    <Suspense fallback={
                      <div className="py-20 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-primary/30 border-t-primary animate-spin" />
                      </div>
                    }>
                      <PartialComponent />
                    </Suspense>
                  )}
                </motion.div>
              );
            }

            if (item.type === "suggestions") {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="container mx-auto px-6 lg:px-8 max-w-3xl py-3"
                >
                  <div className="flex flex-wrap gap-2 pl-5">
                    {item.suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        disabled={isLoading}
                        className="text-[11px] font-bold uppercase tracking-wide px-3 py-2 border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary text-foreground transition-colors disabled:opacity-40"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            }

            return null;
          })}
        </AnimatePresence>

        {/* Streaming content (while AI is typing) */}
        {streamingContent !== null && (
          <div className="max-w-3xl py-5">
            <div className="border-l-3 border-primary pl-5 max-w-[85%]">
              <div className="prose-chat max-w-none">
                <ReactMarkdown>{streamingContent || "…"}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {/* Loading dots */}
        {isLoading && streamingContent === "" && (
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl py-5">
            <div className="border-l-3 border-primary pl-5 inline-flex">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Panel (fixed bottom) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t-2 border-border">
        <div className="max-w-3xl mx-auto px-4 lg:px-6 py-3">
          <div className="flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Scrivi un messaggio..."
              className="flex-1 border-2 border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              disabled={isLoading}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || isLoading}
              className="shrink-0 w-10 h-10 border-2 border-border bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
    </ChatStreamContext.Provider>
  );
};

export default ChatPortfolio;
