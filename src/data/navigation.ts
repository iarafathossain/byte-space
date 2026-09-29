import { ShoppingBag, type LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const authNavItems: NavItem[] = [
  { label: "Sign In", href: "/sign-in" },
  { label: "Join Us", href: "/sign-up" },
];

export const cartNavItem: NavItem = {
  label: "Cart",
  href: "/cart",
  icon: ShoppingBag,
};
