import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getFeaturedCaseStudies } from "@/lib/caseStudies";
import { caseStudyImages } from "@/lib/caseStudyImages";

const featuredCases = getFeaturedCaseStudies();

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <FadeIn>
            <p className="text-xs font-bold text-muted-foreground tracking-[0.3em] uppercase mb-8">
              Product Strategist
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-primary leading-[0.85] tracking-tighter uppercase">
              Mario<br />Ciardulli
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 mb-10 h-[3px] w-20 bg-primary" />
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg font-normal text-muted-foreground leading-relaxed max-w-md">
              I turn complex systems into products people actually want to use — at the intersection of strategy, design, and engineering.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase hover:opacity-80 transition-opacity border-2 border-primary"
              >
                View Work
                <ArrowRight size={14} />
              </Link>
              <a
                href="/cv_ciardulli.pdf"
                download
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors border-2 border-foreground"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <FadeIn>
            <div className="flex items-end justify-between mb-10 border-b-2 border-foreground pb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">
                  Selected Work
                </h2>
              </div>
              <Link
                to="/work"
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] uppercase text-foreground hover:text-muted-foreground transition-colors"
              >
                View all <ArrowRight size={12} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-4">
            {featuredCases.map((cs, i) => (
              <CaseStudyCard key={cs.slug} slug={cs.slug} title={cs.project} subtitle={cs.cardSubtitle} outcome={cs.heroTagline} image={caseStudyImages[cs.slug]} index={i} />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] uppercase text-foreground hover:text-muted-foreground"
            >
              View all work <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 lg:py-28 border-t-2 border-foreground">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-6">
              Strategy<br />Meets Craft
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-lg">
              I'm a product strategist with a hands-on background in UX design and strategic design. Over the past 12+ years, I've worked on products ranging from zero-to-one MVPs to enterprise platforms — always at the same level: what should this product be, for whom, and why.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] uppercase text-foreground hover:text-muted-foreground mt-8"
            >
              More about me <ArrowRight size={12} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
