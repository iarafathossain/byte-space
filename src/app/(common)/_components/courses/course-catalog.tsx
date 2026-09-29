"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Plus } from "lucide-react";

import CourseCard from "@/components/shared/course-card";
import {
  EmptyState,
  emptyStateActionClassName,
} from "@/components/shared/empty-state";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { courseCategories, courses } from "@/data/courses";

const FEATURED = "Featured";
const filters = [FEATURED, ...courseCategories];
// The home page shows a two-row preview; the full list lives on /courses
const PREVIEW_COUNT = 6;

export default function CourseCatalog() {
  const [activeFilter, setActiveFilter] = useState<string>(FEATURED);

  const visibleCourses = courses
    .filter((course) =>
      activeFilter === FEATURED
        ? course.featured
        : course.category === activeFilter,
    )
    .slice(0, PREVIEW_COUNT);

  return (
    <div className="flex w-full flex-col items-center gap-12 lg:gap-20">
      <ToggleGroup
        aria-label="Filter courses by category"
        value={[activeFilter]}
        // Keep one filter selected: ignore clicks that would clear it
        onValueChange={(value) => value[0] && setActiveFilter(value[0])}
        className="w-full max-w-271.5 flex-wrap justify-center gap-x-4 gap-y-5"
      >
        {filters.map((filter) => (
          <ToggleGroupItem
            key={filter}
            value={filter}
            className="h-auto rounded-full bg-muted px-4 py-3 text-base leading-[1.2] font-normal text-card-foreground/80 hover:bg-muted/70 hover:text-card-foreground aria-pressed:bg-brand-accent aria-pressed:text-brand-accent-foreground"
          >
            {filter}
          </ToggleGroupItem>
        ))}
        <Link
          href="/courses"
          className="inline-flex h-10.75 items-center gap-1 text-base text-primary hover:underline"
        >
          <Plus className="size-4" />
          More
        </Link>
      </ToggleGroup>

      {visibleCourses.length > 0 ? (
        <ul className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {visibleCourses.map((course) => (
            <li key={course.slug}>
              <CourseCard course={course} className="h-full" />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          icon={BookOpen}
          title={`No ${activeFilter} courses yet`}
          subtitle="New courses are added regularly. Explore other categories in the meantime."
          action={
            <Link href="/courses" className={emptyStateActionClassName}>
              Browse all courses
            </Link>
          }
        />
      )}
    </div>
  );
}
