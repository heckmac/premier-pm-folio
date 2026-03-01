import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const projects = [
  {
    label: "Sphere · MDOTM · 2022–2023",
    title: "Portfolio Construction Tool",
    placeholderBg: "#D4C9B8",
    placeholderLabel: "Interaction architecture",
    body: [
      "Sphere could ingest a portfolio and produce an optimized result. The analytical depth was genuine. Early clients were consistently impressed by the vision — and consistently unable to use the product.",
      "The failure wasn't technical. The interface had been built to mirror internal model logic rather than how portfolio managers actually construct mandates. Asset class hierarchies were opaque. Constraints didn't map to professional vocabulary. The engine spoke math; clients spoke mandates.",
      "My diagnosis was that UX had been treated as a presentation layer on top of engine decisions. The reset inverted that relationship entirely. I used high-fidelity design concepts — built before a single line of implementation — as the shared language between R&D, engineering, and business stakeholders. Not as deliverables. As structural arguments. The design artifacts surfaced contradictions in the architecture that no written spec would have made visible, and forced decisions about what the system needed to become rather than what it already was.",
    ],
    impact:
      "Clients could simulate realistic multi-asset mandates for the first time. Commercial conversations shifted from vision pitching to mandate simulation.",
  },
  {
    label: "Sphere · MDOTM · 2023–2024",
    title: "Multi-Portfolio Governance Platform",
    placeholderBg: "#B8C9C9",
    placeholderLabel: "System design",
    body: [
      "A product becomes infrastructure when professionals stop choosing to use it and start depending on it. After the architectural reset, Sphere was usable. Clients visited it. But institutional investment teams don't work as individuals — portfolios, market views, and data are shared, governed, managed collaboratively across desks and hundreds of mandates simultaneously.",
      "The design challenge was structural: Sphere had been conceived around a single user managing a single portfolio. That mental model was embedded in every interaction pattern, every data model, every navigation decision. Fixing it wasn't a matter of adding features — it required rethinking what the product understood a \"portfolio\" to be.",
      "I led the design of a governance layer, fleet-level visibility tools for managing hundreds of portfolios simultaneously, nested portfolio structures to reflect how institutional mandates are actually built, and an integration layer that let client data flow into the product on client terms rather than ours.",
      "Each intervention removed a layer of distance between Sphere and the client's operational reality. The product stopped assuming it was the origin of all data and all logic. It became connectable.",
    ],
    impact:
      "Team-based workflows replaced individual usage. The full cycle from portfolio construction to execution to performance monitoring became operable in a single environment.",
  },
  {
    label: "Storyfolio · MDOTM · 2023–2024",
    title: "Generative Financial Reporting Tool",
    placeholderBg: "#C9C4B8",
    placeholderLabel: "AI interaction design",
    body: [
      "Portfolio Studio could generate high-quality investment proposals — non-linear optimization producing results that were often non-obvious, sometimes difficult to explain. The gap wasn't in the analytics. It was in the communication: wealth managers needed to present these decisions to clients coherently, at scale, consistently.",
      "Most competitors had solved the reporting problem: flexible layouts, customizable templates, polished outputs. None had solved the content problem. The burden of interpretation — of turning a portfolio rebalancing into a narrative a client could understand and trust — still fell entirely on the user.",
      "The design question I started with wasn't \"how do we generate text?\" It was \"what is the minimum a generated explanation needs to be to be trustworthy in a financial context?\" That framing led to a completely different set of constraints. Reliability was the optimization variable, not expressiveness. Hallucinations weren't a risk to mitigate — they were a design failure that would destroy the product's credibility instantly.",
      "We built guardrails first. Then a configurable layer — Builder and Editor tools — that let users control structure and emphasis while the system handled coherence with the underlying portfolio logic.",
    ],
    impact:
      "~50% increase in portfolio adoption. Reporting time reduced from ~2 hours to ~2 minutes per portfolio.",
  },
  {
    label: "Mercurius · 2017–2021",
    title: "AI-Driven Sports Trading Platform",
    placeholderBg: "#C4B8C9",
    placeholderLabel: "Product design",
    body: [
      "Mercurius was an AI-driven platform for sports betting intelligence. The premise: apply quantitative models and data analysis to a domain that had always been driven by intuition, emotion, and narrative.",
      "The hardest design problem wasn't the algorithm. It was the users. Casual bettors and professional bettors don't just have different needs — they have incompatible mental models. A casual bettor thinks in games, hunches, and entertainment. A professional thinks in bankroll management, expected value, and long-term variance. Designing for both in a single product would have produced something coherent for neither.",
      "I made the call early to split into two distinct experiences — not two skins on the same logic, but two genuinely different products with different information architectures, different vocabularies, and different success metrics. That decision required letting go of the appeal of a unified platform and accepting that serving one audience well meant making choices the other wouldn't understand.",
      "The platform scaled to 4,000+ users, raised over $1M, and was acquired.",
    ],
    impact:
      "Two distinct products for two incompatible audiences. Successful fundraise and acquisition by Wall Street Football.",
  },
];

