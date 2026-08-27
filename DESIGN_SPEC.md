# Portfolio Design Specification

_Based on analysis of https://www.iging.tech/_

---

## 1. PAGE SHELL

### Layout Architecture

- **Desktop:** Fixed left sidebar + independent-scroll main content area
- **Sidebar width:** 260px (fixed)
- **Main content:** Fills remaining width, max-width 720px, centered within available space
- **Page background:** Single color (theme-adaptive), no sidebar background distinction — relies on whitespace separation
- **Border between sidebar and content:** None (whitespace only), OR subtle 1px border-right on sidebar
- **Viewport height:** Both sidebar and main content span full viewport height with independent scroll

### Container Structure

```
<body>
  <div class="flex min-h-screen">
    <aside class="w-[260px] flex-shrink-0 sticky top-0 h-screen">Sidebar</aside>
    <main class="flex-1 overflow-y-auto">Main Content</main>
  </div>
</body>
```

---

## 2. SIDEBAR

### Position & Behavior

- Fixed position (sticky top-0, h-screen)
- Independent vertical scroll if content exceeds viewport
- z-index above main content for mobile drawer overlay

### Layout (top → bottom)

| Order | Element              | Details                                                                                  |
| ----- | -------------------- | ---------------------------------------------------------------------------------------- |
| 1     | **Name/Logo Link**   | "John Pritch L. Arcas" → links to `/`, font-weight 600, size ~1.125rem                   |
| 2     | **Navigation Stack** | Vertical list of section links, 8-10px vertical gap, font-size 0.875rem, font-weight 400 |
| 3     | **Divider**          | 1px horizontal rule, muted color                                                         |
| 4     | **Profile Avatar**   | Circular placeholder, 40px diameter, centered                                            |
| 5     | **Visitor Counter**  | Bold number + "person viewing now", font-size 0.75rem, muted                             |
| 6     | **Theme Toggle**     | Three-segment control: System / Light / Dark, pill-shaped, 32px height                   |
| 7     | **Divider**          | 1px horizontal rule                                                                      |
| 8     | **Contact Email**    | Label + mailto link, font-size 0.75rem                                                   |
| 9     | **Social Links**     | GitHub, LinkedIn — icon + handle, font-size 0.75rem                                      |

### Navigation Items (exact order)

1. Projects
2. Experience
3. Stack
4. Certifications
5. Education

### Active State

- Active nav item: font-weight 600, accent color (or subtle background highlight)
- Hover: underline or color transition (150ms)

### Mobile Behavior

- Collapses to hamburger menu button in top-left of main content
- Opens as full-height drawer from left (sheet/dialog)
- Same content, vertically scrollable
- Backdrop overlay on open

---

## 3. MAIN CONTENT

### Container

- Padding: 64px left/right (desktop), 24px (mobile)
- Max-width: 720px (content column), centered in available space
- Vertical section spacing: 80px between section roots

### Content Width Relationship

```
Sidebar (260px) + Gap (32px) + Content Column (720px max) + Gap (flexible) = Viewport
```

---

## 4. TYPOGRAPHY SYSTEM

### Font Family

- **Primary:** Inter (via next/font/google) — UI, body, headings
- **Monospace:** JetBrains Mono or Geist Mono — section numbers, code, metadata

### Scale (rem-based, mobile-first)

| Token         | Size            | Line Height | Weight | Use Case                               |
| ------------- | --------------- | ----------- | ------ | -------------------------------------- |
| `--text-xs`   | 0.75rem (12px)  | 1.5         | 400    | Metadata, dates, labels, visitor count |
| `--text-sm`   | 0.875rem (14px) | 1.5         | 400    | Nav links, body small, descriptions    |
| `--text-base` | 1rem (16px)     | 1.6         | 400    | Body text, paragraphs                  |
| `--text-lg`   | 1.125rem (18px) | 1.5         | 600    | Sidebar name, project titles           |
| `--text-xl`   | 1.25rem (20px)  | 1.4         | 600    | Section headings (number + title)      |
| `--text-2xl`  | 1.5rem (24px)   | 1.3         | 700    | Hero name                              |
| `--text-3xl`  | 1.875rem (30px) | 1.2         | 700    | Hero name (large screens)              |

### Hierarchy Rules

