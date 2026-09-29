"use client";

import { useRouter } from "next/navigation";
import {
  ChartNoAxesColumnIncreasing,
  Funnel,
  ListFilter,
  Shapes,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  buildCoursesHref,
  categoryOptions,
  levelOptions,
  priceOptions,
  sortOptions,
  type CourseFilters,
  type FilterOption,
  type FilterScope,
} from "@/lib/course-filters";
import { cn } from "@/lib/utils";

const ANY = "any";

type FilterMenuProps = {
  label: string;
  icon: LucideIcon;
  options: FilterOption[];
  value?: string;
  // Adds an "Any …" option that clears the filter
  anyLabel?: string;
  // Shows the selected option's label on the trigger instead of `label`
  showValue?: boolean;
  align?: "start" | "end";
  onChange: (value: string | undefined) => void;
};

function FilterMenu({
  label,
  icon: Icon,
  options,
  value,
  anyLabel,
  showValue,
  align = "start",
  onChange,
}: FilterMenuProps) {
  const selected = options.find((option) => option.value === value);
  const isActive = Boolean(anyLabel && selected);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "h-12 gap-1 rounded-full border-border bg-card px-4 text-base leading-[1.2] font-medium text-foreground/80 [&_svg:not([class*='size-'])]:size-6",
              isActive && "border-primary text-primary",
            )}
          />
        }
      >
        <Icon className="text-foreground" />
        {showValue || isActive ? (selected?.label ?? label) : label}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={align}
        className="max-h-80 w-auto min-w-52 rounded-2xl border border-border p-2 shadow-none ring-0"
      >
        <DropdownMenuRadioGroup
          value={value ?? ANY}
          onValueChange={(next) => onChange(next === ANY ? undefined : next)}
        >
          {/* Radio items keep the menu open by default; close it once a choice is made */}
          {anyLabel && (
            <DropdownMenuRadioItem
              value={ANY}
              closeOnClick
              className="py-2 text-base"
            >
              {anyLabel}
            </DropdownMenuRadioItem>
          )}
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              closeOnClick
              className="py-2 text-base"
            >
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type CourseFilterBarProps = {
  filters: CourseFilters;
  // Which listing the filters apply to; defaults to /courses
  scope?: FilterScope;
};

export default function CourseFilterBar({
  filters,
  scope,
}: CourseFilterBarProps) {
  const router = useRouter();

  const update = (changes: Partial<CourseFilters>) =>
    router.push(buildCoursesHref(filters, changes, scope), { scroll: false });

  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div className="flex flex-wrap gap-3 sm:gap-4">
        <FilterMenu
          label="Filter"
          icon={Funnel}
          options={priceOptions}
          value={filters.price}
          anyLabel="Any price"
          onChange={(price) => update({ price })}
        />
        <FilterMenu
          label="Level"
          icon={ChartNoAxesColumnIncreasing}
          options={levelOptions}
          value={filters.level}
          anyLabel="All levels"
          onChange={(level) => update({ level })}
        />
        <FilterMenu
          label="Category"
          icon={Shapes}
          options={categoryOptions}
          value={filters.category}
          onChange={(category) => update({ category })}
        />
      </div>

      <FilterMenu
        label="Sort"
        icon={ListFilter}
        options={sortOptions}
        value={filters.sort}
        showValue
        align="end"
        onChange={(sort) => update({ sort })}
      />
    </div>
  );
}
