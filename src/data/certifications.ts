export interface Certification {
  id: string;
  name: string;
  issuer: string;
  logo?: string;
  verifyLink?: string;
}

export const certifications: Certification[] = [
  {
    id: "placeholder-1",
    name: "[CERTIFICATION NAME]",
    issuer: "[ISSUER]",
    verifyLink: "[VERIFY LINK]",
  },
  {
    id: "placeholder-2",
    name: "[CERTIFICATION NAME]",
    issuer: "[ISSUER]",
    verifyLink: "[VERIFY LINK]",
  },
  {
    id: "placeholder-3",
    name: "[CERTIFICATION NAME]",
    issuer: "[ISSUER]",
    verifyLink: "[VERIFY LINK]",
  },
];
