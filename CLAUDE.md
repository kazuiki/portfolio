# Portfolio Project Instructions

## Agent-Spec Integration

This project follows the agent-spec standard located at:

```
C:\Users\Admin\Downloads\agent-spec
```

**This external directory is the source of truth for agent behavior, skills, workflows, and decision frameworks.**

---

## Instruction Hierarchy

Claude must resolve conflicts using this precedence order (highest first):

1. **System/platform-level instructions and safety requirements** — Claude's built-in safety guardrails and platform constraints.
2. **Explicit user instructions** — Direct commands from the user in the current conversation or task.
3. **This CLAUDE.md** — Project-specific configuration and routing instructions.
4. **Agent-spec specifications** — Files in `C:\Users\Admin\Downloads\agent-spec`:
   - `core/` — Normative tier-4 behavioral specifications (instruction hierarchy, decision framework, output policy, safety)
   - `context/` — Project-specific templates (PRD, ARCHITECTURE, RULES, etc.)
   - `modules/` — Feature-based capability suites and skills
5. **Existing project conventions and documentation** — Code patterns, naming conventions, and architecture already established in this repository.
6. **Claude's general defaults** — Used only when nothing more specific applies.

**Lower-priority instructions must not override higher-priority instructions.**

---

## When to Consult Agent-Spec

Claude must inspect the relevant files in `C:\Users\Admin\Downloads\agent-spec` when:

- Starting a substantial task (new features, refactoring, architectural changes)
- Creating or modifying architecture
- Making decisions that may already be defined by agent specifications
- Working with a workflow covered by an existing skill
- Unsure about how a task should be performed
- Before improvising a process that may already have a defined workflow

Do not repeatedly read files when the relevant instructions are already known and applicable, but always verify when the task requires information that has not yet been inspected.

---

## Core Specification Files

The authoritative behavioral specifications are in `C:\Users\Admin\Downloads\agent-spec\core/`:

| File                       | Domain                    | Purpose                                                         |
| -------------------------- | ------------------------- | --------------------------------------------------------------- |
| `instruction-hierarchy.md` | Discovery & Precedence    | How to discover and rank instruction sources (7-tier hierarchy) |
| `decision-framework.md`    | Engineering Evaluation    | Trade-off analysis, clean-code standards, dependency governance |
| `output-policy.md`         | Presentation & Reporting  | Anti-hallucination, confidence reporting, validation reporting  |
| `safety.md`                | Non-Negotiable Boundaries | Security constraints, change-risk gating, capability boundaries |

**These files are normative tier-4 — they govern how to work, not project-specific facts.**

---

## Context Templates

Project-specific facts belong in `C:\Users\Admin\Downloads\agent-spec\context/`:

| Template          | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `PRD.md`          | Product requirements, scope, success metrics        |
| `ARCHITECTURE.md` | System architecture, component topology, data flows |
| `RULES.md`        | Project coding standards and invariants             |
| `DESIGN.md`       | Design system and visual standards                  |
| `SCHEMA.md`       | Data model and API contracts                        |
| `TASKS.md`        | Task decomposition and work tracking                |

These templates contain `[PLACEHOLDER: ...]` markers that should be filled in with project details when relevant.

---

## Skills & Modules

Feature-based capability suites are in `C:\Users\Admin\Downloads\agent-spec\modules/`:

- `autonomous-dev/` — Autonomous engineering lifecycle (ideation, planning, execution, testing, debugging, review)
- `content-and-growth/` — Content creation, social copywriting, audience strategy
- `design-engineering/` — Design system implementation, component libraries
- `dev-workflow/` — Development workflow automation
- `mobile-react-native/` — React Native mobile development
- `prompt-engineering/` — Prompt construction and optimization
- `research-and-productivity/` — Research assistance and productivity workflows
- `enterprise-business/` — Enterprise business logic patterns

### Skill Discovery

When a task matches an existing skill:

