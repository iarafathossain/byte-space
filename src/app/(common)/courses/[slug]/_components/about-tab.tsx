import Image from "next/image";

import CheckList from "@/components/shared/check-list";
import type { CourseDetails } from "@/data/course-details";

import TabHeading from "./tab-heading";

type AboutTabProps = {
  course: CourseDetails;
};

export default function AboutTab({ course }: AboutTabProps) {
  return (
    <div className="flex flex-col gap-6 text-base leading-[1.6] text-foreground/75">
      <TabHeading>Description</TabHeading>
      <div className="flex flex-col gap-4">
        {course.description.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <TabHeading>Sneak Peek</TabHeading>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {course.sneakPeek.map((src, index) => (
          <li key={src}>
            <Image
              src={src}
              alt={`${course.title} preview ${index + 1}`}
              width={167}
              height={125}
              className="h-auto w-full rounded-2xl"
            />
          </li>
        ))}
      </ul>

      <TabHeading>Key Points</TabHeading>
      <CheckList items={course.keyPoints} />
    </div>
  );
}
