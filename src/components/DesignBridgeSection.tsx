import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const designProjects = [
  {
    client: "Huawei",
    project: "Fusion Telepresence System",
    context: "Munich, Germany · 2017 · 5 months",
    outcome: "IF Design Award 2019 — UX/UI and Industrial Design",
    link: "/design/fusion-telepresence",
  },
  {
    client: "Huawei",
    project: "Gestures for the Next Generation of Smartwatches",
    context: "Germany & China · 2016 · 6 months",
    outcome: "Technology patented by Huawei. Featured on TechRadar, Android Authority",
    link: "/design/smartwatch-gestures",
  },
  {
    client: "Sharaf DG",
    project: "An Omnichannel Retail Experience",
    context: "Dubai, UAE · 2013–2015 · 18 months",
    outcome: "System extended to all Sharaf DG stores across Dubai",
    link: "/design/sharaf-dg-omnichannel",
  },
  {
    client: "Global Insurance Company",
    project: "Customer Contact Data Collection",
    context: "Netherlands & Belgium · 2018 · 8 weeks",
    outcome: "Validated across two markets. Adaptable to different legal frameworks",
    link: "/design/insurance-data-collection",
  },
];

const DesignBridgeSection = () => (
  <section className="py-20 lg:py-28 border-t divider">
    <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
      <FadeIn>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
          Design
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-6">
          Design is how I learned to think about product.
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl mb-14">
          <p>
            At Designit, every project started from the same place: a business problem without a clear solution. A CEO who could no longer compete on price. An innovation team with a technology and no validated use case. A global company unable to collect customer data across markets. The brief was never "design this" — it was "figure out what this should be."
          </p>
          <p>
            That meant working at the level of positioning and product concept before touching a single screen. Strategic design is not a style of design. It's a method for operating in ambiguity: start from the people, understand the system, define what the product needs to do in the world, then make it real.
          </p>
          <p>
            I still work this way. The difference is that today the output isn't a prototype — it's a roadmap, a prioritisation decision, a structural choice about what the product becomes. The level at which I apply the method has changed. The method hasn't.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {designProjects.map((project, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <Link
              to={project.link}
              className="group block surface-elevated rounded-lg border divider p-6 transition-all hover:shadow-lg hover:shadow-foreground/5"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-primary mb-1.5">
                    {project.client}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.project}
                  </h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-subtle group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1 shrink-0 ml-3"
                />
              </div>
              <p className="text-sm text-subtle mb-2">{project.context}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default DesignBridgeSection;
