import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

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

const Design = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Design</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Strategic design projects from my years at Designit — where every brief started from a business problem and positioning came before a single screen.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {designProjects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Link
                to={project.link}
                className="group block surface-elevated rounded-lg border divider p-6 transition-all hover:shadow-lg hover:shadow-foreground/5 h-full"
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
    <Footer />
  </div>
);

export default Design;
