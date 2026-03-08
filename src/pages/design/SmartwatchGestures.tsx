import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import DesignImage from "@/components/design/DesignImage";
import DesignImageCarousel from "@/components/design/DesignImageCarousel";

import imgResearch1 from "@/assets/smartwatch-gestures/Presentation_LEAT_Latest.002.jpg";
import imgResearch2 from "@/assets/smartwatch-gestures/Presentation_LEAT_Latest.003.jpg";
import imgResearch3 from "@/assets/smartwatch-gestures/Presentation_LEAT_Latest.006.jpg";
import imgStrategy1 from "@/assets/smartwatch-gestures/strategy.002.jpg";
import imgStrategy2 from "@/assets/smartwatch-gestures/strategy.003.jpg";
import imgStrategy3 from "@/assets/smartwatch-gestures/strategy.005.jpg";
import imgIdeationPhoto from "@/assets/smartwatch-gestures/Photo+10-08-2016%2C+15+55+49.jpg";
import imgIdeation1 from "@/assets/smartwatch-gestures/ideation (1).jpg";
import imgIdeation2 from "@/assets/smartwatch-gestures/ideation.002.jpg";
import imgIdeation3 from "@/assets/smartwatch-gestures/ideation.007.jpg";
import imgInterview1 from "@/assets/smartwatch-gestures/ideation.010.jpg";
import imgInterview2 from "@/assets/smartwatch-gestures/ideation.011.jpg";
import imgInterview3 from "@/assets/smartwatch-gestures/ideation.012.jpg";
import imgTestPhoto from "@/assets/smartwatch-gestures/_MG_9443.jpg";
import imgUsertest from "@/assets/smartwatch-gestures/usertest.jpg";
import imgUseCase1 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.003.jpg";
import imgUseCase2 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.004.jpg";
import imgUseCase3 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.005.jpg";
import imgUseCase4 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.006.jpg";
import imgUseCase5 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.007.jpg";
import imgUseCase6 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.008.jpg";
import imgUseCase7 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.009.jpg";
import imgUseCase8 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.010.jpg";
import imgUseCase9 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.011.jpg";
import imgUseCase10 from "@/assets/smartwatch-gestures/2016_09_29_Selected_use_cases.012.jpg";
import imgVisualInspiration from "@/assets/smartwatch-gestures/visual_inspiration.jpg";
import imgDirections from "@/assets/smartwatch-gestures/directions.png";
import imgGrid from "@/assets/smartwatch-gestures/grid.png";
import imgScreenSketch from "@/assets/smartwatch-gestures/screen_sketch.jpg";
import imgDevelopment from "@/assets/smartwatch-gestures/development.jpg";

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

