import GridBackground from "@/components/shared/grid-background";
import SearchForm from "@/components/shared/search-form";
import { heroContent } from "@/data/hero";

import HeroOrnaments from "./hero-ornaments";
import HeroVisual from "./hero-visual";

export default function HeroSection() {
  return (
    <GridBackground as="section" aria-labelledby="hero-title">
      {/* Top padding clears the overlaid header (h-20 / lg:h-30) */}
      <div className="relative z-10 mx-auto flex max-w-312 flex-col items-center gap-10 px-4 pt-32 text-center sm:px-6 lg:gap-15 lg:pt-42.25">
        <div className="flex max-w-233.75 flex-col items-center gap-6 sm:gap-8">
          <h1
            id="hero-title"
            className="font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em] text-brand-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroContent.title}
          </h1>
          <p className="max-w-204.75 text-base leading-[1.6] text-brand-muted-foreground sm:text-lg">
            {heroContent.description}
          </p>
        </div>

        <SearchForm
          action="/courses"
          label="Search courses"
          placeholder={heroContent.searchPlaceholder}
          className="max-w-145.25"
        />
      </div>

      <HeroVisual />
      <HeroOrnaments />
    </GridBackground>
  );
}
