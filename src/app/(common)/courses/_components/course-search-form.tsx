"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "nextjs-toploader/app";
import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buildCoursesHref, type CourseFilters } from "@/lib/course-filters";

const searchScopes = [
  { value: "courses", label: "Courses" },
  { value: "creators", label: "Creators" },
];

type CourseSearchFormProps = {
  filters: CourseFilters;
};

export default function CourseSearchForm({ filters }: CourseSearchFormProps) {
  const router = useRouter();
  const [scope, setScope] = useState("courses");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = String(new FormData(event.currentTarget).get("q") ?? "").trim();

    router.push(
      scope === "courses"
        ? buildCoursesHref(filters, { q })
        : `/creators${q ? `?q=${encodeURIComponent(q)}` : ""}`,
    );
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full items-start gap-3 sm:gap-4"
    >
      <label htmlFor="courses-search" className="sr-only">
        Search {scope}
      </label>
      <InputGroup className="h-13 flex-1 rounded-3xl border-0 bg-card px-4 sm:px-6 dark:bg-card">
        <InputGroupAddon className="pl-0">
          <Search className="size-6" />
        </InputGroupAddon>
        <InputGroupInput
          // Re-mount when the URL query changes so the field stays in sync
          key={filters.q}
          id="courses-search"
          name="q"
          type="search"
          defaultValue={filters.q}
          placeholder="Search"
          className="h-full text-base leading-[1.6] text-card-foreground placeholder:text-muted-foreground sm:text-lg md:text-lg"
        />
      </InputGroup>

      <Select
        items={searchScopes}
        value={scope}
        onValueChange={(value) => value && setScope(value)}
      >
        <SelectTrigger
          aria-label="Search in"
          className="h-12! shrink-0 gap-2 rounded-full border-0 bg-brand-accent px-4 text-lg leading-[1.2] font-medium text-brand-accent-foreground hover:bg-brand-accent/90 sm:min-w-36.75 sm:justify-center sm:px-6 dark:bg-brand-accent dark:hover:bg-brand-accent/90 [&_svg]:size-6! [&_svg]:text-brand-accent-foreground!"
        >
          <SelectValue />
        </SelectTrigger>
        {/* Open as a dropdown below the button instead of over it */}
        <SelectContent
          alignItemWithTrigger={false}
          side="bottom"
          align="end"
          sideOffset={8}
          className="rounded-2xl border border-border p-1 shadow-none ring-0"
        >
          {searchScopes.map(({ value, label }) => (
            <SelectItem key={value} value={value} className="text-base">
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  );
}
