import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { skillGroups } from "@/lib/skillGroups";

const SkillsPartial = () => (
  <section className="py-16 lg:py-20">
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-12">
          Skills & Expertise
        </h2>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mb-14 border-2 border-foreground p-6 md:p-10">
          <p className="text-[11px] font-black tracking-[0.3em] uppercase text-muted-foreground mb-3">
            From Design to Product
          </p>
          <h3 className="text-xl md:text-2xl font-black text-foreground mb-4 leading-snug uppercase tracking-tight">
            The method hasn't changed. The output has.
          </h3>
          <div className="space-y-4 text-muted-foreground text-[15px] md:text-base leading-relaxed max-w-3xl">
            <p>
              Before moving into product management, I spent years at Designit doing strategic design — working at the intersection of business strategy and experience, where every project started from a business problem and positioning came before a single screen.
            </p>
            <p>
              That foundation never left. I still work closely on UX — challenging directions, co-creating with designers, making sure the experience holds together from first principle to final interaction. What has changed is the perimeter: today I operate across the full product, from vision to roadmap to execution. The method is the same. The scope is wider.
            </p>
          </div>
          <Link
            to="/design"
            className="inline-flex items-center gap-1 text-foreground font-black uppercase text-sm tracking-wider hover:text-primary transition-colors mt-6 border-b-2 border-foreground pb-0.5"
          >
            See my design work →
          </Link>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground">
        {skillGroups.map((group, i) => (
          <FadeIn key={i} delay={i * 0.04}>
            <div className={`p-5 md:p-6 ${i < skillGroups.length - 1 ? "border-b-2 border-foreground" : ""} ${i % 2 === 0 && i < skillGroups.length - 1 ? "md:border-r-2 md:border-foreground" : ""}`}>
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-foreground px-2.5 py-1 text-xs font-semibold text-foreground uppercase tracking-wide"
                  >
                    {skill}
                  </span>
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
