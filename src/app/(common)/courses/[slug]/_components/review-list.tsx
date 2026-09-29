"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import ReviewCard from "@/components/shared/review-card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { reviews } from "@/data/reviews";

const ALL = "all";
const filters = [ALL, "5", "4", "3", "2", "1"];

export default function ReviewList() {
  const [activeFilter, setActiveFilter] = useState(ALL);

  const visibleReviews =
    activeFilter === ALL
      ? reviews
      : reviews.filter((review) => Math.round(review.rating) === Number(activeFilter));

  return (
    <div className="flex flex-col gap-6">
      <ToggleGroup
        aria-label="Filter reviews by rating"
        value={[activeFilter]}
        // Keep one filter selected: ignore clicks that would clear it
        onValueChange={(value) => value[0] && setActiveFilter(value[0])}
        className="flex-wrap gap-3 sm:gap-4"
      >
        {filters.map((filter) => (
          <ToggleGroupItem
            key={filter}
            value={filter}
            aria-label={filter === ALL ? "All ratings" : `${filter} stars`}
            className="h-auto gap-1 rounded-full bg-muted px-4 py-3 text-base leading-[1.2] font-medium text-foreground/80 hover:bg-muted/70 hover:text-foreground aria-pressed:bg-brand-accent aria-pressed:text-brand-accent-foreground [&_svg:not([class*='size-'])]:size-5"
          >
            {filter === ALL ? (
              "All rating"
            ) : (
              <>
                <Star className="fill-current" />
                {filter}
              </>
            )}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {visibleReviews.length > 0 ? (
        <ul className="flex flex-col gap-6">
          {visibleReviews.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-10 text-center text-base leading-[1.6] text-muted-foreground">
          No {activeFilter}-star reviews yet.
        </p>
      )}
    </div>
  );
}
