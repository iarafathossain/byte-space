import type { ReactNode } from "react";
import Link from "next/link";

import { LogoIcon } from "@/assets/icons";
import GridBackground from "@/components/shared/grid-background";

import AuthVisual from "./auth-visual";

type AuthShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

// Blue grid page with the logo, intro copy and visual on the left, form card on the right
export default function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <GridBackground className="min-h-svh">
      <div className="relative z-10 mx-auto flex min-h-svh max-w-300 flex-col gap-10 px-4 pb-10 sm:px-6 lg:flex-row lg:justify-between lg:gap-12 lg:pb-0 xl:px-0">
        <div className="flex flex-col lg:w-118.75 lg:shrink-0">
          <Link href="/" aria-label="ByteSpace home" className="mt-8.75 w-fit">
            <LogoIcon className="h-8 w-auto" />
          </Link>

          {/* Fixed desktop height keeps the visual at the same spot on both pages */}
          <div className="mt-10 flex flex-col gap-4 text-brand-foreground lg:mt-13.25 lg:min-h-31.75">
            <p className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em]">
              {title}
            </p>
            <p className="text-base leading-[1.6] sm:text-lg">{description}</p>
          </div>

          {/* Decorative collage; needs the full desktop width */}
          <AuthVisual className="mt-14.5 -ml-6.25 hidden xl:block" />
        </div>

        <div className="lg:py-30">{children}</div>
      </div>
    </GridBackground>
  );
}
