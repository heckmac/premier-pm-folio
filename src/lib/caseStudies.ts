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
    project: "From Quantitative Engine to Adoptable Product",
    role: "VP of Product",
    year: "2021–2023",
    cardSubtitle: "Sphere · VP of Product · MDOTM · 2021–2023",
    featured: true,
    heroTagline:
      "Diagnosed structural misalignment in a fintech platform and led a full architectural reset — turning a model-centric engine into a process-centric tool portfolio managers could actually adopt.",
    context: [
      "Sphere originated as a technically advanced quantitative engine built around MDOTM's internal investment methodology. The platform could ingest a portfolio, apply MDOTM's market view, and produce an optimized result. The analytical depth was genuine.",
      "Early client reactions were consistent: they were impressed by the vision. They could not use the product.",
    ],
    problem: [
      "The failure was structural. The platform reflected internal model logic rather than how portfolio managers actually construct and manage mandates. Asset classes could not be expressed through a coherent hierarchy. Portfolio construction constraints did not exist as first-class concepts — only risk targets and rebalance thresholds were available, neither of which matched professional mandate definitions. The investment universe existed in the system but was opaque to users.",
      "UX compensated for engine limitations rather than guiding product logic. The result was a fragmented interface that mirrored internal constraints rather than professional workflows.",
      "The scale of the problem became clear when early beta clients — who had paid a symbolic subscription — did not renew autonomously. The product required active retention effort. Intellectual excitement was not translating into operational dependency.",
      "Incremental improvements would have preserved the incoherence. The product required an architectural reset.",
    ],
    positioning: [
      "Sphere needed to shift from a model-centric demonstration of MDOTM's methodology to a process-centric tool that fit inside real investment workflows.",
      "The objective was not to add capabilities but to restructure the product around how professionals actually define mandates — and to create the technical and commercial foundations that would allow the product to evolve from there.",
    ],
    myRole: [
      "Product direction and judgment over the architectural redesign. Responsible for diagnosing structural misalignment, abstracting the meta investment process into a product blueprint, and advocating for a full architectural reset.",
      "During the discovery and blueprint phase, worked closely with the Chief Investment and Research Officer and Customer Success to map client workflows and investment process logic. During implementation, coordinated across Product, Engineering and R&D to align execution with the architectural decisions made in the blueprint.",
      "Acted as decision maker on redesign scope, structural priorities and phasing throughout.",
    ],
    strategy: [
      {
        title: "Process Abstraction and Architectural Inversion",
        description:
          "A structured analysis of both the product and the underlying technology was conducted alongside the CIRO and Customer Success, mapping how professionals actually define mandates versus how the engine had structured decisions. The output was a product blueprint: a phased investment backbone — define universe, define mandate structure, apply portfolio-level risk constraints, apply allocation constraints, apply operative constraints, express market view — that became the shared reference for the entire rebuild. The blueprint was visualized through high-fidelity design concepts before any implementation began, allowing R&D and business stakeholders to align on architectural direction. UX would define technical requirements, not the other way around.",
      },
      {
        title: "Implementation",
        description:
          "With the blueprint validated, the portfolio configurator was redesigned and rebuilt around mandate phases. Optimization pipelines were restructured to reflect the new process logic. The risk model was extended to support a coherent asset class hierarchy. A constraint validation layer was introduced to handle infeasible configurations at the product level — users could express any constraint logic, with guided feedback when combinations were mathematically unworkable. The architecture was designed for extensibility from the start.",
      },
      {
        title: "Incremental Validation and Configuration Levers",
        description:
          "As clients began using the rebuilt configurator, recurring gaps emerged — missing asset classes, incomplete constraint types, configuration levers that existed in their daily work but not yet in the product. Each gap was addressed incrementally, progressively reducing the distance between what Sphere could express and what clients actually needed. KANO-based prioritization workshops were introduced to impose discipline — clustering must-haves, deferring non-critical items, surfacing structural risks — under continuous acquisition pressure from the business.",
      },
      {
        title: "Connecting to Client Systems",
        description:
          "Integration with external PMS systems allowed portfolios to flow from client environments into Sphere automatically, removing the manual recreation that had been a persistent operational barrier. Portfolio Studio was made available as a standalone module, decoupled from Market Insights — acknowledging that not every client would adopt MDOTM's investment methodology. Sphere stopped assuming it was the origin of all data and all logic. The product became connectable.",
      },
    ],
    execution: [
      "Investment process abstracted and mapped into a phased product blueprint",
      "Blueprint validated through high-fidelity design concepts to align R&D and business stakeholders before implementation",
      "Portfolio configurator redesigned around mandate phases with modular extensibility",
      "Risk model expanded to support a coherent asset class hierarchy",
      "Constraint validation layer introduced as a product-level feasibility framework",
      "KANO-based prioritization workshops used to impose roadmap discipline under continuous acquisition pressure",
      "PMS integration introduced with import/export aligned to client templates and proprietary codes",
      "Portfolio Studio made available as a standalone module, decoupled from Market Insights",
    ],
    impact: [
      "Clients could simulate realistic multi-asset mandates for the first time",
      "Coherent asset class hierarchy replaced opaque, logically inconsistent structure",
      "Portfolio, allocation and operative constraints separated as distinct concepts",
      "Commercial conversations shifted from vision pitching to mandate simulation",
      "Configurator architecture enabled continuous incremental expansion without structural rewrites",
      "Product became commercially separable from MDOTM's investment methodology",
    ],
    learnings: [
      "Structural incoherence cannot be resolved through feature additions — it requires architectural intervention.",
      "Reversing the relationship between UX and engine is a product decision, not a technical one. Reframing infeasibility as a design problem rather than an engine problem can unlock both usability and technical progress simultaneously.",
      "Building for extensibility from the first reset is what makes future iteration possible without rebuilding.",
    ],
  },
  {
    slug: "sphere-investment-infrastructure",
    company: "MDOTM",
    project: "From Adoptable Product to Investment Infrastructure",
    role: "CPO",
    year: "2023–2025",
    cardSubtitle: "Sphere · CPO · MDOTM · 2023–2025",
    featured: true,
    heroTagline:
      "Closed every layer of distance between Sphere and institutional operational reality — organizational, structural, data and systemic — transforming the platform from a tool professionals visit into infrastructure they operate inside.",
    context: [
      "After the architectural reset, Sphere had become structurally usable. Clients could express real mandates, connect their existing portfolios via PMS integration, and work within a coherent product logic. The foundations for iteration were in place.",
      "The question was what to build on them.",
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
      "Storyfolio emerged within Sphere, an enterprise fintech platform used by portfolio managers and wealth managers to design and manage investment portfolios.",
      "Over time, Sphere's analytical engine — particularly within Portfolio Studio — became increasingly sophisticated. Non-linear optimization rules generated advanced and often non-obvious portfolio proposals. The analytical quality was strong, but communication lagged behind the intelligence of the system.",
      "As portfolio complexity increased, so did the cognitive effort required to explain decisions to clients.",
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

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudyData | undefined {
  const idx = caseStudies.findIndex((cs) => cs.slug === slug);
  if (idx === -1) return undefined;
  return caseStudies[(idx + 1) % caseStudies.length];
}
