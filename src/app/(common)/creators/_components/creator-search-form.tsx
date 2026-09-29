import Form from "next/form";
import { Search } from "lucide-react";

import AppButton from "@/components/shared/app-button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function CreatorSearchForm({ query }: { query: string }) {
  return (
    <Form
      action="/creators"
      role="search"
      className="flex w-full items-start gap-3 sm:gap-4"
    >
      <label htmlFor="creators-search" className="sr-only">
        Search creators
      </label>
      <InputGroup className="h-13 flex-1 rounded-3xl border-0 bg-card px-4 sm:px-6 dark:bg-card">
        <InputGroupAddon className="pl-0">
          <Search className="size-6" />
        </InputGroupAddon>
        <InputGroupInput
          // Re-mount when the URL query changes so the field stays in sync
          key={query}
          id="creators-search"
          name="q"
          type="search"
          defaultValue={query}
          placeholder="Search creators"
          className="h-full text-base leading-[1.6] text-card-foreground placeholder:text-muted-foreground sm:text-lg md:text-lg"
        />
      </InputGroup>
      <AppButton type="submit" variant="brand" className="h-12 shrink-0">
        Search
      </AppButton>
    </Form>
  );
}
