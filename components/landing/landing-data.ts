import {
  Bot,
  ChartNoAxesCombined,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type {
  Feature,
  LandingBrand,
  LandingCta,
  LandingNavLink,
  PricingTier,
  Testimonial,
} from "@/components/landing/types";

const brand: LandingBrand = { name: "Nova", href: "/" };

const navLinks: LandingNavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

const navbarCta: LandingCta = { label: "Get started", href: "#pricing" };

const sections = {
  features: {
    title: "Everything you need to launch",
    description:
      "A modular foundation with reusable components — designed to scale from landing to full product.",
  },
  testimonials: {
    title: "Loved by product teams",
    description:
      "A few words from teams who value clean UI, strong typing, and easy iteration.",
  },
  pricing: {
    title: "Simple pricing",
    description:
      "Three tiers to get started. Swap in your real plans and billing provider.",
  },
};

const hero = {
  badge: "New · Launch-ready template",
  headline: "Ship a polished product landing in days, not weeks.",
  subheadline:
    "Nova is a clean, scalable SaaS landing starter built with Next.js, TypeScript, Tailwind, and shadcn/ui — modular sections, strong typing, and production-ready structure.",
  primaryCta: { label: "Start free", href: "#pricing" } satisfies LandingCta,
  secondaryCta: { label: "See features", href: "#features" } satisfies LandingCta,
};

const features: Feature[] = [
  {
    title: "Natural design",
    description:
      "A clean, minimal layout with a focus on clarity — built for modern products and teams.",
    icon: Sparkles,
    image: {
      src: "/images/feature.png",
      alt: "Close-up of delicate flowers and foliage",
    },
  },
  {
    title: "Natural design",
    description:
      "A clean, minimal layout with a focus on clarity — built for modern products and teams.",
    icon: Sparkles,
    image: {
      src: "/images/feature.png",
      alt: "Close-up of delicate flowers and foliage",
    },
  },
  {
    title: "Natural design",
    description:
      "A clean, minimal layout with a focus on clarity — built for modern products and teams.",
    icon: Sparkles,
    image: {
      src: "/images/feature.png",
      alt: "Close-up of delicate flowers and foliage",
    },
  },
  {
    title: "Modular sections",
    description:
      "Swap, reorder, or expand sections without touching a monolithic page file.",
    icon: Sparkles,
  },
  {
    title: "Typed, reusable cards",
    description:
      "Feature, testimonial, and pricing cards are designed for reusability and scale.",
    icon: Bot,
  },
  {
    title: "Built for growth",
    description:
      "A solid architecture with sane defaults — ideal for turning a landing into a full product.",
    icon: ChartNoAxesCombined,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "We replaced three one-off landing pages with one scalable system. The UI feels premium and stays consistent as we grow.",
    name: "Avery Chen",
    role: "Head of Product",
    company: "Northwind",
  },
  {
    quote:
      "The component structure is the real win. We can ship marketing updates without worrying about regressions.",
    name: "Jordan Patel",
    role: "Frontend Lead",
    company: "Copper",
  },
  {
    quote:
      "Clean, modern, and easy to extend. We added a blog and auth on top with minimal refactors.",
    name: "Morgan Rivera",
    role: "Founder",
    company: "Stage",
  },
];

const pricing: PricingTier[] = [
  {
    name: "Starter",
    description: "For personal projects and early validation.",
    price: { amount: 19, interval: "month" },
    features: ["Unlimited pages", "Basic analytics", "Email support"],
    cta: { label: "Choose Starter", href: "#cta" },
  },
  {
    name: "Pro",
    description: "For teams shipping weekly and scaling fast.",
    price: { amount: 49, interval: "month" },
    features: ["Everything in Starter", "Team workspaces", "Priority support"],
    cta: { label: "Choose Pro", href: "#cta" },
    highlight: { label: "Most popular" },
  },
  {
    name: "Scale",
    description: "For orgs that need controls and security.",
    price: { amount: 99, interval: "month" },
    features: ["Everything in Pro", "SAML SSO", "Audit logs"],
    cta: { label: "Talk to sales", href: "#cta" },
  },
];

const cta = {
  headline: "Ready to launch your next SaaS?",
  subheadline:
    "Start with a clean foundation. Add auth, billing, docs, and a dashboard when you’re ready.",
  primaryCta: { label: "Get started", href: "#pricing" } satisfies LandingCta,
  secondaryCta: { label: "Contact sales", href: "#footer" } satisfies LandingCta,
};

const footer = {
  note: "© " + new Date().getFullYear() + " Nova. All rights reserved.",
  links: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ] satisfies LandingNavLink[],
  trust: {
    label: "Security-first",
    description: "SOC 2-ready patterns and accessible components.",
    icon: ShieldCheck,
  },
};

export const landingContent = {
  brand,
  navLinks,
  navbarCta,
  sections,
  hero,
  features,
  testimonials,
  pricing,
  cta,
  footer,
};

