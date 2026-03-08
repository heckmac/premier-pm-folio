export interface TimelineEntry {
  role: string;
  company: string;
  url?: string;
  period: string;
  description?: string;
}

export const timeline: TimelineEntry[] = [
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
    description:
      "- Led strategic design and product discovery initiatives for complex, international client projects\n- Worked at the intersection of business strategy, user research, and experience design\n- Framed complex problem spaces and translated them into actionable product and service concepts\n- Collaborated with strategists, researchers, service designers, and technologists in multidisciplinary teams",
  },
  {
    role: "Interaction Designer",
    company: "Designit",
    period: "Jan 2014 → Dec 2016",
    description:
      "- Designed and delivered interaction and UX solutions across multiple client engagements\n- Worked across UX, UI, prototyping, and front‑end collaboration, ensuring high usability and interaction quality\n- Bridged design and technology through strong prototyping and implementation sensibility",
  },
  {
    role: "Interaction Designer",
    company: "ToDo",
    period: "Apr 2010 → Dec 2013",
  },
];
