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

const SharafDG = () => {
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
              UX & Service Design · 18 Months · UAE
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
              An Omnichannel Retail Experience
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
              Sharaf DG is one of the most successful electronics retailers in UAE; until 2013 their business model was all about reducing costs: simple stores, no warehouses and competitive prices. Designit helped Sharaf shaping and implementing a new business model based on customer experience.
            </p>
          </FadeIn>
        </section>

        {/* Scope */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Scope</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              In 2013 Nilesh Khalkho, CEO and Co-Founder of Sharaf DG, came to Designit with a problem: electronics retailers can no longer leverage on price as their main differentiator. Sharaf wanted to create a new business model based on customer experience and asked Designit to support him shaping and implementing a new omnichannel experience, able to unify the retail experience with the digital environment.
            </p>
          </FadeIn>
        </section>

        {/* Role */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>My Role</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              My role was to translate the vision defined by service designers into reality. I was responsible for the in-store digital touchpoints and the monetisation platform.
            </p>
          </FadeIn>
          <FadeIn>
            <ul className="space-y-2">
              {[
                "User stories definition",
                "Wireframes detailing",
                "Production of guidelines",
                "Design support for implementation",
                "Design Quality Assurance",
                "Final handover facilitation",
                "UX Design and Service Design",
                "Mapping and design of the multichannel shopping experience",
                "Concept refinement",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base leading-relaxed italic">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>
      </div>

      {/* Results — full width gallery */}
      <section className="py-16 lg:py-20 border-b divider">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <SectionHeading>Results</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              The scope of the project was to deliver a fully working system able to convey the design concepts developed during the previous phase. The final design covered different touchpoints both digital and physical: architecture and interior design, in-store digital experiences, mobile applications, and backend systems.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526938370014-I91YRLYSHHFCV5W7QWI8/01_nug-0d5dd0b3bfb69e024b64888c7b517649b.png", alt: "Sharaf DG result 1" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526938382246-C0GBRS7J5R52GBEH60H2/02_nug-1d515c4f8932d0d3a5911b47660d88b5d.jpeg", alt: "Sharaf DG result 2" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526938381886-WC5GS96W089WOIFV5L12/03_nug-183886c25529f732e373c850db956a17c.jpeg", alt: "Sharaf DG result 3" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526938384396-4C5BIMLWFK5BP1RC4CGU/04_nug-165550a10351de611f0eae9346c96fbc3.jpeg", alt: "Sharaf DG result 4" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526938385096-51YFZQX9NCH2YHVUDR9E/05_nug-14c3384ec2ba57a9ffa5ba9df89727e61.jpeg", alt: "Sharaf DG result 5" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526938389181-2HXZ0HMVO4JVYAUOV9BS/06_nug-18747f8e967e0a656b9c5fe1d665ca85b.jpeg", alt: "Sharaf DG result 6" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526938388902-2ZOQWHQGQEJW6YA0CZAT/07_nug-10eddbaed3f7f935786a73adfc3f9d43b.jpeg", alt: "Sharaf DG result 7" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1526938391947-EUHV5UBD9CS374OA7AZT/08_nug-198ea609b0d6953ee82320c16ec72928d.jpeg", alt: "Sharaf DG result 8" },
          ]} />
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        {/* Process */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>Process</SectionHeading>

          <SubHeading>Experience Roadmap</SubHeading>
          <FadeIn>
            <ul className="space-y-1.5 text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              {[
                "Internal project handover to Design & Implementation team",
                "Studying and understanding the detailed concept manual",
                "Identification of key features for implementation",
                "Desk research: best practices and competitor analysis",
                "Concept detailing: creating three user stories addressing all key concept touch-points",
                "Design and Experience transfer of the store design concept for the Times Square Store",
                "Definition of architecture scope and alignment with the scheduled building process",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527268164473-5NSEAA6VBUVCP6N4DA4X/note-bedc3839c7834004a479fe671a3a7b24-file.jpg", alt: "Sales process", caption: "The sales process — We analysed the sales and purchase experience both from the customer and staff member point of view." },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527271003909-MSDG4T55P7TA68MPDDRL/photowall_sketch.jpg", alt: "User journey", caption: "The user journey — We ideated a new user journey to enhance both the customer and the staff members experience." },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527270994346-UWFT38LK7XFAVZE82AML/note-7b1999ad50f1497daf0860646753d283-file.jpg", alt: "UX Concept", caption: "UX Concept — We described the UX concept of all the touch points to align stakeholders' expectations." },
          ]} />

          <SubHeading>Team Coordination and Processes Setup</SubHeading>
          <FadeIn>
            <ul className="space-y-1.5 text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              {[
                "Setup of internal communications and content coordination tools / framework (Jira, Confluence)",
                "Creation of UI/UX specification documents",
                "Architectural design and detailing of all digital experiences",
                "Alignment of store design with UX/UI and Tech development",
                "Final planning documents for store design and all digital experiences",
                "Client presentation and scope refinement",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <SubHeading>Implementation</SubHeading>
          <FadeIn>
            <ul className="space-y-1.5 text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              {[
                "Alignment of design concepts with technical feasibility and interior architecture",
                "Final UI/UX specification documents",
                "Implementation of the E-commerce platform (website)",
                "Mobile app screen design and development",
                "Digital Experiences design and development",
                "Test-run in Munich",
                "Troubleshooting and refinement of all touchpoints",
                "Warehouse setup in Dubai",
                "Quality Control Check and Approval of all key elements of store design",
                "Final handover to the client (bug-fixing and staff training workshop in Dubai, design and technical documentation handover, final client demo & presentation)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527269262439-Y1QNCCGTW01F3W43J23I/2014-10-09_SharafDG_Photography_wall_Concept_3.jpg", alt: "Visual concept", caption: "Visual concept — We created a visual concept for all the touch-points to create a consistent design language." },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527269211913-YUBBIV6MKPOEWTMX5C5U/2014-10-09_SharafDG_Photography_wall_Concept_2.jpg", alt: "Design specifications", caption: "Design specifications — All the concepts were refined and described in design specifications documents." },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527269558925-KMZ597KPXX5N8PVHPNE9/IMG_9241.JPG", alt: "Prototype implementation", caption: "Prototype Implementation — Developers implemented all the touch-points while the design team was testing them and ensuring usability." },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527270254052-500X7KA33UG3VT0TTAVT/IMG_8530.JPG", alt: "Run test", caption: "Runtest — The final setup and debug in a warehouse in Dubai." },
          ]} />
        </section>

        {/* What happened next */}
        <section className="py-16 lg:py-20 border-b divider">
          <SectionHeading>What Happened Next</SectionHeading>
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              After we delivered the proof of concept, the system was engineered and maintained by a software house able to provide constant support. The digital experiences we designed became the blueprint of the digital transformation of the company; the system was extended to all the Sharaf DG shops in Dubai.
            </p>
          </FadeIn>
          <DesignImageCarousel images={[
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527270690780-R6GI8O0ESZR86EGVK85N/%26MaxW%3D960%26imageVersion%3Ddefault%26AR-150619059.jpg", alt: "Sharaf DG store 1" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527270687424-1HK2XV2A44OMH6Z4DAVZ/EP-150619059-1.jpg", alt: "Sharaf DG store 2" },
            { src: "https://images.squarespace-cdn.com/content/v1/5af2ffb9365f02713e5fcb98/1527270687428-UQJJ12UJHA764OBRQVYR/EP-150619059.jpg", alt: "Sharaf DG store 3" },
          ]} />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SharafDG;
