import { z } from "zod";

import { courseCategories, courseLevels, type Course } from "@/data/courses";

export const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export type FilterOption = { value: string; label: string };

export const FEATURED = "featured";
export const ALL_CATEGORIES = "all";

export const levelOptions: FilterOption[] = courseLevels.map((level) => ({
  value: toSlug(level),
  label: level,
}));

export const categoryOptions: FilterOption[] = [
  { value: ALL_CATEGORIES, label: "All categories" },
  { value: FEATURED, label: "Featured" },
  ...courseCategories.map((category) => ({
    value: toSlug(category),
    label: category,
  })),
];

// Categories shown as quick tabs under the filter bar
export const categoryTabs: FilterOption[] = [
  { value: FEATURED, label: "Featured" },
  ...[
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
  ].map((category) => ({ value: toSlug(category), label: category })),
];

const priceRanges = [
  { value: "under-30", label: "Under $30", matches: (price: number) => price < 30 },
  { value: "30-49", label: "$30 – $49", matches: (price: number) => price >= 30 && price < 50 },
  { value: "50-plus", label: "$50 & above", matches: (price: number) => price >= 50 },
];

export const priceOptions: FilterOption[] = priceRanges.map(({ value, label }) => ({
  value,
  label,
}));

const sorters: Record<string, ((a: Course, b: Course) => number) | null> = {
  relevant: null,
  rating: (a, b) => b.rating - a.rating,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

export const sortOptions: FilterOption[] = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const valuesOf = (options: FilterOption[]) =>
  options.map((option) => option.value) as [string, ...string[]];

// Invalid or unknown URL values quietly fall back to the defaults
const courseFiltersSchema = z.object({
  q: z.string().trim().max(100).catch(""),
  level: z.enum(valuesOf(levelOptions)).optional().catch(undefined),
  category: z.enum(valuesOf(categoryOptions)).catch(FEATURED),
  price: z.enum(valuesOf(priceOptions)).optional().catch(undefined),
  sort: z.enum(valuesOf(sortOptions)).catch("relevant"),
  page: z.coerce.number().int().min(1).catch(1),
});

export type CourseFilters = z.infer<typeof courseFiltersSchema>;

type SearchParams = Record<string, string | string[] | undefined>;

export function parseCourseFilters(searchParams: SearchParams): CourseFilters {
  const first = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value;

  return courseFiltersSchema.parse({
    q: first(searchParams.q),
    level: first(searchParams.level),
    category: first(searchParams.category),
    price: first(searchParams.price),
    sort: first(searchParams.sort),
    page: first(searchParams.page),
  });
}

export const COURSES_PER_PAGE = 6;

// Returns one page of results; an out-of-range page is clamped to the last page
export function paginate<T>(items: T[], page: number, perPage = COURSES_PER_PAGE) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * perPage;

  return {
    items: items.slice(start, start + perPage),
    currentPage,
    totalPages,
  };
}

// Page numbers to show, with "ellipsis" gaps once there are more than 5 pages
export function getPageNumbers(current: number, total: number) {
  if (total <= 5) return Array.from({ length: total }, (_, index) => index + 1);

  const pages: (number | "ellipsis")[] = [1];
  const start = Math.max(2, Math.min(current - 1, total - 3));
  const end = Math.min(total - 1, Math.max(current + 1, 4));

  if (start > 2) pages.push("ellipsis");
  for (let page = start; page <= end; page++) pages.push(page);
  if (end < total - 1) pages.push("ellipsis");
  pages.push(total);

  return pages;
}

export function filterCourses(list: Course[], filters: CourseFilters) {
  const query = filters.q.toLowerCase();
  const priceRange = priceRanges.find((range) => range.value === filters.price);

  const results = list.filter((course) => {
    const matchesQuery =
      !query ||
      [course.title, course.creator.name, course.category].some((field) =>
        field.toLowerCase().includes(query),
      );
    const matchesLevel = !filters.level || toSlug(course.level) === filters.level;
    const matchesCategory =
      filters.category === ALL_CATEGORIES ||
      (filters.category === FEATURED
        ? course.featured
        : toSlug(course.category) === filters.category);
    const matchesPrice = !priceRange || priceRange.matches(course.price);

    return matchesQuery && matchesLevel && matchesCategory && matchesPrice;
  });

  const sorter = sorters[filters.sort];
  return sorter ? results.toSorted(sorter) : results;
}

const defaults: Partial<CourseFilters> = {
  q: "",
  category: FEATURED,
  sort: "relevant",
  page: 1,
};

// Builds a /courses URL from the current filters plus changes, omitting defaults.
// Changing any filter other than `page` resets to the first page.
export function buildCoursesHref(
  filters: CourseFilters,
  changes: Partial<CourseFilters> = {},
) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries({ ...filters, page: 1, ...changes })) {
    if (value && value !== defaults[key as keyof CourseFilters]) {
      params.set(key, String(value));
    }
  }

  const query = params.toString();
  return query ? `/courses?${query}` : "/courses";
}