- **Section label:** "01 — projects" → monospace, text-xs, uppercase tracking-wide, muted color
- **Section title:** "Projects" → text-xl, font-weight 600
- **Project title:** text-lg, font-weight 600
- **Role/Company:** text-sm, font-weight 600 (role) + text-sm, font-weight 400 muted (company)
- **Body/Description:** text-base, font-weight 400, color: secondary (muted)
- **Links:** text-sm, font-weight 500, underline on hover

---

## 5. SPACING SYSTEM

### Base Unit: 4px (0.25rem)

| Token        | Value | Use                                  |
| ------------ | ----- | ------------------------------------ |
| `--space-1`  | 4px   | Micro gaps (icon+text)               |
| `--space-2`  | 8px   | Nav item gaps, inline gaps           |
| `--space-3`  | 12px  | Card internal padding (tight)        |
| `--space-4`  | 16px  | Standard padding, card gaps          |
| `--space-5`  | 20px  | Mobile section padding               |
| `--space-6`  | 24px  | Desktop side padding, card padding   |
| `--space-8`  | 32px  | Sidebar-main gap, section header gap |
| `--space-10` | 40px  | Vertical rhythm (section elements)   |
| `--space-12` | 48px  | Section spacing (smaller)            |
| `--space-16` | 64px  | Section spacing (standard)           |
| `--space-20` | 80px  | Section spacing (major)              |

### Vertical Rhythm

- Section-to-section: 80px (space-20)
- Header-to-first-item: 40px (space-10)
- Item-to-item in lists: 24px (space-6)
- Card internal: 16-24px (space-4 to space-6)

---

## 6. COLOR SYSTEM

### Semantic Tokens (CSS Variables)

#### Light Mode

```css
:root {
  --bg: #ffffff;
  --bg-elevated: #fafafa;
  --fg: #0a0a0a;
  --fg-muted: #525252;
  --fg-subtle: #a3a3a3;
  --border: #e5e5e5;
  --border-strong: #d4d4d4;
  --accent: #0a0a0a; /* Near-black for links/active */
  --accent-hover: #262626;
  --avatar-bg: #f5f5f5;
}
```

#### Dark Mode

```css
.dark {
  --bg: #0a0a0a;
  --bg-elevated: #171717;
  --fg: #fafafa;
  --fg-muted: #a3a3a3;
  --fg-subtle: #737373;
  --border: #262626;
  --border-strong: #404040;
  --accent: #fafafa;
  --accent-hover: #d4d4d4;
  --avatar-bg: #262626;
}
```

### Usage Mapping

- Page background: `--bg`
- Card/hover surfaces: `--bg-elevated`
- Primary text: `--fg`
- Secondary text: `--fg-muted`
- Disabled/metadata: `--fg-subtle`
- Borders/dividers: `--border`
- Strong borders (active states): `--border-strong`
- Links/active nav: `--accent`
- Theme toggle segments: `--border` (inactive), `--accent` (active)

---

## 7. BORDER SYSTEM

| Token                   | Value  | Use                                         |
| ----------------------- | ------ | ------------------------------------------- |
| `--border-width`        | 1px    | Standard divider                            |
| `--border-width-strong` | 1px    | Active states (no width change, color only) |
| `--radius-sm`           | 4px    | Buttons, pills, badges                      |
| `--radius-md`           | 8px    | Cards, avatar                               |
| `--radius-full`         | 9999px | Theme toggle segments, avatar               |

### Divider Patterns

- **Horizontal rule:** `border-t border-border` — between sidebar sections, between list items in blog/certifications
- **Card border:** `border border-border` — certification items, project cards (subtle)
- **No heavy shadows** — elevation via border + background only

---

## 8. PROJECT SYSTEM

### Card Layout (Vertical Stack, Full Width)

```
┌─────────────────────────────────────┐
│  [Hero Image - 16:9 or 4:3]         │  ← Full width, aspect-ratio
├─────────────────────────────────────┤
│  Project Title              [Date]  │  ← Flex: title + date range
│  [Type Badge]                       │  ← "Mobile App" / "Web App" pill
│                                     │
│  Description text...                │  ← 2-3 lines, muted
│                                     │
│  ● ● ● +2      View project →       │  ← Tech icons (3 visible) + overflow + link
└─────────────────────────────────────┘
```

### Image Specs

- Aspect ratio: 16:9 (preferred) or 4:3
- Full width of card
- Border-radius: 8px (top corners only, or full card)
- Placeholder: Grey `--avatar-bg` with centered camera icon

