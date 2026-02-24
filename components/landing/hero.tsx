import Link from "next/link";

import type { LandingCta } from "@/components/landing/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { Section } from "@/components/landing/section";

export type HeroProps = {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: LandingCta;
  secondaryCta: LandingCta;
};

export function Hero({
  badge,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <Section className="relative overflow-hidden pt-12 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,theme(colors.muted.DEFAULT)_0%,transparent_55%)]"
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {badge ? (
            <div className="mb-6 flex justify-center">
              <Badge className="rounded-full px-3 py-1" variant="outline">
                {badge}
              </Badge>
            </div>
          ) : null}

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {headline}
          </h1>
          <p className="mt-5 text-balance text-base text-muted-foreground sm:text-lg">
            {subheadline}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl shadow-sm">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            No credit card required · Cancel anytime
          </p>
        </div>
      </Container>
    </Section>
  );
}

