import { Video } from "lucide-react";

import type { CourseDetails } from "@/data/course-details";

import TabHeading from "./tab-heading";

type LessonsTabProps = {
  course: CourseDetails;
};

export default function LessonsTab({ course }: LessonsTabProps) {
  return (
    <div className="flex flex-col gap-6 text-base leading-[1.6] text-foreground/75">
      <TabHeading>Explore the Modules</TabHeading>
      <p>
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on experiences.
      </p>

      <TabHeading>Lesson List</TabHeading>
      <ol className="flex flex-col gap-6">
        {course.modules.map((module) => (
          <li key={module.title} className="flex items-center gap-3.25">
            <span className="flex size-18 shrink-0 items-center justify-center rounded-[1.5rem] bg-brand-accent text-brand-accent-foreground">
              <Video className="size-10" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="leading-[1.2] font-medium text-foreground">{module.title}</p>
              <p>{module.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
