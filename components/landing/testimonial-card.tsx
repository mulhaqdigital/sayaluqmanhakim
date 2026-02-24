import type { Testimonial } from "@/components/landing/types";
import { Card, CardContent } from "@/components/ui/card";

export type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="rounded-xl shadow-soft transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <figure className="space-y-4">
          <blockquote className="text-sm leading-relaxed text-foreground/90">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {testimonial.name}
            </span>{" "}
            · {testimonial.role}
            {testimonial.company ? `, ${testimonial.company}` : ""}
          </figcaption>
        </figure>
      </CardContent>
    </Card>
  );
}

