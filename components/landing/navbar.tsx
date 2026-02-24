import Link from "next/link";

import type {
  LandingBrand,
  LandingCta,
  LandingNavLink,
} from "@/components/landing/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type NavbarProps = {
  brand: LandingBrand;
  links: LandingNavLink[];
  cta: LandingCta;
};

export function Navbar({ brand, links, cta }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-soft"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link
            href={brand.href}
            className="font-semibold tracking-tight"
            aria-label={`${brand.name} home`}
          >
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-xl bg-secondary text-foreground">
                <span className="text-sm font-semibold">N</span>
              </span>
              <span>{brand.name}</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Button asChild className="rounded-xl shadow-sm">
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </div>
    </header>
  );
}

