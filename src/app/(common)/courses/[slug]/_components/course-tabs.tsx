import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CourseDetails } from "@/data/course-details";

import AboutTab from "./about-tab";
import LessonsTab from "./lessons-tab";
import ReviewsTab from "./reviews-tab";

const tabs = [
  { value: "about", label: "About", Content: AboutTab },
  { value: "lessons", label: "Lessons", Content: LessonsTab },
  { value: "reviews", label: "Reviews", Content: ReviewsTab },
];

type CourseTabsProps = {
  course: CourseDetails;
};

export default function CourseTabs({ course }: CourseTabsProps) {
  return (
    <Tabs defaultValue="about" className="gap-10">
      <TabsList className="gap-3 bg-transparent p-0 group-data-horizontal/tabs:h-auto sm:gap-4">
        {tabs.map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="h-auto flex-none rounded-full bg-muted px-4 py-3 text-base leading-[1.2] font-medium text-foreground/80 hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-none data-active:bg-brand-accent data-active:text-brand-accent-foreground dark:data-active:border-transparent dark:data-active:bg-brand-accent dark:data-active:text-brand-accent-foreground"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(({ value, Content }) => (
        <TabsContent key={value} value={value}>
          <Content course={course} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
