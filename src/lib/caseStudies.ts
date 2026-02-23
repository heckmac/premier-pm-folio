export interface CaseStudyData {
  slug: string;
  company: string;
  project: string;
  role: string;
  year: string;
  duration: string;
  team: string;
  tools: string[];
  heroTagline: string;
  context: string[];
  problem: string[];
  myRole: string[];
  process: { title: string; description: string }[];
  solution: string[];
  results: { value: string; label: string }[];
  quote?: { text: string; author: string; title: string };
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: "fintech-platform-redesign",
    company: "Meridian Finance",
    project: "Platform Redesign & Activation Overhaul",
    role: "VP of Product",
    year: "2023",
    duration: "8 months",
    team: "12 engineers, 3 designers, 2 data analysts",
    tools: ["Figma", "Amplitude", "Jira", "Looker", "Miro"],
    heroTagline:
      "Redesigned a legacy fintech platform to unlock €2M in new ARR and lift user activation by 34%.",
    context: [
      "Meridian Finance is a B2B fintech platform serving over 800 mid-market companies across Europe. The product had grown organically for five years, accumulating feature debt and a fragmented user experience that was hurting retention and expansion revenue.",
      "I joined as VP of Product to lead a cross-functional initiative to modernize the core platform, improve onboarding, and establish a scalable product operating model.",
    ],
    problem: [
      "New user activation had plateaued at 41%, with most drop-offs occurring within the first three sessions. Customer support tickets related to navigation and discoverability had increased 60% year-over-year.",
      "The existing information architecture was built around internal team structures rather than user workflows, making it nearly impossible for new customers to find value quickly.",
    ],
    myRole: [
      "I owned the product strategy end-to-end: from conducting the initial discovery research through to launch and post-launch iteration. I reported directly to the CEO and presented progress to the board quarterly.",
      "Day-to-day, I led a squad of 12 engineers, 3 designers, and 2 data analysts. I defined the roadmap, facilitated design sprints, and established a metrics framework tied to business outcomes.",
    ],
    process: [
      {
        title: "Discovery & Research",
        description:
          "Conducted 30+ user interviews, analyzed 6 months of product analytics, and mapped the full customer journey to identify the highest-impact friction points.",
      },
      {
        title: "Strategy & Prioritization",
        description:
          "Used an impact/effort matrix to prioritize initiatives. Aligned stakeholders around three strategic bets: simplified onboarding, role-based navigation, and proactive in-app guidance.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Ran two design sprints to validate concepts with real users. Iterated on high-fidelity prototypes in Figma, testing with 15 customers before engineering handoff.",
      },
      {
        title: "Build & Ship",
        description:
          "Delivered in three phased releases over 8 months. Each phase included A/B tests to measure impact before full rollout, reducing risk and building internal confidence.",
      },
    ],
    solution: [
      "We rebuilt the onboarding flow around a 'time-to-first-value' framework, reducing required setup steps from 14 to 5 and introducing contextual tooltips powered by usage patterns.",
      "The navigation was restructured around three core user personas, surfacing the most relevant features first. A new dashboard gave users an instant snapshot of their key metrics upon login.",
      "We also introduced a lightweight in-app education system that adapts based on user role and tenure, reducing support tickets by 45% within two months of launch.",
    ],
    results: [
      { value: "+34%", label: "User activation rate" },
      { value: "€2M", label: "New ARR within 6 months" },
      { value: "-45%", label: "Support ticket volume" },
      { value: "4.6→4.9", label: "App Store rating" },
    ],
    quote: {
      text: "Marco transformed our product organization. He brought clarity to a chaotic roadmap and delivered results that directly impacted our Series B narrative.",
      author: "Elena Richter",
      title: "CEO, Meridian Finance",
    },
  },
  {
    slug: "ai-analytics-zero-to-one",
    company: "Synthex AI",
    project: "AI Analytics Platform — 0→1",
    role: "Head of Product",
    year: "2022",
    duration: "14 months",
    team: "8 engineers, 2 designers, 1 ML engineer",
    tools: ["Linear", "Figma", "Mixpanel", "Notion", "dbt"],
    heroTagline:
      "Took an AI-powered analytics platform from concept to €1.2M ARR in 14 months.",
    context: [
      "Synthex AI was a seed-stage startup building an AI-powered analytics layer for e-commerce companies. When I joined, the founding team had a working ML model but no product, no users, and no go-to-market strategy.",
      "I was brought on as Head of Product to define the product vision, build the v1, and establish product-market fit.",
    ],
    problem: [
      "The founding team had deep technical expertise but lacked a clear understanding of which customer segment to target and what specific problem to solve first. Early conversations with potential users revealed conflicting needs.",
      "Without a focused value proposition, the team was building features reactively, leading to scope creep and a product that tried to do everything for everyone.",
    ],
    myRole: [
      "I led the full product lifecycle: customer discovery, value proposition design, roadmap definition, UX strategy, and go-to-market positioning. I worked directly with the CTO and reported to the board.",
      "I also hired and managed the design team, established the product development process, and represented the product to investors during the Series A fundraise.",
    ],
    process: [
      {
        title: "Customer Discovery",
        description:
          "Interviewed 50+ e-commerce operators to identify the sharpest pain point: understanding why conversion rates fluctuate, not just tracking them.",
      },
      {
        title: "Value Proposition Design",
        description:
          "Defined a focused ICP (mid-market DTC brands, €5-50M revenue) and crafted a positioning statement: 'The AI copilot that explains your conversion data.'",
      },
      {
        title: "MVP Definition & Build",
        description:
          "Scoped an opinionated MVP around three core use cases. Shipped v1 in 10 weeks with a small cross-functional squad using weekly sprints.",
      },
      {
        title: "Iteration & Scale",
        description:
          "Ran 40+ experiments in the first 6 months post-launch. Identified the 'aha moment' and optimized the onboarding to reach it within 8 minutes.",
      },
    ],
    solution: [
      "We launched a focused product that automatically surfaces the top drivers behind conversion changes, delivered as a daily digest with drill-down capabilities.",
      "The product was designed to feel like a smart colleague sending you insights, rather than a traditional dashboard. This narrative-first approach resonated strongly with non-technical operators.",
    ],
    results: [
      { value: "€1.2M", label: "ARR in 14 months" },
      { value: "92%", label: "Monthly retention" },
      { value: "180+", label: "Paying customers" },
      { value: "€8M", label: "Series A raised" },
    ],
    quote: {
      text: "Marco built our product from nothing. His ability to translate ambiguous market signals into a focused, lovable product was the key to our Series A.",
      author: "Liam Chen",
      title: "CTO & Co-Founder, Synthex AI",
    },
  },
  {
    slug: "marketplace-growth",
    company: "Novawork",
    project: "Marketplace Growth & Onboarding Redesign",
    role: "Senior Product Manager",
    year: "2020",
    duration: "12 months",
    team: "6 engineers, 2 designers, 1 growth analyst",
    tools: ["Figma", "Google Analytics", "Optimizely", "Hotjar", "Asana"],
    heroTagline:
      "Drove 3x growth in marketplace GMV through data-driven experimentation and onboarding redesign.",
    context: [
      "Novawork is a B2B marketplace connecting companies with vetted freelance professionals. With 15,000 registered freelancers and 2,000 active buyers, the platform had strong supply but struggled with demand-side activation and repeat usage.",
      "I was hired as Senior Product Manager to own the buyer experience and drive GMV growth.",
    ],
    problem: [
      "Only 23% of registered buyers completed their first transaction. Exit surveys and session recordings revealed that buyers were overwhelmed by choice and lacked confidence in freelancer quality.",
      "The matching algorithm was accurate but opaque — buyers didn't understand why certain freelancers were recommended, leading to low trust and high abandonment.",
    ],
    myRole: [
      "I owned the buyer-side product experience, including search, matching, onboarding, and post-hire feedback loops. I worked closely with the data team to build an experimentation culture.",
      "I also partnered with marketing to align product improvements with acquisition campaigns, ensuring new users landed in optimized experiences.",
    ],
    process: [
      {
        title: "Quantitative Analysis",
        description:
          "Built a conversion funnel dashboard and identified the three biggest drop-off points: profile browsing, shortlisting, and first message.",
      },
      {
        title: "Qualitative Research",
        description:
          "Conducted 20 buyer interviews and 50 session recording reviews to understand the emotional journey and trust barriers.",
      },
      {
        title: "Experimentation Program",
        description:
          "Launched a structured A/B testing program, running 25+ experiments over 12 months across onboarding, search, and matching.",
      },
      {
        title: "Iterative Shipping",
        description:
          "Shipped bi-weekly releases, each tied to a specific metric. Used a 'build-measure-learn' cadence with weekly growth reviews.",
      },
    ],
    solution: [
      "Redesigned the onboarding flow to capture buyer intent upfront (project type, budget, timeline) and deliver a curated shortlist of 5 freelancers within 60 seconds of signup.",
      "Added transparency features: match-score explanations, verified portfolio samples, and real-time availability indicators. These changes addressed the core trust gap.",
    ],
    results: [
      { value: "3x", label: "GMV growth in 12 months" },
      { value: "+58%", label: "Buyer activation rate" },
      { value: "-30%", label: "Time to first hire" },
      { value: "4.7★", label: "Buyer satisfaction (NPS 72)" },
    ],
    quote: {
      text: "Marco brought rigor and speed to our product team. His experimentation-driven approach transformed how we think about growth.",
      author: "Sara Lindqvist",
      title: "COO, Novawork",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudyData | undefined {
  const idx = caseStudies.findIndex((cs) => cs.slug === slug);
  if (idx === -1) return undefined;
  return caseStudies[(idx + 1) % caseStudies.length];
}
