import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Style for a link passed as `action`, e.g. <Link className={emptyStateActionClassName}>
export const emptyStateActionClassName = cn(
  buttonVariants({ variant: "outline" }),
  "h-10 rounded-full border-border px-5 text-sm font-medium",
);

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  // Optional follow-up, e.g. a link to clear filters
  action?: ReactNode;
}

export function EmptyState({
  icon: Icon,
  title,
  subtitle,
  action,
}: EmptyStateProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 gap-5 bg-card border rounded-[1.5rem]">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-muted">
        <Icon className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
      </div>
      <div className="text-center space-y-1.5 max-w-xs">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}
