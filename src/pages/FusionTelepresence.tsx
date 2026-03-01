import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import DesignImage from "@/components/design/DesignImage";
import DesignImageCarousel from "@/components/design/DesignImageCarousel";

// Result images
import intention1 from "@/assets/fusion/intention1.jpg";
import intention2 from "@/assets/fusion/intention2.jpg";
import intention3 from "@/assets/fusion/intention3.jpg";
import exp001 from "@/assets/fusion/fusion_experience_001.jpeg";
import exp002 from "@/assets/fusion/fusion_experience_002.jpeg";
import exp003 from "@/assets/fusion/fusion_experience_003.jpeg";
import exp004 from "@/assets/fusion/fusion_experience_004.jpeg";
import exp005 from "@/assets/fusion/fusion_experience_005.jpeg";
import exp006 from "@/assets/fusion/fusion_experience_006.jpeg";
import exp007 from "@/assets/fusion/fusion_experience_007.jpeg";
import exp008 from "@/assets/fusion/fusion_experience_008.jpeg";
import exp009 from "@/assets/fusion/fusion_experience_009.jpeg";
import exp010 from "@/assets/fusion/fusion_experience_010.jpeg";

// Process images
import deskResearch from "@/assets/fusion/desk_research.jpg";
import trends1 from "@/assets/fusion/trends1.jpg";
import trends2 from "@/assets/fusion/trends2.jpg";
import trends3 from "@/assets/fusion/trends3.jpg";
import strategy from "@/assets/fusion/strategy.jpg";
import productLifecycle from "@/assets/fusion/product_lifecycle.jpg";
import uxblueprint1 from "@/assets/fusion/uxblueprint1.jpg";
import uxblueprint2 from "@/assets/fusion/uxblueprint2.jpg";
import bodystorming from "@/assets/fusion/bodystorming.jpeg";
import ideation from "@/assets/fusion/ideation.jpg";
import progressSummary from "@/assets/fusion/progress_summary.jpg";
import ideationPhoto from "@/assets/fusion/ideation_photo.jpg";
import uxdirections from "@/assets/fusion/uxdirections.jpg";
import navigation from "@/assets/fusion/navigation.jpg";
import ia from "@/assets/fusion/ia.jpg";
import wireflow from "@/assets/fusion/wireflow.jpg";
import wireframe from "@/assets/fusion/wireframe.jpg";
import visual1 from "@/assets/fusion/visual1.jpg";
import visual2 from "@/assets/fusion/visual2.jpg";
import visual3 from "@/assets/fusion/visual3.jpg";
import visual4 from "@/assets/fusion/visual4.jpg";
import screenDesignHero from "@/assets/fusion/screen_design_hero.jpeg";
import screenHello from "@/assets/fusion/screen_hello.png";
import screenSpacemanager from "@/assets/fusion/screen_spacemanager.png";
import screenConference from "@/assets/fusion/screen_conference.png";
import screenWhiteboard from "@/assets/fusion/screen_whiteboard.png";
import screenDocuments from "@/assets/fusion/screen_documents.png";
import screenMixedCall from "@/assets/fusion/screen_mixed_call.png";
import ifAwardUi from "@/assets/fusion/if_award_ui.jpeg";
import ifAwardProduct from "@/assets/fusion/if_award_product.jpeg";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <FadeIn>
    <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
      {children}
    </h2>
  </FadeIn>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <FadeIn>
    <h3 className="text-lg font-semibold text-foreground mb-3 mt-10">
      {children}
    </h3>
  </FadeIn>
);

