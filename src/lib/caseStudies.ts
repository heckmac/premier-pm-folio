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
    "The original version was technically sophisticated — it could ingest a portfolio, apply a market view, and generate an optimized allocation. Early clients were impressed by the vision. But when they tried to use it, they couldn't. The product reflected internal model logic, not how portfolio managers actually define and manage mandates.",
    "Beta clients didn't renew autonomously. The product required active retention effort. Analytical depth wasn't translating into operational dependency. Incremental improvements would have preserved the incoherence. The product required an architectural reset.",
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
},
  {
    slug: "sphere-investment-infrastructure",
    company: "MDOTM",
    project: "Title: Scaling an Enterprise Fintech Platform to Multi-Portfolio Operations",
    role: "CPO",
    year: "2023–2025",
    cardSubtitle: "Sphere · CPO · MDOTM · 2023–2025",
    featured: true,
    heroTagline:
      "Closed every layer of distance between Sphere and institutional operational reality — organizational, structural, data and systemic — transforming the platform from a tool professionals visit into infrastructure they operate inside.",
    context: [
      "MDOTM is a fintech company that builds decision-intelligence tools for asset managers. Sphere, its core platform, helps portfolio managers optimize multi-asset portfolios using quantitative models.",
"After a major architectural redesign, Sphere had become structurally usable. Clients could express real mandates and connect existing portfolios via PMS integration. The foundations for iteration were in place.",
"But usability wasn't enough. Clients used Sphere when they chose to — not because their operations depended on it. The product didn't scale to how investment teams actually work: portfolios and market views are managed collaboratively, across many mandates. It couldn't represent how institutional portfolios are really structured — sleeves, hybrid instruments, bespoke taxonomies. And it remained disconnected from the systems clients already operated inside.",
"Each layer of distance was a reason not to depend on it.",
    ],
    problem: [
      "Usability was a starting point, not a destination. Clients were using Sphere when they chose to — not because their daily operations depended on it.",
      "The gap between a tool professionals visit and infrastructure they operate inside is not closed by a single intervention. It is closed by progressively eliminating the distance between the product and the client's operational reality — at every layer.",
      "That distance showed up in three ways. Sphere didn't scale to how investment teams actually work — portfolios, market views and reference data are owned and managed collaboratively, across many mandates simultaneously. It didn't accurately represent how real portfolios are structured — institutional mandates are composed of sleeves, built from hybrid combinations of instruments and indices. And it remained disconnected from the data environments and execution systems clients already operated inside.",
    ],
    positioning: [
      "The strategic direction was to close that distance, layer by layer — not by adding features, but by making Sphere progressively more compatible with how institutional investment operations actually work.",
    ],
    myRole: [
      "Product direction over the embedability strategy. Responsible for identifying the structural gaps, sequencing interventions and managing the trade-off between feature expansion and integration depth at each phase.",
      "Worked with Engineering, Customer Success and the CIRO to align product evolution around client operational reality. Expanded product signal capacity by restructuring Customer Success as a product intelligence function — trained to decode underlying user intent rather than transcribe feature requests, connect qualitative observations to backlog context, and participate in prioritization workshops. Product intelligence grew without growing the product team.",
    ],
    strategy: [
      {
        title: "Scaling the Operation",
        description:
          "The first layer of distance was organizational and operational scale. A governance layer was introduced — shared objects with differentiated access rights across read, edit and ownership. This was a prerequisite for institutional use. Scale also meant managing hundreds of portfolios simultaneously. The Bulk Analysis Tool was introduced as MVP: aggregated exposure views, cross-portfolio metrics, filtering by strategy, desk or channel. Bulk Actions extended the same logic in the opposite direction — enabling fleet-level operations with clear inclusion and exclusion reporting.",
      },
      {
        title: "Aligning to Client Reality",
        description:
          "The second layer was fidelity. Institutional mandates are composed of sleeves — discrete sub-portfolios each governed by its own strategy and risk profile, often built using hybrid combinations of instruments and indices. Nested portfolio support and hybrid portfolio composition corrected foundational modeling assumptions. The data assumption was equally limiting — real client portfolios contained bonds, custom instruments, proprietary indices and bespoke taxonomies. The platform was extended to absorb data on client terms: custom instruments with client-defined attributes, price series uploaded directly, cash as a first-class portfolio component.",
      },
      {
        title: "Connecting to the Execution Loop",
        description:
          "Sphere remained a place where decisions were made but not carried through. Integration with OMS systems introduced a complete cycle: proposal generated in Sphere, sent to execution, executed positions and performance data returned. The path surfaced an architectural lesson — Sphere's internal APIs had been built for UI consumption, not system-to-system communication. Progressive API refactoring driven by real client use cases shifted the team's default orientation to API-first. Integration cost dropped, adoption accelerated, and the product became more systemically coherent.",
      },
    ],
    execution: [
      "Customer Success restructured as a product intelligence function with dedicated feedback database linked to backlog epics",
      "Recurring prioritization rituals established with dual-track structure balancing tactical and strategic roadmap",
      "Governance layer introduced across portfolios, universes, market views and benchmarks",
      "Bulk Analysis Tool introduced as MVP for fleet-level cross-portfolio visibility and metric aggregation",
      "Bulk Actions introduced to enable fleet-level operations with inclusion/exclusion reporting",
      "Nested portfolio support introduced to reflect institutional sleeve-based portfolio architecture",
      "Hybrid portfolio composition introduced to support mixed instrument and index structures",
      "Client-driven data support introduced: custom instruments, uploaded price series, bond integration, cash management",
      "OMS integration implemented with UUID-based portfolio identity across systems",
      "Internal APIs progressively refactored and exposed as public APIs",
    ],
    impact: [
      "Team-based workflows replaced individual usage, enabling institutional-scale adoption",
      "Fleet-level visibility enabled identification of dispersion and priority interventions across hundreds of portfolios",
      "Nested and hybrid portfolio structures enabled clients to reflect real mandate architecture inside Sphere for the first time",
      "Client data — instruments, indices, taxonomies — became native to the platform rather than exceptions to it",
      "The full cycle from portfolio proposal to execution to performance monitoring became operable within a single environment",
      "Commercial positioning sharpened as clients began articulating their own use cases for Sphere without prompting",
    ],
    learnings: [
      "A product becomes infrastructure when it eliminates every layer of distance between itself and the client's operational reality — organizational, structural, data and systemic.",
      "Flat data models are invisible constraints. They don't surface as bugs but as ceilings on adoption, only visible when clients try to reflect their real operational structure inside the product.",
      "Building APIs reactively to support integrations is expensive and produces fragile connections. Designing API-first from the start reduces integration cost, accelerates adoption and produces a more systemically coherent product.",
    ],
  },
  {
    slug: "storyfolio",
    company: "MDOTM · Sphere",
    project: "Productizing Narrative Explanation for Investment Decisions",
    role: "CPO",
    year: "2024–2025",
    cardSubtitle: "Storyfolio · CPO · MDOTM · 2024–2025",
    featured: true,
    heroTagline:
      "Introduced an AI-driven narrative layer that transformed portfolio logic into reliable, decision-consistent explanations — cutting mass reporting time from ~2 hours to ~2 minutes per portfolio.",
    highlightMetrics: [
      { value: "~50%", label: "Increase in portfolio adoption" },
      { value: "~2h → ~2min", label: "Mass reporting time per portfolio" },
    ],
    context: [
      "MDOTM is a fintech company that builds decision-intelligence tools for asset managers. Sphere, its core platform, helps portfolio managers optimize multi-asset portfolios using quantitative models.",
"Sphere's analytical engine had become increasingly sophisticated. Non-linear optimization generated advanced portfolio proposals. The quality was strong, but communication lagged behind.",
"Wealth managers weren't struggling to generate reports — competitors already offered flexible reporting tools. The real challenge was producing coherent, decision-aligned narratives that explained why the portfolio looked the way it did. Existing solutions automated layout and formatting. They did not generate content. The burden of interpretation remained entirely on the user.",
    ],
    problem: [
      "The first signal was internal: Portfolio Studio could generate high-quality investment decisions, but there was no structured explanation layer to make those decisions consistently communicable.",
      "As we examined this gap more closely, a broader market pattern became evident. Wealth managers were not struggling to generate reports — most competitors already offered flexible and visually polished reporting tools. The real challenge was producing coherent, decision-aligned narratives.",
      "Existing solutions automated layout and formatting. They did not generate content. The burden of interpretation and storytelling remained entirely on the user.",
    ],
    positioning: [
      "Storyfolio was intentionally positioned not as a reporting tool, but as an intelligence layer.",
      "While competitors focused on report flexibility and design customization, Storyfolio focused on coherence with underlying portfolio decisions, alignment with portfolio movements and optimization logic, and content generation rather than layout automation.",
      "The ambition was to move from automated documents to structured investment intelligence.",
    ],
    myRole: [
      "Product direction and judgment over the narrative domain. Responsible for problem framing, validation approach and productization strategy.",
      "Worked with a focused cross-functional team including the Head of Mission Control (content and abstraction logic owner), a Product Manager, one Backend Engineer, one Frontend Engineer and a Designer.",
      "Acted as decision maker on scope, guardrails and sequencing.",
    ],
    strategy: [
      {
        title: "Static MVP (Feature Inside Portfolio Studio)",
        description:
          "A single static comment was released directly inside Portfolio Studio. It was generated from curated inputs and designed to support one primary reporting scenario. The objective was simple: validate whether structured narrative support increased clarity and perceived value in real client workflows. Validation happened through real usage — via the operations team presenting the feature to wealth managers and collecting feedback from actual client interactions.",
      },
      {
        title: "Iteration, Gap-Filling and Guardrails",
        description:
          "As adoption grew, feedback revealed recurring gaps: missing explanations for specific portfolio moves, inconsistent tone across different contexts, overly generic language in certain scenarios. The comment evolved incrementally. Prompt engineering techniques were refined to introduce guardrails and ensure zero hallucinations — critical in a financial context where even small inaccuracies could undermine trust. The optimization variable was reliability, not generative creativity. This phase followed a tight loop: collect feedback → adjust narrative logic → test in real client-facing contexts.",
      },
      {
        title: "Productization as a Configurable Capability",
        description:
          "Once narrative structures stabilized and reliability reached acceptable thresholds, explanation was reframed from a static output to a configurable capability. Builder and Editor tools were introduced to generate multiple narrative variants, adapt tone and depth to different reporting contexts, and allow user control over structure and emphasis. Explanation became a structured product domain embedded in Sphere, rather than a single AI-powered feature.",
      },
    ],
    execution: [
      "Definition of reusable narrative components aligned with portfolio logic",
      "Data-aware integration to ensure explanations reflected actual portfolio drivers",
      "Incremental guardrail refinement to prevent factual inconsistencies",
      "Bulk generation workflows for recurring reporting cycles",
    ],
    impact: [
      "~50% increase in portfolio adoption following introduction of structured narrative support",
      "Reduction of mass reporting time from ~2 hours to ~2 minutes per portfolio",
      "More consistent narrative quality across hundreds of portfolios",
      "Reduced cognitive load for wealth managers",
      "Closed Sphere's explainability gap, making advanced portfolio decisions communicable and therefore usable",
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
    project: "Building Toward a Fund You Cannot Yet Build",
    role: "Co-Founder",
    year: "2017–2021",
    cardSubtitle: "Mercurius · Co-Founder · 2017–2021",
    featured: true,
    heroTagline:
      "Co-founded a startup that turned sports betting into an alternative asset class — advancing toward a fund through sequential product approximations, each with its own metric architecture, legal constraints, and validation objective.",
    impactCategories: [
      {
        category: "Advisor",
        metrics: [
          { value: "3,000+", label: "Accounts on Advisor" },
          { value: "15,000+", label: "Unique signals used" },
        ],
      },
      {
        category: "Tradr",
        metrics: [
          { value: "€1.2M+", label: "Capital deployed by users" },
          { value: "~€5M", label: "Total traded volumes" },
        ],
      },
    ],
    context: [
      "Mercurius was a startup I co-founded in 2017 with the ambition of turning sports betting into an alternative asset class. The thesis was quantitative: systematic, data-driven strategies could generate uncorrelated returns, and the right technology could make this accessible to individuals who thought like investors rather than gamblers.",
      "The end goal was always a fund. But the regulatory complexity of building an investment vehicle made it unreachable in the short term. Rather than waiting for conditions to align, we chose to advance by building the closest legal approximation at each stage — validating market demand, model performance, technology reliability, and regulatory viability in sequence. Each product phase had a specific job. Each job had a specific metric.",
      "As co-founder, I owned product, design, front-end development, marketing, and customer operations across the full lifecycle of the company, from first concept to fundraising and acquisition.",
    ],
    problem: [
      "Building toward a fund through consumer products creates a sequencing problem most startups ignore: the metric that proves your current phase is working is almost never the metric that will prove the next one. Use the wrong metric and you either move on too early or stay too long.",
      "The regulatory dimension compounded this. A fund was off the table not because we lacked the ambition but because the legal infrastructure required — licensing, capital requirements, jurisdictional clearance across multiple European markets — was incompatible with our stage and timeline. Every decision about what to build next was therefore also a decision about what was legally buildable, with whom, and where.",
      "The problem was not what to make. The problem was how to advance systematically toward an objective that couldn't be reached directly, in a space with no established playbook, measuring progress with metrics specific to each approximation — not to the destination.",
    ],
    positioning: [
      "The optimization variable shifted at each phase, deliberately and necessarily.",
      "Advisor was a subscription signal service. Its job was to prove market demand and model credibility. The north star was MRR, with two sub-metrics: signups (acquisition) and signal engagement per week — the number of betting recommendations a user actually added to their tracked portfolio (retention and trust signal).",
      "Tradr was a fund approximation — capital deployed, strategies executed automatically, performance tracked against a high-watermark model. Its north star was AUM. MRR was structurally irrelevant here: the depth of trust was the signal, and trust was expressed in deployed capital.",
      "Advisor was also designed as the top of a geographic funnel for Tradr. The signup flow detected the user's country and routed them to Tradr where Betfair was available — Advisor could be sold anywhere, Tradr only where the legal conditions were met.",
    ],
    myRole: [
      "Co-founder with end-to-end ownership of product strategy, UX design, front-end development, content, marketing, and customer operations. I defined the metric architecture for both products, designed the acquisition and activation systems, managed the analytics infrastructure, and contributed to the commercial and regulatory work that unlocked Tradr — including the Betfair partnership.",
    ],
    strategy: [
      {
        title: "Advisor: Proving Market and Model",
        description:
          "Advisor surfaced betting signals — specific opportunities with odds and suggested stake — which users placed manually. The product tracked cumulative ROI against each strategy's declared risk/return profile, with every strategy carrying a KIID of realized and ex-ante metrics. The north star was MRR, but signal engagement was the metric that mattered for health: a user who subscribed but didn't act on signals was a churn risk invisible in revenue until it was too late. Acquisition was built around buyer personas developed through 50+ interviews and iterated across four years — persona-aligned content drove SEO to first-page rankings across all primary topic clusters, generating 30% of qualified traffic from organic search. Advisor reached 3,000+ accounts and 15,000+ signals used, and gave us the model performance data at scale needed to justify automating execution.",
      },
      {
        title: "Tradr: A Step Closer to the Fund Experience",
        description:
          "The transition to Tradr required resolving a set of preconditions before anything could be built. We coordinated country-by-country legal analysis across five target markets with specialist advisors — prioritizing Italy, UK, Netherlands, Germany, and Spain. Betfair was the only platform that satisfied all three requirements simultaneously: a betting exchange marketplace for partner apps, their own licensing framework, and APIs for automated execution on a user's behalf — with money and legal decision-making remaining in the client's hands. Getting the partnership took six months of BD work. The key framing that unlocked it: because we operated on the exchange, our clients bet against other bettors — not against Betfair. A service design blueprint was produced as the critical alignment tool across product, engineering, and legal stakeholders.",
      },
      {
        title: "Tradr: Pricing, Retention, and AUM Optimization",
        description:
          "Tradr's pricing followed fund logic from the start: management fee on AUM plus performance fee above a high-watermark. The optimization target was not maximum return but capital stability. High drawdowns triggered withdrawals; high ROI drove upselling. We chose to favor lower maximum drawdown over peak returns — because the real value of a systematic strategy can only be expressed over six to twelve months minimum. Activation required five sequential steps involving third-party systems and real capital commitment; rather than simplifying the steps, we supported each one through continuous A/B testing and Hubspot-driven re-engagement campaigns across all touchpoints. Once activated, an engagement program — webinars, model updates, performance communications — operated as AUM retention infrastructure, calibrated to user behavior during drawdown periods.",
      },
    ],
    execution: [
      "Defined separate north star metrics for each product — MRR for Advisor, AUM for Tradr — each derived from its own business model",
      "Designed signal engagement tracking (betting suggestions added per week) as Advisor's leading retention and churn indicator",
      "Built buyer personas through 50+ interviews, chat and email feedback, and questionnaires to 1,000+ users iterated across four years",
      "Developed persona-aligned content achieving first-page SEO rankings across all primary topic clusters; organic search drove 30% of qualified traffic",
      "Designed signup flow with country detection to route users to Tradr where available, making Advisor the geographic top-of-funnel",
      "Coordinated country-by-country legal analysis across five target markets; scoped Tradr's operating footprint accordingly",
      "Led six months of BD work to establish the Betfair partnership, including commercial framing around exchange-side alignment",
      "Produced service design blueprint to align product, engineering, and legal stakeholders on a conceptually novel system",
      "Instrumented the full Tradr activation funnel; ran continuous A/B tests on landing pages and email sequences at each drop-off point",
      "Integrated Hubspot across all touchpoints for cross-product tracking and targeted re-engagement campaigns",
      "Operated engagement program calibrated to AUM retention behavior during drawdown periods",
    ],
    impact: [],
    learnings: [
      "Constraints are not obstacles to the strategy — they are inputs to it. The Betfair partnership, the legal scoping, the geographic phasing were each a direct consequence of understanding the constraint map before committing to the roadmap.",
      "The investment strategies were the real product — not the interface. A high-drawdown period was not a UX problem that better copy or a cleaner dashboard could solve. Designing strategies according to the business model, and managing user trust during stressful periods, were product problems that had nothing to do with the front end.",
      "In an automated product, engagement is retention infrastructure. When users don't interact with the system daily, the relationship is maintained entirely through communication — calibrated to behavioral signals, not reach or impressions.",
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
