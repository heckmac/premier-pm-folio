import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CaseStudyCard from "@/components/CaseStudyCard";

import { caseStudies } from "@/lib/caseStudies";
import { caseStudyImages } from "@/lib/caseStudyImages";

const Work = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-28 pb-20 lg:pt-40 lg:pb-28">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground uppercase tracking-tighter">
            Work
          </h1>
          <div className="mt-6 mb-10 h-[3px] w-16 bg-foreground" />
          <p className="text-muted-foreground text-base max-w-lg">
            Case studies in product strategy, architectural decisions, and scaling enterprise platforms.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
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
