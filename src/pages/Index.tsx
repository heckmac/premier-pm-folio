import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CaseStudyCard from "@/components/CaseStudyCard";

const stats = [
  { label: "Years of Experience", value: "12+" },
  { label: "Products Shipped at Scale", value: "20+" },
  { label: "0→1 & Growth Stage", value: "B2B & B2C" },
  { label: "Teams Led", value: "50+" },
];

const featuredCases = [
  {
    slug: "fintech-platform-redesign",
    company: "Meridian Finance",
    role: "VP of Product",
    outcome: "Led end-to-end redesign that increased user activation by 34% and unlocked €2M in new ARR within 6 months.",
    year: "2023",
  },
  {
    slug: "ai-analytics-zero-to-one",
    company: "Synthex AI",
    role: "Head of Product",
    outcome: "Took an AI-powered analytics platform from concept to €1.2M ARR in 14 months with a team of 12.",
    year: "2022",
  },
  {
    slug: "marketplace-growth",
    company: "Novawork",
    role: "Senior Product Manager",
    outcome: "Drove 3x growth in marketplace GMV through data-driven experimentation and a redesigned onboarding flow.",
    year: "2020",
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
                href="#"
                className="inline-flex items-center gap-2 border divider bg-background text-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y divider">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-subtle mt-1">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 lg:py-28">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCases.map((cs, i) => (
              <CaseStudyCard key={cs.slug} {...cs} index={i} />
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
