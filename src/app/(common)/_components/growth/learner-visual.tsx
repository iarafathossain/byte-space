import Image from "next/image";

import { Student, ZigzagWhiteLg } from "@/assets/images/hero";
import CourseCard from "@/components/shared/course-card";
import { LearningProgressCard } from "@/components/shared/stat-cards";
import TintedOrnament from "@/components/shared/tinted-ornament";
import { courses } from "@/data/courses";

// Fixed 621×552 Figma frame, scaled down on phones (wrapper height tracks it)
export default function LearnerVisual() {
  return (
    <div className="relative h-76 w-full sm:h-138 xl:w-155.25 xl:shrink-0">
      <div className="absolute top-0 left-1/2 h-138 w-155.25 origin-top -translate-x-1/2 scale-55 sm:scale-100">
        <CourseCard course={courses[0]} className="absolute top-0 left-0 w-93.25" />

        {/* Export includes a 21px drop-shadow bleed around the photo */}
        <Image
          src={Student}
          alt="Smiling student with headphones holding a laptop"
          className="absolute top-2.25 -left-5.25 max-w-none"
        />

        <LearningProgressCard className="absolute top-53.25 left-86.25 w-58" />

        <TintedOrnament
          src={ZigzagWhiteLg}
          className="absolute top-16.75 left-101.5 w-51.5"
        />
      </div>
    </div>
  );
}
