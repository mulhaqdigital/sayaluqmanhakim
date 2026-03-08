"use client"

import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Separator } from '@/components/ui/separator'
import { landingContent } from '@/components/landing/landing-data'

const { brand, footer } = landingContent

const smoothScrollTo = (href: string) => {
  if (href.startsWith('#')) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function LandingFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href={brand.href} className="flex items-center space-x-2 mb-4">
              <Logo size={28} />
              <span className="font-bold text-lg">{brand.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold mb-4">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          smoothScrollTo(link.href)
                        }
                      }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">{footer.note}</p>
          <div className="flex flex-wrap gap-4">
            {footer.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
