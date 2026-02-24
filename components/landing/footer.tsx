import Link from "next/link";
import type * as React from "react";

import type { LandingBrand, LandingNavLink } from "@/components/landing/types";
import { Container } from "@/components/landing/container";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export type FooterProps = {
  id?: string;
  brand: LandingBrand;
  note: string;
  links: LandingNavLink[];
  trust?: {
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  };
};

export function Footer({
  id = "footer",
  brand,
  note,
  links,
  trust,
}: FooterProps) {
  const Icon = trust?.icon;

  return (
    <footer id={id} className="border-t border-border/60">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-3">
            <Link href={brand.href} className="inline-flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-xl bg-secondary text-foreground">
                <span className="text-sm font-semibold">N</span>
              </span>
              <span className="font-semibold tracking-tight">{brand.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{note}</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">Links</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {trust ? (
            <div className="space-y-3">
              <p className="text-sm font-medium">{trust.label}</p>
              <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-soft">
                {Icon ? (
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="size-5" aria-hidden />
                  </div>
                ) : null}
                <p className="text-sm text-muted-foreground">
                  {trust.description}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <Separator className="my-10" />

        <p className="text-xs text-muted-foreground">
          Built with Next.js, TypeScript, Tailwind, and shadcn/ui.
        </p>
      </Container>
    </footer>
  );
}

