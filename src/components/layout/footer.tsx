import Link from "next/link";

import { LogoBlack, LogoWhite } from "@/assets/icons";
import NewsletterForm from "@/components/shared/newsletter-form";
import { footerNavGroups, legalNavItems } from "@/data/footer";

const linkClassName = "transition-opacity hover:opacity-70";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-footer-border bg-footer text-footer-foreground">
      <div className="mx-auto flex w-full max-w-312 flex-col gap-16 px-4 pt-12 pb-8 sm:px-6 lg:gap-32.5 lg:pt-17.75 lg:pb-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-23">
          <div className="flex w-full max-w-132 flex-col gap-8 sm:gap-11.25">
            <div className="flex flex-col gap-4">
              <Link href="/" aria-label="ByteSpace home" className="w-fit">
                <LogoBlack className="h-9.25 w-auto dark:hidden" />
                <LogoWhite className="hidden h-9.25 w-auto dark:block" />
              </Link>
              <p className="text-sm leading-[1.6]">
                Stay Up to date with our latest features and releases by
                joining our newsletter.
              </p>
            </div>

            <NewsletterForm />
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:w-145 lg:shrink-0 lg:pt-12">
            {footerNavGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <ul className="flex flex-col gap-4 text-sm leading-[1.6]">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={linkClassName}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-footer-border pt-6 text-xs leading-[1.6] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} ByteSpace. All rights reserved.</p>

          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
