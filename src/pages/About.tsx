import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import BioPartial from "@/components/partials/BioPartial";
import CareerPartial from "@/components/partials/CareerPartial";
import SkillsPartial from "@/components/partials/SkillsPartial";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-8 lg:pt-44 lg:pb-10">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <FadeIn>
          <p className="text-xs font-medium text-muted-foreground tracking-[0.25em] uppercase mb-6">
            Product Strategist
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight uppercase">
            Mario Ciardulli
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-xl md:text-2xl font-light text-muted-foreground leading-relaxed max-w-2xl">
            I turn complex systems into products people actually want to use —
            at the intersection of strategy, design, and engineering.
          </p>
        </FadeIn>
      </div>
    </section>

    <BioPartial />
    <CareerPartial />
    <SkillsPartial />

    <Footer />
  </div>
);

export default About;
