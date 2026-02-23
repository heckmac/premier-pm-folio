import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Users, Wrench } from "lucide-react";
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
              {study.company}
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

          {/* Meta strip */}
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-subtle">
              <span className="inline-flex items-center gap-1.5">
                <Users size={14} className="text-primary" />
                {study.role} · {study.year}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} className="text-primary" />
                {study.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Wrench size={14} className="text-primary" />
                {study.tools.join(", ")}
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Hero image placeholder */}
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl mt-12">
          <FadeIn delay={0.25}>
            <div className="aspect-[21/9] bg-secondary rounded-xl flex items-center justify-center border divider">
              <span className="text-subtle text-sm">Hero Image / Product Screenshot</span>
            </div>
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
          <SectionHeading>The Problem</SectionHeading>
          <Prose paragraphs={study.problem} />
        </section>

        {/* My Role */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>My Role</SectionHeading>
          <Prose paragraphs={study.myRole} />
          <FadeIn delay={0.1}>
            <div className="mt-6 text-sm text-subtle">
              <span className="font-medium text-foreground">Team:</span> {study.team}
            </div>
          </FadeIn>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Process</SectionHeading>
          <div className="space-y-8 mt-2">
            {study.process.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08}>
                <div className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:rounded-full before:bg-primary/20 before:border-2 before:border-primary">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Solution</SectionHeading>
          <Prose paragraphs={study.solution} />

          {/* Inline image placeholder */}
          <FadeIn delay={0.1}>
            <div className="mt-10 aspect-[16/9] bg-secondary rounded-xl flex items-center justify-center border divider">
              <span className="text-subtle text-sm">Solution Visual / Wireframe</span>
            </div>
          </FadeIn>
        </section>

        {/* Results */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Results</SectionHeading>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {study.results.map((r, i) => (
              <MetricCallout key={r.label} value={r.value} label={r.label} delay={i * 0.08} />
            ))}
          </div>

          {/* Quote */}
          {study.quote && (
            <FadeIn delay={0.3}>
              <blockquote className="mt-12 border-l-4 border-primary pl-6 py-2">
                <p className="text-foreground text-lg md:text-xl italic leading-relaxed">
                  "{study.quote.text}"
                </p>
                <footer className="mt-3 text-sm text-subtle">
                  — {study.quote.author}, {study.quote.title}
                </footer>
              </blockquote>
            </FadeIn>
          )}
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
                  {next.company} — {next.project}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{next.role} · {next.year}</p>
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
