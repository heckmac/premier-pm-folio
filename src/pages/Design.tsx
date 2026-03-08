import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
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
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm text-subtle hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> About
          </Link>
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
                className="group block border-2 border-foreground bg-background overflow-hidden transition-colors duration-200"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight leading-snug group-hover:text-primary transition-colors">
                        {project.project}
                      </h3>
                      <p className="text-xs font-medium tracking-[0.1em] uppercase mt-1 opacity-60">
                        {project.client} · {project.context}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all mt-1 shrink-0 ml-3"
                    />
                  </div>
                  <p className="text-sm leading-relaxed mt-3 opacity-70">{project.outcome}</p>
                </div>
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
