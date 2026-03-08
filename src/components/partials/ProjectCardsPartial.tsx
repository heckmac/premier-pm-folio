import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { caseStudies } from "@/lib/caseStudies";
import { designProjects } from "@/lib/designProjects";
import { caseStudyImages } from "@/lib/caseStudyImages";

interface ProjectCardsPartialProps {
  filter?: "pm" | "design" | "all";
}

const pmCards = caseStudies.map((cs) => ({
  slug: cs.slug,
  title: cs.project,
  subtitle: cs.cardSubtitle,
  outcome: cs.heroTagline,
  image: caseStudyImages[cs.slug],
  to: `/work/${cs.slug}`,
}));

const designCards = designProjects.map((dp) => ({
  slug: dp.slug,
  title: dp.title,
  subtitle: `${dp.discipline} · ${dp.client} · ${dp.duration}`,
  outcome: dp.tagline ?? "",
  image: caseStudyImages[dp.slug],
  to: `/design/${dp.slug}`,
}));

const ProjectCardsPartial = ({ filter = "all" }: ProjectCardsPartialProps) => {
  const cards =
    filter === "pm" ? pmCards :
    filter === "design" ? designCards :
    [...pmCards, ...designCards];

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-10">
            {filter === "pm" ? "Product Work" : filter === "design" ? "Design Work" : "Selected Work"}
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.slug} delay={i * 0.06}>
              <Link
                to={card.to}
                className="group block border-2 border-foreground bg-background overflow-hidden transition-colors duration-200"
              >
                <div className="aspect-[16/10] bg-secondary overflow-hidden border-b-2 border-foreground">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">
                        No image
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight leading-snug group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs font-medium tracking-[0.1em] uppercase mt-1 opacity-60">
                        {card.subtitle}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all mt-1 shrink-0 ml-3"
                    />
                  </div>
                  <p className="text-sm leading-relaxed mt-3 opacity-70">{card.outcome}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCardsPartial;

// Factory for filtered variants
export const createFilteredProjectCards = (filter: "pm" | "design" | "all") => {
  const FilteredCards = () => <ProjectCardsPartial filter={filter} />;
  FilteredCards.displayName = `ProjectCards_${filter}`;
  return FilteredCards;
};