const FusionTelepresence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-40 lg:pb-24 border-b divider">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <Link to="/design" className="inline-flex items-center gap-1.5 text-sm text-subtle hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={14} /> Design
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
              Digital Design · 5 Months · Germany
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
              Fusion Telepresence System
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Designing a holistic telepresence experience for China's largest telecommunication company — creating a unified design language across industrial and digital design for the flagship product family.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Background / Scope / Role */}
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Background</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              This client is the biggest telecommunication company in China; among many services they provide they have also a business line covering telepresence systems. The product family was developed organically over the years and the result was a fragmented design language, both from an industrial and digital design perspective.
            </p>
          </FadeIn>
        </section>

        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Scope</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              The client asked Designit to create a vision for the future of teleworking, developing a tool to connect teams and foster cooperation and co-creation. The project focused on creating a holistic experience to create a detailed concept of the flagship product and to create a design language that can be applied to the whole product family.
            </p>
          </FadeIn>
        </section>

        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>My Role</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              I was responsible for the digital design, working in close collaboration with the industrial design lead to manage the project progress and client's requirements.
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

      {/* Results — full width */}
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
            { src: exp006, alt: "Fusion experience components" },
            { src: exp007, alt: "Fusion experience UI" },
            { src: exp008, alt: "Fusion experience collaboration" },
            { src: exp009, alt: "Fusion experience system" },
            { src: exp010, alt: "Fusion experience final" },
          ]} />
        </div>
      </section>

      {/* Process */}
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Process</SectionHeading>

          <SubHeading>Desk Research and Competitors Audit</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              Due to budget restrictions, we couldn't run a real research phase nor access research insights. In order to get our shoes into the topic and plan the product strategy we ran a desk research aimed both at getting to know how office environments and working behaviours are changing, and to map the market offering in terms of products, features, approaches and styles.
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
              We identified three main competitors: Google, Microsoft and Cisco; we compared their solutions from different angles: value proposition, target segment, experience, system and platform, design language. Based on the client's goal we refined the scope of the briefing to bring consistency into client's requests and define a product vision.
            </p>
          </FadeIn>
          <DesignImage src={strategy} alt="Product strategy framework" />

          <SubHeading>Experience Mapping and Ideation</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              After the research, we created a UX blueprint to visualise the breakdown of the user experience along the whole product life-cycle. It presents both the physical and the digital interactions, highlighting the synergy moments between them.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: productLifecycle, alt: "Product lifecycle map" },
            { src: uxblueprint2, alt: "UX blueprint overview" },
            { src: uxblueprint1, alt: "UX blueprint detail" },
          ]} />
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6 mb-6">
              We used the bodystorming method to have a deeper understanding of usability requirements, relations between users and the digital whiteboard, and possible synergies between the physical object and the software.
            </p>
          </FadeIn>
          <DesignImage src={bodystorming} alt="Bodystorming session" />
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6 mb-6">
              The ideation phase was run in parallel by both the industrial design team and the digital design team, we met regularly to challenge and contaminate ideas and to ensure consistency between the two experiences.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: ideation, alt: "Ideation sketches" },
            { src: progressSummary, alt: "Progress summary" },
            { src: ideationPhoto, alt: "Ideation workshop" },
          ]} />

          <SubHeading>UX Concept</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              Ideas were generated to cover the whole user journey and then used to create two different UX concepts, exploring different approaches to information architecture, windows management, file sync and pairing, and cloud structure. These elements combined together were suggesting different styles and degrees of collaboration, focusing differently on co-operation and co-creation.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: uxdirections, alt: "UX concept directions" },
            { src: navigation, alt: "Navigation concept" },
            { src: ia, alt: "Information architecture" },
            { src: wireflow, alt: "Wireflow diagram" },
            { src: wireframe, alt: "Wireframe detail" },
          ]} />

          <SubHeading>Visual Concept</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              We analysed the style of the main competitors' products and we identified a style that was aligned with the brand values and market position. The visual directions were identified by using mood boards and samples of UI libraries to showcase the same components in different styles. Design critiques meetings helped us to guide the client to define and select the desired style.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: visual1, alt: "Visual concept exploration 1" },
            { src: visual2, alt: "Visual concept exploration 2" },
            { src: visual3, alt: "Visual concept exploration 3" },
            { src: visual4, alt: "Visual concept exploration 4" },
          ]} />

          <SubHeading>Screen Design</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              After defining the visual style we created mockups for all the screens using Sketch and InVision to prototype it and test it with colleagues.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: screenDesignHero, alt: "Screen design overview" },
            { src: screenHello, alt: "Hello screen" },
            { src: screenSpacemanager, alt: "Space manager overview" },
            { src: screenConference, alt: "Conference call screen" },
            { src: screenWhiteboard, alt: "Whiteboard collaboration" },
            { src: screenDocuments, alt: "Documents browser" },
            { src: screenMixedCall, alt: "Mixed call screen" },
          ]} />

          <SubHeading>Prototyping for Usability</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              The hardware was a standing 52″ screen, meant to be used by multiple people at the same time from short and medium distance. To create a usable and ergonomic product we produced mockups and prototypes at 1:1 scale since the first stages of the project; we started with a paper prototype to validate general proportions already during the definition of the UX concept, and later on we moved to a digital prototype on a 52″ screen to ensure readability and usability. The wizard of oz technique helped us to quickly test ergonomy, mental models, interfaces and interactions.
            </p>
          </FadeIn>
        </section>

        {/* What happened next */}
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

      <Footer />
    </div>
  );
};

export default FusionTelepresence;
