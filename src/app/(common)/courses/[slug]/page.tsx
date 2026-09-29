import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCourseDetails } from "@/data/course-details";
import { courses } from "@/data/courses";

import CourseHero from "./_components/course-hero";
import CourseTabs from "./_components/course-tabs";
import EnrollCard from "./_components/enroll-card";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const course = getCourseDetails((await params).slug);

  return course
    ? { title: `${course.title} | ByteSpace`, description: course.subtitle }
    : {};
}

export default async function CourseDetailsPage({
  params,
}: PageProps<"/courses/[slug]">) {
  const course = getCourseDetails((await params).slug);
  if (!course) notFound();

  return (
    <main>
      <CourseHero course={course} />

      <div className="mx-auto grid max-w-300 gap-10 px-4 pb-20 sm:px-6 xl:grid-cols-[723px_412px] xl:justify-between xl:px-0 xl:pb-30">
        {/*
         * On desktop the card is pulled up into the hero so its top lines up with
         * the 479px preview, which sits above 48px of hero padding (479 + 48 = 527).
         */}
        <aside
          aria-label="Enroll in this course"
          className="relative z-10 pt-10 xl:col-start-2 xl:row-start-1 xl:-mt-131.75 xl:pt-0"
        >
          <EnrollCard course={course} />
        </aside>

        <div className="xl:col-start-1 xl:row-start-1 xl:pt-20">
          <CourseTabs course={course} />
        </div>
      </div>
    </main>
  );
}
