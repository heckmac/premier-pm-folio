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
    <section className="pt-28 pb-8 lg:pt-40 lg:pb-10">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <FadeIn>
          <p className="text-xs font-bold text-muted-foreground tracking-[0.3em] uppercase mb-8">
            Product Strategist
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.85] tracking-tighter uppercase">
            Mario<br />Ciardulli
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10 mb-10 h-[3px] w-20 bg-foreground" />
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg font-normal text-muted-foreground leading-relaxed max-w-md">
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
