import { useContext } from "react";
import { ChatStreamContext } from "./ChatStreamContext";

const PartialCTAs = () => {
  const chatStream = useContext(ChatStreamContext);

  const handleCTAClick = (suggestion: string) => {
    if (chatStream) {
      // Use the same suggestion chip interface by emitting suggestions
      const event = new CustomEvent('suggestion-click', { detail: suggestion });
      window.dispatchEvent(event);
    }
  };

  const ctas = [
    "Tell me about another project",
    "What's your product philosophy?", 
    "Show me your design process",
    "How do you approach product strategy?",
    "Tell me about your leadership experience"
  ];

  return (
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl py-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {ctas.map((cta, i) => (
          <button
            key={i}
            onClick={() => handleCTAClick(cta)}
            className="px-4 py-2 text-sm font-medium border-2 border-foreground bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 uppercase tracking-tight"
          >
            {cta}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PartialCTAs;