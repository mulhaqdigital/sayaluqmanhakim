import type { LucideIcon } from "lucide-react";

export type LandingNavLink = {
  label: string;
  href: string;
};

export type LandingCta = {
  label: string;
  href: string;
};

export type LandingBrand = {
  name: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Optional image shown at top of card (full width, rounded top). */
  image?: {
    src: string;
    alt: string;
  };
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

export type PricingTier = {
  name: string;
  description: string;
  price: {
    amount: number;
    interval: "month" | "year";
  };
  features: string[];
  cta: LandingCta;
  highlight?: {
    label: string;
  };
};

