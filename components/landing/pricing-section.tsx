import type { PricingTier } from "@/components/landing/types";
import { Container } from "@/components/landing/container";
import { PricingCard } from "@/components/landing/pricing-card";
import { Section } from "@/components/landing/section";
import { SectionHeading } from "@/components/landing/section-heading";

export type PricingSectionProps = {
  id?: string;
  title: string;
  description?: string;
  tiers: PricingTier[];
};

export function PricingSection({
  id = "pricing",
  title,
  description,
  tiers,
}: PricingSectionProps) {
  return (
    <Section id={id}>
      <Container>
        <SectionHeading title={title} description={description} />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prices shown are examples. Replace with your billing provider.
        </p>
      </Container>
    </Section>
  );
}

