import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CaseStudyCard from "@/components/CaseStudyCard";

import { caseStudies } from "@/lib/caseStudies";
import { caseStudyImages } from "@/lib/caseStudyImages";

const Work = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Work</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Case studies in product strategy, architectural decisions, and scaling enterprise platforms.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard
              key={cs.slug}
              slug={cs.slug}
              title={cs.project}
              subtitle={cs.cardSubtitle}
              outcome={cs.heroTagline}
              image={caseStudyImages[cs.slug]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Work;
