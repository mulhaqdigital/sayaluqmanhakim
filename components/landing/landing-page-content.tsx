"use client"
import { LandingNavbar } from './sections/navbar'
import { HeroSection } from './sections/hero-section'
import { AboutSection } from './sections/about-section'
import { StatsSection } from './sections/stats-section'
import { LogoCarousel } from './sections/logo-carousel'
import { GallerySection } from './sections/gallery-section'
import { FeaturesSection } from './sections/features-section'
import { TeamSection } from './sections/team-section'
import { PricingSection } from './sections/pricing-section'
import { TestimonialsSection } from './sections/testimonials-section'
import { BlogSection } from './sections/blog-section'
import { FaqSection } from './sections/faq-section'
import { CTASection } from './sections/cta-section'
import { ContactSection } from './sections/contact-section'
import { LandingFooter } from './sections/footer'

export function LandingPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <LogoCarousel />
      <GallerySection />
      <FeaturesSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
      <CTASection />
      <ContactSection />
      <LandingFooter />
    </div>
  )
}
