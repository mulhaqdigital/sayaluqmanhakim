"use client"

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { landingContent } from '@/components/landing/landing-data'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'

const { features, sections } = landingContent

export function FeaturesSection() {
  const ref = useAnimateOnScroll()

  return (
    <section id="features" className="py-16 sm:py-24">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16" data-animate>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {sections.features.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {sections.features.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <Card key={feature.title} className="relative overflow-hidden" data-animate data-animate-delay={String(i + 1)}>
              <CardHeader className="pb-0">
                <CardDecorator>
                  <feature.icon className="h-6 w-6" />
                </CardDecorator>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