1. Identify the relevant skill file in `C:\Users\Admin\Downloads\agent-spec\modules\`
2. Read the skill's `SKILL.md` or relevant stage file
3. Follow the skill's defined workflow
4. Use the skill's requirements when implementing the task
5. Do not replace an applicable skill with an improvised workflow without a valid reason

Each skill follows the 9-dimension intent model and includes trigger matrices, validation gates, and anti-pattern compliance checks.

---

## General Workflow

For substantial tasks:

1. **Understand the request** — Clarify intent if ambiguous
2. **Inspect relevant specifications** — Check `agent-spec/core/` and applicable `modules/`
3. **Inspect existing project structure** — Read relevant files to understand current state
4. **Identify files to change** — Scope the minimal necessary changes
5. **Plan the smallest appropriate change** — State the approach and tradeoffs
6. **Implement** — Make focused changes
7. **Verify/test** — Run builds, linters, tests
8. **Review for unintended modifications** — Check for scope creep
9. **Report** — State what was changed, what was verified, and any issues

---

## Safety & Scope Constraints

Claude must:

- **Avoid destructive operations** unless explicitly requested and confirmed
- **Avoid deleting or overwriting files unnecessarily**
- **Never expose secrets or credentials** — Reference by name, never echo values
- **Avoid modifying unrelated files** — Scope changes to the task
- **Avoid introducing unnecessary dependencies** — Check existing dependencies first
- **Avoid changing architecture without justification** — State the reason
- **Confirm assumptions by inspecting the actual project** — Don't guess
- **Preserve existing functionality** unless the request requires otherwise
- **Handle secrets, `.env` files, credentials, and API keys safely** — Never commit them

---

## Communication Standards

Claude must:

- **Clearly state important assumptions** — Label assumptions explicitly
- **Explain blockers when they occur** — State what's blocking and why
- **Report significant architectural decisions** — Document choices made
- **Mention what was actually changed** — Be specific
- **Mention what was tested or verified** — State verification results
- **Clearly distinguish verified facts from assumptions** — Use confidence levels (High/Medium/Low)
- **State when discovery was skipped or partial** — Don't imply completeness

---

## Anti-Pattern Compliance

Before proposing or implementing prompts/skills, verify they don't encode patterns from:

```
C:\Users\Admin\Downloads\agent-spec\docs\anti-patterns.md
```

Common issues to avoid:

- Vague task verbs ("help me with...")
- No success criteria ("make it better")
- No scope boundary ("fix my app")
- Two tasks in one prompt
- Assumed prior knowledge
- Adding CoT scaffolding to reasoning models (Claude 5 family)
- Unlocked filesystem with no restrictions
- No circuit breaker for loops

---

## Runtime Adapter

This project uses the **Claude Code** runtime adapter. See:

```
C:\Users\Admin\Downloads\agent-spec\runtime\claude.md
```

Key mechanics:

- `CLAUDE.md` is read automatically at session start
- Subdirectory `CLAUDE.md` files layer on top of root instructions
- Use `@path/to/file` syntax to import without inlining
- Keep standing rules in `CLAUDE.md` / `AGENTS.md`
- Store specialist workflows in `.agents/skills/<skill-name>/SKILL.md`

---

## Project Context

This is a **Next.js 15 portfolio website** built with:

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Linting:** ESLint
- **Formatting:** Prettier with lint-staged
- **Git Hooks:** Husky

### Key Directories

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── (marketing)/  # Marketing page routes
│   └── api/          # API route handlers
├── components/       # Shared UI components (shadcn/ui)
├── features/         # Feature-based modules
├── hooks/            # Custom React hooks
├── lib/              # Utilities and configuration
├── providers/        # React context providers
├── services/         # API clients and data fetching
└── types/            # TypeScript type definitions
```

### Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## Quick Reference

**Agent-spec root:** `C:\Users\Admin\Downloads\agent-spec`

**Core specs:** `agent-spec\core/` (instruction-hierarchy, decision-framework, output-policy, safety)

**Skills:** `agent-spec\modules\` (autonomous-dev, content-and-growth, etc.)

**Anti-patterns:** `agent-spec\docs\anti-patterns.md`

**Claude adapter:** `agent-spec\runtime\claude.md`
