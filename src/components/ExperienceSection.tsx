import { experience } from "@/data/experience";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection() {
  return (
    <>
      <SectionHeader
        number="02"
        title="experience"
        viewAllHref="#experience"
        viewAllLabel="full history"
      />
      <div className="border-border mt-8 border-t">
        {experience.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </div>
    </>
  );
}

function ExperienceItem({ exp }: { exp: (typeof experience)[0] }) {
  const hasDescription = exp.description && exp.description !== "[DESCRIPTION]";

  return (
    <article className="border-border border-b py-3">
      <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-6">
        <time className="text-fg-subtle font-mono text-xs whitespace-nowrap">
          {exp.date}
        </time>
        <h3 className="text-fg text-sm font-semibold">{exp.role}</h3>
        <p className="text-fg-muted text-xs sm:text-right">{exp.company}</p>
      </div>
      {hasDescription && (
        <p className="text-fg-muted mt-1.5 text-xs leading-relaxed">
          {exp.description}
        </p>
      )}
    </article>
  );
}
