"use client"

import { Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { landingContent } from '@/components/landing/landing-data'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'

const { updates } = landingContent

export function BlogSection() {
  const ref = useAnimateOnScroll()

  return (
    <section id="updates" className="py-16 sm:py-24">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16" data-animate>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{updates.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{updates.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {updates.posts.map((post, i) => (
            <Card
              key={post.title}
              data-animate
              data-animate-delay={String(i + 1)}
              className="flex flex-col"
            >
              <CardHeader className="pb-3">
                <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                <h3 className="text-lg font-semibold leading-tight">{post.title}</h3>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
