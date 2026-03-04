import FadeIn from "@/components/FadeIn";
import MetricCallout from "@/components/MetricCallout";
import CaseStudyGallery from "@/components/CaseStudyGallery";
import { CaseStudyData } from "@/lib/caseStudies";
import { caseStudyImages } from "@/lib/caseStudyImages";
import { caseStudyGalleries } from "@/lib/caseStudyGallery";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <FadeIn>
    <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
      {children}
    </h2>
  </FadeIn>
);

const Prose = ({ paragraphs }: { paragraphs: string[] }) => (
  <>
    {paragraphs.map((p, i) => (
      <FadeIn key={i} delay={i * 0.05}>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4 last:mb-0">
          {p}
        </p>
      </FadeIn>
    ))}
  </>
);

interface Props {
  study: CaseStudyData;
}

const CaseStudyPartialTemplate = ({ study }: Props) => {
  const slug = study.slug;

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-20 border-b divider">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <FadeIn delay={0.05}>
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
              {study.company} · {study.role} · {study.year}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
              {study.project}
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {study.heroTagline}
            </p>
          </FadeIn>
          {caseStudyImages[slug] && (
            <FadeIn delay={0.2}>
              <div className="mt-10 rounded-xl overflow-hidden">
                <img src={caseStudyImages[slug]} alt={study.project} className="w-full h-auto" />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Context</SectionHeading>
          <Prose paragraphs={study.context} />
        </section>

        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Problem</SectionHeading>
          <Prose paragraphs={study.problem} />
        </section>

        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Positioning</SectionHeading>
          <Prose paragraphs={study.positioning} />
        </section>

        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>My Role</SectionHeading>
          <Prose paragraphs={study.myRole} />
        </section>
      </div>

      {/* Gallery */}
      {caseStudyGalleries[slug] && (
        <section className="py-16 lg:py-20 border-b divider">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <SectionHeading>Product Gallery</SectionHeading>
            <FadeIn>
              <CaseStudyGallery slides={caseStudyGalleries[slug]} />
            </FadeIn>
          </div>
        </section>
      )}

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Strategy</SectionHeading>
          <div className="space-y-8 mt-2">
            {study.strategy.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08}>
                <div className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:rounded-full before:bg-primary/20 before:border-2 before:border-primary">
                  <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Execution</SectionHeading>
          <ul className="space-y-3 mt-2">
            {study.execution.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </section>

        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Impact</SectionHeading>
          {study.impactCategories && study.impactCategories.length > 0 ? (
            <div className="space-y-10">
              {study.impactCategories.map((cat, ci) => (
                <FadeIn key={cat.category} delay={ci * 0.1}>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">{cat.category}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {cat.metrics.map((m, mi) => (
                      <MetricCallout key={m.label} value={m.value} label={m.label} delay={(ci * 2 + mi) * 0.08} />
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <>
              {study.highlightMetrics && study.highlightMetrics.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {study.highlightMetrics.map((m, i) => (
                    <MetricCallout key={m.label} value={m.value} label={m.label} delay={i * 0.08} />
                  ))}
                </div>
              )}
              <ul className="space-y-3">
                {study.impact.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.04}>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </>
          )}
        </section>

        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Learnings</SectionHeading>
          <div className="space-y-4">
            {study.learnings.map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <blockquote className="border-l-2 border-primary/30 pl-5 text-muted-foreground text-sm md:text-base leading-relaxed italic">
                  {item}
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyPartialTemplate;
