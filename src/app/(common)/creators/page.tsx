import type { Metadata } from "next";
import Link from "next/link";
import { UserSearch } from "lucide-react";

import CreatorCard from "@/components/shared/creator-card";
import {
  EmptyState,
  emptyStateActionClassName,
} from "@/components/shared/empty-state";
import SubPageHeader from "@/components/shared/sub-page-header";
import { creators } from "@/data/creators";

import CreatorSearchForm from "./_components/creator-search-form";

export const metadata: Metadata = {
  title: "Creators",
  alternates: { canonical: "/creators" },
  description: "Meet the creators sharing their expertise on ByteSpace.",
};

export default async function CreatorsPage({
  searchParams,
}: PageProps<"/creators">) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q)?.trim() ?? "";
  const results = creators.filter((creator) =>
    [creator.name, creator.role].some((field) =>
      field.toLowerCase().includes(query.toLowerCase()),
    ),
  );

  return (
    <main>
      <SubPageHeader title="Meet Our Creators">
        <CreatorSearchForm query={query} />
      </SubPageHeader>

      <section aria-label="Creators" className="bg-background">
        <div className="mx-auto max-w-300 px-4 pt-12 pb-20 sm:px-6 lg:px-0 lg:pt-18 lg:pb-30">
          {results.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {results.map((creator) => (
                <li key={creator.slug}>
                  <CreatorCard creator={creator} className="h-full" />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              icon={UserSearch}
              title="No creators found"
              subtitle={`No creators match “${query}”. Try a different name or skill.`}
              action={
                <Link href="/creators" className={emptyStateActionClassName}>
                  See all creators
                </Link>
              }
            />
          )}
        </div>
      </section>
    </main>
  );
}
