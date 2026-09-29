import AppButton from "@/components/shared/app-button";
import GridBackground from "@/components/shared/grid-background";

import CtaOrnaments from "./cta-ornaments";

export default function CtaSection() {
  return (
    <GridBackground as="section" aria-labelledby="cta-title">
      <div className="relative z-10 mx-auto flex max-w-241 flex-col items-center gap-10 px-4 py-20 text-center sm:px-6 lg:px-0 lg:py-21">
        <h2
          id="cta-title"
          className="max-w-177.5 font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-brand-foreground sm:text-4xl lg:text-[2.75rem]"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-base leading-[1.6] text-brand-foreground sm:text-lg">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <AppButton href="/sign-up?role=creator" variant="brand">
          Join as Creator
        </AppButton>
      </div>

      <CtaOrnaments />
    </GridBackground>
  );
}
