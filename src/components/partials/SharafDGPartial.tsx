import FadeIn from "@/components/FadeIn";
import DesignImageCarousel from "@/components/design/DesignImageCarousel";

import img01 from "@/assets/sharaf-dg/01_nug-0d5dd0b3bfb69e024b64888c7b517649b.png";
import img02 from "@/assets/sharaf-dg/02_nug-1d515c4f8932d0d3a5911b47660d88b5d.jpg";
import img03 from "@/assets/sharaf-dg/03_nug-183886c25529f732e373c850db956a17c.jpg";
import img04 from "@/assets/fusion/04_nug-165550a10351de611f0eae9346c96fbc3.jpg";
import img05 from "@/assets/sharaf-dg/05_nug-14c3384ec2ba57a9ffa5ba9df89727e61.jpg";
import img06 from "@/assets/sharaf-dg/06_nug-18747f8e967e0a656b9c5fe1d665ca85b.jpg";
import img07 from "@/assets/sharaf-dg/07_nug-10eddbaed3f7f935786a73adfc3f9d43b.jpg";
import img08 from "@/assets/sharaf-dg/08_nug-198ea609b0d6953ee82320c16ec72928d.jpg";
import imgNote1 from "@/assets/sharaf-dg/note-bedc3839c7834004a479fe671a3a7b24-file.jpg";
import imgPhotowall from "@/assets/sharaf-dg/photowall_sketch.jpg";
import imgNote2 from "@/assets/sharaf-dg/note-7b1999ad50f1497daf0860646753d283-file.jpg";

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

const SharafDGPartial = () => (
  <div>
    <section className="py-16 lg:py-20 border-b divider">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <FadeIn delay={0.05}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            UX & Service Design · 18 Months · UAE
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
            An Omnichannel Retail Experience
          </h2>
        </FadeIn>
      </div>
    </section>

    <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Background</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Sharaf DG is one of the most successful electronics retailers in UAE; until 2013 their business model was all about reducing costs: simple stores, no warehouses and competitive prices. Designit helped Sharaf shaping and implementing a new business model based on customer experience.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Scope</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            In 2013 Nilesh Khalkho, CEO and Co-Founder of Sharaf DG, came to Designit with a problem: electronics retailers can no longer leverage on price as their main differentiator. Sharaf wanted to create a new business model based on customer experience and asked Designit to support him shaping and implementing a new omnichannel experience, able to unify the retail experience with the digital environment.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>My Role</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
            My role was to translate the vision defined by service designers into reality. I was responsible for the in-store digital touchpoints and the monetisation platform.
          </p>
        </FadeIn>
        <FadeIn>
          <ul className="space-y-2">
            {["User stories definition", "Wireframes detailing", "Production of guidelines", "Design support for implementation", "Design Quality Assurance", "Final handover facilitation", "UX Design and Service Design", "Mapping and design of the multichannel shopping experience", "Concept refinement"].map((item, i) => (
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
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            The scope of the project was to deliver a fully working system able to convey the design concepts developed during the previous phase. The final design covered different touchpoints both digital and physical: architecture and interior design, in-store digital experiences, mobile applications, and backend systems.
          </p>
        </FadeIn>
        <DesignImageCarousel images={[
          { src: img01, alt: "Sharaf DG result 1" },
          { src: img02, alt: "Sharaf DG result 2" },
          { src: img03, alt: "Sharaf DG result 3" },
          { src: img04, alt: "Sharaf DG result 4" },
          { src: img05, alt: "Sharaf DG result 5" },
          { src: img06, alt: "Sharaf DG result 6" },
          { src: img07, alt: "Sharaf DG result 7" },
          { src: img08, alt: "Sharaf DG result 8" },
        ]} />
      </div>
    </section>

    <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>Process</SectionHeading>
        <SubHeading>Experience Roadmap</SubHeading>
        <FadeIn>
          <ul className="space-y-1.5 text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
            {["Internal project handover to Design & Implementation team", "Studying and understanding the detailed concept manual", "Identification of key features for implementation", "Desk research: best practices and competitor analysis", "Concept detailing: creating three user stories addressing all key concept touch-points", "Design and Experience transfer of the store design concept for the Times Square Store", "Definition of architecture scope and alignment with the scheduled building process"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
        <DesignImageCarousel images={[
          { src: imgNote1, alt: "Sales process", caption: "The sales process" },
          { src: imgPhotowall, alt: "User journey", caption: "The user journey" },
          { src: imgNote2, alt: "UX Concept", caption: "UX Concept" },
        ]} />
      </section>

      <section className="py-16 lg:py-20 border-b divider">
        <SectionHeading>What Happened Next</SectionHeading>
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            After we delivered the proof of concept, the system was engineered and maintained by a software house able to provide constant support. The digital experiences we designed became the blueprint of the digital transformation of the company; the system was extended to all the Sharaf DG shops in Dubai.
          </p>
        </FadeIn>
      </section>
    </div>
  </div>
);

export default SharafDGPartial;
