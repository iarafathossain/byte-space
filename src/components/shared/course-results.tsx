import Link from "next/link";

import CourseCard from "@/components/shared/course-card";
import CoursePagination from "@/components/shared/course-pagination";
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
      <div className="flex flex-col items-center gap-2 py-16 text-center">
        <p className="font-heading text-xl font-semibold text-foreground">
          No courses match your filters
        </p>
        <p className="text-base leading-[1.6] text-muted-foreground">
          Try a different search or{" "}
          <Link href={scope.basePath} className="text-primary hover:underline">
            clear all filters
          </Link>
          .
        </p>
      </div>
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
