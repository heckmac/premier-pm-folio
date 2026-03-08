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

      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-4">
        {skillGroups.map((group, i) => (
          <FadeIn key={i} delay={i * 0.04} className="contents">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mr-1">
              {group.label}
            </span>
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
            {i < skillGroups.length - 1 && (
              <span className="text-muted-foreground/30 select-none">/</span>
            )}
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsPartial;
