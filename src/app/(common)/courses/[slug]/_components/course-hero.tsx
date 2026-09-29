import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesColumnIncreasing, Star, Users } from "lucide-react";

import GridBackground from "@/components/shared/grid-background";
import type { CourseDetails } from "@/data/course-details";

import ShareButton from "./share-button";

type CourseHeroProps = {
  course: CourseDetails;
};

export default function CourseHero({ course }: CourseHeroProps) {
  const badges = [
    { icon: ChartNoAxesColumnIncreasing, label: course.level },
    { icon: Star, label: `${course.rating} (${course.reviewCount} reviews)` },
    { icon: Users, label: `${course.studentCount} Students` },
  ];

  return (
    <GridBackground as="section" aria-labelledby="course-title">
      {/* Top padding clears the overlaid site header */}
      <div className="relative z-10 mx-auto flex max-w-300 flex-col gap-5 px-4 pt-32 pb-12 sm:px-6 xl:px-0 xl:pt-43">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-192.25 flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1
                id="course-title"
                className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-brand-foreground lg:text-4xl"
              >
                {course.title}
              </h1>
              <p className="font-heading text-lg leading-[1.2] font-semibold tracking-[-0.01em] text-brand-foreground sm:text-xl">
                {course.subtitle}
              </p>
            </div>

            <p className="text-lg leading-[1.2] font-medium text-brand-foreground">
              by{" "}
              <Link href={course.creator.href} className="text-brand-accent hover:underline">
                {course.creator.name}
              </Link>
            </p>

            <ul className="flex flex-wrap gap-3 sm:gap-4">
              {badges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-card px-6 text-base leading-[1.2] font-medium text-card-foreground"
                >
                  <Icon className="size-6 text-primary" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <ShareButton title={course.title} />
        </div>

        {/* The JPG has white-filled corners, so the rounding clips them */}
        <Image
          src={course.thumbnail}
          alt={`${course.title} course preview`}
          placeholder="blur"
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1280px) 100vw, 720px"
          className="h-auto w-full rounded-[1.5rem] xl:w-180"
        />
      </div>
    </GridBackground>
  );
}
