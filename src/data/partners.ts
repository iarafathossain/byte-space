import type { ComponentType, SVGProps } from "react";

import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "@/assets/partner-logo";

export type Partner = {
  name: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
};

export const partners: Partner[] = [
  { name: "Logoipsum Waves", logo: Logo1 },
  { name: "Logoipsum Sun", logo: Logo2 },
  { name: "Logoipsum Bolt", logo: Logo3 },
  { name: "Logoipsum Clover", logo: Logo4 },
  { name: "Logoipsum Rings", logo: Logo5 },
];
