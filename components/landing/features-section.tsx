import type { Feature } from "@/components/landing/types";
import { Container } from "@/components/landing/container";
import { FeatureCard } from "@/components/landing/feature-card";
import { Section } from "@/components/landing/section";
import { SectionHeading } from "@/components/landing/section-heading";

export type FeaturesSectionProps = {
  id?: string;
  title: string;
  description?: string;
  features: Feature[];
};

export function FeaturesSection({
  id = "features",
  title,
  description,
  features,
}: FeaturesSectionProps) {
  return (
    <Section id={id}>
      <Container>
        <SectionHeading title={title} description={description} />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

