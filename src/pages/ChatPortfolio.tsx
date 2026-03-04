import { useState, useRef, useEffect, Suspense, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronDown, ChevronUp } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { PARTIALS_REGISTRY } from "@/components/partials/registry";
import FadeIn from "@/components/FadeIn";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/portfolio-chat`;

const CHIPS = [
  "Raccontami di te",
  "Sto valutando un profilo per un ruolo",
  "Come lavori e prendi decisioni?",
  "Mostrami i tuoi progetti",
  "Ho una domanda specifica",
  "Scarica il CV",
];

const RENDER_REGEX = /\[RENDER:([a-z0-9-]+)\]\s*$/;

function parseRenderTag(text: string): { cleanText: string; partialId: string | null } {
  const match = text.match(RENDER_REGEX);
  if (match) {
    return { cleanText: text.replace(RENDER_REGEX, "").trim(), partialId: match[1] };
  }
  return { cleanText: text, partialId: null };
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

  // Final flush
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

const ChatPortfolio = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [renderedPartials, setRenderedPartials] = useState<string[]>([]);
  const [chatExpanded, setChatExpanded] = useState(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const contentStreamRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatPanelRef = useRef<HTMLDivElement>(null);

  const scrollChatToBottom = useCallback(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollChatToBottom();
  }, [messages, scrollChatToBottom]);

  const handlePartialFromResponse = useCallback((fullText: string) => {
    const { partialId } = parseRenderTag(fullText);
    if (partialId && PARTIALS_REGISTRY[partialId] && !renderedPartials.includes(partialId)) {
      setRenderedPartials(prev => [...prev, partialId]);
      // Scroll to content stream after a short delay
      setTimeout(() => {
        contentStreamRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [renderedPartials]);

  const send = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Msg = { role: "user", content: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (nextChunk: string) => {
      assistantSoFar += nextChunk;
      const { cleanText } = parseRenderTag(assistantSoFar);
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: cleanText } : m));
        }
        return [...prev, { role: "assistant", content: cleanText }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: (chunk) => upsertAssistant(chunk),
        onDone: () => {
          setIsLoading(false);
          handlePartialFromResponse(assistantSoFar);
        },
      });
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      setMessages(prev => [...prev, { role: "assistant", content: "Mi dispiace, c'è stato un errore. Riprova." }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const hasStarted = messages.length > 0;
  const chatHeight = chatExpanded ? "h-[60vh]" : "h-[240px]";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-16 flex-shrink-0">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Product Strategist
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Mario Ciardulli
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              Product leader at the intersection of strategy, design, and engineering.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <button
              onClick={() => chatPanelRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 text-sm text-primary hover:underline font-medium"
            >
              Chat with me to explore my work →
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Content Stream */}
      <div ref={contentStreamRef} className="flex-1">
        <AnimatePresence>
          {renderedPartials.map((id) => {
            const Component = PARTIALS_REGISTRY[id];
            if (!Component) return null;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="border-t divider"
              >
                <Suspense fallback={
                  <div className="py-20 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                }>
                  <Component />
                </Suspense>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Chat Panel */}
      <div
        ref={chatPanelRef}
        className={`sticky bottom-0 z-50 bg-background border-t border-border transition-all ${chatHeight}`}
        style={{ boxShadow: "0 -4px 24px -8px rgba(0,0,0,0.08)" }}
      >
        {/* Expand toggle */}
        <button
          onClick={() => setChatExpanded(!chatExpanded)}
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background border border-border rounded-t-lg px-3 py-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          {chatExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>

        <div className="h-full flex flex-col max-w-3xl mx-auto px-4 lg:px-6">
          {/* Messages */}
          <div ref={chatMessagesRef} className="flex-1 overflow-y-auto py-4 space-y-4 min-h-0">
            {!hasStarted && (
              <div className="space-y-4">
                <div className="bg-muted rounded-lg px-4 py-3 max-w-[85%]">
                  <p className="text-foreground text-sm leading-relaxed">
                    Ciao. Sono Mario. Da dove partiamo?
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CHIPS.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => send(chip)}
                      className="text-xs px-3 py-1.5 rounded-full border border-border bg-background hover:bg-muted text-foreground transition-colors"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none dark:prose-invert [&_p]:mb-2 [&_p:last-child]:mb-0">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex-shrink-0 pb-4 pt-2 border-t border-border/50">
            <div className="flex gap-2 items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Scrivi un messaggio..."
                className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                disabled={isLoading}
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || isLoading}
                className="shrink-0 w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPortfolio;
