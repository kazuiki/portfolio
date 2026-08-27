"use client";

import type { SVGProps } from "react";
import {
  FileCode,
  Database,
  Layers,
  Smartphone,
  Box,
  Zap,
  Cloud,
  Server,
  Code,
  Atom,
  BrainCircuit,
  Bot,
  Sparkles,
  Triangle,
  Hexagon as HexagonIcon,
} from "lucide-react";

interface TechIconProps extends SVGProps<SVGSVGElement> {
  fill?: string;
  stroke?: string;
}

const BrandIcons: Record<string, React.FC<TechIconProps>> = {
  // Languages
  TypeScript: ({ className, ...props }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1.5 6h3v2h-3V8zm0 4h3v2h-3v-2z" />
      <path
        fill="#007ACC"
        d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1.5 6h3v2h-3V8zm0 4h3v2h-3v-2z"
      />
    </svg>
  ),
  JavaScript: ({ className, ...props }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  ),
  Python: ({ className, ...props }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19.5 9 12 13.5 4.5 9 12 4.5zm0 7L4.5 15 12 19.5 19.5 15 12 10.5z" />
    </svg>
  ),
  Java: ({ className, ...props }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-2 7h4v2h-4v-2zm0 4h4v2h-4v-2z" />
    </svg>
  ),
  PHP: ({ className, ...props }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm2 8h-2v-2h2v2zm0 4h-2v-2h2v2z" />
    </svg>
  ),
  HTML: ({ className, ...props }) => (
    <FileCode className={className} {...props} />
  ),
  CSS: ({ className, ...props }) => (
    <FileCode className={className} {...props} />
  ),
  "C++": ({ className, ...props }) => <Code className={className} {...props} />,
  ".NET": ({ className, ...props }) => (
    <HexagonIcon className={className} {...props} />
  ),

  // Mobile
  "React Native": ({ className, ...props }) => (
    <Smartphone className={className} {...props} />
  ),
  Expo: ({ className, ...props }) => (
    <HexagonIcon className={className} {...props} />
  ),
  "Expo Router": ({ className, ...props }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z" />
    </svg>
  ),

  // Databases
  MySQL: ({ className, ...props }) => (
    <Database className={className} {...props} />
  ),
  PostgreSQL: ({ className, ...props }) => (
    <Database className={className} {...props} />
  ),
  SQLite: ({ className, ...props }) => (
    <Database className={className} {...props} />
  ),
  Oracle: ({ className, ...props }) => (
    <Database className={className} {...props} />
  ),

  // Tools & Platforms
  Supabase: ({ className, ...props }) => (
    <Zap className={className} {...props} />
  ),
  GitHub: ({ className, ...props }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z" />
    </svg>
  ),
  "MySQL Workbench": ({ className, ...props }) => (
    <Database className={className} {...props} />
  ),
  PyQt: ({ className, ...props }) => (
    <Layers className={className} {...props} />
  ),
  PySide: ({ className, ...props }) => (
    <Layers className={className} {...props} />
  ),
  Godot: ({ className, ...props }) => (
    <Triangle className={className} {...props} />
  ),

  // AI / Modern tech (for potential future use)
  OpenAI: ({ className, ...props }) => (
    <BrainCircuit className={className} {...props} />
  ),
  Claude: ({ className, ...props }) => (
    <Sparkles className={className} {...props} />
  ),
  Gemini: ({ className, ...props }) => <Bot className={className} {...props} />,
  React: ({ className, ...props }) => <Atom className={className} {...props} />,
  "Next.js": ({ className, ...props }) => (
    <Triangle className={className} {...props} />
  ),
  Node: ({ className, ...props }) => (
    <HexagonIcon className={className} {...props} />
  ),
  Tailwind: ({ className, ...props }) => (
    <Zap className={className} {...props} />
  ),
  Docker: ({ className, ...props }) => <Box className={className} {...props} />,
  Kubernetes: ({ className, ...props }) => (
    <Server className={className} {...props} />
  ),
  AWS: ({ className, ...props }) => <Cloud className={className} {...props} />,
  Vercel: ({ className, ...props }) => (
    <Triangle className={className} {...props} />
  ),
};

export function getTechIcon(name: string): React.FC<TechIconProps> | null {
  return BrandIcons[name] ?? null;
}

export function TechIcon({
  name,
  className,
  ...props
}: { name: string } & TechIconProps) {
  const Icon = getTechIcon(name);
  if (!Icon) {
    // Fallback: initials
    const clean = name.replace(/[^a-zA-Z0-9+#.]/g, "");
    const initial = clean.slice(0, 2).toUpperCase();
    return (
      <span
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          fontSize: "10px",
          fontWeight: 600,
        }}
      >
        {initial}
      </span>
    );
  }
  return <Icon className={className} {...props} />;
}

export function techInitial(name: string): string {
  const clean = name.replace(/[^a-zA-Z0-9+#.]/g, "");
  return clean.slice(0, 2).toUpperCase();
}

export function techColor(_name: string): string {
  return "var(--fg-muted)";
}
