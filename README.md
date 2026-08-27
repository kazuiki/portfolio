# Premium Developer Portfolio

Professional portfolio built with:

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- ESLint + Prettier + Husky + lint-staged

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run format
npm run format:check
```

## Architecture

Feature-first structure:

```txt
src/
  app/
  features/
    hero/
    about/
    skills/
    projects/
    experience/
    certificates/
    contact/
    footer/
  components/
    ui/
    common/
    layout/
  hooks/
  lib/
  services/
  types/
  utils/
  constants/
  styles/
  providers/
  assets/
```

Each feature is isolated with:

- `components/`
- `hooks/`
- `types/`
- `constants/`
- `animations/`
- `index.ts`
