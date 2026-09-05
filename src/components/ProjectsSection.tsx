"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { TechIcon } from "@/lib/tech-brand-icons";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

/*
 * Fanned deck, ported from bryllim.com.
 * One center/front card, two side cards peek out behind it. Swapping is a
 * pure CSS transform transition: promoting a side card reassigns the
 * deck-slot-center / deck-slot-left / deck-slot-right poses and the browser
 * animates the glide (see .deck-slot in globals.css). The clicked side card
 * takes center; the old/ center drops into the slot the clicked card left, so
 * exactly two cards move in mirrored arcs.
 */
const slotClasses = {
  center: "deck-slot-center",
  left: "deck-slot-left",
  right: "deck-slot-right",
} as const;

interface DeckSlots {
  center?: string;
  left?: string;
  right?: string;
}

export function ProjectsSection() {
  const [slots, setSlots] = useState<DeckSlots>(() => ({
    center: projects[0]?.id,
    left: projects[1]?.id,
    right: projects[2]?.id,
  }));

  const promote = (id: string) => {
    if (!slots.center || id === slots.center) return;
    const from = slots.left === id ? "left" : "right";
    setSlots((prev) => {
      if (prev.center === id) return prev;
      return { ...prev, center: id, [from]: prev.center };
    });
  };

  const center = projects.find((p) => p.id === slots.center) ?? projects[0];
  const left = projects.find((p) => p.id === slots.left);
  const right = projects.find((p) => p.id === slots.right);

  return (
    <>
      <SectionHeader
        number="01"
        title="Projects"
        viewAllHref="#projects"
        viewAllLabel="all projects"
      />

      {/* Fanned deck (desktop): clicking a back card swaps it with the front.
          Side cards intentionally peek outside the center card while staying
          inside the main scroll area so they remain visible and clickable.
          Negative margins break the deck out of the max-w-[720px] container
          so side cards are not clipped. */}
      <div className="relative mx-[-200px] mt-16 hidden overflow-visible pb-16 md:mx-[-280px] lg:block">
        {/* Invisible sizer keeps the deck height tied to the front card */}
        <div className="invisible mx-auto w-[360px]" aria-hidden="true">
          {center && <ProjectCard project={center} />}
        </div>

        <div className="absolute inset-x-0 top-0 bottom-16 overflow-visible">
          {left && (
            <div
              key={left.id}
              className={cn(
                "deck-slot absolute top-1/2 left-1/2 w-[360px]",
                slotClasses.left,
              )}
              role="button"
              tabIndex={0}
              aria-label={`Bring ${left.name} project card to the front`}
              onClick={() => promote(left.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  promote(left.id);
                }
              }}
            >
              <ProjectCard project={left} />
            </div>
          )}
          {right && (
            <div
              key={right.id}
              className={cn(
                "deck-slot absolute top-1/2 left-1/2 w-[360px]",
                slotClasses.right,
              )}
              role="button"
              tabIndex={0}
              aria-label={`Bring ${right.name} project card to the front`}
              onClick={() => promote(right.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  promote(right.id);
                }
              }}
            >
              <ProjectCard project={right} />
            </div>
          )}
          {center && (
            <div
              key={center.id}
              className={cn(
                "deck-slot absolute top-1/2 left-1/2 w-[360px]",
                slotClasses.center,
              )}
            >
              <ProjectCard project={center} />
            </div>
          )}
        </div>
      </div>

      {/* Stacked cards (mobile / tablet) */}
      <div className="mt-10 flex flex-col gap-6 lg:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const visibleTech = project.technologies.slice(0, 5);
  const extraTech = project.technologies.length - visibleTech.length;
  const projectHref = project.link ?? "#";
  // Dark achievement pill: the project's highlight if set, else its type.
  const badge = project.highlight ?? project.type;

  return (
    <article className="project-card border-border bg-bg-elevated bo11rder relative flex h-[310px] flex-col rounded-2xl p-5">
      {/* Achievement / type pill + secondary tags */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="bg-fg text-bg inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[9px] tracking-wider uppercase">
          {project.highlight && (
            <svg
              viewBox="0 0 13 22"
              fill="currentColor"
              aria-hidden="true"
              className="h-[17px] w-auto shrink-0"
            >
              <path
                d="M0 -4C2.1 -2.6 2.1 2.6 0 4C-2.1 2.6 -2.1 -2.6 0 -4Z"
                transform="translate(8 5) rotate(46)"
              />
              <path
                d="M0 -4.3C2.3 -2.8 2.3 2.8 0 4.3C-2.3 2.8 -2.3 -2.8 0 -4.3Z"
                transform="translate(4.6 11) rotate(14)"
              />
              <path
                d="M0 -4C2.1 -2.6 2.1 2.6 0 4C-2.1 2.6 -2.1 -2.6 0 -4Z"
                transform="translate(8 17) rotate(-30)"
              />
            </svg>
          )}
          {badge}
        </span>
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className="border-border text-fg-muted rounded-full border px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Icon / image + name */}
      <div className="mt-4 flex items-center gap-3.5">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} app icon`}
            className="border-border h-12 w-12 shrink-0 rounded-xl border shadow-sm"
          />
        ) : (
          <div className="border-border bg-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border">
            <span
              className={cn(
                project.icon && project.icon.length > 1
                  ? "text-fg font-mono text-sm font-bold"
                  : "text-fg text-lg font-bold",
              )}
            >
              {project.icon ?? project.name.charAt(0)}
            </span>
          </div>
        )}
        <h3 className="font-pixel text-fg text-base leading-tight">
          {project.name}
        </h3>
      </div>

      <p className="text-fg-muted mt-3 line-clamp-3 text-[13px] leading-relaxed">
        {project.description}
      </p>

      {/* Tech icons */}
      {project.technologies.length > 0 && (
        <div className="mt-4 flex items-center gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="border-border bg-bg text-fg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
            >
              <TechIcon name={tech} className="h-4 w-4" aria-hidden="true" />
            </span>
          ))}
          {extraTech > 0 && (
            <span className="border-border bg-bg text-fg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold">
              +{extraTech}
            </span>
          )}
        </div>
      )}

      {/* Store badges (only when the project ships them) */}
      {(project.appStoreUrl || project.playStoreUrl) && (
        <div className="mt-4 flex items-center gap-2">
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get ${project.name} on the App Store`}
              className="text-fg-muted transition-opacity hover:opacity-80"
            >
              App Store
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get ${project.name} on Google Play`}
              className="text-fg-muted transition-opacity hover:opacity-80"
            >
              Google Play
            </a>
          )}
        </div>
      )}

      {/* View project CTA: only interactive on the centre card (back cards
          promote via the card click handled by the deck wrapper) */}
      <div className="border-border mt-auto border-t pt-5">
        <a
          href={projectHref}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-visible-ring bg-fg text-bg hover:bg-accent-hover flex w-full items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-medium transition-colors"
        >
          View project
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
