"use client";

import { cn } from "@/lib/utils";

interface LiveVisitorsProps {
  count: number;
  isLive?: boolean;
  className?: string;
}

export function LiveVisitors({
  count = 1,
  isLive = false,
  className,
}: LiveVisitorsProps) {
  const visibleAvatars = Math.max(1, Math.min(count, 3));

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {/* Overlapping circular viewer badges, like the reference */}
      <div className="flex items-center" aria-hidden="true">
        {Array.from({ length: visibleAvatars }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "bg-avatar-bg border-border flex h-7 w-7 items-center justify-center rounded-full border",
              index === 0 ? "text-fg-muted z-10" : "bg-bg-elevated -ml-2",
            )}
          >
            {index === 0 && (
              <svg
                className="h-4 w-4"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  strokeLinecap="round"
                  d="M9 10h0.01M15 10h0.01"
                  strokeWidth="2"
                />
                <path
                  strokeLinecap="round"
                  d="M9 15c0.9 0.7 1.9 1 3 1s2.1-0.3 3-1"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Visitor count — bold number + label */}
      <p className="font-pixel text-fg-muted text-xs">
        {isLive && (
          <span
            className="relative mr-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-green-500 align-middle"
            aria-hidden="true"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
          </span>
        )}
        <span className="text-fg font-medium">{count}</span>{" "}
        {count === 1 ? "person" : "people"} viewing now
      </p>
    </div>
  );
}
