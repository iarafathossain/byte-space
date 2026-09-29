import Link from "next/link";

import {
  buildCoursesHref,
  categoryTabs,
  type CourseFilters,
} from "@/lib/course-filters";
import { cn } from "@/lib/utils";

type CategoryTabsProps = {
  filters: CourseFilters;
};

export default function CategoryTabs({ filters }: CategoryTabsProps) {
  return (
    <nav aria-label="Course categories" className="-mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
      <ul className="flex w-max min-w-full items-center justify-between gap-4">
        {categoryTabs.map(({ value, label }) => {
          const isActive = filters.category === value;

          return (
            <li key={value}>
              <Link
                href={buildCoursesHref(filters, { category: value })}
                scroll={false}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "inline-flex rounded-full bg-muted px-4 py-3 text-base leading-[1.2] whitespace-nowrap text-foreground/80 transition-colors hover:bg-muted/70 hover:text-foreground",
                  isActive &&
                    "bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent hover:text-brand-accent-foreground",
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
