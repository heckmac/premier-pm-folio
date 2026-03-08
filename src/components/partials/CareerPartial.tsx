import ReactMarkdown from "react-markdown";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { timeline } from "@/lib/careerTimeline";
const CareerPartial = () => (
  <section className="py-16 lg:py-20">
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
      <FadeIn>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Career
          </h2>
          <a href="/cv_ciardulli.pdf" download>
            <Button variant="outline" size="sm" className="gap-2">
              <Download size={16} />
              Download CV
            </Button>
          </a>
        </div>
      </FadeIn>

      <div className="space-y-0">
        {timeline.map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="relative pl-8 pb-[16px] last:pb-0 border-l-2 border-primary/20">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
              <p className="text-xs font-medium tracking-wider uppercase text-primary mb-1">
                {item.period}
              </p>
              <h3 className="text-lg font-semibold text-foreground mx-0 mt-0 px-0">
                {item.role}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors underline underline-offset-2"
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </p>
              {item.description && (
                <div className="prose-case-study prose-career mt-1 max-w-xl text-sm">
                  <ReactMarkdown>{item.description}</ReactMarkdown>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="mt-16 pt-10 border-t divider">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="pl-8 border-l-2 border-primary/20 relative">
            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
            <p className="text-xs font-medium tracking-wider uppercase text-primary mb-1">
              2005 – 2008
            </p>
            <h3 className="text-lg font-semibold text-foreground">
              Master Degree in Communication Design
            </h3>
            <p className="text-sm text-muted-foreground">
              Politecnico di Milano
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default CareerPartial;
