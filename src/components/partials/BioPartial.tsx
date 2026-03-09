import FadeIn from "@/components/FadeIn";
import PartialCTAs from "./PartialCTAs";
import profilePhoto from "@/assets/mario-ciardulli.jpeg";

const BioPartial = () =>
<section className="py-16 lg:py-20 pt-0">
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <FadeIn className="lg:col-span-1">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
            <img
            src={profilePhoto}
            alt="Mario Ciardulli"
            className="w-full h-full object-cover object-top" />
          
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-2">
          <div className="space-y-6 text-foreground/85 text-base md:text-lg" style={{ lineHeight: 1.75 }}>
            <p>
              I'm a product strategist with a hands-on background in UX design and
              strategic design. Over the past 12+ years, I've worked on products
              ranging from zero-to-one MVPs to enterprise platforms — always at the
              same level: what should this product be, for whom, and why.
            </p>
            <p>
              I operate at the intersection of product vision, UX quality, and
              engineering reality. I work best in high-ambiguity environments, where
              the problem isn't yet well-defined and the solution requires judgment
              more than process. My instinct is to get close to the work — challenging
              design directions, co-creating with designers, aligning engineering on
              what actually matters — while keeping the full product system coherent.
            </p>
            <p>
              My foundation is in strategic design. Before moving into product
              management, I spent years at Designit working at the intersection of
              business strategy and experience — where every project started from a
              business problem, not a brief. That approach never left.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>;


export default BioPartial;