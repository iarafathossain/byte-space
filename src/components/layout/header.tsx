import Link from "next/link";

import { LogoWhite } from "@/assets/icons";
import MobileNav from "@/components/layout/mobile-nav";
import NavLink from "@/components/layout/nav-link";
import { authNavItems, cartNavItem, mainNavItems } from "@/data/navigation";

export default function Header() {
  const CartIcon = cartNavItem.icon;

  return (
    <header className="absolute inset-x-0 top-0 z-20 text-brand-foreground">
      <div className="mx-auto flex h-20 w-full max-w-312 items-center justify-between gap-6 px-4 sm:px-6 lg:grid lg:h-30 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="ByteSpace home" className="shrink-0">
          <LogoWhite className="h-7 w-auto sm:h-9.25" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {mainNavItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 lg:gap-6">
          <nav aria-label="Account" className="hidden items-center gap-6 lg:flex">
            {authNavItems.map((item) => (
              <NavLink key={item.href} href={item.href} className="leading-6">
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            href={cartNavItem.href}
            aria-label={cartNavItem.label}
            className="inline-flex size-10 items-center justify-center transition-colors hover:text-brand-accent lg:size-6"
          >
            {CartIcon && <CartIcon className="size-6" />}
          </Link>

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
