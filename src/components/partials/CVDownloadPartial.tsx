import FadeIn from "@/components/FadeIn";
import PartialCTAs from "./PartialCTAs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CVDownloadPartial = () => (
  <section className="py-16 lg:py-20">
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Mario Ciardulli — CV
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-6">
          Download my full curriculum vitae with career details, education, and skills.
        </p>
        <a href="/cv_ciardulli.pdf" download>
          <Button variant="outline" size="lg" className="gap-2">
            <Download size={18} />
            Download CV (PDF)
          </Button>
        </a>
      </FadeIn>
    </div>
  </section>
);

export default CVDownloadPartial;
