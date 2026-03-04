import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    label: "Product Leadership",
    skills: ["Product Strategy", "Product Vision", "Roadmapping", "OKRs", "Prioritization Frameworks", "Go-to-Market"],
  },
  {
    label: "Discovery & Research",
    skills: ["Product Discovery", "UX Research", "Jobs-to-Be-Done", "Hypothesis-Driven Development", "User Testing"],
  },
  {
    label: "Design & Systems",
    skills: ["UX/UI Design", "Service Design", "Design Thinking", "Information Architecture", "Design Systems"],
  },
  {
    label: "Collaboration & Delivery",
    skills: ["Stakeholder Management", "Engineering Collaboration", "Cross-functional Leadership", "Agile / Lean"],
  },
  {
    label: "Domain",
    skills: ["Fintech", "B2B SaaS", "Decision Intelligence", "0→1 & Scaling", "Platform Products"],
  },
];

const SkillsPartial = () => (
  <section className="py-16 lg:py-20">
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          Skills & Expertise
        </h2>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mb-12 rounded-2xl bg-primary/5 border border-primary/15 px-6 py-8 md:px-10 md:py-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary/70 mb-2">
            From Design to Product
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
            The method hasn't changed. The output has.
          </h3>
          <div className="space-y-4 text-foreground/75 text-[15px] md:text-base leading-relaxed max-w-3xl">
            <p>
              Before moving into product management, I spent years at Designit doing strategic design — working at the intersection of business strategy and experience, where every project started from a business problem and positioning came before a single screen.
            </p>
            <p>
              That foundation never left. I still work closely on UX — challenging directions, co-creating with designers, making sure the experience holds together from first principle to final interaction. What has changed is the perimeter: today I operate across the full product, from vision to roadmap to execution. The method is the same. The scope is wider.
            </p>
          </div>
          <Link
            to="/design"
            className="inline-flex items-center gap-1 text-primary hover:underline font-medium mt-6 text-sm"
          >
            See my design work →
          </Link>
        </div>
      </FadeIn>

      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-transparent font-medium px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsPartial;
