import type { ReactNode } from "react";

import GridBackground from "@/components/shared/grid-background";

type SubPageHeaderProps = {
  title: string;
  children?: ReactNode;
};

// Blue grid banner at the top of sub-pages; top padding clears the overlaid site header
export default function SubPageHeader({ title, children }: SubPageHeaderProps) {
  return (
    <GridBackground as="section" aria-labelledby="page-title">
      <div className="relative z-10 mx-auto flex max-w-156 flex-col items-center gap-8 px-4 pt-32 pb-12 text-center sm:px-6 lg:px-0 lg:pt-41 lg:pb-17.25">
        <h1
          id="page-title"
          className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-brand-foreground lg:text-4xl"
        >
          {title}
        </h1>
        {children}
      </div>
    </GridBackground>
  );
}
