import { Star } from "lucide-react";

import UserAvatar from "@/components/shared/user-avatar";
import { AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";
import {
  heroCourseHighlight,
  heroHappyStudents,
  heroLearningProgress,
} from "@/data/hero";
import { cn } from "@/lib/utils";

const cardClassName = "gap-2 rounded-2xl p-4 text-card-foreground ring-0";
const cardTitleClassName = "font-sans text-base leading-[1.2] font-medium";

type HeroCardProps = {
  className?: string;
};

export function CourseHighlightCard({ className }: HeroCardProps) {
  const { title, courses, students } = heroCourseHighlight;

  return (
    <Card className={cn(cardClassName, className)}>
      <CardTitle className={cardTitleClassName}>{title}</CardTitle>
      <CardDescription className="flex items-center gap-2 text-xs leading-[1.6]">
        <span>{courses}</span>
        <span aria-hidden="true" className="text-[10px]">
          &bull;
        </span>
        <span>{students}</span>
      </CardDescription>
    </Card>
  );
}

export function LearningProgressCard({ className }: HeroCardProps) {
  const { label, value } = heroLearningProgress;

  return (
    <Card className={cn(cardClassName, className)}>
      <Progress
        value={value}
        className="gap-2 [&_[data-slot=progress-indicator]]:rounded-full [&_[data-slot=progress-indicator]]:bg-brand-accent [&_[data-slot=progress-track]]:h-2"
      >
        <ProgressLabel className="w-full text-sm leading-[1.2] font-medium">
          {label}
        </ProgressLabel>
        <ProgressValue className="ml-0 w-full font-heading text-5xl leading-[1.2] font-semibold tracking-[-0.01em] text-card-foreground" />
      </Progress>
    </Card>
  );
}

type HappyStudentsCardProps = HeroCardProps & {
  // "lime" is the Electric Lime card used on the auth pages
  tone?: "light" | "lime";
};

export function HappyStudentsCard({ className, tone = "light" }: HappyStudentsCardProps) {
  const { title, rating, reviews, total, avatars } = heroHappyStudents;
  const isLime = tone === "lime";

  return (
    <Card
      className={cn(
        cardClassName,
        isLime && "bg-brand-accent text-brand-accent-foreground",
        className,
      )}
    >
      <div>
        <CardTitle className={cardTitleClassName}>{title}</CardTitle>
        <p className="flex items-center text-xs leading-[1.6]">
          {rating}
          <span className="sr-only"> out of 5 stars from</span>
          <span className={cn("ml-0.5", isLime ? "opacity-70" : "text-muted-foreground")}>
            ({reviews})
          </span>
          <span className="sr-only"> reviews</span>
          <Star
            className={cn(
              "size-4",
              isLime ? "fill-primary text-primary" : "fill-brand-accent text-brand-accent",
            )}
          />
        </p>
      </div>

      <AvatarGroup
        className={cn(
          "-space-x-4",
          isLime
            ? "*:data-[slot=avatar]:ring-brand-accent"
            : "*:data-[slot=avatar]:ring-card",
        )}
      >
        {avatars.map((avatar, index) => (
          <UserAvatar key={index} src={avatar} className="size-10.75" />
        ))}
        <AvatarGroupCount
          className={cn(
            "size-10.75 text-xs leading-normal font-bold",
            isLime
              ? "bg-brand-accent-foreground text-brand-foreground ring-brand-accent"
              : "bg-brand-accent text-brand-accent-foreground ring-card",
          )}
        >
          {total}
        </AvatarGroupCount>
      </AvatarGroup>
    </Card>
  );
}
