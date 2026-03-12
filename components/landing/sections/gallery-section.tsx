"use client"

import Image from 'next/image'

const ROW_ONE = [
  {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    alt: 'Abstract gradient design',
  },
  {
    src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&q=80',
    alt: 'Geometric minimal architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    alt: 'Modern interior design',
  },
  {
    src: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&q=80',
    alt: 'Creative workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?w=600&q=80',
    alt: 'Minimal product photography',
  },
  {
    src: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=600&q=80',
    alt: 'Design tools and process',
  },
  {
    src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    alt: 'Fluid color shapes',
  },
]

const ROW_TWO = [
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80',
    alt: 'Mountain landscape at night',
  },
  {
    src: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=600&q=80',
    alt: 'Bright minimal still life',
  },
  {
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    alt: 'Modern building facade',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    alt: 'Aerial mountain view',
  },
  {
    src: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=600&q=80',
    alt: 'Urban geometry',
  },
  {
    src: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&q=80',
    alt: 'Purple gradient abstract',
  },
  {
    src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80',
    alt: 'Pastel color palette',
  },
]

interface Card {
  src: string
  alt: string
}

function GalleryCard({ src, alt }: Card) {
  return (
    <div className="relative flex-shrink-0 w-[200px] sm:w-[300px] lg:w-[380px] h-[140px] sm:h-[200px] lg:h-[250px] rounded-2xl overflow-hidden shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 380px"
        className="object-cover transition-transform duration-700 hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )
}

function MarqueeRow({
  cards,
  direction,
}: {
  cards: Card[]
  direction: 'left' | 'right'
}) {
  // Duplicate items so the seam is invisible
  const doubled = [...cards, ...cards]
  const cls =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-4 sm:gap-5 w-max ${cls}`}>
        {doubled.map((card, i) => (
          <GalleryCard key={`${card.alt}-${i}`} {...card} />
        ))}
      </div>
    </div>
  )
}

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 overflow-hidden bg-background"
    >
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Inspiration
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          A gallery of possibilities
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Every project starts with an idea. Here&apos;s a glimpse of the visual
          world we draw from.
        </p>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-4 sm:gap-5">
        <MarqueeRow cards={ROW_ONE} direction="left" />
        <MarqueeRow cards={ROW_TWO} direction="right" />
      </div>
    </section>
  )
}
