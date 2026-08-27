export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export const education: Education[] = [
  {
    id: "bsit",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Quezon City University",
    year: "2022-2026",
  },
];
