import type { ReactNode } from "react";
import Link from "next/link";

type AuthCardProps = {
  eyebrow: string;
  title: string;
  footer: { text: string; linkLabel: string; href: string };
  children: ReactNode;
};

// White form card shared by the sign-in and sign-up pages
export default function AuthCard({ eyebrow, title, footer, children }: AuthCardProps) {
  return (
    <div className="flex w-full flex-col justify-between gap-12 rounded-[1.5rem] bg-card p-6 text-card-foreground sm:px-15.75 sm:py-15.25 lg:min-h-196 lg:w-144.75">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-lg leading-[1.6] text-primary">{eyebrow}</p>
          <h1 className="font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[2.75rem]">
            {title}
          </h1>
        </div>
        {children}
      </div>

      <p className="text-center text-base leading-[1.6] text-card-foreground/75">
        {footer.text}{" "}
        <Link href={footer.href} className="text-primary hover:underline">
          {footer.linkLabel}
        </Link>
      </p>
    </div>
  );
}
