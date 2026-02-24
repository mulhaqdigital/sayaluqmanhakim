import Image from "next/image";

import type { Feature } from "@/components/landing/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type FeatureCardProps = {
  feature: Feature;
  className?: string;
};

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const Icon = feature.icon;
  const hasImage = Boolean(feature.image?.src);

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-xl border border-border/60 bg-card shadow-soft transition-shadow hover:shadow-md",
        className
      )}
    >
      {hasImage && feature.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <CardHeader className={cn(hasImage ? "space-y-1 p-6" : "")}>
        {hasImage ? (
          <CardTitle className="text-base font-semibold leading-tight">
            {feature.title}
          </CardTitle>
        ) : (
          <div className="flex items-start gap-4">
            <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
              <Icon className="size-5" aria-hidden />
            </div>
            <div className="min-w-0 space-y-1">
              <CardTitle className="text-base font-semibold leading-tight">
                {feature.title}
              </CardTitle>
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent className={cn("pt-0 text-sm text-muted-foreground", hasImage && "px-6 pb-6")}>
        {feature.description}
      </CardContent>
    </Card>
  );
}

