import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type GridBackgroundProps = ComponentProps<"div">;

export default function GridBackground({
  className,
  children,
  ...props
}: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "pattern-grid relative isolate overflow-hidden bg-brand text-brand-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
