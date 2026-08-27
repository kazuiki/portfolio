export interface StackCategory {
  name: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  {
    name: "Frontend & UI",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    name: "Backend",
    items: ["PHP", "Python", "Java", "C++", ".NET"],
  },
  {
    name: "Databases",
    items: ["MySQL", "PostgreSQL", "SQLite", "Oracle", "Supabase"],
  },
  {
    name: "Mobile Development",
    items: ["React Native", "Expo", "Expo Router"],
  },
  {
    name: "Desktop & Game Development",
    items: ["PyQt", "PySide", "Godot"],
  },
  {
    name: "Developer Tools & Workflow",
    items: ["GitHub", "MySQL Workbench"],
  },
];

// Flat list for marquee
export const marqueeTechs: string[] = stackCategories.flatMap((c) => c.items);
