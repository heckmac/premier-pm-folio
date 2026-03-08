import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import DesignImage from "@/components/design/DesignImage";
import DesignImageCarousel from "@/components/design/DesignImageCarousel";
import {
  getDesignProject,
  getNextDesignProject,
  type ContentBlock,
  type DesignSubSection,
} from "@/lib/designProjects";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <FadeIn>
    <h2 className="text-sm font-black uppercase -tracking-[0.02em] text-primary mb-5">
      {children}
    </h2>
  </FadeIn>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <FadeIn>
    <h3 className="text-base font-semibold text-foreground uppercase tracking-tight mb-2 mt-10">
      {children}
    </h3>
  </FadeIn>
);

/** Renders a single content block */
const Block = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "text":
      return (
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            {block.text}
          </p>
        </FadeIn>
      );
    case "bullets":
      return (
        <FadeIn>
          <ul className="space-y-2">
            {block.items?.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-muted-foreground text-sm md:text-base leading-relaxed italic"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      );
    case "image":
      return block.image ? (
        <DesignImage
          src={block.image.src}
          alt={block.image.alt}
          caption={block.image.caption}
        />
      ) : null;
    case "carousel":
      return block.images && block.images.length > 0 ? (
        <DesignImageCarousel images={block.images} />
      ) : null;
    default:
      return null;
  }
};

/** Renders a sub-section with heading + blocks */
const SubSectionRenderer = ({ sub }: { sub: DesignSubSection }) => (
  <>
    <SubHeading>{sub.subHeading}</SubHeading>
    {sub.blocks.map((block, i) => (
      <Block key={i} block={block} />
    ))}
  </>
);

interface Props {
  overrideSlug?: string;
}

const DesignProject = ({ overrideSlug }: Props = {}) => {
  const { slug: paramSlug } = useParams();
  const slug = overrideSlug || paramSlug || "";
  const project = getDesignProject(slug);
  const next = getNextDesignProject(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-foreground">
              Project not found
            </h1>
            <Link
              to="/design"
              className="text-primary hover:underline mt-4 inline-block text-sm"
            >
              ← Back to Design
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-40 lg:pb-24 border-b divider">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <Link
              to="/design"
              className="inline-flex items-center gap-1.5 text-sm text-subtle hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Design
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
              {project.discipline} · {project.duration} · {project.location}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
              {project.title}
            </h1>
          </FadeIn>
          {project.tagline && (
            <FadeIn delay={0.15}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {project.tagline}
              </p>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Sections */}
      {project.sections.map((section, si) => {
        const isFullWidth = section.fullWidth;
        const hasSubSections =
          section.subSections && section.subSections.length > 0;

        return (
          <section key={si} className="border-b divider">
            <div
              className={`container mx-auto px-6 lg:px-8 ${
                isFullWidth ? "max-w-6xl" : "max-w-3xl"
              }`}
            >
              <div className="py-16 lg:py-20">
                <SectionHeading>{section.heading}</SectionHeading>

                {/* Direct blocks */}
                {section.blocks?.map((block, bi) => (
                  <Block key={bi} block={block} />
                ))}

                {/* Sub-sections */}
                {hasSubSections &&
                  section.subSections!.map((sub, ssi) => (
                    <SubSectionRenderer key={ssi} sub={sub} />
                  ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Next Design Project */}
      {next && (
        <section className="border-t divider">
          <Link
            to={`/design/${next.slug}`}
            className="group block py-16 lg:py-20 hover:bg-secondary/50 transition-colors"
          >
            <div className="container mx-auto px-6 lg:px-8 max-w-3xl flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Next Project
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                  {next.title}
                </h3>
                <p className="text-xs font-medium text-muted-foreground mt-2 uppercase tracking-[0.1em]">
                  {next.client} · {next.duration}
                </p>
              </div>
              <ArrowRight
                size={24}
                className="text-subtle group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
              />
            </div>
          </Link>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DesignProject;
