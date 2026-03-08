"use client"

import { Check, Building2, Handshake, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { landingContent } from '@/components/landing/landing-data'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'

const { partnerships } = landingContent

const tierIcons = [Building2, Handshake, Rocket]

export function PricingSection() {
  const ref = useAnimateOnScroll()

  return (
    <section id="partnerships" className="py-16 sm:py-24">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16" data-animate>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{partnerships.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{partnerships.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          {partnerships.tiers.map((tier, i) => {
            const Icon = tierIcons[i]
            return (
              <Card
                key={tier.name}
                data-animate
                data-animate-delay={String(i + 1)}
                className={`flex flex-col ${tier.recommended ? 'border-primary ring-1 ring-primary' : ''}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {tier.recommended && (
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.contributions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={tier.recommended ? 'default' : 'outline'}
                    className="w-full cursor-pointer"
                    asChild
                  >
                    <a href={tier.href}>{tier.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
