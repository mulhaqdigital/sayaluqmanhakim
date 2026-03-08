"use client"

import { CheckCircle2 } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { landingContent } from '@/components/landing/landing-data'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'

const { about } = landingContent

export function AboutSection() {
  const ref = useAnimateOnScroll()

  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left — description + accordion */}
          <div data-animate>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {about.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {about.description}
            </p>
            <Accordion type="single" collapsible defaultValue="mission" className="space-y-2">
              {about.accordion.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline text-sm">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right — highlights */}
          <div data-animate data-animate-delay="2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-6">
              What sets us apart
            </h3>
            <ul className="space-y-4">
              {about.highlights.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
