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
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Mario Ciardulli
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">
            Product Strategist
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mt-6 max-w-3xl leading-relaxed italic">
            "I turn complex systems into products people actually want to use —
            at the intersection of strategy, design, and engineering."
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
