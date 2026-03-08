export interface CaseStudyData {
  slug: string;
  company: string;
  project: string;
  role: string;
  year: string;
  /** One-line subtitle shown on cards, e.g. "Sphere · VP of Product · MDOTM · 2021–2023" */
  cardSubtitle: string;
  /** Whether this case study appears in the homepage featured section */
  featured: boolean;
  heroTagline: string;
  context: string[];
  problem: string[];
  positioning: string[];
  myRole: string[];
  strategy: { title: string; description: string }[];
  execution: string[];
  impact: string[];
  learnings: string[];
  highlightMetrics?: { value: string; label: string }[];
  impactCategories?: { category: string; metrics: { value: string; label: string }[] }[];
}

export const caseStudies: CaseStudyData[] = [
  {
  slug: "sphere-architectural-reset",
  company: "MDOTM",
  project: "Rebuilding a B2B Portfolio Optimization Platform for Institutional Investors",
  role: "VP of Product",
  year: "2021–2023",
  cardSubtitle: "Sphere · VP of Product · MDOTM · 2021–2023",
  featured: true,
  heroTagline:
    "Clients loved the vision. They couldn't use the product.",
  context: [
    "MDOTM is a fintech company that builds decision-intelligence tools for asset managers. Sphere, its core platform, helps portfolio managers optimize multi-asset portfolios using quantitative models.",
    "The original version was technically sophisticated — it could ingest a portfolio, apply a market view, and generate an optimized allocation.",
  ],
  problem: [
    "Early clients were impressed by the vision. But when they tried to use it, they couldn't. The product reflected internal model logic, not how portfolio managers actually define and manage mandates.",
    "Beta clients didn't renew autonomously. The product required active retention effort. Clients understood the value of the optimization. But they couldn't map their actual mandates into the system — asset class structures didn't match how they thought, constraints were limited to risk targets, and there was no way to express the rules that governed their real portfolios. The product needed to be rebuilt around professional workflows, not patched.",
  ],
  positioning: [
  "The product needed to shift from a model-centric demonstration of MDOTM's methodology to a process-centric tool that fit inside real investment workflows.",
  "The objective was not to add capabilities but to restructure the product around how professionals actually define mandates — and to create the technical and commercial foundations that would allow it to evolve from there.",
],
  myRole: [
    "Owned product direction for the architectural redesign. Diagnosed structural misalignment, abstracted the investment process into a product blueprint, and made the call to pursue a full reset rather than incremental fixes.",
    "Led discovery with the Chief Investment Officer and Customer Success to map how portfolio managers actually work. Coordinated across Engineering and R&D during implementation to ensure execution aligned with the blueprint.",
    "Acted as final decision-maker on scope, priorities, and phasing throughout.",
  ],
  strategy: [
    {
      title: "Abstracted the investment process into a product blueprint",
      description:
        "Mapped how professionals actually define mandates versus how the engine had structured decisions. The output was a phased investment backbone — define universe, define mandate structure, apply constraints, express market view — that became the shared reference for the rebuild. Visualized through high-fidelity design concepts before implementation, so R&D and business could align on direction before writing code.",
    },
    {
      title: "Rebuilt the configurator around mandate phases",
      description:
        "Redesigned the portfolio configurator to follow real workflow logic. Restructured optimization pipelines. Extended the risk model to support a coherent asset class hierarchy. Introduced a constraint validation layer so users could express any logic, with guided feedback when combinations were mathematically infeasible.",
    },
    {
      title: "Iterated based on real usage gaps",
      description:
        "As clients used the rebuilt configurator, recurring gaps emerged — missing asset classes, incomplete constraint types. Each gap was addressed incrementally. Used KANO-based prioritization workshops to impose discipline under continuous acquisition pressure from the business.",
    },
    {
      title: "Connected the product to client systems",
      description:
        "Integrated with external portfolio management systems so portfolios could flow in automatically. Made Portfolio Studio available as a standalone module, decoupled from MDOTM's investment methodology. The product stopped assuming it was the origin of all data.",
    },
  ],
  execution: [
    "Investment process abstracted into a phased product blueprint",
    "Blueprint validated through high-fidelity design before implementation",
    "Portfolio configurator redesigned around mandate phases with modular extensibility",
    "Risk model extended to support coherent asset class hierarchy",
    "Constraint validation layer introduced as product-level feasibility framework",
    "KANO-based prioritization workshops introduced to manage roadmap under acquisition pressure",
    "PMS integration built with import/export aligned to client templates",
    "Portfolio Studio decoupled as standalone module",
  ],
  impact: [
    "Clients could simulate realistic multi-asset mandates for the first time",
    "Asset class hierarchy became coherent and navigable",
    "Portfolio, allocation, and operative constraints separated as distinct concepts",
    "Commercial conversations shifted from pitching vision to simulating real mandates",
    "Architecture enabled continuous expansion without structural rewrites",
    "Product became commercially separable from MDOTM's methodology",
  ],
  learnings: [
    "Structural incoherence can't be fixed with features — it requires architectural intervention.",
    "Reversing the relationship between UX and engine is a product decision, not a technical one.",
    "Building for extensibility from the first reset is what makes future iteration possible without rebuilding.",
  ],
},{
  slug: "sphere-infrastructure-scaling",
  company: "MDOTM",
  project: "Scaling an Enterprise Fintech Platform to Multi-Portfolio Operations",
  role: "Chief Product Officer",
  year: "2023–2025",
  cardSubtitle: "Sphere · CPO · MDOTM · 2023–2025",
  featured: true,
  heroTagline:
    "From a tool people visit to infrastructure they operate inside.",
  context: [
    "MDOTM is a fintech company that builds decision-intelligence tools for asset managers. Sphere, its core platform, helps portfolio managers optimize multi-asset portfolios using quantitative models.",
    "After a major architectural redesign, Sphere had become structurally usable. Clients could express real mandates and connect existing portfolios via PMS integration.",
  ],
  problem: [
    "The foundations for iteration were in place. But usability wasn't enough.",
    "Clients used Sphere when they chose to — not because their operations depended on it. The product didn't scale to how investment teams actually work: portfolios and market views are managed collaboratively, across many mandates. It couldn't represent how institutional portfolios are really structured — sleeves, hybrid instruments, bespoke taxonomies. And it remained disconnected from the systems clients already operated inside.",],
  positioning: [
  "The strategic direction was to close the distance between the product and client operations — layer by layer. Not by adding features, but by making Sphere progressively more compatible with how institutional investment teams actually work.",
  "Each intervention targeted a specific layer: organizational scale, data fidelity, or system connectivity. The goal was to make Sphere the environment clients operated inside, not a tool they visited occasionally.",
],
  myRole: [
    "Owned product direction for the embedability strategy. Identified structural gaps, sequenced interventions, and managed the trade-off between feature expansion and integration depth at each phase.",
    "Worked with Engineering, Customer Success, and the Chief Investment Officer to align product evolution around client operational reality.",
    "Restructured Customer Success as a product intelligence function — trained to decode underlying user intent, connect qualitative observations to backlog context, and participate in prioritization workshops.",
  ],
  strategy: [
    {
      title: "Scaled the product for team-based workflows",
      description:
        "Introduced a governance layer — shared objects with differentiated access rights across read, edit, and ownership. Built the Bulk Analysis Tool for fleet-level visibility: aggregated exposure views, cross-portfolio metrics, filtering by strategy or desk. Extended with Bulk Actions for fleet-level operations, not just visibility.",
    },
    {
      title: "Aligned the data model to institutional reality",
      description:
        "Added nested portfolio support to reflect sleeve-based mandate architecture. Introduced hybrid portfolio composition for mixed instrument and index structures. Extended the platform to absorb client data on their terms — custom instruments, uploaded price series, bonds, cash as first-class components.",
    },
    {
      title: "Connected to execution systems",
      description:
        "Integrated with OMS systems to create a complete cycle: proposal generated in Sphere, sent to execution, positions and performance data returned. Distinguished between paper and live trading portfolios.",
    },
    {
      title: "Refactored APIs around real integration use cases",
      description:
        "Sphere's internal APIs had been built for UI consumption, not system-to-system communication. Each client integration request drove progressive API refactoring. Over time, shifted the team's default to API-first: new capabilities designed with the interface as one consumer among many.",
    },
  ],
  execution: [
    "Customer Success restructured as product intelligence function with feedback database linked to backlog",
    "Recurring prioritization rituals established with dual-track structure",
    "Governance layer introduced across portfolios, universes, market views, and benchmarks",
    "Bulk Analysis Tool launched for fleet-level cross-portfolio visibility",
    "Bulk Actions introduced for fleet-level operations with inclusion/exclusion reporting",
    "Nested portfolio support added for institutional sleeve-based architecture",
    "Hybrid portfolio composition introduced for mixed instrument and index structures",
    "Client data support extended: custom instruments, price series, bonds, cash management",
    "OMS integration implemented with UUID-based portfolio identity across systems",
    "Internal APIs progressively refactored and exposed as public APIs",
  ],
  impact: [
    "Team-based workflows replaced individual usage, enabling institutional-scale adoption",
    "Fleet-level visibility enabled pattern identification across hundreds of portfolios",
    "Nested and hybrid structures let clients reflect real mandate architecture for the first time",
    "Client data — instruments, indices, taxonomies — became native to the platform",
    "Full cycle from proposal to execution to performance monitoring became operable in one environment",
    "Clients began articulating their own use cases for Sphere without prompting",
  ],
  learnings: [
    "A product becomes infrastructure when it eliminates every layer of distance between itself and the client's operational reality.",
    "Flat data models are invisible constraints. They don't surface as bugs but as ceilings on adoption.",
    "Designing API-first from the start reduces integration cost and produces a more systemically coherent product.",
  ],
},{
  slug: "storyfolio",
  company: "MDOTM",
  project: "AI-Powered Reporting for Wealth Management",
  role: "Chief Product Officer",
  year: "2024–2025",
  cardSubtitle: "Storyfolio · CPO · MDOTM · 2024–2025",
  featured: true,
  heroTagline:
    "From 2 hours to 2 minutes per portfolio.",
  context: [
    "MDOTM is a fintech company that builds decision-intelligence tools for asset managers. Sphere, its core platform, helps portfolio managers optimize multi-asset portfolios using quantitative models.",
    "Sphere's analytical engine had become increasingly sophisticated. Non-linear optimization generated advanced portfolio proposals. The quality was strong, but communication lagged behind.", 
  ],
  problem: [
    "Wealth managers weren't struggling to generate reports — competitors already offered flexible reporting tools. The real challenge was producing coherent, decision-aligned narratives that explained why the portfolio looked the way it did. Existing solutions automated layout and formatting. They did not generate content. The burden of interpretation remained entirely on the user.",
  ],
  positioning: [
  "Storyfolio was positioned not as a reporting tool, but as an intelligence layer. While competitors focused on layout flexibility and design customization, we focused on generating content — narratives coherent with portfolio decisions and optimization logic.",
  "The ambition was to move from automated documents to structured investment intelligence.",
],
  myRole: [
    "Owned product direction for the narrative explanation domain. Responsible for problem framing, validation approach, and productization strategy.",
    "Worked with a focused cross-functional team: Head of Mission Control (content logic owner), one Product Manager, one Backend Engineer, one Frontend Engineer, and a Designer.",
    "Acted as decision-maker on scope, guardrails, and sequencing.",
  ],
  strategy: [
    {
      title: "Validated with a static MVP inside Portfolio Studio",
      description:
        "Released a single AI-generated comment directly inside Portfolio Studio. Generated from curated inputs, designed to support one primary reporting scenario. Validated whether structured narrative support increased clarity and perceived value in real client workflows.",
    },
    {
      title: "Iterated on gaps and introduced reliability guardrails",
      description:
        "As adoption grew, feedback revealed recurring gaps: missing explanations for specific moves, inconsistent tone, overly generic language. Refined prompt engineering to ensure zero hallucinations — critical in a financial context where even small inaccuracies undermine trust. Optimized for reliability, not generative creativity.",
    },
    {
      title: "Productized as a configurable capability",
      description:
        "Once narrative structures stabilized and reliability reached acceptable thresholds, reframed explanation from a static output to a configurable capability. Introduced Builder and Editor tools to generate multiple variants, adapt tone and depth to different contexts, and give users control over structure and emphasis.",
    },
  ],
  execution: [
    "Defined reusable narrative components aligned with portfolio logic",
    "Built data-aware integration to ensure explanations reflected actual portfolio drivers",
    "Refined guardrails incrementally to prevent factual inconsistencies",
    "Introduced bulk generation workflows for recurring reporting cycles",
  ],
  impact: [
    "~50% increase in portfolio adoption following introduction of structured narrative support",
    "Mass reporting time reduced from ~2 hours to ~2 minutes per portfolio",
    "More consistent narrative quality across hundreds of portfolios",
    "Reduced cognitive load for wealth managers",
    "Closed Sphere's explainability gap — advanced decisions became communicable and therefore usable",
  ],
  learnings: [
    "Explanation is a product capability, not a reporting add-on.",
    "Reliability and financial correctness must precede scale in AI-driven communication tools.",
    "Competitive differentiation can come from intelligence, not interface flexibility.",
  ],
},
{
  slug: "mercurius",
  company: "Mercurius",
  project: "Building an AI-Driven Sports Betting Platform Toward a Quantitative Fund",
  role: "Co-Founder, Head of Product",
  year: "2017–2021",
  cardSubtitle: "Mercurius · Co-Founder · 2017–2021",
  featured: true,
  heroTagline:
    "Turned sports betting into an investment-like activity — for 4,000+ users managing $1.4M in capital.",
  impactCategories: [
    {
      category: "Advisor",
      metrics: [
        { value: "3,000+", label: "Accounts" },
        { value: "15,000+", label: "Signals used" },
      ],
    },
    {
      category: "Tradr",
      metrics: [
        { value: "€1.2M+", label: "Capital deployed" },
        { value: "~€5M", label: "Traded volume" },
      ],
    },
  ],
  context: [
    "Mercurius was a startup I co-founded in 2017 to turn sports betting into an alternative asset class. The thesis was quantitative: systematic, data-driven strategies could generate uncorrelated returns — and the right technology could make this accessible to individuals who thought like investors rather than gamblers.",
    "The end goal was always a fund. But the regulatory complexity made it unreachable in the short term. Rather than waiting, we chose to advance by building the closest legal approximation at each stage — validating market demand, model performance, and regulatory viability in sequence. Each product phase had a specific job. Each job had a specific metric.",
    "The company scaled to 4,000+ users, €1.2M+ in deployed capital, raised over €1M, and was acquired by Wall Street Football.",
  ],
  problem: [],
  positioning: [
    "We built two products in sequence, each optimized for a different north star.",
    "Advisor was a subscription signal service. Its job was to prove market demand and model credibility. North star: MRR. Health metric: signal engagement — how many betting recommendations a user actually acted on per week.",
    "Tradr was a fund approximation — automated execution, capital deployed, performance tracked against a high-watermark model. North star: AUM. MRR was structurally irrelevant here. Trust was expressed in deployed capital, not subscription renewals.",
    "Advisor also served as the geographic funnel for Tradr. The signup flow detected the user's country and routed them to Tradr where Betfair was legally available.",
  ],
  myRole: [
    "Co-founder with end-to-end ownership of product strategy, UX design, front-end development, marketing, and customer operations.",
    "Defined the metric architecture for both products. Designed acquisition and activation systems. Managed analytics infrastructure. Led the BD work that unlocked the Betfair partnership.",
  ],
  strategy: [
    {
      title: "Advisor: Validated market demand and model credibility",
      description:
        "Advisor surfaced betting signals — specific opportunities with odds and suggested stake — which users placed manually. Every strategy carried a KIID with realized and ex-ante metrics. Signal engagement was the leading indicator: a user who subscribed but didn't act was a churn risk invisible in revenue until too late. Built buyer personas through 50+ interviews, iterated over four years. Persona-aligned content drove SEO to first-page rankings across primary topic clusters — 30% of qualified traffic came from organic search. Reached 3,000+ accounts and 15,000+ signals used.",
    },
    {
      title: "Tradr: Built a legal fund approximation with automated execution",
      description:
        "Transitioning to Tradr required solving regulatory, partnership, and technical preconditions before building anything. Coordinated country-by-country legal analysis across five markets. Betfair was the only platform that satisfied all requirements: exchange marketplace, licensing framework, and APIs for automated execution — with capital remaining in the user's hands. Six months of BD work unlocked the partnership. Key framing: because we operated on the exchange, clients bet against other bettors, not against Betfair. Produced a service design blueprint as the alignment tool across product, engineering, and legal.",
    },
    {
      title: "Tradr: Optimized for capital stability, not peak returns",
      description:
        "Pricing followed fund logic: management fee on AUM plus performance fee above a high-watermark. The optimization target was capital stability — high drawdowns triggered withdrawals. We chose lower maximum drawdown over peak returns because the real value of a systematic strategy only expresses over six to twelve months. Activation required five sequential steps with real capital commitment. Rather than simplifying, we supported each step through continuous A/B testing and Hubspot-driven re-engagement. Once activated, an engagement program — webinars, model updates, performance communications — operated as AUM retention infrastructure, calibrated to user behavior during drawdown periods.",
    },
  ],
  execution: [
    "Defined separate north star metrics for each product — MRR for Advisor, AUM for Tradr",
    "Designed signal engagement tracking as Advisor's leading retention indicator",
    "Built buyer personas through 50+ interviews, iterated across four years",
    "Achieved first-page SEO rankings across primary topic clusters; organic search drove 30% of qualified traffic",
    "Designed signup flow with country detection to route users to Tradr where legally available",
    "Coordinated country-by-country legal analysis across five target markets",
    "Led six months of BD work to establish the Betfair partnership",
    "Produced service design blueprint to align product, engineering, and legal stakeholders",
    "Instrumented full Tradr activation funnel with continuous A/B testing at each drop-off point",
    "Integrated Hubspot across all touchpoints for cross-product tracking and re-engagement",
    "Operated engagement program calibrated to AUM retention during drawdown periods",
  ],
  impact: [
    "Scaled to 4,000+ users across two products",
    "€1.2M+ capital deployed through automated strategies",
    "~€5M total traded volume",
    "30% of qualified traffic from organic search through persona-driven content strategy",
    "Raised €1M+ in funding",
    "Acquired by Wall Street Football",
  ],
  learnings: [
    "Constraints are inputs to the strategy, not obstacles. The Betfair partnership, legal scoping, and geographic phasing were direct consequences of understanding the constraint map before committing to the roadmap.",
    "The investment strategies were the real product — not the interface. A high-drawdown period wasn't a UX problem that better copy could solve. Managing user trust during stressful periods was a product problem that had nothing to do with the front end.",
    "In an automated product, engagement is retention infrastructure. When users don't interact daily, the relationship is maintained entirely through communication — calibrated to behavioral signals, not reach.",
  ],
},
];

export function getFeaturedCaseStudies(): CaseStudyData[] {
  return caseStudies.filter((cs) => cs.featured);
}

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudyData | undefined {
  const idx = caseStudies.findIndex((cs) => cs.slug === slug);
  if (idx === -1) return undefined;
  return caseStudies[(idx + 1) % caseStudies.length];
}
