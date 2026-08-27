export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  icon?: string;
  date: string;
  type: string;
  highlight?: string;
  tags?: string[];
  technologies: string[];
  link?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const projects: Project[] = [
  {
    id: "trackly",
    name: "Trackly",
    icon: "T",
    description:
      "Offline-first OJT (On-the-Job Training) time tracking and allowance management mobile app for students and interns.",
    date: "Oct 2025 – Present",
    type: "Mobile App",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "SQLite",
      "Zustand",
    ],
    link: "#",
  },
  {
    id: "lazystack",
    name: "LazyStack",
    icon: "</>",
    description: "A curated directory of developer tools and AI-powered tools.",
    date: "Apr 2025 – Jun 2025",
    type: "Web App",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    id: "agricare",
    name: "AgriCare",
    description:
      "Crop Management Using IoT for the Center for Urban AI (CUAI).",
    date: "2024",
    type: "Web App - IoT",
    technologies: ["IoT", "Arduino", "Python", "MySQL"],
    link: "#",
  },
];
