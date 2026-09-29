import Form from "next/form";
import { Search } from "lucide-react";

import AppButton from "@/components/shared/app-button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { heroContent } from "@/data/hero";

export default function HeroSearchForm() {
  return (
    <Form
      action="/courses"
      role="search"
      className="flex w-full max-w-145.25 items-start gap-3 sm:gap-4"
    >
      <label htmlFor="hero-search" className="sr-only">
        Search courses
      </label>
      <InputGroup className="h-13 flex-1 rounded-3xl border-0 bg-card px-4 sm:px-6 dark:bg-card">
        <InputGroupAddon className="pl-0">
          <Search className="size-6" />
        </InputGroupAddon>
        <InputGroupInput
          id="hero-search"
          name="q"
          type="search"
          placeholder={heroContent.searchPlaceholder}
          className="h-full text-base leading-[1.6] text-card-foreground placeholder:text-muted-foreground sm:text-lg md:text-lg"
        />
      </InputGroup>
      <AppButton type="submit" variant="brand" className="shrink-0">
        Search
      </AppButton>
    </Form>
  );
}
