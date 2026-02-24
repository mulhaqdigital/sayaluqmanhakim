import type { Metadata } from "next";

import {
  CtaSection,
  FeaturesSection,
  Footer,
  Hero,
  Navbar,
  PricingSection,
  TestimonialsSection,
  landingContent,
} from "@/components/landing";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Nova is a clean, scalable SaaS landing starter built with Next.js, TypeScript, Tailwind, and shadcn/ui.",
};

export default function HomePage() {
  const { brand, navLinks, navbarCta, sections, hero, features, testimonials, pricing, cta, footer } =
    landingContent;

  return (
    <div className="min-h-dvh">
      <Navbar brand={brand} links={navLinks} cta={navbarCta} />

      <main id="main">
        <Hero
          badge={hero.badge}
          headline={hero.headline}
          subheadline={hero.subheadline}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
        />

        <FeaturesSection
          title={sections.features.title}
          description={sections.features.description}
          features={features}
        />

        <TestimonialsSection
          title={sections.testimonials.title}
          description={sections.testimonials.description}
          testimonials={testimonials}
        />

        <PricingSection
          title={sections.pricing.title}
          description={sections.pricing.description}
          tiers={pricing}
        />

        <CtaSection
          headline={cta.headline}
          subheadline={cta.subheadline}
          primaryCta={cta.primaryCta}
          secondaryCta={cta.secondaryCta}
        />
      </main>

      <Footer
        brand={brand}
        note={footer.note}
        links={footer.links}
        trust={footer.trust}
      />
    </div>
  );
}

