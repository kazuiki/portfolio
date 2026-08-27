import { stackCategories } from "@/data/stack";
import { StackPill } from "./StackPill";

export function StackPageContent() {
  return (
    <div>
      <h1 className="font-pixel text-fg text-2xl leading-tight">tech stack</h1>
      <p className="text-fg-muted mt-6 max-w-[560px] text-sm leading-relaxed">
        The tools, frameworks, and platforms I reach for — across the front end,
        back end, databases, mobile, and game development.
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {stackCategories.map((category, index) => (
          <section key={category.name}>
            <h2 className="section-label">
              {String(index + 1).padStart(2, "0")} — {category.name}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((tech) => (
                <StackPill key={`${category.name}-${tech}`} tech={tech} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