const credentials = [
  { value: "13 years", label: "product & design" },
  { value: "B2B fintech &", label: "enterprise UX" },
  {
    value: "Politecnico di Milano",
    label: "Master, Communication Design",
  },
  { value: "Milan, Italy", label: "available hybrid" },
];

const MollieLanding = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#F5F0EB",
        color: "#1A1814",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* ── HERO ── */}
      <section
        className="px-6 md:px-10"
        style={{ paddingTop: 80, paddingBottom: 96 }}
      >
        <div className="mx-auto" style={{ maxWidth: 1080 }}>
          <motion.div
            className="max-w-[700px]"
            initial="hidden"
            animate="visible"
            variants={{}}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 11,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#3D3DB4",
                marginBottom: 20,
              }}
            >
              Product Designer &amp; Strategist
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Mario Ciardulli
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 22,
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#1A1814",
                marginBottom: 8,
              }}
            >
              Designer who became a product leader.
              <br />
              Product leader who never stopped designing.
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "#7A746C",
                marginBottom: 32,
              }}
            >
              13 years building complex digital products — from interaction
              design to product architecture in B2B fintech and enterprise.
            </motion.p>

            <motion.span
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                display: "inline-block",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontSize: 12,
                color: "#3D3DB4",
                backgroundColor: "#EEEEF9",
                padding: "6px 14px",
                borderRadius: 3,
              }}
            >
              Applying for Head of Product Design at Mollie
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="px-6 md:px-10" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="mx-auto" style={{ maxWidth: 1080 }}>
          <motion.div
            className="max-w-[640px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              style={{
                fontSize: 11,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#3D3DB4",
                marginBottom: 16,
              }}
            >
              Why This Role
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 32,
              }}
            >
              Why Mollie, why now
            </motion.h2>

            <motion.div
              custom={2}
              variants={fadeUp}
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "#1A1814",
              }}
              className="space-y-6"
            >
              <p>
                Design has been central to how I think about product since
                before "product thinking" was a job title. I started as an
                interaction designer — hands-on, working on flows and
                interfaces for real systems — and over 13 years I moved toward
                product leadership without ever losing the conviction that
                design is where strategy becomes real.
              </p>
              <p>
                At Mollie, the phrase that stopped me was{" "}
                <em>
                  "it's not the last layer of polish — it's the strategy, the
                  differentiation."
                </em>{" "}
                That's not something companies say easily. It takes a certain
                kind of organization to mean it.
              </p>
              <p>
                The work below is both design and product. I'm not presenting
                them as separate tracks — they've always been the same thing
                for me.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="px-6 md:px-10" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="mx-auto" style={{ maxWidth: 1080 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              style={{
                fontSize: 11,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#3D3DB4",
                marginBottom: 16,
              }}
            >
              Selected Work
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 40,
              }}
            >
              Four projects. Four design problems.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={i}
                variants={fadeUp}
                style={{
                  backgroundColor: "#EDEAE5",
                  borderRadius: 4,
                  cursor: "default",
                  transition: "background-color 200ms",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#E5E0D8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#EDEAE5")
                }
              >
                {/* Image placeholder */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    backgroundColor: p.placeholderBg,
                    height: 200,
                    borderRadius: "4px 4px 0 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontStyle: "italic",
                      fontSize: 13,
                      color: "#7A746C",
                    }}
                  >
                    {p.placeholderLabel}
                  </span>
                </div>

                {/* Card body */}
                <div style={{ padding: 32 }}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#A8A29E",
                      marginBottom: 10,
                    }}
                  >
                    {p.label}
                  </p>
                  <h3
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: 20,
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    {p.title}
                  </h3>
                  <div
                    className="space-y-4"
                    style={{ fontSize: 15, lineHeight: 1.75, color: "#1A1814" }}
                  >
                    {p.body.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: 1,
                      backgroundColor: "#D6D0C9",
                      margin: "20px 0",
                    }}
                  />

                  <p style={{ fontSize: 14, fontWeight: 500, color: "#1A1814" }}>
                    → {p.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ── */}
      <section
        className="px-6 md:px-10"
        style={{ backgroundColor: "#EDEAE5", paddingTop: 48, paddingBottom: 48 }}
      >
        <div
          className="mx-auto grid grid-cols-2 md:grid-cols-4"
          style={{ maxWidth: 1080 }}
        >
          {credentials.map((c, i) => (
            <div
              key={i}
              className="text-center py-4 md:py-0"
              style={{
                borderRight:
                  i < credentials.length - 1
                    ? undefined
                    : undefined,
              }}
            >
              <div
                className="hidden md:block"
                style={{
                  ...(i < credentials.length - 1
                    ? { borderRight: "1px solid #D6D0C9" }
                    : {}),
                  paddingRight: i < credentials.length - 1 ? 24 : 0,
                  paddingLeft: i > 0 ? 24 : 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#1A1814",
                    marginBottom: 4,
                  }}
                >
                  {c.value}
                </p>
                <p style={{ fontSize: 12, color: "#7A746C" }}>{c.label}</p>
              </div>
              {/* Mobile version (no dividers) */}
              <div className="md:hidden">
                <p
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#1A1814",
                    marginBottom: 4,
                  }}
                >
                  {c.value}
                </p>
                <p style={{ fontSize: 12, color: "#7A746C" }}>{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        className="px-6 md:px-10 text-center"
        style={{ paddingTop: 96, paddingBottom: 48 }}
      >
        <div className="mx-auto" style={{ maxWidth: 480 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#3D3DB4",
              marginBottom: 16,
            }}
          >
            Get in Touch
          </p>

          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            Let's talk
          </h2>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "#7A746C",
              marginBottom: 32,
            }}
          >
            If the work above is relevant to what you're building at Mollie,
            I'd welcome the conversation.
          </p>

          <div className="flex flex-col items-center gap-2">
            {[
              {
                text: "mario.ciardulli@gmail.com",
                href: "mailto:mario.ciardulli@gmail.com",
              },
              { text: "mariociardulli.com", href: "https://mariociardulli.com" },
              {
                text: "linkedin.com/in/mariociardulli",
                href: "https://linkedin.com/in/mariociardulli",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  fontSize: 15,
                  color: "#1A1814",
                  textDecoration: "none",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#3D3DB4";
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#1A1814";
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Footnote */}
          <div style={{ marginTop: 48 }}>
            <p
              style={{
                fontSize: 12,
                fontStyle: "italic",
                color: "#A8A29E",
                marginBottom: 8,
              }}
            >
              This page was made for my application to Head of Product Design
              at Mollie.
            </p>
            <p style={{ fontSize: 12, color: "#A8A29E" }}>
              © 2025 Mario Ciardulli
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MollieLanding;
