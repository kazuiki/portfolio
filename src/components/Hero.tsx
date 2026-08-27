import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col items-stretch gap-10 pt-16 pb-12 md:flex-row"
    >
      {/* Square portrait photo */}
      <ProfileImage />

      {/* Name + bio + links */}
      <div className="flex min-w-0 flex-1 flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <h1 className="font-pixel text-fg text-2xl leading-none whitespace-nowrap sm:text-[2rem]">
            {profile.name}
          </h1>
          <p className="text-fg-muted font-mono text-xs tracking-[0.175em] uppercase">
            {profile.role}
          </p>
        </div>

        {/* Bio paragraphs */}
        <div className="flex flex-col gap-4">
          {profile.bio.map((paragraph, idx) => (
            <p key={idx} className="text-fg-muted text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Plain text links with external arrow — like "github ↗ linkedin ↗ email" */}
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link focus-visible-ring"
          >
            {profile.githubHandle}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link focus-visible-ring"
          >
            {profile.linkedinHandle}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hero-link focus-visible-ring"
          >
            email
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </section>
  );
}

function ProfileImage() {
  return (
    <div className="bg-avatar-bg relative aspect-square w-full max-w-[280px] flex-shrink-0 md:w-auto md:max-w-none md:min-w-[320px] md:self-stretch">
      {profile.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.avatar}
          alt={profile.name}
          className="absolute inset-0 h-full w-full object-cover grayscale select-none"
          draggable={false}
        />
      ) : (
        <div className="text-fg-subtle flex h-full w-full items-center justify-center">
          <svg
            className="h-12 w-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.25}
              d="M3 8a2 2 0 012-2h1.5l1-1.5h5L14.5 6H16a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
            />
            <circle cx="10.5" cy="11.5" r="3" />
          </svg>
        </div>
      )}

      {/* Portrait dissolve — background-colored dots, densest at the bottom,
          so the photo melts into the page like bryllim.com */}
      <div className="halftone-photo absolute inset-0" aria-hidden="true" />
    </div>
  );
}
