import Link from "next/link";
import { SearchX } from "lucide-react";

import CourseCard from "@/components/shared/course-card";
import CoursePagination from "@/components/shared/course-pagination";
import {
  EmptyState,
  emptyStateActionClassName,
} from "@/components/shared/empty-state";
import type { Course } from "@/data/courses";
import {
  coursesScope,
  type CourseFilters,
  type FilterScope,
} from "@/lib/course-filters";

type CourseResultsProps = {
  courses: Course[];
  filters: CourseFilters;
  currentPage: number;
  totalPages: number;
  scope?: FilterScope;
};

// Course grid with pagination, or an empty state when nothing matches
export default function CourseResults({
  courses,
  filters,
  currentPage,
  totalPages,
  scope = coursesScope,
}: CourseResultsProps) {
  if (courses.length === 0) {
    return (
      <EmptyState
        icon={SearchX}
        title="No courses match your filters"
        subtitle="Try a different search, level or category."
        action={
          <Link href={scope.basePath} className={emptyStateActionClassName}>
            Clear all filters
          </Link>
        }
      />
    );
  }

  return (
    <div className="flex flex-col gap-12 lg:gap-20">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {courses.map((course) => (
          <li key={course.slug}>
            <CourseCard course={course} className="h-full" />
          </li>
        ))}
      </ul>
      <CoursePagination
        filters={filters}
        currentPage={currentPage}
        totalPages={totalPages}
        scope={scope}
      />
    </div>
  );
}
