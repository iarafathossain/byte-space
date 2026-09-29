import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  getCreatorCourses,
  getCreatorHref,
  type Creator,
} from "@/data/creators";
import { cn } from "@/lib/utils";

type CreatorCardProps = {
  creator: Creator;
  className?: string;
};

export default function CreatorCard({ creator, className }: CreatorCardProps) {
  const courseCount = getCreatorCourses(creator.slug).length;
  const stats = [
    { value: courseCount, label: courseCount === 1 ? "Course" : "Courses" },
    { value: creator.followers, label: "Followers" },
  ];

  return (
    <Card
      className={cn(
        "relative gap-6 rounded-[1.5rem] border border-border p-6 text-left text-card-foreground ring-0 transition-colors hover:border-primary/40",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          src={creator.avatar}
          alt=""
          className="size-18 shrink-0 rounded-[1.25rem] object-cover"
        />
        <div className="min-w-0">
          <h3 className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em]">
            {/* Stretched link makes the whole card clickable */}
            <Link
              href={getCreatorHref(creator.slug)}
              className="after:absolute after:inset-0 after:rounded-[1.5rem] focus-visible:outline-none"
            >
              {creator.name}
            </Link>
          </h3>
          <p className="text-base leading-[1.6] text-card-foreground/75">
            {creator.role}
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
        <ul className="flex gap-2">
          {stats.map(({ value, label }) => (
            <li
              key={label}
              className="rounded-full bg-muted px-3 py-2 text-sm leading-[1.2] font-medium whitespace-nowrap"
            >
              <span className="text-primary">{value}</span> {label}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1 text-sm leading-[1.2] font-medium whitespace-nowrap text-primary">
          View profile
          <ArrowRight aria-hidden="true" className="size-4" />
        </span>
      </div>
    </Card>
  );
}
