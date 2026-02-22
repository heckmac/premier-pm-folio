import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

interface CaseStudyCardProps {
  slug: string;
  company: string;
  role: string;
  outcome: string;
  year: string;
  index?: number;
}

const CaseStudyCard = ({ slug, company, role, outcome, year, index = 0 }: CaseStudyCardProps) => {
  return (
    <FadeIn delay={index * 0.1}>
      <Link
        to={`/work/${slug}`}
        className="group block surface-elevated rounded-lg border divider overflow-hidden transition-all hover:shadow-lg hover:shadow-foreground/5"
      >
        {/* Thumbnail placeholder */}
        <div className="aspect-[16/10] bg-secondary flex items-center justify-center">
          <span className="text-subtle text-sm">Project Visual</span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {company}
              </h3>
              <p className="text-sm text-subtle mt-0.5">{role} · {year}</p>
            </div>
            <ArrowUpRight
              size={18}
              className="text-subtle group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1"
            />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{outcome}</p>
        </div>
      </Link>
    </FadeIn>
  );
};

export default CaseStudyCard;
