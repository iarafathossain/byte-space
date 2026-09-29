import CheckList from "@/components/shared/check-list";
import { creatorBenefits, learnerStats } from "@/data/growth";
import { cn } from "@/lib/utils";

import CreatorVisual from "./creator-visual";
import LearnerVisual from "./learner-visual";

const headingClassName =
  "font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]";

export default function GrowthSection() {
  return (
    <div className="growth-glow overflow-hidden">
      <div className="mx-auto flex max-w-300 flex-col gap-18 px-4 py-20 sm:px-6 xl:px-0 xl:py-30">
        {/* Row is 1258px wide in the design, overhanging the container on the right */}
        <section
          aria-labelledby="growth-learners-title"
          className="flex flex-col items-center gap-12 xl:-mr-14.5 xl:flex-row xl:gap-15.75"
        >
          <div className="flex w-full flex-col gap-10 xl:w-143.5 xl:shrink-0">
            <h2 id="growth-learners-title" className={headingClassName}>
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-119.25 text-base leading-[1.6] text-foreground/80 sm:text-lg">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="flex items-end gap-10 sm:gap-14">
              {learnerStats.map(({ value, label }) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="text-base leading-[1.6] text-foreground/80 sm:text-lg">
                    {label}
                  </dt>
                  <dd className="font-heading text-3xl leading-11 font-medium tracking-[-0.01em] text-primary sm:text-4xl">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <LearnerVisual />
        </section>

        <section
          aria-labelledby="growth-creators-title"
          className="flex flex-col-reverse items-center gap-12 xl:flex-row xl:gap-19.75"
        >
          <CreatorVisual />

          <div className="flex w-full flex-col gap-10 xl:w-145">
            <h2
              id="growth-creators-title"
              className={cn(headingClassName, "max-w-97.75")}
            >
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="text-base leading-7 text-foreground/80 sm:text-lg">
              <strong className="font-bold text-foreground">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>
            <CheckList
              items={creatorBenefits}
              className="gap-4"
              itemClassName="items-end text-lg leading-[1.2] font-medium text-foreground"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
