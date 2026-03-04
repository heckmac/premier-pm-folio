import FadeIn from "@/components/FadeIn";
import DesignImage from "@/components/design/DesignImage";
import DesignImageCarousel from "@/components/design/DesignImageCarousel";

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

const InsuranceDataCollectionPartial = () => (
  <div>
    <section className="py-16 lg:py-20 border-b divider">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <FadeIn delay={0.05}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            UX Design · 2 Months · Europe
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
            Customer Contact Data Collection
          </h2>
        </FadeIn>
      </div>
    </section>

    <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Background</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            The client, a worldwide leading insurance company, started a process of digital transformation to rethink its services and operations. One of the biggest hurdles in the insurance sector is related to the personal information management, especially in countries like Germany.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Scope</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Designit was asked to analyse the current data collection process, identify opportunities, and design solution that could encourage users to give their data and move from analogic to digital communication.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>My Role</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            I joined the team as UX expert, along with a junior UX designer, a researcher, a service designer and a strategic lead. I facilitated some of the workshops during the eight weeks of co-creation.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>The Process</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            An 8-week co-creation project. 6 Designit, 12 client stakeholders, 1 leading market for the implementation of an easy solution to gather customers' contact data and the consent to use it.
          </p>
        </FadeIn>
        <DesignImage
          src="https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527752435891-Z2KH13UB931TCQA945H4/note-bd92d86976a34b0da1ed973689f3e7ae-file.jpeg"
          alt="Process overview"
        />

        <SubHeading>Week 1: Understanding // Co-Creation</SubHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            An intensive 5 day workshop to download the knowledge from all the participants and teach them a bit of Design Thinking methodology.
          </p>
        </FadeIn>

        <SubHeading>Week 4: Ideation // Co-Creation</SubHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            An intensive 5-day workshop to present opportunities and get all the OEs aligned with a strategy to move forward.
          </p>
        </FadeIn>
        <DesignImageCarousel images={[
          { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527763852963-XQWQVAC4LA0GHBANUTMN/Schermata+2018-05-31+alle+12.34.33.png", alt: "Ideation 1" },
          { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527763841807-UFH0CM2UBV2LDY8MBVTU/Schermata+2018-05-31+alle+12.33.33.png", alt: "Ideation 2" },
          { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527763847820-CZVO1FU3RXM3VQ2PD9XG/Schermata+2018-05-31+alle+12.34.53.png", alt: "Ideation 3" },
        ]} />
      </section>
    </div>
  </div>
);

export default InsuranceDataCollectionPartial;
