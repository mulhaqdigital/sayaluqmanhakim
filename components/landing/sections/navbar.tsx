"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { landingContent } from '@/components/landing/landing-data'

const { brand, navLinks, navbarCta } = landingContent

const sectionIds = ['hero', 'about', 'impact', 'features', 'story', 'partnerships', 'testimonials', 'updates', 'faq', 'contact']

const smoothScrollTo = (targetId: string) => {
  if (targetId.startsWith('#')) {
    const element = document.querySelector(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Brand */}
        <Link href={brand.href} className="flex items-center space-x-2 cursor-pointer">
          <Logo size={32} />
          <span className="font-bold">{brand.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href
            return (
              <button
                key={item.label}
                onClick={() => smoothScrollTo(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'hover:text-primary hover:bg-accent'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <ModeToggle variant="ghost" />
          <Button onClick={() => smoothScrollTo(navbarCta.href)} className="cursor-pointer">
            {navbarCta.label}
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[360px] p-0 flex flex-col">
            <SheetHeader className="p-4 pb-2 border-b">
              <div className="flex items-center gap-2">
                <Logo size={20} />
                <SheetTitle className="text-base font-semibold">{brand.name}</SheetTitle>
                <div className="ml-auto flex items-center gap-1">
                  <ModeToggle variant="ghost" />
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 cursor-pointer">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetHeader>

            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                    onClick={(e) => {
                      setIsOpen(false)
                      if (item.href.startsWith('#')) {
                        e.preventDefault()
                        setTimeout(() => smoothScrollTo(item.href), 100)
                      }
                    }}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            <div className="border-t p-4">
              <Button
                className="w-full cursor-pointer"
                onClick={() => {
                  setIsOpen(false)
                  setTimeout(() => smoothScrollTo(navbarCta.href), 100)
                }}
              >
                {navbarCta.label}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
