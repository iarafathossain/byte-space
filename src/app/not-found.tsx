import type { Metadata } from "next";

import AppButton from "@/components/shared/app-button";
import GridBackground from "@/components/shared/grid-background";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <GridBackground className="flex min-h-svh flex-col">
      {/* Top padding = overlaid header height (h-20 / lg:h-30) + design spacing */}
      <main className="flex flex-1 flex-col items-center px-4 pt-32 pb-20 text-center sm:px-6 lg:pt-40">
        <p
          aria-hidden="true"
          className="gradient-text-lime font-heading text-[9rem] leading-none font-semibold tracking-[-0.01em] select-none sm:text-[15rem] md:text-[22rem] lg:text-[30rem]"
        >
          404
        </p>

        <div className="-mt-8 flex max-w-233.75 flex-col items-center gap-6 sm:-mt-14 sm:gap-8 md:-mt-20 lg:-mt-30">
          <h1 className="font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em] text-brand-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="sr-only">404 - </span>
            The page you are looking for doesn&rsquo;t exist
          </h1>

          <p className="text-base leading-[1.6] text-brand-muted-foreground sm:text-lg">
            Try to use a correct url or go back to homepage to start again
          </p>

          <AppButton
            href="/"
            variant="brand"
          >
            Back to Home
          </AppButton>
        </div>
      </main>
    </GridBackground>
  );
}
