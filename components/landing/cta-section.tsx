import Link from "next/link";

import type { LandingCta } from "@/components/landing/types";
import { Container } from "@/components/landing/container";
import { Section } from "@/components/landing/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export type CtaSectionProps = {
  id?: string;
  headline: string;
  subheadline: string;
  primaryCta: LandingCta;
  secondaryCta: LandingCta;
};

export function CtaSection({
  id = "cta",
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: CtaSectionProps) {
  return (
    <Section id={id} className="pb-20">
      <Container>
        <Card className="overflow-hidden rounded-2xl shadow-soft">
          <CardContent className="relative p-8 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.muted.DEFAULT)_0%,transparent_55%)]"
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {headline}
              </h2>
              <p className="mt-4 text-balance text-muted-foreground">
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
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}

