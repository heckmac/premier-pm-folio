import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import DesignImage from "@/components/design/DesignImage";
import DesignImageCarousel from "@/components/design/DesignImageCarousel";

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
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1525875273589-479VPU72WC50XQRBYTYY/Presentation_LEAT_Latest.002.jpeg", alt: "Research slide 1" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1525875273709-ZM1S1XI9DTTMEZPGGLLV/Presentation_LEAT_Latest.003.jpeg", alt: "Research slide 2" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1525875275765-7VB8RP8SHIALKTH962LC/Presentation_LEAT_Latest.006.jpeg", alt: "Research slide 3" },
          ]} />

          <SubHeading>Strategy and UX Principles</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              The research insights led me to define the strategic approach; its output covered: competitors analysis, users insights, opportunity spaces and design principles.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526296412150-197WNJN3MCXMRFRDXUG5/strategy.002.jpeg", alt: "Strategy 1" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526296416877-3IBZ73F0ELNQ0NGYVQUK/strategy.003.jpeg", alt: "Strategy 2" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526296424726-G04I854JUUZPDJ3LJJ3M/strategy.005.jpeg", alt: "Strategy 3" },
          ]} />

          <SubHeading>Ideation</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              The next phase was to define the best use cases to leverage this technology. We could use the strategy and the design principles to navigate through users needs, gesture ergonomic, contexts of use, UI potential, USP for the technology. The use cases were ideated by running several sketching sessions in crazy eight style, prioritising and iterating on the most promising ones.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526728998067-5YI8YC7IZ12EF5I1J8PY/Photo+10-08-2016%2C+15+55+49.jpg", alt: "Ideation photo" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526729376630-C44EVD0OU5TY8336IP33/ideation.jpg", alt: "Ideation process" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526729702603-VBK4W2R1KB1USRCRQOSE/ideation.002.jpeg", alt: "Ideation concepts" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526729704890-N444VKQUO9GU355IK169/ideation.007.jpeg", alt: "Ideation refinement" },
          ]} />

          <SubHeading>User Interviews</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              We run users interviews both in Germany and China, with two goals: more insights on users' current behaviour with smartwatches and test the acceptance of our scenarios. We used paper prototypes to find out which gestures were the most natural ones, test their reaction to the UI, and validate the relevance of the selected use cases. The setup consisted of wireframed interfaces printed on round stickers applied to a real watch. We presented two screens per time, and we asked users what they would do to go from one screen to the other.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526729810314-1V4L7CQF3ZIQM1O4E7OV/ideation.010.jpeg", alt: "User interview 1" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526729818277-QH8ZZQX7VMPWN7FM29CG/ideation.011.jpeg", alt: "User interview 2" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526729843479-E7BG9JW9625IQT2I4TFI/ideation.012.jpeg", alt: "User interview 3" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526730421308-PCAFIZTQ2CEQLNZO766C/_MG_9443.JPG", alt: "User test photo" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526730235510-7Q9PP17TI4G8J94RHW1Z/usertest.jpg", alt: "User testing session" },
          ]} />

          <SubHeading>Use Cases Iteration</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              We refined use cases and UIs through progressively higher fidelity sketches.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731404959-DVX0MH9YYKUST4I0QEBK/2016_09_29_Selected_use_cases.003.jpeg", alt: "Use case 1" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731401671-DANGD234D59XLSWCD2S0/2016_09_29_Selected_use_cases.004.jpeg", alt: "Use case 2" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731407423-VBK4W2R1KB1USRCRQOSE/2016_09_29_Selected_use_cases.005.jpeg", alt: "Use case 3" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731416912-OM816XX31UQJEZY35L26/2016_09_29_Selected_use_cases.006.jpeg", alt: "Use case 4" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731419513-N444VKQUO9GU355IK169/2016_09_29_Selected_use_cases.007.jpeg", alt: "Use case 5" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731423759-VEI8YN7Z0U66PW2/2016_09_29_Selected_use_cases.008.jpeg", alt: "Use case 6" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731427475-H03JJOGVDOGBIJ1CXIQT/2016_09_29_Selected_use_cases.009.jpeg", alt: "Use case 7" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731434324-3Z0W9BYVLDIWUYRXMJVG/2016_09_29_Selected_use_cases.010.jpeg", alt: "Use case 8" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731434888-R9SHM2UTJGTSR9B62MNE/2016_09_29_Selected_use_cases.011.jpeg", alt: "Use case 9" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526731439529-3O1TCJPTTIC08GXXZ1P3/2016_09_29_Selected_use_cases.012.jpeg", alt: "Use case 10" },
          ]} />

          <SubHeading>Screen Design</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              After defining the visual style direction, we designed the screens through quick iterations using Sketch and mirroring the output onto the device. We used Principle for mac to build rough animations and test our ideas before spending too much time on screen refinements.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526899174421-P3H542DI6XPO463BC801/visual_inspiration.jpg", alt: "Visual style moodboard", caption: "Visual style moodboard — We explored several visual styles creating a set of moodboards and asking the client to challenge them." },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526899042601-V0UWEVFPAMBDKBVTKJ3G/directions.png", alt: "Visual style directions", caption: "Visual style directions — We used one application to explore several visual styles and define a general direction." },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526899072909-MBZDF1303DAN8Y09IIRY/grid.png", alt: "Radial grid", caption: "Radial grid — As we wanted to create a system of circular UIs we designed a radial grid as base." },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526899170156-8IAGINSW4VU2JGRBF4CT/screen_sketch.jpg", alt: "Sketch and Principles", caption: "Sketch and Principles — Sketch was used to create the mockups and Principles for mac to validate their usability on the fly." },
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
            src="https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526935147912-TD7QH8ML0YKULQCLTB3S/development.jpg"
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
