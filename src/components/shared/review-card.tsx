import { Star } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { Review } from "@/data/reviews";
import { cn, formatTimeAgo } from "@/lib/utils";

const MAX_RATING = 5;

type ReviewCardProps = {
  review: Review;
  className?: string;
};

export default function ReviewCard({ review, className }: ReviewCardProps) {
  const { name, role, avatar: AvatarImage, rating, postedAt, comment } = review;

  return (
    <Card
      className={cn(
        "rounded-[1.5rem] border border-border p-6 text-card-foreground ring-0 sm:p-10",
        className,
      )}
    >
      <article className="flex flex-col gap-6">
        <header className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Avatar className="size-13 after:hidden">
              <AvatarImage aria-hidden="true" className="size-full" />
            </Avatar>
            <div>
              <p className="text-lg leading-[1.2] font-medium">{name}</p>
              <p className="text-base leading-6 text-card-foreground/80">
                {role}
              </p>
            </div>
          </div>

          <time
            dateTime={postedAt}
            className="shrink-0 text-base leading-6 text-card-foreground/80"
          >
            {formatTimeAgo(postedAt)}
          </time>
        </header>

        <div className="flex gap-1.5">
          <span className="sr-only">
            Rated {rating} out of {MAX_RATING}
          </span>
          {Array.from({ length: MAX_RATING }, (_, index) => (
            <Star
              key={index}
              strokeWidth={1.5}
              className={cn(
                "size-5.5 text-card-foreground/70",
                index < Math.round(rating) ? "fill-current" : "text-border",
              )}
            />
          ))}
        </div>

        <p className="text-base leading-6 text-card-foreground/80">
          &ldquo;{comment}&rdquo;
        </p>
      </article>
    </Card>
  );
}
