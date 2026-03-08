import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import MetricCallout from "@/components/MetricCallout";
import CaseStudyGallery from "@/components/CaseStudyGallery";
import Prose from "@/components/Prose";
import { getCaseStudy, getNextCaseStudy } from "@/lib/caseStudies";
import { caseStudyImages } from "@/lib/caseStudyImages";
import { caseStudyGalleries } from "@/lib/caseStudyGallery";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <FadeIn>
    <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
      {children}
    </h2>
  </FadeIn>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const study = getCaseStudy(slug || "");
  const next = getNextCaseStudy(slug || "");

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-foreground">Case study not found</h1>
            <Link to="/work" className="text-primary hover:underline mt-4 inline-block text-sm">
              ← Back to Work
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-40 lg:pb-24 border-b divider">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              All Work
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-4">
              {study.company} · {study.role} · {study.year}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[0.95] tracking-tighter uppercase">
              {study.project}
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {study.heroTagline}
            </p>
          </FadeIn>

          {caseStudyImages[slug || ""] && (
            <FadeIn delay={0.2}>
              <div className="mt-10 overflow-hidden border-2 border-foreground">
                <img
                  src={caseStudyImages[slug || ""]}
                  alt={study.project}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Narrative block: Context → Problem → Positioning */}
      {(study.context.length > 0 || study.problem.length > 0 || study.positioning.length > 0) && (
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <div className="py-16 lg:py-20 border-b divider space-y-10">
            {study.context.length > 0 && (
              <div>
                <SectionHeading>Context</SectionHeading>
                <Prose paragraphs={study.context} />
              </div>
            )}
            {study.problem.length > 0 && (
              <div>
                <SectionHeading>Problem</SectionHeading>
                <Prose paragraphs={study.problem} />
              </div>
            )}
            {study.positioning.length > 0 && (
              <div>
                <SectionHeading>Positioning</SectionHeading>
                <Prose paragraphs={study.positioning} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* My Role */}
      {study.myRole.length > 0 && (
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <section className="py-16 lg:py-20 border-b divider">
            <SectionHeading>My Role</SectionHeading>
            <Prose paragraphs={study.myRole} />
          </section>
        </div>
      )}

      {/* Gallery — full width */}
      {caseStudyGalleries[slug || ""] && (
        <section className="py-16 lg:py-20 border-b divider">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <SectionHeading>Product Gallery</SectionHeading>
            <FadeIn>
              <CaseStudyGallery slides={caseStudyGalleries[slug || ""]} />
            </FadeIn>
          </div>
        </section>
      )}

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        {/* Strategy */}
        {study.strategy.length > 0 && (
          <section className="py-16 lg:py-20 border-b divider">
            <SectionHeading>Strategy</SectionHeading>
            <div className="space-y-8 mt-2">
              {study.strategy.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.08}>
                  <div className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:rounded-full before:bg-primary/20 before:border-2 before:border-primary">
                    <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                    <Prose paragraphs={[step.description]} variant="sm" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {/* Execution */}
        {study.execution.length > 0 && (
          <section className="py-16 lg:py-20 border-b divider">
            <SectionHeading>Execution</SectionHeading>
            <Prose paragraphs={study.execution} variant="sm" asList />
          </section>
        )}

        {/* Impact */}
        {((study.impactCategories && study.impactCategories.length > 0) || (study.highlightMetrics && study.highlightMetrics.length > 0) || study.impact.length > 0) && (
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
                <Prose paragraphs={study.impact} variant="sm" asList />
              </>
            )}
          </section>
        )}

        {/* Learnings */}
        {study.learnings.length > 0 && (
          <section className="py-16 lg:py-20 border-b divider">
            <SectionHeading>Learnings</SectionHeading>
            <Prose paragraphs={study.learnings} variant="sm" asList />
          </section>
        )}
      </div>

      {/* Next Case Study */}
      {next && (
        <section className="border-t divider">
          <Link
            to={`/work/${next.slug}`}
            className="group block py-16 lg:py-20 hover:bg-secondary/50 transition-colors"
          >
            <div className="container mx-auto px-6 lg:px-8 max-w-3xl flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-subtle mb-2">
                  Next Case Study
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {next.project}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{next.company} · {next.year}</p>
              </div>
              <ArrowRight
                size={24}
                className="text-subtle group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
              />
            </div>
          </Link>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default CaseStudy;
