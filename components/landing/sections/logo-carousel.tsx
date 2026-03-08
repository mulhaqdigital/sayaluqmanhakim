"use client"

import { landingContent } from '@/components/landing/landing-data'

const { partners } = landingContent
const allNames = [...partners.names, ...partners.names]

export function LogoCarousel() {
  return (
    <section className="relative py-12 overflow-hidden border-y bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-widest">
          {partners.label}
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-logo-scroll gap-6 sm:gap-12 items-center whitespace-nowrap">
          {allNames.map((name, i) => (
            <div
              key={i}
              className="text-sm font-medium text-muted-foreground/60 hover:text-foreground transition-colors shrink-0 px-4 border-l border-border/40 first:border-0"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
