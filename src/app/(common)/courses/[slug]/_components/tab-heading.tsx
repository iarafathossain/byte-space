import type { ReactNode } from "react";

// Section heading used inside the About / Lessons / Reviews tabs
export default function TabHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-foreground">
      {children}
    </h2>
  );
}
