"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { TechIcon } from "@/lib/tech-brand-icons";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

/*
 * Fanned deck slots. All three cards share the same absolute anchor
 * (top-1/2 left-1/2) and width; the pose classes in globals.css handle
 * position/rotation/scale so slot swaps animate as one smooth transform.
 * Promoting swaps the clicked card with the front card only — the third
 * card never moves, so exactly two cards glide in mirrored arcs.
 */
const slotClasses = {
  center: "deck-slot-center",
  left: "deck-slot-left opacity-40 hover:opacity-75",
  right: "deck-slot-right opacity-40 hover:opacity-75",
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
  // Per-card swap animation currently playing (cleared on animationend)
  const [flights, setFlights] = useState<Record<string, string | undefined>>(
    {},
  );

  const isSwapping = Object.keys(flights).length > 0;

  const clearFlight = (id: string) => {
    setFlights((prev) => {
      if (!(id in prev)) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const promote = (id: string) => {
    if (isSwapping || !slots.center || id === slots.center) return;
    const fromLeft = slots.left === id;
    const demoted = slots.center;
    setFlights({
      [id]: fromLeft ? "deck-flight-from-left" : "deck-flight-from-right",
      [demoted]: fromLeft ? "deck-flight-to-left" : "deck-flight-to-right",
    });
    setSlots((prev) => {
      if (prev.center === id) return prev;
      const from = prev.left === id ? "left" : "right";
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

      {/* Fanned deck (desktop): clicking a back card's button swaps it with the front card */}
      <div className="relative mt-16 hidden pb-16 lg:block">
        {/* Invisible sizer keeps the deck height tied to the front card */}
        <div className="invisible mx-auto w-[360px]" aria-hidden="true">
          <ProjectCard project={center} />
        </div>

        <div className="absolute inset-x-0 top-0 bottom-16">
          {left && (
            <div
              key={left.id}
              className={cn(
                "deck-slot absolute top-1/2 left-1/2 w-[360px]",
                slotClasses.left,
                flights[left.id],
              )}
              onAnimationEnd={(e) => {
                if (e.animationName.startsWith("deck-flight-"))
                  clearFlight(left.id);
              }}
            >
              <ProjectCard project={left} onPromote={() => promote(left.id)} />
            </div>
          )}
          {right && (
            <div
              key={right.id}
              className={cn(
                "deck-slot absolute top-1/2 left-1/2 w-[360px]",
                slotClasses.right,
                flights[right.id],
              )}
              onAnimationEnd={(e) => {
                if (e.animationName.startsWith("deck-flight-"))
                  clearFlight(right.id);
              }}
            >
              <ProjectCard
                project={right}
                onPromote={() => promote(right.id)}
              />
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
  /** When set, the CTA promotes this card to the front instead of opening the link */
  onPromote?: () => void;
}

function ProjectCard({ project, onPromote }: ProjectCardProps) {
  const visibleTech = project.technologies.slice(0, 5);
  const extraTech = project.technologies.length - visibleTech.length;
  const projectHref = project.link ?? "#";

  return (
    <article className="project-card border-border bg-bg-elevated flex h-full flex-col rounded-2xl border p-6">
      {/* Icon + name */}
      <div className="flex items-center gap-4">
        <div className="border-border bg-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border">
          <span
            className={
              project.icon && project.icon.length > 1
                ? "text-fg font-mono text-sm font-bold"
                : "text-fg text-lg font-bold"
            }
          >
            {project.icon ?? project.name.charAt(0)}
          </span>
        </div>
        <h3 className="font-pixel text-fg text-base leading-tight">
          {project.name}
        </h3>
      </div>

      {/* Date + type badge */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        <time className="text-fg-muted font-mono text-xs">{project.date}</time>
        <span className="border-border bg-bg text-fg-muted inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.1em] uppercase">
          {project.type}
        </span>
      </div>

      {/* Description */}
      <p className="text-fg-muted mt-3 line-clamp-3 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech icons */}
      <div className="mt-5 mb-6 flex items-center gap-2">
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

      {/* View project CTA: front card opens the link, back cards promote */}
      <div className="border-border mt-auto border-t pt-5">
        {onPromote ? (
          <button
            type="button"
            onClick={onPromote}
            aria-label={`Bring ${project.name} project card to the front`}
            className="focus-visible-ring bg-fg text-bg hover:bg-accent-hover flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-medium transition-colors"
          >
            View project
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <a
            href={projectHref}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible-ring bg-fg text-bg hover:bg-accent-hover flex w-full items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-medium transition-colors"
          >
            View project
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
