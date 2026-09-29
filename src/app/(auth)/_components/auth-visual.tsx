import Image from "next/image";

import { PyramidWhite, TorusWhite, ZigzagWhiteSm } from "@/assets/images/hero";
import CourseCard from "@/components/shared/course-card";
import { HappyStudentsCard } from "@/components/shared/stat-cards";
import TintedOrnament from "@/components/shared/tinted-ornament";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";

const [, buildDigitalAsset, powerOfBigData] = courses;

// Fixed 548×585 Figma group; positions are offsets from its top-left corner
export default function AuthVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-146.25 w-137", className)}>
      <CourseCard course={buildDigitalAsset} className="absolute top-22.25 left-6.25 w-93.25" />
      <CourseCard course={powerOfBigData} className="absolute top-0 left-34 w-93.25" />
      <HappyStudentsCard tone="lime" className="absolute top-108.75 left-62.75 w-64.5" />

      <TintedOrnament src={TorusWhite} className="absolute top-3.75 left-13.5 w-37" />
      <TintedOrnament src={PyramidWhite} className="absolute top-99.25 left-0 w-47.5" />
      <Image
        src={ZigzagWhiteSm}
        alt=""
        aria-hidden="true"
        className="absolute top-80.25 left-93.25 max-w-none"
      />
    </div>
  );
}
