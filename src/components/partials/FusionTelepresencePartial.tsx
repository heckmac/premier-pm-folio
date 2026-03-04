import FadeIn from "@/components/FadeIn";
import DesignImage from "@/components/design/DesignImage";
import DesignImageCarousel from "@/components/design/DesignImageCarousel";

import intention1 from "@/assets/fusion/intention1.jpg";
import intention2 from "@/assets/fusion/intention2.jpg";
import intention3 from "@/assets/fusion/intention3.jpg";
import exp001 from "@/assets/fusion/fusion_experience_001.jpeg";
import exp002 from "@/assets/fusion/fusion_experience_002.jpeg";
import exp003 from "@/assets/fusion/fusion_experience_003.jpeg";
import exp004 from "@/assets/fusion/fusion_experience_004.jpeg";
import exp005 from "@/assets/fusion/fusion_experience_005.jpeg";
import deskResearch from "@/assets/fusion/desk_research.jpg";
import trends1 from "@/assets/fusion/trends1.jpg";
import trends2 from "@/assets/fusion/trends2.jpg";
import trends3 from "@/assets/fusion/trends3.jpg";
import strategy from "@/assets/fusion/strategy.jpg";
import productLifecycle from "@/assets/fusion/product_lifecycle.jpg";
import uxblueprint1 from "@/assets/fusion/uxblueprint1.jpg";
import uxblueprint2 from "@/assets/fusion/uxblueprint2.jpg";
import bodystorming from "@/assets/fusion/bodystorming.jpeg";
import screenDesignHero from "@/assets/fusion/screen_design_hero.jpeg";
import screenHello from "@/assets/fusion/screen_hello.png";
import screenSpacemanager from "@/assets/fusion/screen_spacemanager.png";
import screenConference from "@/assets/fusion/screen_conference.png";
import ifAwardUi from "@/assets/fusion/if_award_ui.jpeg";
import ifAwardProduct from "@/assets/fusion/if_award_product.jpeg";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <FadeIn>
    <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{children}</h2>
  </FadeIn>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <FadeIn>
    <h3 className="text-lg font-semibold text-foreground mb-3 mt-10">{children}</h3>
  </FadeIn>
);

const FusionTelepresencePartial = () => (
  <div>
    <section className="py-16 lg:py-20 border-b divider">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <FadeIn delay={0.05}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            Digital Design · 5 Months · Germany
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
            Fusion Telepresence System
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Designing a holistic telepresence experience for China's largest telecommunication company — creating a unified design language across industrial and digital design for the flagship product family.
          </p>
        </FadeIn>
      </div>
    </section>

    <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Background</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            This client is the biggest telecommunication company in China; among many services they provide they have also a business line covering telepresence systems. The product family was developed organically over the years and the result was a fragmented design language.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>My Role</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
            I was responsible for the digital design, working in close collaboration with the industrial design lead.
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <ul className="space-y-2">
            {["Product positioning", "Design strategy", "UX design lead", "Visual design lead"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base leading-relaxed italic">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>
    </div>

    <section className="py-16 lg:py-20 border-b divider">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <SectionHeading>Results</SectionHeading>
        <DesignImageCarousel images={[
          { src: intention1, alt: "Fusion concept intention 1" },
          { src: intention2, alt: "Fusion concept intention 2" },
          { src: intention3, alt: "Fusion concept intention 3" },
          { src: exp001, alt: "Fusion experience overview" },
          { src: exp002, alt: "Fusion experience flow" },
          { src: exp003, alt: "Fusion experience detail" },
          { src: exp004, alt: "Fusion experience screens" },
          { src: exp005, alt: "Fusion experience interaction" },
        ]} />
      </div>
    </section>

    <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Process</SectionHeading>
        <SubHeading>Desk Research and Competitors Audit</SubHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            We ran a desk research aimed both at getting to know how office environments and working behaviours are changing, and to map the market offering.
          </p>
        </FadeIn>
        <DesignImageCarousel images={[
          { src: deskResearch, alt: "Desk research wall" },
          { src: trends1, alt: "Trends analysis 1" },
          { src: trends2, alt: "Trends analysis 2" },
          { src: trends3, alt: "Trends analysis 3" },
        ]} />

        <SubHeading>Product Strategy</SubHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            We identified three main competitors: Google, Microsoft and Cisco; we compared their solutions from different angles.
          </p>
        </FadeIn>
        <DesignImage src={strategy} alt="Product strategy framework" />

        <SubHeading>Experience Mapping and Ideation</SubHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            We created a UX blueprint to visualise the breakdown of the user experience along the whole product life-cycle.
          </p>
        </FadeIn>
        <DesignImageCarousel images={[
          { src: productLifecycle, alt: "Product lifecycle map" },
          { src: uxblueprint2, alt: "UX blueprint overview" },
          { src: uxblueprint1, alt: "UX blueprint detail" },
        ]} />
        <DesignImage src={bodystorming} alt="Bodystorming session" />

        <SubHeading>Screen Design</SubHeading>
        <DesignImageCarousel images={[
          { src: screenDesignHero, alt: "Screen design overview" },
          { src: screenHello, alt: "Hello screen" },
          { src: screenSpacemanager, alt: "Space manager" },
          { src: screenConference, alt: "Conference call" },
        ]} />
      </section>

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>What Happened Next</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            The project won an iF Design Award 2019 both for the UX/UI and for the product.
          </p>
        </FadeIn>
        <DesignImageCarousel images={[
          { src: ifAwardUi, alt: "iF Design Award 2019 — UX/UI" },
          { src: ifAwardProduct, alt: "iF Design Award 2019 — Product" },
        ]} />
      </section>
    </div>
  </div>
);

export default FusionTelepresencePartial;
