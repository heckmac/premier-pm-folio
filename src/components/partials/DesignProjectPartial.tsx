import { ComponentType } from "react";
import FadeIn from "@/components/FadeIn";
import DesignImage from "@/components/design/DesignImage";
import DesignImageCarousel from "@/components/design/DesignImageCarousel";
import {
  getDesignProject,
  type ContentBlock,
  type DesignSubSection,
} from "@/lib/designProjects";
import PartialCTAs from "./PartialCTAs";

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

const SubSectionRenderer = ({ sub }: { sub: DesignSubSection }) => (
  <>
    <SubHeading>{sub.subHeading}</SubHeading>
    {sub.blocks.map((block, i) => (
      <Block key={i} block={block} />
    ))}
  </>
);

/** Factory that creates a partial component for a given design project slug */
export function createDesignProjectPartial(slug: string): ComponentType {
  const Partial = () => {
    const project = getDesignProject(slug);
    if (!project) return <p className="text-muted-foreground">Project not found.</p>;

    return (
      <div>
        {/* Hero */}
        <section className="py-16 lg:py-20 border-b divider">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <FadeIn delay={0.05}>
              <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-4">
                {project.discipline} · {project.duration} · {project.location}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[0.95] tracking-tighter uppercase">
                {project.title}
              </h2>
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

        {/* Initial sections grouped together */}
        {project.sections.length > 0 && (
          <section className="border-b divider">
            <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
              <div className="py-16 lg:py-20 space-y-10">
                {project.sections.slice(0, Math.min(3, project.sections.length)).map((section, si) => {
                  const hasSubSections = section.subSections && section.subSections.length > 0;
                  return (
                    <div key={si}>
                      <SectionHeading>{section.heading}</SectionHeading>
                      {section.blocks?.map((block, bi) => (
                        <Block key={bi} block={block} />
                      ))}
                      {hasSubSections &&
                        section.subSections!.map((sub, ssi) => (
                          <SubSectionRenderer key={ssi} sub={sub} />
                        ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Remaining sections with individual borders */}
        {project.sections.slice(3).map((section, si) => {
          const isFullWidth = section.fullWidth;
          const hasSubSections =
            section.subSections && section.subSections.length > 0;

          return (
            <section key={si + 3} className="border-b divider">
              <div
                className={`container mx-auto px-6 lg:px-8 ${
                  isFullWidth ? "max-w-6xl" : "max-w-3xl"
                }`}
              >
                <div className="py-16 lg:py-20">
                  <SectionHeading>{section.heading}</SectionHeading>
                  {section.blocks?.map((block, bi) => (
                    <Block key={bi} block={block} />
                  ))}
                  {hasSubSections &&
                    section.subSections!.map((sub, ssi) => (
                      <SubSectionRenderer key={ssi} sub={sub} />
                    ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    );
  };

  Partial.displayName = `DesignProjectPartial(${slug})`;
  return Partial;
}
