import type { ComponentType, SVGProps } from "react";

import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  ItSoftwareIcon,
  MarketingIcon,
  PhotographyIcon,
} from "@/assets/icons";

export type LearningPath = {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const learningPaths: LearningPath[] = [
  { name: "Design", href: "/categories/design", icon: DesignIcon },
  {
    name: "Development",
    href: "/categories/development",
    icon: DevelopmentIcon,
  },
  {
    name: "IT & Software",
    href: "/categories/it-software",
    icon: ItSoftwareIcon,
  },
  { name: "Business", href: "/categories/business", icon: BusinessIcon },
  { name: "Marketing", href: "/categories/marketing", icon: MarketingIcon },
  {
    name: "Photography",
    href: "/categories/photography",
    icon: PhotographyIcon,
  },
];
