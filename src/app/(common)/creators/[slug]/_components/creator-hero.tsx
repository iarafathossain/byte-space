import Image from "next/image";

import GridBackground from "@/components/shared/grid-background";
import type { Creator } from "@/data/creators";

import CreatorActions from "./creator-actions";

type CreatorHeroProps = {
  creator: Creator;
  productCount: number;
};

export default function CreatorHero({
  creator,
  productCount,
}: CreatorHeroProps) {
  return (
    <GridBackground as="section" aria-labelledby="creator-name">
      {/* Top padding clears the overlaid site header */}
      <div className="relative z-10 mx-auto flex max-w-300 flex-col gap-10 px-4 pt-32 pb-14 text-brand-foreground sm:px-6 xl:px-0 xl:pt-43 xl:pb-18">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Image
              src={creator.avatar}
              alt={creator.name}
              loading="eager"
              className="size-24 shrink-0 rounded-[1.5rem] object-cover"
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1
                  id="creator-name"
                  className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] lg:text-4xl"
                >
                  {creator.name}
                </h1>
                <span className="inline-flex h-8.75 items-center rounded-full bg-brand-accent px-6 text-base leading-[1.2] font-medium text-brand-accent-foreground">
                  Creator
                </span>
              </div>
              <p className="text-lg leading-[1.6]">{creator.role}</p>
            </div>
          </div>

          <div className="flex flex-col text-base leading-[1.6] sm:text-lg">
            {creator.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <CreatorActions
          productCount={productCount}
          followers={creator.followers}
        />
      </div>
    </GridBackground>
  );
}