### Tech Icons

- Size: 24px diameter, circular
- Show first 3, then "+N" pill badge
- Tooltip on hover (title attribute)

### Projects Data (from user)

1. **Ritmo** — Expo, TypeScript, React Native, Supabase, Godot

---

## 9. SECTION SYSTEM

### Section Header (All Sections)

```
┌──────────────────────────────────────────────┐
│  02 — projects                    all projects →  │  ← Flex justify-between
└──────────────────────────────────────────────┘
```

- Left: Monospace number + em dash + title, text-xs, tracking-wide, uppercase, muted
- Right: "view all" link, text-sm, font-medium, underline hover

### Section Order

1. **Projects** (required — user has 1 confirmed)
2. **Experience** (required — 1 confirmed: Internship @ Philkoei International)
3. **Stack** (required — full list provided)
4. **Certifications** (placeholder)
5. **Education** (required — BSIT confirmed)

### Section-Specific Layouts

#### Projects

- Vertical stack of project cards (as above)
- Gap: 48px between cards

#### Experience

- Numbered list (1., 2., ...)
- Each entry:
  ```
  1.  Full-Stack Engineer    2025
      Philkoei International
  ```
- Gap between entries: 32px

#### Stack

- Responsive grid of tech items (icon + label)
- 3 columns desktop, 2 tablet, 1 mobile (or flex-wrap)
- Each item: centered icon (32px) + label below (text-xs)
- Gap: 24px

#### Certifications

- Vertical list, each with border
- Each item:
  ```
  ┌────────────────────────────────────┐
  │ [Logo]  Certification Name         │
  │        Issuer Name         Verify →│
  └────────────────────────────────────┘
  ```
- Logo: 32px square, rounded

#### Education

- Single entry (or list if multiple)
- Format matches experience but simpler:
  ```
  Bachelor of Science in Information Technology
  [University] · [Graduation Year]
  ```

---

## 10. RESPONSIVE SYSTEM

### Breakpoints

| Name    | Width          | Tailwind      |
| ------- | -------------- | ------------- |
| Mobile  | < 640px        | (base)        |
| Tablet  | 640px - 1023px | `sm:`         |
| Desktop | ≥ 1024px       | `md:` / `lg:` |

### Mobile Adaptations

| Element           | Desktop          | Mobile                           |
| ----------------- | ---------------- | -------------------------------- |
| Sidebar           | Fixed left 260px | Hidden → Hamburger drawer        |
| Main padding      | 64px horizontal  | 24px horizontal                  |
| Content max-width | 720px            | 100%                             |
| Section gap       | 80px             | 64px                             |
| Section header    | Flex row         | Flex column, gap-2, align-start  |
| Project cards     | Full-width       | Full-width (same)                |
| Stack grid        | 3-col            | 2-col or flex-wrap               |
| Theme toggle      | In sidebar       | In drawer header or fixed bottom |

### Hamburger Menu

- Top-left of main content (fixed, z-50)
- 40x40px touch target
- Opens Sheet/Drawer from left
- Same sidebar content, scrollable

---

## 11. ANIMATION SYSTEM

### Principles

- Duration: 150ms (fast, snappy)
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- Respect `prefers-reduced-motion`

### Specific Animations

| Element                 | Animation                                                                      |
| ----------------------- | ------------------------------------------------------------------------------ |
| Nav link hover          | Color transition 150ms                                                         |
| Theme toggle segment    | Background/color 150ms                                                         |
| Sidebar drawer (mobile) | Slide 200ms + fade backdrop                                                    |
| Project card hover      | Border color + slight translateY(-2px) 150ms                                   |
| Marquee (tech ticker)   | **Continuous linear** — infinite horizontal scroll, ~30s loop, pauses on hover |
| Link underline          | Width transition from center 150ms                                             |

### Marquee Implementation

- Duplicate track for seamless loop
- CSS `animation: marquee 30s linear infinite`
- `animation-play-state: paused` on hover
- Track width = 2x content width

---

## 12. FOOTER SYSTEM

- **No traditional footer** — sidebar bottom contact/social serves as persistent footer
- Main content ends after last section (Education)
- Optional: Thin border-top + copyright line at very bottom of main content (minimal)

---

## 13. HERO SECTION (Top of Main Content)

