import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const CaseStudy = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground capitalize">
              {slug?.replace(/-/g, " ")}
            </h1>
            <p className="text-muted-foreground mt-3">Full case study coming soon.</p>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudy;
