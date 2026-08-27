// Map technology names to simple SVG badges.
// Since we don't pull in tech-icon libraries (avoid unnecessary deps),
// we render a neutral rounded badge with the tech's initial where a brand
// glyph is not available. This keeps the aesthetic clean and editorial.

export function techInitial(name: string): string {
  const clean = name.replace(/[^a-zA-Z0-9+#.]/g, "");
  return clean.slice(0, 2).toUpperCase();
}

export function techColor(name: string): string {
  return "var(--fg-muted)";
}
