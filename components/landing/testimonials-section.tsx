import type { Testimonial } from "@/components/landing/types";
import { Container } from "@/components/landing/container";
import { Section } from "@/components/landing/section";
import { SectionHeading } from "@/components/landing/section-heading";
import { TestimonialCard } from "@/components/landing/testimonial-card";

export type TestimonialsSectionProps = {
  id?: string;
  title: string;
  description?: string;
  testimonials: Testimonial[];
};

export function TestimonialsSection({
  id = "testimonials",
  title,
  description,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <Section id={id} className="bg-muted/30">
      <Container>
        <SectionHeading title={title} description={description} />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={`${t.name}-${t.role}`} testimonial={t} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

