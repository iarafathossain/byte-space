import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type GridBackgroundProps = ComponentProps<"div"> & {
  as?: "div" | "section" | "header" | "main";
};

export default function GridBackground({
  as: Component = "div",
  className,
  children,
  ...props
}: GridBackgroundProps) {
  return (
    <Component
      className={cn(
        "pattern-grid relative isolate overflow-hidden bg-brand text-brand-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
