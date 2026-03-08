"use client"

import { Card, CardContent } from '@/components/ui/card'
import { landingContent } from '@/components/landing/landing-data'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'

const { testimonials, sections } = landingContent

export function TestimonialsSection() {
  const ref = useAnimateOnScroll()

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16" data-animate>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{sections.testimonials.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{sections.testimonials.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card
              key={testimonial.name}
              data-animate
              data-animate-delay={String(i + 1)}
              className="flex flex-col"
            >
              <CardContent className="pt-8 flex flex-col flex-1">
                <span className="text-4xl sm:text-6xl font-serif text-primary leading-none mb-4 select-none">&ldquo;</span>
                <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-6 pt-4 border-t">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
