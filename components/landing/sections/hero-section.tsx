"use client"

import Link from 'next/link'
import { ArrowRight, GraduationCap, HandHeart, Laptop, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'
import { landingContent } from '@/components/landing/landing-data'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'

const { hero } = landingContent

const pillars = [
  { icon: Laptop, label: 'Web & Mobile', sub: 'Application Development' },
  { icon: GraduationCap, label: 'Youth Training', sub: '& Development' },
  { icon: HandHeart, label: 'Volunteer', sub: 'Community Building' },
  { icon: Truck, label: 'Food Supply', sub: '& Distribution' },
]

const smoothScrollTo = (id: string) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function HeroSection() {
  const ref = useAnimateOnScroll()

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-16 sm:pt-20 pb-16">
      <div className="absolute inset-0">
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center" data-animate>
            <Badge variant="outline" className="px-4 py-2 border-foreground">
              {hero.badge}
            </Badge>
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl lg:text-7xl" data-animate data-animate-delay="1">
            {hero.headline}
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl" data-animate data-animate-delay="2">
            {hero.subheadline}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center" data-animate data-animate-delay="3">
            <Button size="lg" className="text-base cursor-pointer w-full sm:w-auto" asChild>
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base cursor-pointer w-full sm:w-auto" asChild>
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>

        {/* Four pillars — click scrolls to #features */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-40 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4">
              {pillars.map(({ icon: Icon, label, sub }, i) => (
                <button
                  key={label}
                  onClick={() => smoothScrollTo('#features')}
                  data-animate
                  data-animate-delay={String(i + 1)}
                  className="flex flex-col items-center gap-3 rounded-xl border bg-card/80 backdrop-blur p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-200 cursor-pointer"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
