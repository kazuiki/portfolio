"use client";

import { useState, type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Page-wide halftone backdrop — corner-anchored dot fields, like bryllim.com */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="halftone-bg halftone-bg-wide mask-tr absolute top-0 right-0 h-[70vh] w-[65vw] opacity-[0.16]" />
        <div className="halftone-bg mask-bl absolute bottom-0 left-0 h-[60vh] w-[55vw] opacity-[0.13]" />
      </div>

      {/* Sidebar - fixed on desktop, drawer on mobile */}
      <Sidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main content area */}
      <main
        className={cn(
          "relative z-10 min-w-0 flex-1 overflow-x-hidden overflow-y-auto",
          "px-6 md:px-[64px]",
          "py-16 md:py-16",
        )}
      >
        <div className="mx-auto w-full max-w-[720px]">{children}</div>
      </main>

      {/* Mobile hamburger button - only visible on mobile */}
      <button
        className={cn(
          "bg-bg border-border focus-visible-ring fixed top-4 left-4 z-50 rounded-md border p-2",
          "md:hidden",
          mobileMenuOpen && "hidden",
        )}
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg
          className="text-fg h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile drawer backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
