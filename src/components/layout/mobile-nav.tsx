"use client";

import { Menu } from "lucide-react";

import NavLink from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authNavItems, mainNavItems } from "@/data/navigation";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label="Open menu"
            className="text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
          />
        }
      >
        <Menu className="size-6" />
      </SheetTrigger>

      {/* The built-in close button is the panel's direct child; keep it white on the blue panel */}
      <SheetContent
        side="right"
        className="border-l border-brand-foreground/20 bg-brand text-brand-foreground [&>button]:text-brand-foreground [&>button:hover]:bg-brand-foreground/10 [&>button:hover]:text-brand-foreground"
      >
        <SheetHeader>
          <SheetTitle className="text-brand-foreground">Menu</SheetTitle>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col gap-4 px-4">
          {[...mainNavItems, ...authNavItems].map((item) => (
            <SheetClose
              key={item.href}
              nativeButton={false}
              render={<NavLink href={item.href} />}
            >
              {item.label}
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
