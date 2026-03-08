"use client"

import { landingContent } from '@/components/landing/landing-data'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'

const { stats } = landingContent

export function StatsSection() {
  const ref = useAnimateOnScroll()

  return (
    <section id="impact" className="py-16 sm:py-24">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-animate
              data-animate-delay={String((i % 3) + 1)}
              className="flex items-start gap-4 p-6 rounded-xl border bg-card"
            >
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight break-words">{stat.value}</div>
                <div className="text-sm font-semibold mt-0.5">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
