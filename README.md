About Page — sayaLuqmanHakim
Headline:

Building Solutions. Empowering Youth. Strengthening Communities.

Introduction / Mission Statement:

At sayaLuqmanHakim, we believe in creating meaningful impact through technology, mentorship, and community action. Our mission is simple but powerful: to empower individuals, support organizations, and uplift communities across Malaysia.

Whether it’s developing digital solutions, training the next generation, organizing volunteer networks, or distributing essential food supplies, every initiative is driven by a commitment to make a difference.

Our Pillars of Impact

1. Web & Mobile Application Development
We design and build intuitive, high-performance web and mobile applications tailored to solve real-world challenges. From startups to organizations, our solutions enhance user experience and operational efficiency.

2. Youth Training & Development
We equip young people with skills, knowledge, and mentorship to thrive in today’s fast-changing world. Through workshops, talks, and guided programs, we nurture the next generation of leaders and innovators.

3. Volunteer Community Building
Our volunteer networks connect passionate individuals with impactful projects. By fostering collaboration and engagement, we help organizations strengthen their social impact and reach more communities effectively.

4. Food Supply & Distribution
We provide essential dry food materials to communities in need, with nationwide coverage across Malaysia. By partnering with local organizations and volunteers, we ensure aid reaches those who need it most.

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

