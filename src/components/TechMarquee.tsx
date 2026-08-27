"use client";

import { useRef, useEffect } from "react";
import { marqueeTechs } from "@/data/stack";
import { TechIcon } from "@/lib/tech-brand-icons";

export function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  // Duplicate the track for seamless infinite loop
  const track = [...marqueeTechs, ...marqueeTechs];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const pause = () => (el.style.animationPlayState = "paused");
    const play = () => (el.style.animationPlayState = "running");

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", play);

    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="border-border relative w-full overflow-hidden border-t">
        <div
          ref={trackRef}
          className="animate-marquee flex w-max items-center gap-16 py-7 pr-16"
          aria-hidden="true"
          style={{ animationDuration: "90s" }}
        >
          {track.map((tech, index) => (
            <MarqueeItem key={`${tech}-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MarqueeItem({ tech }: { tech: string }) {
  return (
    <div
      className="flex flex-shrink-0 items-center gap-3 whitespace-nowrap"
      aria-hidden="true"
    >
      {/* Bare monochrome brand icon, like the reference */}
      <TechIcon name={tech} className="text-fg-subtle h-8 w-8" />
      <span className="text-fg-muted text-xl font-medium">{tech}</span>
    </div>
  );
}
