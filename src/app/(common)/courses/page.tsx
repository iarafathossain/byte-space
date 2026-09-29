import type { Metadata } from "next";
import Link from "next/link";

import CourseCard from "@/components/shared/course-card";
import SubPageHeader from "@/components/shared/sub-page-header";
import { courses } from "@/data/courses";
import {
  filterCourses,
  paginate,
  parseCourseFilters,
} from "@/lib/course-filters";

import CategoryTabs from "./_components/category-tabs";
import CourseFilterBar from "./_components/course-filter-bar";
import CoursePagination from "./_components/course-pagination";
import CourseSearchForm from "./_components/course-search-form";

export const metadata: Metadata = {
  title: "Courses",
  alternates: { canonical: "/courses" },
  description:
    "Find your next course across design, development, business and more.",
};

export default async function CoursesPage({
  searchParams,
}: PageProps<"/courses">) {
  const filters = parseCourseFilters(await searchParams);
  const { items, currentPage, totalPages } = paginate(
    filterCourses(courses, filters),
    filters.page,
  );

  return (
    <main>
      <SubPageHeader title="Find Your Next Course">
        <CourseSearchForm filters={filters} />
      </SubPageHeader>

      <section aria-label="Course results" className="bg-background">
        <div className="mx-auto flex max-w-300 flex-col px-4 pt-12 pb-20 sm:px-6 lg:px-0 lg:pt-18 lg:pb-30">
          <CourseFilterBar filters={filters} />

          <div className="mt-8">
            <CategoryTabs filters={filters} />
          </div>

          <div className="mt-12 lg:mt-20">
            {items.length > 0 ? (
              <div className="flex flex-col gap-12 lg:gap-20">
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                  {items.map((course) => (
                    <li key={course.slug}>
                      <CourseCard course={course} className="h-full" />
                    </li>
                  ))}
                </ul>
                <CoursePagination
                  filters={filters}
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 py-16 text-center">
                <p className="font-heading text-xl font-semibold text-foreground">
                  No courses match your filters
                </p>
                <p className="text-base leading-[1.6] text-muted-foreground">
                  Try a different search or{" "}
                  <Link
                    href="/courses"
                    className="text-primary hover:underline"
                  >
                    clear all filters
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
