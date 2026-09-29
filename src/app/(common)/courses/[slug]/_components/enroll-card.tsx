import Link from "next/link";
import { FolderCode, IdCard, MessagesSquare, Video } from "lucide-react";

import AppButton from "@/components/shared/app-button";
import UserAvatar from "@/components/shared/user-avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { courseCreator, type CourseDetails } from "@/data/course-details";
import { cn } from "@/lib/utils";

const inclusions = [
  { icon: FolderCode, label: "Learning Resources" },
  { icon: Video, label: "Quality Lesson Videos" },
  { icon: IdCard, label: "Certificate of Completion" },
  { icon: MessagesSquare, label: "Private Consultation" },
];

const headingClassName =
  "font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-card-foreground";
const bodyClassName = "text-base leading-[1.6] text-card-foreground/75";

type EnrollCardProps = {
  course: CourseDetails;
};

export default function EnrollCard({ course }: EnrollCardProps) {
  const { lessonPreview, totalLessons, totalHours, creator } = course;
  const remainingLessons = totalLessons - lessonPreview.length;

  return (
    <Card className="gap-6 rounded-[1.5rem] border border-border p-6 text-card-foreground ring-0 sm:p-10">
      <div className="flex flex-col gap-6">
        <h2 className={headingClassName}>
          {totalLessons} Lessons ({totalHours} hours)
        </h2>
        <div className="flex flex-col gap-3">
          <ol className="flex flex-col gap-3">
            {lessonPreview.map((lesson, index) => (
              <li key={lesson.title} className="flex items-start justify-between gap-4">
                <div className="flex gap-2 text-base leading-[1.2] font-medium">
                  <span className="w-6 shrink-0">{String(index + 1).padStart(2, "0")}</span>
                  <span className="max-w-50">{lesson.title}</span>
                </div>
                <span className="shrink-0 text-base leading-[1.6] text-primary">
                  {lesson.duration}
                </span>
              </li>
            ))}
          </ol>
          <p className={bodyClassName}>{remainingLessons} more videos</p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className={bodyClassName}>{courseCreator.pitch}</p>
        <p className="flex items-end">
          <span className="font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em] text-primary">
            ${course.price}
          </span>
          <span className={bodyClassName}>/{course.priceUnit}</span>
        </p>
        <AppButton href={`/checkout?course=${course.slug}`} variant="brand" className="w-full">
          Enroll Now
        </AppButton>
      </div>

      <h2 className={headingClassName}>This course include</h2>
      <ul className="flex flex-col gap-3">
        {inclusions.map(({ icon: Icon, label }) => (
          <li key={label} className={cn("flex items-center gap-2", bodyClassName)}>
            <Icon className="size-6 shrink-0 text-primary" />
            {label}
          </li>
        ))}
      </ul>

      <Separator />

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <UserAvatar src={courseCreator.avatar} className="size-13" />
          <div>
            <p className="text-lg leading-[1.2] font-medium capitalize">{creator.name}</p>
            <p className={bodyClassName}>{courseCreator.role}</p>
          </div>
        </div>
        <p className={bodyClassName}>{courseCreator.pitch}</p>
        <Link
          href={creator.href}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-8.75 w-fit rounded-full border-border px-4 text-base leading-[1.2] font-medium text-card-foreground/80",
          )}
        >
          See Full Profile
        </Link>
      </div>
    </Card>
  );
}
