import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";

import UserAvatar from "@/components/shared/user-avatar";
import { AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Course } from "@/data/courses";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: Course;
  className?: string;
};

export default function CourseCard({ course, className }: CourseCardProps) {
  const {
    slug,
    title,
    creator,
    coverImage,
    lessons,
    duration,
    comments,
    rating,
    level,
    price,
    priceUnit,
    students,
  } = course;

  const stats = [`${lessons} Lessons`, duration, `${comments} Comments`];

  return (
    <Card
      className={cn(
        "relative gap-5 rounded-[1.5rem] border border-border p-4 pb-5 text-left ring-0 transition-colors hover:border-primary/40",
        className,
      )}
    >
      <div className="relative aspect-341/195 overflow-hidden rounded-xl bg-muted">
        <Image
          src={coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
          className="object-cover"
        />
        <ul className="absolute inset-x-3 bottom-4 flex flex-wrap gap-2 sm:gap-3">
          {stats.map((stat) => (
            <li key={stat}>
              <Badge className="h-6.5 bg-muted/60 px-3 leading-[1.2] text-card-foreground/80 backdrop-blur-xs">
                {stat}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-card-foreground">
              {/* Stretched link makes the whole card clickable */}
              <Link
                href={`/courses/${slug}`}
                className="after:absolute after:inset-0 after:rounded-[1.5rem] focus-visible:outline-none"
              >
                {title}
              </Link>
            </h3>
            <p className="text-xs leading-[1.6] text-card-foreground/80">
              by{" "}
              <Link
                href={creator.href}
                className="relative z-10 text-primary hover:underline"
              >
                {creator.name}
              </Link>
            </p>
          </div>

          <p className="flex shrink-0 items-center text-lg leading-[1.6] text-card-foreground/80">
            {rating}
            <span className="sr-only"> out of 5 stars</span>
            <Star className="size-6 fill-current text-border" />
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Badge className="h-8 gap-1 bg-muted px-3 leading-[1.2] text-card-foreground/80 [&>svg]:size-5!">
            <ChartNoAxesColumnIncreasing />
            {level}
          </Badge>

          <AvatarGroup aria-label={`${students.total} students enrolled`}>
            {students.avatars.map((avatar, index) => (
              <UserAvatar key={index} src={avatar} />
            ))}
            <AvatarGroupCount className="bg-brand-accent text-xs font-medium text-brand-accent-foreground">
              {students.total}
            </AvatarGroupCount>
          </AvatarGroup>
        </div>

        <p className="flex items-end">
          <span className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-primary">
            ${price}
          </span>
          <span className="text-xs leading-[1.6] text-card-foreground/80">
            /{priceUnit}
          </span>
        </p>
      </div>
    </Card>
  );
}
