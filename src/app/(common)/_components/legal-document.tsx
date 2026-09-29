import type { ReactNode } from "react";

import SubPageHeader from "@/components/shared/sub-page-header";
import type { LegalDocument as LegalDocumentData } from "@/data/legal";

type LegalDocumentProps = {
  document: LegalDocumentData;
  // Extra content shown after the intro, e.g. cookie preferences
  children?: ReactNode;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

// Simple reading layout shared by the privacy, terms and cookie pages
export default function LegalDocument({
  document,
  children,
}: LegalDocumentProps) {
  const { title, updatedAt, intro, sections } = document;

  return (
    <main>
      <SubPageHeader title={title} />

      <article className="mx-auto flex max-w-192 flex-col gap-10 px-4 py-16 text-base leading-[1.6] text-foreground/75 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Last updated{" "}
            <time dateTime={updatedAt}>
              {dateFormatter.format(new Date(updatedAt))}
            </time>
          </p>
          <p className="text-lg">{intro}</p>
        </div>

        {children}

        {sections.map(({ heading, paragraphs }) => (
          <section key={heading} className="flex flex-col gap-3">
            <h2 className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-foreground">
              {heading}
            </h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
