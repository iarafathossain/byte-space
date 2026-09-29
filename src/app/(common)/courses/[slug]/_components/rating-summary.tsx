import { Star } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import type { CourseDetails } from "@/data/course-details";
import { cn } from "@/lib/utils";

const STARS = [5, 4, 3, 2, 1] as const;

type RatingSummaryProps = {
  rating: number;
  breakdown: CourseDetails["ratingBreakdown"];
};

export default function RatingSummary({ rating, breakdown }: RatingSummaryProps) {
  const total = STARS.reduce((sum, star) => sum + breakdown[star], 0);

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
      <div className="flex size-31 shrink-0 flex-col justify-center gap-1 rounded-[1.5rem] bg-brand-accent p-5 text-brand-accent-foreground">
        <p className="text-sm leading-[1.2] font-medium">Ratings</p>
        <p className="font-heading text-5xl leading-[1.2] font-semibold tracking-[-0.01em]">
          {rating}
        </p>
      </div>

      <ul className="flex flex-1 flex-col gap-2">
        {STARS.map((star) => (
          <li key={star} className="flex items-center gap-4">
            <Progress
              value={(breakdown[star] / total) * 100}
              aria-label={`${star}-star reviews`}
              className="flex-1 [&_[data-slot=progress-indicator]]:rounded-full [&_[data-slot=progress-indicator]]:bg-brand-accent [&_[data-slot=progress-track]]:h-2"
            />
            <span className="flex shrink-0 gap-0.5" aria-hidden="true">
              {STARS.map((position) => (
                <Star
                  key={position}
                  className={cn(
                    "size-4",
                    6 - position <= star
                      ? "fill-current text-foreground/75"
                      : "text-border",
                  )}
                />
              ))}
            </span>
            <span className="w-12 shrink-0 text-right text-sm tabular-nums text-foreground/75">
              {breakdown[star]}
              <span className="sr-only"> reviews with {star} stars</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
