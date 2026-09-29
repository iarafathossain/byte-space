import type { Metadata } from "next";

import CourseFilterBar from "@/components/shared/course-filter-bar";
import CourseResults from "@/components/shared/course-results";
import SubPageHeader from "@/components/shared/sub-page-header";
import { courses } from "@/data/courses";
import {
  filterCourses,
  paginate,
  parseCourseFilters,
} from "@/lib/course-filters";

import CategoryTabs from "./_components/category-tabs";
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
            <CourseResults
              courses={items}
              filters={filters}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
