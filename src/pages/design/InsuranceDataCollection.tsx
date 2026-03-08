import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import DesignImage from "@/components/design/DesignImage";
import DesignImageCarousel from "@/components/design/DesignImageCarousel";

import imgProcess from "@/assets/allianz/note-bd92d86976a34b0da1ed973689f3e7ae-file.jpg";
import imgResearch1 from "@/assets/allianz/Schermata+2018-05-25+alle+21.03.23.png";
import imgResearch2 from "@/assets/allianz/Schermata+2018-05-25+alle+21.03.52.png";
import imgResearch3 from "@/assets/allianz/Schermata+2018-05-25+alle+21.04.23.png";
import imgSynthesis1 from "@/assets/allianz/Schermata+2018-05-31+alle+12.31.41.png";
import imgSynthesis2 from "@/assets/allianz/Schermata+2018-05-31+alle+12.44.58.png";
import imgIdeation1 from "@/assets/allianz/Schermata+2018-05-31+alle+12.34.33.png";
import imgIdeation2 from "@/assets/allianz/Schermata+2018-05-31+alle+12.33.33.png";
import imgIdeation3 from "@/assets/allianz/Schermata+2018-05-31+alle+12.34.53.png";
import imgPrototype1 from "@/assets/allianz/Schermata+2018-05-31+alle+12.47.23.png";
import imgPrototype2 from "@/assets/allianz/Schermata+2018-05-31+alle+12.36.17.png";
import imgPrototype3 from "@/assets/allianz/Schermata+2018-05-31+alle+12.35.26.png";
import imgUAT1 from "@/assets/allianz/Schermata+2018-05-31+alle+12.40.48.png";
import imgUAT2 from "@/assets/allianz/Schermata+2018-05-31+alle+12.41.38.png";
import imgUAT3 from "@/assets/allianz/Schermata+2018-05-31+alle+12.40.08.png";
import imgUAT4 from "@/assets/allianz/Schermata+2018-05-31+alle+12.41.52.png";
import imgUAT5 from "@/assets/allianz/Schermata+2018-05-31+alle+12.43.21.png";
import imgIteration1 from "@/assets/smartwatch-gestures/Schermata+2018-05-31+alle+12.59.00.png";
import imgIteration2 from "@/assets/smartwatch-gestures/Schermata+2018-05-31+alle+13.01.35.png";
import imgFinalTest1 from "@/assets/allianz/note-0f6d1d5dc00046fc9684f72be01e6d9b-file.jpg";
import imgFinalTest2 from "@/assets/allianz/note-4a2fa2171d8d4b1081377cb7b64a01c8-file.jpg";
import imgFinalTest3 from "@/assets/allianz/note-4ca6cc92614845ad803608dbeab3382b-file.jpg";
import imgHopesFears from "@/assets/allianz/hopes-fears.webp";

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

const InsuranceDataCollection = () => {
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
              UX Design · 2 Months · Europe
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
              Customer Contact Data Collection
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
              The client, a worldwide leading insurance company, started a process of digital transformation to rethink its services and operations. One of the biggest hurdles in the insurance sector is related to the personal information management, especially in countries like Germany. Being able to collect data and getting the consent to use the data is a crucial step to deliver fully digital experiences.
            </p>
          </FadeIn>
        </section>

        {/* Scope */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Scope</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Designit was asked to analyse the current data collection process, identify opportunities, and design solution that could encourage users to give their data and move from analogic to digital communication.
            </p>
          </FadeIn>
        </section>

        {/* Role */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>My Role</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I joined the team as UX expert, along with a junior UX designer, a researcher, a service designer and a strategic lead. I facilitated some of the workshops during the eight weeks of co-creation: my focus was on analysing the current processes and touch-points, identifying loopholes and opportunities, guiding the team towards solutions and prototypes.
            </p>
          </FadeIn>
        </section>

        {/* The Process */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>The Process</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              An 8-week co-creation project. 6 Designit, 12 client stakeholders, 1 leading market for the implementation of an easy solution to gather customers' contact data and the consent to use it.
            </p>
          </FadeIn>
          <DesignImage
            src={imgProcess}
            alt="Process overview"
          />

          <SubHeading>Week 1: Understanding // Co-Creation</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              An intensive 5 day workshop to download the knowledge from all the participants and teach them a bit of Design Thinking methodology. The result of this week was to map all the processes over the 3 main channels (Customer centre, Brokers & Agents, Portal) to understand where data collection can be improved.
            </p>
          </FadeIn>
          <DesignImage
            src={imgHopesFears}
            alt="Week 1 workshop"
          />

          <SubHeading>Week 2 and 3: Research and Synthesis</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              The team run Field Research to conduct stakeholder interviews and Desk Research, collecting material sent by the other OEs. During week three the team gathered all the insights and use them as base for the following Ideation Workshop.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgResearch1, alt: "Research 1" },
            { src: imgResearch2, alt: "Research 2" },
            { src: imgResearch3, alt: "Research 3" },
            { src: imgSynthesis1, alt: "Synthesis 1" },
            { src: imgSynthesis2, alt: "Synthesis 2" },
          ]} />

          <SubHeading>Week 4: Ideation // Co-Creation</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              An intensive 5-day workshop to present opportunities and get all the OEs aligned with a strategy to move forward. We run ideation sessions and used the POP App to make paper prototypes more tangible, helping the client understand and relate to the explored opportunities.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgIdeation1, alt: "Ideation 1" },
            { src: imgIdeation2, alt: "Ideation 2" },
            { src: imgIdeation3, alt: "Ideation 3" },
          ]} />

          <SubHeading>Week 5: Prototype Creation</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              Based on the paper prototypes from the ideation workshop, in which we sketched out screens on paper, we developed a desktop version of the prototype for testing. GDF provided us with a sketch library with UI elements for the wireframes. We used Sketch to create the screens and uploaded them into Invision afterwards.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgPrototype1, alt: "Prototype 1" },
            { src: imgPrototype2, alt: "Prototype 2" },
            { src: imgPrototype3, alt: "Prototype 3" },
          ]} />

          <SubHeading>Week 6: User Acceptance Testing</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              In week 6 we run tested our digital prototype with customers, both in the Netherlands and in Belgium. The test was run using the User Experience Questionnaire (UEQ) method, in order to measure the satisfaction level of users.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgUAT1, alt: "UAT 1" },
            { src: imgUAT2, alt: "UAT 2" },
            { src: imgUAT3, alt: "UAT 3" },
            { src: imgUAT4, alt: "UAT 4" },
            { src: imgUAT5, alt: "UAT 5" },
          ]} />

          <SubHeading>Week 7: Design Iteration</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              Based on the findings we had the week before, we iterated the design and prepared a high fidelity prototype to run the second test. During this iteration, the design was also challenged by the client's attorneys to ensure all the legal requirements were fully met.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgIteration1, alt: "Iteration screen 1" },
            { src: imgIteration2, alt: "Iteration screen 2" },
          ]} />

          <SubHeading>Week 8: User Acceptance Testing</SubHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              The test results were presented to the client together with the final iteration of the digital artefact. In its complex, the solution was well perceived by users and was easily adaptable to different markets, based on their technological setup, service offering and legal requirements.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: imgFinalTest1, alt: "Final test 1" },
            { src: imgFinalTest2, alt: "Final test 2" },
            { src: imgFinalTest3, alt: "Final test 3" },
          ]} />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default InsuranceDataCollection;