const SmartwatchGestures = () => {
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
              UX/UI Design · 6 Months · Germany and China
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
              Gestures for the Next Generation of Smartwatches
            </h1>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        {/* Background */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Background</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              The innovation team from our client developed two technologies to interact with smartwatches: a multitouch bezel and a touch-skin sensor to control the device touching the back of her hand.
            </p>
          </FadeIn>
        </section>

        {/* Scope */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Scope</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Project's scope was to define relevant use cases and user interfaces to leverage the user experience. It was crucial to our client to create both a vision supported by a strategic framework and concrete evidence, embodied in designs and a working prototype. The project helped our client to get a new budget and bring this technology forward.
            </p>
          </FadeIn>
        </section>

        {/* Role */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>My Role</SectionHeading>
          <FadeIn>
            <ul className="space-y-2">
              {["UX framework definition", "UI design", "User Testing", "Design Lead", "Strategy", "Use cases and storytelling"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base leading-relaxed italic">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Process</SectionHeading>

          <SubHeading>Research</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              Desk research and 24h survey to explore the current usage of a smartwatch, with and without a smartphone. We understood which are the most used application for smartphones and/or for smartwatches, their contexts of use, and the gestures currently adopted.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgResearch1, alt: "Research slide 1" },
            { src: imgResearch2, alt: "Research slide 2" },
            { src: imgResearch3, alt: "Research slide 3" },
          ]} />

          <SubHeading>Strategy and UX Principles</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              The research insights led me to define the strategic approach; its output covered: competitors analysis, users insights, opportunity spaces and design principles.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgStrategy1, alt: "Strategy 1" },
            { src: imgStrategy2, alt: "Strategy 2" },
            { src: imgStrategy3, alt: "Strategy 3" },
          ]} />

          <SubHeading>Ideation</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              The next phase was to define the best use cases to leverage this technology. We could use the strategy and the design principles to navigate through users needs, gesture ergonomic, contexts of use, UI potential, USP for the technology. The use cases were ideated by running several sketching sessions in crazy eight style, prioritising and iterating on the most promising ones.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgIdeationPhoto, alt: "Ideation photo" },
            { src: imgIdeation1, alt: "Ideation process" },
            { src: imgIdeation2, alt: "Ideation concepts" },
            { src: imgIdeation3, alt: "Ideation refinement" },
          ]} />

          <SubHeading>User Interviews</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              We run users interviews both in Germany and China, with two goals: more insights on users' current behaviour with smartwatches and test the acceptance of our scenarios. We used paper prototypes to find out which gestures were the most natural ones, test their reaction to the UI, and validate the relevance of the selected use cases. The setup consisted of wireframed interfaces printed on round stickers applied to a real watch. We presented two screens per time, and we asked users what they would do to go from one screen to the other.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgInterview1, alt: "User interview 1" },
            { src: imgInterview2, alt: "User interview 2" },
            { src: imgInterview3, alt: "User interview 3" },
            { src: imgTestPhoto, alt: "User test photo" },
            { src: imgUsertest, alt: "User testing session" },
          ]} />

          <SubHeading>Use Cases Iteration</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              We refined use cases and UIs through progressively higher fidelity sketches.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgUseCase1, alt: "Use case 1" },
            { src: imgUseCase2, alt: "Use case 2" },
            { src: imgUseCase3, alt: "Use case 3" },
            { src: imgUseCase4, alt: "Use case 4" },
            { src: imgUseCase5, alt: "Use case 5" },
            { src: imgUseCase6, alt: "Use case 6" },
            { src: imgUseCase7, alt: "Use case 7" },
            { src: imgUseCase8, alt: "Use case 8" },
            { src: imgUseCase9, alt: "Use case 9" },
            { src: imgUseCase10, alt: "Use case 10" },
          ]} />

          <SubHeading>Screen Design</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              After defining the visual style direction, we designed the screens through quick iterations using Sketch and mirroring the output onto the device. We used Principle for mac to build rough animations and test our ideas before spending too much time on screen refinements.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgVisualInspiration, alt: "Visual style moodboard", caption: "Visual style moodboard — We explored several visual styles creating a set of moodboards and asking the client to challenge them." },
            { src: imgDirections, alt: "Visual style directions", caption: "Visual style directions — We used one application to explore several visual styles and define a general direction." },
            { src: imgGrid, alt: "Radial grid", caption: "Radial grid — As we wanted to create a system of circular UIs we designed a radial grid as base." },
            { src: imgScreenSketch, alt: "Sketch and Principles", caption: "Sketch and Principles — Sketch was used to create the mockups and Principles for mac to validate their usability on the fly." },
          ]} />

          <SubHeading>Animations</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              We prepared a set of refined animations to envision the user's interactions both for client stakeholders and our developer. Animations were prototyped using Principles for mac first, both to give us a better understanding of the interactions and to showcase them to the developer. The refined version used to present it to the client was produced using Aftereffects.
            </p>
          </FadeIn>

          <SubHeading>Technical Demonstrator</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              The use cases and the narration were refined to fit in one single application, developed for Android. The client could install this application on a working hardware prototype and demonstrate the potential of the touch-bezel and the skin-touch sensors.
            </p>
          </FadeIn>
          <DesignImage
            src={imgDevelopment}
            alt="Technical demonstrator"
          />
        </section>

        {/* What happened next */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>What Happened Next</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              The project succeeded in showing the potential of these two new input technologies: the client's management was positively impressed and decided to bring the development further. The production team took over to challenge feasibility and build a sounding framework based on our concept.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              Recently Huawei patented the technology but hasn't revealed yet how they are going to use it. Looking forward to seeing some of our work in the next version of their smartwatch!
            </p>
            <p className="text-sm text-muted-foreground">
              Featured on: TechRadar · IoT Gadgets · Android Authority
            </p>
          </FadeIn>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SmartwatchGestures;
