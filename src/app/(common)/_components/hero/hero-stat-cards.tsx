import { Star } from "lucide-react";

import { Avatar, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
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

export function HappyStudentsCard({ className }: HeroCardProps) {
  const { title, rating, reviews, total, avatars } = heroHappyStudents;

  return (
    <Card className={cn(cardClassName, className)}>
      <div>
        <CardTitle className={cardTitleClassName}>{title}</CardTitle>
        <p className="flex items-center text-xs leading-[1.6]">
          {rating}
          <span className="sr-only"> out of 5 stars from</span>
          <span className="ml-0.5 text-muted-foreground">({reviews})</span>
          <span className="sr-only"> reviews</span>
          <Star className="size-4 fill-brand-accent text-brand-accent" />
        </p>
      </div>

      <AvatarGroup className="-space-x-4 *:data-[slot=avatar]:ring-card">
        {avatars.map((AvatarImage, index) => (
          <Avatar key={index} className="size-10.75 after:hidden">
            <AvatarImage aria-hidden="true" className="size-full" />
          </Avatar>
        ))}
        <AvatarGroupCount className="size-10.75 bg-brand-accent text-xs leading-normal font-bold text-brand-accent-foreground ring-card">
          {total}
        </AvatarGroupCount>
      </AvatarGroup>
    </Card>
  );
}
