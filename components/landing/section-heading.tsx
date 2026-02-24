import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
} & React.HTMLAttributes<HTMLDivElement>;

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl space-y-3",
        align === "center" ? "text-center" : "text-left",
        className
      )}
      {...props}
    >
      <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

