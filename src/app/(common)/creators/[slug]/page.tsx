import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen } from "lucide-react";

import CourseFilterBar from "@/components/shared/course-filter-bar";
import CourseResults from "@/components/shared/course-results";
import {
  EmptyState,
  emptyStateActionClassName,
} from "@/components/shared/empty-state";
import { getCreator, getCreatorCourses, getCreatorHref } from "@/data/creators";
import {
  ALL_CATEGORIES,
  filterCourses,
  paginate,
  parseCourseFilters,
  type FilterScope,
} from "@/lib/course-filters";

import CreatorHero from "./_components/creator-hero";

export async function generateMetadata({
  params,
}: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const creator = getCreator((await params).slug);
  if (!creator) return {};

  return {
    title: creator.name,
    description: `${creator.role}. Explore courses by ${creator.name} on ByteSpace.`,
    alternates: { canonical: getCreatorHref(creator.slug) },
  };
}

export default async function CreatorProfilePage({
  params,
  searchParams,
}: PageProps<"/creators/[slug]">) {
  const creator = getCreator((await params).slug);
  if (!creator) notFound();

  // A profile lists all of the creator's courses by default, not just featured ones
  const scope: FilterScope = {
    basePath: getCreatorHref(creator.slug),
    defaultCategory: ALL_CATEGORIES,
  };
  const creatorCourses = getCreatorCourses(creator.slug);
  const filters = parseCourseFilters(await searchParams, scope);
  const { items, currentPage, totalPages } = paginate(
    filterCourses(creatorCourses, filters),
    filters.page,
  );

  return (
    <main>
      <CreatorHero creator={creator} productCount={creatorCourses.length} />

      <section
        aria-label={`Courses by ${creator.name}`}
        className="bg-background"
      >
        <div className="mx-auto flex max-w-300 flex-col px-4 pt-12 pb-20 sm:px-6 lg:px-0 lg:pt-18 lg:pb-30">
          {creatorCourses.length > 0 ? (
            <>
              <CourseFilterBar filters={filters} scope={scope} />
              <div className="mt-12 lg:mt-20">
                <CourseResults
                  courses={items}
                  filters={filters}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  scope={scope}
                />
              </div>
            </>
          ) : (
            <EmptyState
              icon={BookOpen}
              title="No courses yet"
              subtitle={`${creator.name} hasn't published any courses yet. Check back soon!`}
              action={
                <Link href="/courses" className={emptyStateActionClassName}>
                  Browse all courses
                </Link>
              }
            />
          )}
        </div>
      </section>
    </main>
  );
}
