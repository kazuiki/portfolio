interface SectionHeaderProps {
  number: string;
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export function SectionHeader({
  number,
  title,
  viewAllHref,
  viewAllLabel = "view all",
}: SectionHeaderProps) {
  return (
    <header className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-baseline">
      <div className="flex items-baseline gap-3">
        <span className="section-label shrink-0">{number} —</span>
        <h2 className="section-label shrink-0">{title}</h2>
      </div>

      {viewAllHref && (
        <a
          href={viewAllHref}
          className="view-all-link focus-visible-ring inline-flex shrink-0 items-center gap-1.5"
        >
          {viewAllLabel}
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m0 0l-6-6m6 6l-6 6"
            />
          </svg>
        </a>
      )}
    </header>
  );
}
