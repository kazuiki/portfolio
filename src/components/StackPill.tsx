import { TechIcon } from "@/lib/tech-brand-icons";

export function StackPill({ tech }: { tech: string }) {
  return (
    <li className="border-border text-fg hover:border-border-strong inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-150">
      <TechIcon
        name={tech}
        className="text-fg-muted h-3.5 w-3.5"
        aria-hidden="true"
      />
      {tech}
    </li>
  );
}
