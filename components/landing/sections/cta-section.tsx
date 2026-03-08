"use client"

import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DotPattern } from '@/components/dot-pattern'
import { landingContent } from '@/components/landing/landing-data'

const { cta } = landingContent

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <DotPattern
          className="opacity-100 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          size="md"
          fadeStyle="none"
          opacity="low"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
          {cta.headline}
        </h2>
        <p className="mx-auto max-w-2xl text-lg opacity-90 mb-10">
          {cta.subheadline}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" variant="secondary" className="text-base cursor-pointer" asChild>
            <Link href={cta.primaryCta.href}>
              {cta.primaryCta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base cursor-pointer bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
            asChild
          >
            <Link href={cta.secondaryCta.href}>
              <Users className="mr-2 h-4 w-4" />
              {cta.secondaryCta.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
