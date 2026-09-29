import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  change: string;
  // When set, the amount and badge share a row and a progress bar is shown
  progress?: number;
  className?: string;
};

export default function RevenueCard({
  title,
  period,
  amount,
  change,
  progress,
  className,
}: RevenueCardProps) {
  const hasProgress = progress !== undefined;

  return (
    <Card
      className={cn(
        "gap-2 rounded-2xl bg-brand p-4 text-left text-brand-foreground ring-0",
        className,
      )}
    >
      <div>
        <p className="text-base leading-[1.2] font-medium">{title}</p>
        <p className="text-[0.625rem] leading-[1.2]">{period}</p>
      </div>

      <div
        className={cn(
          "flex gap-2",
          hasProgress ? "items-center justify-between" : "flex-col items-start",
        )}
      >
        <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.01em]">
          {amount}
        </p>
        <Badge className="h-6 bg-brand-accent px-2 text-[0.625rem] text-brand-accent-foreground">
          {change}
        </Badge>
      </div>

      {hasProgress && (
        <Progress
          value={progress}
          aria-label={`${title} target progress`}
          className="[&_[data-slot=progress-indicator]]:rounded-full [&_[data-slot=progress-indicator]]:bg-brand-accent [&_[data-slot=progress-track]]:h-2 [&_[data-slot=progress-track]]:bg-white"
        />
      )}
    </Card>
  );
}
