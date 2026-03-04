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

const SmartwatchGesturesPartial = () => (
  <div>
    <section className="py-16 lg:py-20 border-b divider">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <FadeIn delay={0.05}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            UX/UI Design · 6 Months · Germany and China
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
            Gestures for the Next Generation of Smartwatches
          </h2>
        </FadeIn>
      </div>
    </section>

    <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Background</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            The innovation team from our client developed two technologies to interact with smartwatches: a multitouch bezel and a touch-skin sensor to control the device touching the back of her hand.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Scope</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Project's scope was to define relevant use cases and user interfaces to leverage the user experience. It was crucial to our client to create both a vision supported by a strategic framework and concrete evidence, embodied in designs and a working prototype.
          </p>
        </FadeIn>
      </section>

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

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Process</SectionHeading>
        <SubHeading>Research</SubHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Desk research and 24h survey to explore the current usage of a smartwatch, with and without a smartphone.
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

        <SubHeading>What Happened Next</SubHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            The project succeeded in showing the potential of these two new input technologies: the client's management was positively impressed and decided to bring the development further. Recently Huawei patented the technology but hasn't revealed yet how they are going to use it.
          </p>
        </FadeIn>
      </section>
    </div>
  </div>
);

export default SmartwatchGesturesPartial;
