import { certifications } from "@/data/certifications";
import { ArrowRight, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function CertificationsSection() {
  return (
    <>
      <SectionHeader
        number="04"
        title="Certifications"
        viewAllHref="#certifications"
      />
      <div className="mt-10 flex flex-col gap-4">
        {certifications.map((cert) => (
          <CertificationItem key={cert.id} cert={cert} />
        ))}
      </div>
    </>
  );
}

interface CertificationItemProps {
  cert: (typeof certifications)[0];
}

function CertificationItem({ cert }: CertificationItemProps) {
  return (
    <article className="card flex items-center justify-between gap-4 p-4">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {/* Logo placeholder */}
        <div className="bg-avatar-bg border-border flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border">
          <Award className="text-fg-muted h-4 w-4" />
        </div>

        <div className="flex min-w-0 flex-col gap-0.5">
          <h4 className="text-fg truncate text-sm font-medium">{cert.name}</h4>
          <p className="text-fg-subtle truncate text-xs">{cert.issuer}</p>
        </div>
      </div>

      <a
        href={cert.verifyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="arrow-link focus-visible-ring flex-shrink-0 text-xs"
      >
        Verify
        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
      </a>
    </article>
  );
}
