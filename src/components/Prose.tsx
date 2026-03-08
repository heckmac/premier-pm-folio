import ReactMarkdown from "react-markdown";
import FadeIn from "@/components/FadeIn";

/**
 * Renders an array of markdown strings with fade-in animation.
 * Supports full markdown: **bold**, *italic*, [links](url), `code`,
 * lists (- or *), numbered lists, blockquotes (>), ### headings, --- hr, etc.
 *
 * Props:
 * - paragraphs: string[] — each entry is rendered as its own markdown block
 * - variant: "default" | "sm" — controls base font size
 */
interface ProseProps {
  paragraphs: string[];
  variant?: "default" | "sm";
}

const Prose = ({ paragraphs, variant = "default" }: ProseProps) => {
  if (!paragraphs || paragraphs.length === 0) return null;

  const sizeClass = variant === "sm" ? "prose-case-study--sm" : "";

  return (
    <div className="space-y-4">
      {paragraphs.map((block, i) => (
        <FadeIn key={i} delay={i * 0.05}>
          <div className={`prose-case-study ${sizeClass}`}>
            <ReactMarkdown>{block}</ReactMarkdown>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Prose;
