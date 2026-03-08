"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { landingContent } from '@/components/landing/landing-data'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'

const { faq, sections } = landingContent

export function FaqSection() {
  const ref = useAnimateOnScroll()

  return (
    <section id="faq" className="py-16 sm:py-24 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{sections.faq.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{sections.faq.description}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-2" data-animate data-animate-delay="2">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
