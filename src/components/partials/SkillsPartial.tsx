import FadeIn from "@/components/FadeIn";
import { skillGroups } from "@/lib/skillGroups";
import PartialCTAs from "./PartialCTAs";

const SkillsPartial = () => (
  <section className="py-16 lg:py-20">
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-12">
          Skills & Expertise
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillGroups.map((group, i) => (
          <FadeIn key={i} delay={i * 0.04}>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-foreground/30 px-2.5 py-1 text-xs font-semibold text-foreground uppercase tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
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
