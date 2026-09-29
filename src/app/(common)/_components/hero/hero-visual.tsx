import Image from "next/image";

import { RingLime, Student } from "@/assets/images/hero";

import {
  CourseHighlightCard,
  HappyStudentsCard,
  LearningProgressCard,
} from "./hero-stat-cards";

/*
 * The visual is laid out on a fixed 1440×512 stage (the lower half of the
 * Figma frame) and scaled down on smaller screens, so the ring, image and
 * cards keep their relative positions. The wrapper height tracks the scale.
 */
export default function HeroVisual() {
  return (
    <div className="relative h-64 w-full sm:h-96 lg:h-128">
      <div className="absolute top-0 left-1/2 h-128 w-360 origin-top -translate-x-1/2 scale-50 sm:scale-75 lg:scale-100">
        <Image
          src={RingLime}
          alt=""
          className="absolute top-17.5 left-1/2 -translate-x-1/2"
        />

        {/* Export includes a 21px drop-shadow bleed around the 578×541 photo */}
        <Image
          src={Student}
          alt="Smiling student with headphones holding a laptop"
          loading="eager"
          fetchPriority="high"
          className="absolute -top-0.75 left-1/2 -translate-x-77.5"
        />

        <CourseHighlightCard className="absolute top-31.75 left-1/2 hidden w-52 -translate-x-79 sm:flex" />
        <LearningProgressCard className="absolute top-34.75 left-1/2 hidden w-58 translate-x-30.5 sm:flex" />
        <HappyStudentsCard className="absolute top-81.25 left-1/2 hidden w-64.5 -translate-x-98 sm:flex" />
      </div>
    </div>
  );
}
