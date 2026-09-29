import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  buildCoursesHref,
  getPageNumbers,
  type CourseFilters,
  type FilterScope,
} from "@/lib/course-filters";
import { cn } from "@/lib/utils";

const arrowClassName = cn(
  buttonVariants({ variant: "outline" }),
  "h-12 w-14 rounded-full border-border bg-card px-4 text-foreground [&_svg:not([class*='size-'])]:size-6",
);
const disabledArrowClassName = "pointer-events-none text-foreground/60";

const pageClassName =
  "flex h-12 min-w-6 items-center justify-center font-heading text-xl leading-7 font-semibold tracking-[-0.01em] text-foreground transition-colors hover:text-primary";

type CoursePaginationProps = {
  filters: CourseFilters;
  currentPage: number;
  totalPages: number;
  // Which listing the pages belong to; defaults to /courses
  scope?: FilterScope;
};

export default function CoursePagination({
  filters,
  currentPage,
  totalPages,
  scope,
}: CoursePaginationProps) {
  if (totalPages <= 1) return null;

  const hrefFor = (page: number) => buildCoursesHref(filters, { page }, scope);
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <Pagination aria-label="Course pages">
      <PaginationContent className="gap-3 sm:gap-6">
        <PaginationItem>
          {hasPrevious ? (
            <Link
              href={hrefFor(currentPage - 1)}
              aria-label="Previous page"
              className={arrowClassName}
            >
              <ChevronLeft />
            </Link>
          ) : (
            <span
              aria-disabled="true"
              aria-label="Previous page"
              className={cn(arrowClassName, disabledArrowClassName)}
            >
              <ChevronLeft />
            </span>
          )}
        </PaginationItem>

        {getPageNumbers(currentPage, totalPages).map((page, index) => (
          <PaginationItem
            key={page === "ellipsis" ? `ellipsis-${index}` : page}
          >
            {page === "ellipsis" ? (
              <PaginationEllipsis className="h-12 text-foreground/60" />
            ) : (
              <Link
                href={hrefFor(page)}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
                // The design shows the current page muted
                className={cn(
                  pageClassName,
                  page === currentPage && "pointer-events-none text-border",
                )}
              >
                {page}
              </Link>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          {hasNext ? (
            <Link
              href={hrefFor(currentPage + 1)}
              aria-label="Next page"
              className={arrowClassName}
            >
              <ChevronRight />
            </Link>
          ) : (
            <span
              aria-disabled="true"
              aria-label="Next page"
              className={cn(arrowClassName, disabledArrowClassName)}
            >
              <ChevronRight />
            </span>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
