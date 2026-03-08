export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Product Leadership",
    skills: ["Product Strategy", "Product Vision", "Roadmapping", "OKRs", "Prioritization Frameworks", "Go-to-Market"],
  },
  {
    label: "Discovery & Research",
    skills: ["Product Discovery", "UX Research", "Jobs-to-Be-Done", "Hypothesis-Driven Development", "User Testing"],
  },
  {
    label: "Design & Systems",
    skills: ["UX/UI Design", "Service Design", "Design Thinking", "Information Architecture", "Design Systems"],
  },
  {
    label: "Collaboration & Delivery",
    skills: ["Stakeholder Management", "Engineering Collaboration", "Cross-functional Leadership", "Agile / Lean"],
  },
  {
    label: "Domain",
    skills: ["Fintech", "B2B SaaS", "Generative AI products", "Telecommunication", "Smart devices", "Deep-tech AI products", "Omnichannel retail"],
  },
];
