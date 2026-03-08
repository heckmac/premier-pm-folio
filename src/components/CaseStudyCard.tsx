import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  subtitle: string;
  outcome: string;
  image?: string;
  index?: number;
}

const CaseStudyCard = ({ slug, title, subtitle, outcome, image, index = 0 }: CaseStudyCardProps) => {
  return (
    <FadeIn delay={index * 0.08}>
      <Link
        to={`/work/${slug}`}
        className="group block border-2 border-foreground bg-background overflow-hidden transition-colors duration-200"
      >
        <div className="aspect-[16/10] bg-secondary overflow-hidden border-b-2 border-foreground">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">No image</span>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-xs font-medium tracking-[0.1em] uppercase mt-1 opacity-60">{subtitle}</p>
            </div>
            <ArrowUpRight
              size={18}
              className="opacity-40 group-hover:opacity-100 transition-all mt-1 shrink-0 ml-3"
            />
          </div>
          <p className="text-sm leading-relaxed mt-3 opacity-70">{outcome}</p>
        </div>
      </Link>
    </FadeIn>
  );
};

export default CaseStudyCard;
