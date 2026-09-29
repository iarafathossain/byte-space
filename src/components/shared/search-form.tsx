"use client";

import type { FormEvent } from "react";
import { Search } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";

import AppButton from "@/components/shared/app-button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

type SearchFormProps = {
  // Page the search goes to, e.g. "/courses" → "/courses?q=figma"
  action: string;
  label: string;
  placeholder: string;
  defaultQuery?: string;
  className?: string;
};

// Search bar with the brand button; uses NextTopLoader's router so the loader shows
export default function SearchForm({
  action,
  label,
  placeholder,
  defaultQuery = "",
  className,
}: SearchFormProps) {
  const router = useRouter();
  const inputId = `search-${action.replace(/\W/g, "")}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = String(new FormData(event.currentTarget).get("q") ?? "").trim();
    router.push(q ? `${action}?q=${encodeURIComponent(q)}` : action);
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn("flex w-full items-start gap-3 sm:gap-4", className)}
    >
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <InputGroup className="h-13 flex-1 rounded-3xl border-0 bg-card px-4 sm:px-6 dark:bg-card">
        <InputGroupAddon className="pl-0">
          <Search className="size-6" />
        </InputGroupAddon>
        <InputGroupInput
          // Re-mount when the URL query changes so the field stays in sync
          key={defaultQuery}
          id={inputId}
          name="q"
          type="search"
          defaultValue={defaultQuery}
          placeholder={placeholder}
          className="h-full text-base leading-[1.6] text-card-foreground placeholder:text-muted-foreground sm:text-lg md:text-lg"
        />
      </InputGroup>
      <AppButton type="submit" variant="brand" className="shrink-0">
        Search
      </AppButton>
    </form>
  );
}
