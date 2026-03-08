"use client"

import { landingContent } from '@/components/landing/landing-data'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'

const { story } = landingContent

export function TeamSection() {
  const ref = useAnimateOnScroll()

  return (
    <section id="story" className="py-16 sm:py-24 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16" data-animate>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{story.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{story.description}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-8">
              {story.milestones.map((milestone, index) => {
                const isNext = milestone.year === '2026 →'
                return (
                  <div
                    key={milestone.year}
                    data-animate
                    data-animate-delay={String((index % 4) + 1)}
                    className="relative flex gap-4 sm:gap-8"
                  >
                    <div className="relative z-10 flex-shrink-0 flex items-start justify-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-[10px] font-bold text-center leading-tight px-1 overflow-hidden ${
                        isNext
                          ? 'bg-primary/20 text-primary border border-primary/40 border-dashed'
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {milestone.year}
                      </div>
                    </div>

                    <div className={`flex-1 pb-2 ${isNext ? 'opacity-80' : ''}`}>
                      <h3 className={`text-lg font-semibold mb-1 ${isNext ? 'text-primary' : ''}`}>
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
