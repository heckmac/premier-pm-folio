import ReactMarkdown from "react-markdown";
import FadeIn from "@/components/FadeIn";

/**
 * Renders an array of paragraphs as markdown.
 * Each string in the array becomes its own fade-in block.
 * Full markdown supported: **bold**, *italic*, [links](url), `code`,
 * lists (- or *), numbered lists, blockquotes (>), etc.
 */
const Prose = ({ paragraphs }: { paragraphs: string[] }) => {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <div className="space-y-4">
      {paragraphs.map((block, i) => (
        <FadeIn key={i} delay={i * 0.05}>
          <div className="prose-case-study">
            <ReactMarkdown>{block}</ReactMarkdown>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Prose;
