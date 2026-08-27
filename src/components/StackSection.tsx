import Link from "next/link";
import { stackCategories } from "@/data/stack";
import { StackPill } from "./StackPill";

const stackItems = stackCategories.flatMap((category) => category.items);
const VISIBLE_COUNT = 12;

export function StackSection() {
  return (
    <>
      <header className="flex items-baseline justify-between gap-2">
        <h2 className="section-label">Stack I rely on</h2>
        <Link
          href="/stack"
          className="view-all-link focus-visible-ring inline-flex items-center gap-1.5"
        >
          view all
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
        </Link>
      </header>

      <ul className="mt-3 flex flex-wrap gap-2">
        {stackItems.slice(0, VISIBLE_COUNT).map((tech) => (
          <StackPill key={tech} tech={tech} />
        ))}
      </ul>
    </>
  );
}
