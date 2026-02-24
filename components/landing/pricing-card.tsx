import Link from "next/link";
import { Check } from "lucide-react";

import type { PricingTier } from "@/components/landing/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export type PricingCardProps = {
  tier: PricingTier;
};

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative rounded-xl shadow-soft transition-shadow hover:shadow-md",
        tier.highlight && "border-foreground/20"
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="text-base">{tier.name}</CardTitle>
            <CardDescription>{tier.description}</CardDescription>
          </div>
          {tier.highlight ? (
            <Badge className="rounded-full px-3 py-1" variant="outline">
              {tier.highlight.label}
            </Badge>
          ) : null}
        </div>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-3xl font-semibold tracking-tight">
            {formatPrice(tier.price.amount)}
          </span>
          <span className="pb-1 text-sm text-muted-foreground">
            /{tier.price.interval}
          </span>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="pt-6">
        <ul className="space-y-3 text-sm">
          {tier.features.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-secondary">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
              <span className="text-muted-foreground">{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          variant={tier.highlight ? "default" : "secondary"}
          className="w-full rounded-xl"
        >
          <Link href={tier.cta.href}>{tier.cta.label}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

