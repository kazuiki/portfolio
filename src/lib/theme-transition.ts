import type { MouseEvent as ReactMouseEvent } from "react";
import { flushSync } from "react-dom";

type ViewTransitionCapableDocument = Document & {
  startViewTransition?: (callback: () => void | Promise<void>) => unknown;
};

/**
 * Applies a theme change wrapped in the View Transitions API so the new
 * theme reveals as a circle expanding from the theme toggle button.
 *
 * - Origin/radius are written to `--vt-origin-x/y` and `--vt-radius`,
 *   consumed by the `vt-circular-reveal` keyframes in globals.css
 * - Browsers without `document.startViewTransition` fall back to an instant swap
 * - Skipped when the user prefers reduced motion
 *
 * The callback must update state synchronously (flushSync) so the new
 * theme is painted before the transition captures its snapshot.
 */
export function applyThemeWithTransition(
  applyTheme: () => void,
  event?: ReactMouseEvent<HTMLElement>,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const doc = document as ViewTransitionCapableDocument;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!doc.startViewTransition || prefersReducedMotion) {
    applyTheme();
    return;
  }

  // Reveal origin: center of the pressed toggle (fallback: viewport center).
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  const target = event?.currentTarget;
  if (target instanceof Element) {
    const rect = target.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top + rect.height / 2;
  }

  // Radius reaching the farthest viewport corner from the origin.
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const rootStyle = document.documentElement.style;
  rootStyle.setProperty("--vt-origin-x", `${Math.round(x)}px`);
  rootStyle.setProperty("--vt-origin-y", `${Math.round(y)}px`);
  rootStyle.setProperty("--vt-radius", `${Math.ceil(radius)}px`);

  doc.startViewTransition(() => {
    flushSync(applyTheme);
  });
}
