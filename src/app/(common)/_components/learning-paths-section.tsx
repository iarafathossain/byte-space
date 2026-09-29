import Link from "next/link";

import SectionHeading from "@/components/shared/section-heading";
import { learningPaths } from "@/data/categories";

export default function LearningPathsSection() {
  return (
    <section aria-labelledby="learning-paths-title" className="bg-background">
      {/* No top padding: continues directly after the courses section */}
      <div className="mx-auto flex max-w-300.5 flex-col items-center gap-12 px-4 pb-20 sm:px-6 lg:gap-16 lg:px-0 lg:pb-30">
        <SectionHeading
          id="learning-paths-title"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          // Measured from the design: this heading is 36px and fits on one line
          titleClassName="lg:text-4xl"
        />

        <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-10">
          {learningPaths.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-[1.5rem] border border-border text-foreground transition-colors hover:border-primary/40 hover:bg-muted/50"
              >
                <span className="flex size-15 items-center justify-center rounded-full bg-brand-accent text-brand-accent-foreground">
                  <Icon aria-hidden="true" className="size-9" />
                </span>
                <span className="text-lg leading-[1.2] font-medium sm:text-xl">
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
