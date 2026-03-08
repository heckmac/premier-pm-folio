import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profilePhoto from "@/assets/mario-ciardulli.jpeg";

const timeline = [
{
  role: "Chief Product Officer",
  company: "MDOTM",
  url: "https://mdotm.ai",
  period: "Jan 2024 → Present",
  description:
  "Fintech platform providing decision-intelligence for portfolio managers. Scale, modularization & product–market fit phase."
},
{
  role: "VP of Product",
  company: "MDOTM",
  url: "https://mdotm.eu",
  period: "Nov 2021 → Dec 2023",
  description:
  "Zero-to-one phase: MVP design, product vision, early foundations."
},
{
  role: "Co-Founder, Head of Product & CMO",
  company: "Mercurius",
  url: "https://mercurius.io",
  period: "Sep 2016 → Oct 2021",
  description:
  "AI-driven betting intelligence platform. Scaled to 4,000+ users, >$1M raised, acquired by Wall Street Football."
},
  {
    role: "Senior UX Designer",
    company: "Designit",
    period: "Jan 2017 → Nov 2017",
    description: "- Led strategic design and product discovery initiatives for complex, international client projects\n- Worked at the intersection of business strategy, user research, and experience design\n- Framed complex problem spaces and translated them into actionable product and service concepts\n- Collaborated with strategists, researchers, service designers, and technologists in multidisciplinary teams",
  },
  {
    role: "Interaction Designer",
    company: "Designit",
    period: "Jan 2014 → Dec 2016",
    description: "- Designed and delivered interaction and UX solutions across multiple client engagements\n- Worked across UX, UI, prototyping, and front‑end collaboration, ensuring high usability and interaction quality\n- Bridged design and technology through strong prototyping and implementation sensibility",
  },
  {
    role: "Interaction Designer",
    company: "ToDo",
    period: "Apr 2010 → Dec 2013"
  }];


const skillGroups = [
{
  label: "Product Leadership",
  skills: [
  "Product Strategy",
  "Product Vision",
  "Roadmapping",
  "OKRs",
  "Prioritization Frameworks",
  "Go-to-Market"]

},
{
  label: "Discovery & Research",
  skills: [
  "Product Discovery",
  "UX Research",
  "Jobs-to-Be-Done",
  "Hypothesis-Driven Development",
  "User Testing"]

},
{
  label: "Design & Systems",
  skills: [
  "UX/UI Design",
  "Service Design",
  "Design Thinking",
  "Information Architecture",
  "Design Systems"]

},
{
  label: "Collaboration & Delivery",
  skills: [
  "Stakeholder Management",
  "Engineering Collaboration",
  "Cross-functional Leadership",
  "Agile / Lean"]

},
{
  label: "Domain",
  skills: [
  "Fintech",
  "B2B SaaS",
  "Decision Intelligence",
  "0→1 & Scaling",
  "Platform Products"]

}];


const About = () =>
<div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Mario Ciardulli
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">
            Product Strategist
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mt-6 max-w-3xl leading-relaxed italic">
            "I turn complex systems into products people actually want to use —
            at the intersection of strategy, design, and engineering."
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Bio + Photo */}
    <section className="pb-20 lg:pb-28">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Photo placeholder */}
          <FadeIn className="lg:col-span-1">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
              <img
              src={profilePhoto}
              alt="Mario Ciardulli"
              className="w-full h-full object-cover object-top" />
            
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-6 text-foreground/85 text-base md:text-lg" style={{ lineHeight: 1.75 }}>
              <p>
                I'm a product strategist with a hands-on background in UX design and
                strategic design. Over the past 12+ years, I've worked on products
                ranging from zero-to-one MVPs to enterprise platforms — always at the
                same level: what should this product be, for whom, and why.
              </p>
              <p>
                I operate at the intersection of product vision, UX quality, and
                engineering reality. I work best in high-ambiguity environments, where
                the problem isn't yet well-defined and the solution requires judgment
                more than process. My instinct is to get close to the work — challenging
                design directions, co-creating with designers, aligning engineering on
                what actually matters — while keeping the full product system coherent.
              </p>
              <p>
                My foundation is in strategic design. Before moving into product
                management, I spent years at Designit working at the intersection of
                business strategy and experience — where every project started from a
                business problem, not a brief. That approach never left.
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>

    {/* Career Timeline */}
    <section className="pb-20 lg:pb-28">
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
          {timeline.map((item, i) =>
        <FadeIn key={i} delay={i * 0.05}>
              <div className="relative pl-8 border-l-2 border-primary/20 pb-[8px]">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs font-medium tracking-wider uppercase text-primary mb-1">
                  {item.period}
                </p>
                <h3 className="text-lg font-semibold text-foreground mx-0 mt-0 px-0">
                  {item.role}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.url ?
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-2">
                
                      {item.company}
                    </a> :

              item.company
              }
                </p>
                {item.description &&
            <p className="text-sm text-foreground/70 max-w-xl leading-relaxed my-0 py-0 pt-0 mt-[4px] pb-0">
                    {item.description}
                  </p>
            }



            }
              </div>
            </FadeIn>
        )}
        </div>

        {/* Education */}
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

    {/* Skills */}
    <section className="pb-20 lg:pb-28">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Skills & Expertise
          </h2>
        </FadeIn>

        {/* Design Bridge Block */}
        <FadeIn delay={0.05}>
          <div className="mb-12 rounded-2xl bg-primary/5 border border-primary/15 px-6 py-8 md:px-10 md:py-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary/70 mb-2">
              From Design to Product
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
              The method hasn't changed. The output has.
            </h3>
            <div className="space-y-4 text-foreground/75 text-[15px] md:text-base leading-relaxed max-w-3xl">
              <p>
                Before moving into product management, I spent years at Designit doing strategic design — working at the intersection of business strategy and experience, where every project started from a business problem and positioning came before a single screen.
              </p>
              <p>
                That foundation never left. I still work closely on UX — challenging directions, co-creating with designers, making sure the experience holds together from first principle to final interaction. What has changed is the perimeter: today I operate across the full product, from vision to roadmap to execution. The method is the same. The scope is wider.
              </p>
            </div>
            <Link
            to="/design"
            className="inline-flex items-center gap-1 text-primary hover:underline font-medium mt-6 text-sm">
            
              See my design work →
            </Link>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {skillGroups.map((group, i) =>
        <FadeIn key={i} delay={i * 0.05}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) =>
              <Badge
                key={skill}
                variant="secondary"
                className="bg-primary/10 text-primary border-transparent font-medium px-3 py-1 text-sm">
                
                      {skill}
                    </Badge>
              )}
                </div>
              </div>
            </FadeIn>
        )}
        </div>
      </div>
    </section>

    <Footer />
  </div>;


export default About;