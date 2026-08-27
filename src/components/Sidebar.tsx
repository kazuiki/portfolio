"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Monitor, Sun, Moon, Mail } from "lucide-react";
import { profile, navItems } from "@/data/profile";
import { cn } from "@/lib/utils";
import { applyThemeWithTransition } from "@/lib/theme-transition";
import { LiveVisitors } from "./LiveVisitors";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => setMounted(true), []);

  // Highlight the matching nav item on sub-pages (e.g. /stack → "stack")
  useEffect(() => {
    if (pathname !== "/") {
      const match = navItems.find((item) => pathname.startsWith(`/${item.id}`));
      if (match) {
        setActiveSection(match.id);
        return;
      }
    }
  }, [pathname]);

  // Scroll-spy: track which section is in view to highlight nav
  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const themeSegments: {
    value: "system" | "light" | "dark";
    icon: React.ReactNode;
    label: string;
  }[] = [
    { value: "system", icon: <Monitor className="h-3 w-3" />, label: "System" },
    { value: "light", icon: <Sun className="h-3 w-3" />, label: "Light" },
    { value: "dark", icon: <Moon className="h-3 w-3" />, label: "Dark" },
  ];

  return (
    <aside
      className={cn(
        "bg-bg border-border z-50 flex flex-col border-r p-6",
        "h-screen w-[260px] flex-shrink-0 overflow-y-auto",
        // desktop: sticky permanent, mobile: drawer
        "fixed inset-y-0 left-0 transition-transform duration-200 ease-out",
        "md:sticky md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
      )}
    >
      {/* Name / logo — Geist Pixel like the reference */}
      <Link
        href="/"
        className="font-pixel text-fg focus-visible-ring text-lg"
        onClick={onClose}
      >
        {profile.name}
      </Link>

      {/* Nav stack */}
      <nav className="mt-8 flex flex-col gap-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`/#${item.id}`}
            onClick={onClose}
            className={cn(
              "nav-link focus-visible-ring",
              activeSection === item.id && "nav-link-active",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Bottom cluster pinned toward the end of the sidebar */}
      <div className="mt-auto flex flex-col gap-6 pt-10">
        {/* Divider */}
        <div className="bg-border h-px w-full" />

        {/* Avatar + visitor count */}
        <LiveVisitors count={1} isLive={false} />

        {/* Divider */}
        <div className="bg-border h-px w-full" />

        {/* Theme toggle — small pill, sits right below the line above contact info */}
        <div className="border-border flex w-fit items-center rounded-full border p-0.5">
          {themeSegments.map((seg) => (
            <button
              key={seg.value}
              onClick={(event) =>
                applyThemeWithTransition(() => setTheme(seg.value), event)
              }
              className={cn(
                "focus-visible-ring flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-150",
                mounted && theme === seg.value
                  ? "bg-bg-elevated text-fg border-border-strong border"
                  : "text-fg-subtle hover:text-fg",
              )}
              aria-label={`Switch to ${seg.label} theme`}
              aria-pressed={mounted && theme === seg.value}
            >
              {seg.icon}
            </button>
          ))}
        </div>

        {/* Contact + social */}
        <div className="flex flex-col gap-3">
          <p className="text-fg-muted text-xs leading-relaxed">
            For work, collabs &amp; everything else, reach me at
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-fg-muted hover:text-fg focus-visible-ring flex items-center gap-2 font-mono text-xs font-medium break-all transition-colors duration-150"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {profile.email}
          </a>
        </div>
      </div>
    </aside>
  );
}
