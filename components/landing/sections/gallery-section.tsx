"use client"

import Image from 'next/image'

const ROW_ONE = [
  {
    src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80',
    alt: 'Charity and volunteering',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    alt: 'Conference event',
  },
  {
    src: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=600&q=80',
    alt: 'Conference event',
  },
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    alt: 'Charity',
  },
  {
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',
    alt: 'Volunteering',
  },
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    alt: 'UI/UX',
  },
  {
    src: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&q=80',
    alt: 'UI/UX',
  },
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80',
    alt: 'Tech meetup',
  },
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
    alt: 'Tech meetup conference',
  },
  {
    src: '/images/IMG_0860.jpg',
    alt: 'Children playing with cardboard boxes',
  },
]

const ROW_TWO = [
  {
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
    alt: 'UX button UI close-up',
  },
  {
    src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80',
    alt: 'Conference audience',
  },
  {
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
    alt: 'Conference speaker',
  },
  {
    src: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=600&q=80',
    alt: 'Islamic event',
  },
  {
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80',
    alt: 'Media production',
  },
  {
    src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80',
    alt: 'UI UX design',
  },
  {
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
    alt: 'Tech conference',
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
