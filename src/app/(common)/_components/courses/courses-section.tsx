import SectionHeading from "@/components/shared/section-heading";

import CourseCatalog from "./course-catalog";

export default function CoursesSection() {
  return (
    <section aria-labelledby="courses-title" className="bg-background">
      <div className="mx-auto flex max-w-300 flex-col items-center gap-10 px-4 py-20 sm:px-6 lg:gap-10.5 lg:px-0 lg:pt-18 lg:pb-30">
        <SectionHeading
          id="courses-title"
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          // max-w keeps the design's line break after "Passion,"
          titleClassName="max-w-150"
        />

        <CourseCatalog />
      </div>
    </section>
  );
}
