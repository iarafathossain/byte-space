import type { NavItem } from "@/data/navigation";

export type FooterNavGroup = {
  title: string;
  items: NavItem[];
};

export const footerNavGroups: FooterNavGroup[] = [
  {
    title: "Browse",
    items: [
      { label: "Featured Courses", href: "/courses?filter=featured" },
      { label: "Featured Categories", href: "/categories?filter=featured" },
      { label: "Business", href: "/categories/business" },
      { label: "IT", href: "/categories/it" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  {
    title: "Categories",
    items: [
      { label: "Development", href: "/categories/development" },
      { label: "Marketing", href: "/categories/marketing" },
      { label: "Photography", href: "/categories/photography" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Sport", href: "/categories/sport" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Become a Creator", href: "/become-a-creator" },
      { label: "Affiliate Program", href: "/affiliate-program" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export const legalNavItems: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Settings", href: "/cookies-settings" },
];
