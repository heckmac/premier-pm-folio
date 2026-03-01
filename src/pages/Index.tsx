import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudyImages } from "@/lib/caseStudyImages";

const featuredCases = [
  {
    slug: "sphere-architectural-reset",
    title: "From Quantitative Engine to Adoptable Product",
    subtitle: "Sphere · VP of Product · MDOTM · 2021–2023",
    outcome: "Diagnosed structural misalignment and led a full architectural reset — turning a model-centric engine into a process-centric tool portfolio managers could actually adopt.",
  },
  {
    slug: "sphere-investment-infrastructure",
    title: "From Adoptable Product to Investment Infrastructure",
    subtitle: "Sphere · CPO · MDOTM · 2023–2025",
    outcome: "Closed every layer of distance between the platform and institutional operational reality — making Sphere infrastructure teams operate inside, not just visit.",
  },
  {
    slug: "storyfolio",
    title: "Productizing Narrative Explanation for Investment Decisions",
    subtitle: "Storyfolio · CPO · MDOTM · 2024–2025",
    outcome: "Introduced an AI-driven narrative layer that cut mass reporting time from ~2 hours to ~2 minutes per portfolio with ~50% increase in adoption.",
  },
  {
    slug: "mercurius",
    title: "Building Toward a Fund You Cannot Yet Build",
    subtitle: "Mercurius · Co-Founder · 2017–2021",
    outcome: "Co-founded a startup turning sports betting into an alternative asset class — €1.2M+ deployed, 3,000+ accounts, successful fundraising and acquisition.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
              Chief Product Officer
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Mario Ciardulli
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I turn complex systems into products people actually want to use — at the intersection of strategy, design, and engineering.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Work
                <ArrowRight size={16} />
              </Link>
              <a
                href="/cv_ciardulli.pdf"
                download
                className="inline-flex items-center gap-2 border divider bg-background text-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Selected Work</h2>
                <p className="text-muted-foreground mt-2">Impact-driven product leadership across industries.</p>
              </div>
              <Link
                to="/work"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredCases.map((cs, i) => (
              <CaseStudyCard key={cs.slug} slug={cs.slug} title={cs.title} subtitle={cs.subtitle} outcome={cs.outcome} image={caseStudyImages[cs.slug]} index={i} />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              View all work <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 lg:py-28 border-t divider">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Strategy Meets Craft
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a product leader with a hands-on background in UX design and product strategy. Over the past 12+ years, I've worked on products ranging from zero-to-one MVPs to scaling platforms — always with the same goal: making complex systems simple, usable, and commercially viable.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-8"
            >
              More about me <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
