# Nova Landing (Next.js + shadcn/ui)

A clean, scalable SaaS landing page starter using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## Run locally

```bash
npm install
npm run dev
```

## Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  landing/                # all landing sections + reusable cards
    landing-data.ts       # editable content (no monolithic page)
    types.ts              # shared types for landing content
    navbar.tsx
    hero.tsx
    feature-card.tsx
    features-section.tsx
    testimonial-card.tsx
    testimonials-section.tsx
    pricing-card.tsx
    pricing-section.tsx
    cta-section.tsx
    footer.tsx
    container.tsx
    section.tsx
    section-heading.tsx
    index.ts
  ui/                     # shadcn/ui primitives used by landing
    badge.tsx
    button.tsx
    card.tsx
    separator.tsx
  theme-provider.tsx
lib/
  utils.ts
```

## Editing content (example props usage)

All copy/data lives in `components/landing/landing-data.ts` and is passed into section components from `app/page.tsx`:

```ts
import { FeaturesSection, landingContent } from "@/components/landing";

<FeaturesSection
  title={landingContent.sections.features.title}
  description={landingContent.sections.features.description}
  features={landingContent.features}
/>;
```

## Lint / build

```bash
npm run lint
npm run build
```

