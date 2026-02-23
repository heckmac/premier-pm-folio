import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import MetricCallout from "@/components/MetricCallout";
import { getCaseStudy, getNextCaseStudy } from "@/lib/caseStudies";

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
              className="inline-flex items-center gap-1.5 text-sm text-subtle hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              All Work
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
              {study.company} · {study.role} · {study.year}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
              {study.project}
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {study.heroTagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        {/* Context */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Context</SectionHeading>
          <Prose paragraphs={study.context} />
        </section>

        {/* Problem */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Problem</SectionHeading>
          <Prose paragraphs={study.problem} />
        </section>

        {/* Positioning */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Positioning</SectionHeading>
          <Prose paragraphs={study.positioning} />
        </section>

        {/* My Role */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>My Role</SectionHeading>
          <Prose paragraphs={study.myRole} />
        </section>

        {/* Strategy */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Strategy</SectionHeading>
          <div className="space-y-8 mt-2">
            {study.strategy.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08}>
                <div className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:rounded-full before:bg-primary/20 before:border-2 before:border-primary">
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Execution */}
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

        {/* Impact */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Impact</SectionHeading>

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
        </section>

        {/* Learnings */}
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
