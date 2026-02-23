import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, User } from "lucide-react";

const timeline = [
  {
    role: "Chief Product Officer",
    company: "MDOTM",
    url: "https://mdotm.ai",
    period: "Jan 2024 → Present",
    description:
      "Fintech platform providing decision-intelligence for portfolio managers. Scale, modularization & product–market fit phase.",
  },
  {
    role: "VP of Product",
    company: "MDOTM",
    url: "https://mdotm.eu",
    period: "Nov 2021 → Dec 2023",
    description:
      "Zero-to-one phase: MVP design, product vision, early foundations.",
  },
  {
    role: "Co-Founder, Head of Product & CMO",
    company: "Mercurius",
    url: "https://mercurius.io",
    period: "Sep 2016 → Oct 2021",
    description:
      "AI-driven betting intelligence platform. Scaled to 4,000+ users, >$1M raised, acquired by Wall Street Football.",
  },
  {
    role: "Senior UX Designer",
    company: "Designit",
    period: "Jan 2017 → Nov 2017",
  },
  {
    role: "Interaction Designer",
    company: "Designit",
    period: "Jan 2014 → Dec 2016",
  },
  {
    role: "Interaction Designer",
    company: "ToDo",
    period: "Apr 2010 → Dec 2013",
  },
];

const skillGroups = [
  {
    label: "Product Leadership",
    skills: [
      "Product Strategy",
      "Product Vision",
      "Roadmapping",
      "OKRs",
      "Prioritization Frameworks",
      "Go-to-Market",
    ],
  },
  {
    label: "Discovery & Research",
    skills: [
      "Product Discovery",
      "UX Research",
      "Jobs-to-Be-Done",
      "Hypothesis-Driven Development",
      "User Testing",
    ],
  },
  {
    label: "Design & Systems",
    skills: [
      "UX/UI Design",
      "Service Design",
      "Design Thinking",
      "Information Architecture",
      "Design Systems",
    ],
  },
  {
    label: "Collaboration & Delivery",
    skills: [
      "Stakeholder Management",
      "Engineering Collaboration",
      "Cross-functional Leadership",
      "Agile / Lean",
    ],
  },
  {
    label: "Domain",
    skills: [
      "Fintech",
      "B2B SaaS",
      "Decision Intelligence",
      "0→1 & Scaling",
      "Platform Products",
    ],
  },
];

const About = () => (
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
            Chief Product Officer
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
            <div className="aspect-[3/4] rounded-2xl bg-muted flex items-center justify-center">
              <User className="w-16 h-16 text-muted-foreground/30" />
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-6 text-foreground/85 text-base md:text-lg" style={{ lineHeight: 1.75 }}>
              <p>
                I'm a product leader with a hands-on background in UX design and
                product strategy. Over the past 12+ years, I've worked on products
                ranging from zero-to-one MVPs to scaling platforms — always with the
                same goal: making complex systems simple, usable, and commercially
                viable. Today I'm CPO at MDOTM, a fintech platform in the
                decision-intelligence space.
              </p>
              <p>
                My approach centers on high-ambiguity problems, where clarity and
                product judgment matter more than process. I work closely with
                engineering leadership on delivery outcomes and long-term
                sustainability, while keeping a strong focus on UX quality and system
                thinking. I define decision frameworks, guide discovery, and make sure
                product coherence holds across user experience, technology, and
                business constraints.
              </p>
              <p>
                My roots are in communication design — I hold a Master's from
                Politecnico di Milano — and that foundation shapes how I think about
                products: intentional, craft-driven, and never just functional. I've
                co-founded a company, led a $1M fundraising round, and scaled a
                platform to acquisition. I believe great products come from tight
                collaboration, intellectual honesty, and a genuine obsession with the
                problem space.
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
          {timeline.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="relative pl-8 pb-10 last:pb-0 border-l-2 border-primary/20">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs font-medium tracking-wider uppercase text-primary mb-1">
                  {item.period}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
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
                  <p className="text-sm text-foreground/70 mt-2 max-w-xl leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
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

        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-transparent font-medium px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
