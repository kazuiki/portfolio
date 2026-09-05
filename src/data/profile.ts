import mainImage from "@/assets/mainimage.jpg";

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  role: string;
  avatar?: string;
  email: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  linkedinHandle: string;
  bio: string[];
}

export const profile: Profile = {
  name: "John Pritch L. Arcas",
  title: "IT Graduate",
  subtitle: "Aspiring Software Developer",
  role: "Aspiring Software Developer",
  avatar: mainImage.src,
  email: "johnpritch21@gmail.com",
  github: "https://github.com/",
  githubHandle: "github",
  linkedin: "https://linkedin.com/",
  linkedinHandle: "linkedin",
  bio: [
    "I'm an IT graduate and aspiring software developer. I build web and mobile apps, and I enjoy turning rough ideas into real, usable products.",
    "Right now I'm learning whatever it takes to grow as an engineer — one project, one problem, and one commit at a time.",
  ],
};

export const navItems = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Stack", id: "stack" },
  { label: "Certifications", id: "certifications" },
  { label: "Education", id: "education" },
];