```
┌──────────────────────────────────────────────┐
│  [Avatar - 120px]                            │
│                                              │
│  John Pritch L. Arcas                        │  ← text-3xl/700
│  IT Graduate · Aspiring Software Developer   │  ← text-base/muted
│                                              │
│  [GitHub] [LinkedIn] [Email]                 │  ← Icon pills, gap-2
│                                              │
│  [Tech Marquee - scrolling icons]            │  ← Separate component
└──────────────────────────────────────────────┘
```

- Avatar: 120px diameter, border-radius full, `--avatar-bg` placeholder
- Social pills: 36px height, `--border` border, `--fg-muted` text, hover `--accent`
- Vertical padding: 64px top, 48px bottom before marquee
- Marquee: Full width, centered, gap-8 between items

---

## 14. TECH MARQUEE ITEMS (User's Stack)

Grouped by category for visual organization:

**Languages:** PHP, Python, Java, JavaScript, TypeScript, HTML, CSS, C++, .NET
**Mobile:** React Native, Expo, Expo Router
**Databases:** MySQL, PostgreSQL, SQLite, Oracle
**Tools/Platforms:** Supabase, GitHub, MySQL Workbench, PyQt, PySide, Godot

Each item: SVG icon (24x24) + label (text-xs, centered below)

---

## 15. IMPLEMENTATION NOTES

### Component Structure (Minimal)

```
AppShell
├── Sidebar
│   ├── SidebarNav
│   ├── SidebarAvatar
│   ├── VisitorCount (placeholder)
│   ├── ThemeToggle
│   ├── ContactInfo
│   └── SocialLinks
├── MainContent
│   ├── Hero
│   ├── TechMarquee
│   ├── Section (reusable wrapper)
│   ├── ProjectCard
│   ├── ExperienceItem
│   ├── StackGrid
│   ├── CertificationItem
│   └── EducationItem
```

### Data Files (Separate from Components)

- `data/projects.ts` — Ritmo + placeholders
- `data/experience.ts` — Philkoei + placeholders
- `data/stack.ts` — Full categorized list
- `data/certifications.ts` — Placeholders
- `data/education.ts` — BSIT + placeholders

### CSS Approach

- Tailwind v4 with CSS variables for theming
- `@theme` directive for design tokens
- Minimal custom CSS (globals.css only for base + variables)

### Theme Toggle

- Use `next-themes` with `attribute="class"`
- Three-state: system / light / dark
- Persist in localStorage
- Sync with OS preference on "system"

---

## 16. PLACEHOLDER CONTENT

Where user data is missing, use these exact placeholders:

| Field                | Placeholder                                   |
| -------------------- | --------------------------------------------- |
| Profile Image        | `[PROFILE IMAGE]` (grey box with camera icon) |
| Project Image        | `[PROJECT IMAGE]` (grey box with camera icon) |
| Project Description  | `[PROJECT DESCRIPTION]`                       |
| Project Date         | `[PROJECT DATE]`                              |
| Project Link         | `[PROJECT LINK]`                              |
| Company              | `[COMPANY]`                                   |
| Role                 | `[ROLE]`                                      |
| Employment Dates     | `[EMPLOYMENT DATES]`                          |
| University           | `[UNIVERSITY]`                                |
| Graduation Year      | `[GRADUATION YEAR]`                           |
| Certification        | `[CERTIFICATION NAME]`                        |
| Certification Issuer | `[ISSUER]`                                    |
| Verification Link    | `[VERIFY LINK]`                               |

---

## 17. SUCCESS CRITERIA (Visual Verification)

After implementation, verify against reference:

- [ ] Sidebar fixed left, 260px, full height
- [ ] Main content max 720px, centered in remaining space
- [ ] Section headers: "01 — projects" format with "view all" right-aligned
- [ ] Project cards: image on top, full width, tech icons row, "View project" link
- [ ] Blog-style list for certifications/education/experience (not cards)
- [ ] Monospace section numbers, muted
- [ ] 1px borders/dividers, no shadows
- [ ] Theme toggle: 3-segment pill in sidebar
- [ ] Tech marquee: smooth infinite scroll, pauses on hover
- [ ] Mobile: hamburger → drawer with same sidebar content
- [ ] Overall feel: editorial, restrained, not SaaS
- [ ] No gradient backgrounds, no glassmorphism, no giant hero typography
