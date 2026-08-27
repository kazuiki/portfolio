import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function EducationSection() {
  return (
    <>
      <SectionHeader number="05" title="Education" viewAllHref="#education" />
      <div className="mt-10 flex flex-col gap-4">
        {education.map((edu) => (
          <EducationItem key={edu.id} edu={edu} />
        ))}
      </div>
    </>
  );
}

interface EducationItemProps {
  edu: (typeof education)[0];
}

function EducationItem({ edu }: EducationItemProps) {
  return (
    <article
      className="card focus-visible-ring flex items-start justify-between gap-4 p-5"
      tabIndex={0}
    >
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <div className="bg-avatar-bg border-border mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border">
          <GraduationCap className="text-fg-muted h-5 w-5" />
        </div>

        <div className="flex min-w-0 flex-col gap-0.5">
          <h4 className="text-fg text-base font-medium">{edu.degree}</h4>
          <p className="text-fg-muted text-sm">
            {edu.institution} · {edu.year}
          </p>
          {edu.details && edu.details !== "[DETAILS]" && (
            <p className="text-fg-muted text-sm">{edu.details}</p>
          )}
        </div>
      </div>
    </article>
  );
}
