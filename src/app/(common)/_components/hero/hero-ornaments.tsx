import Image from "next/image";

import {
  ConeLime,
  PyramidWhite,
  TorusWhite,
  ZigzagLime,
  ZigzagWhiteLg,
  ZigzagWhiteSm,
} from "@/assets/images/hero";
import { cn } from "@/lib/utils";

// Positions are on the 1440px Figma frame; images render at their exported size
const ornaments = [
  { src: ZigzagLime, className: "top-55.25 left-0" },
  { src: ZigzagWhiteSm, className: "top-119 left-45.5" },
  { src: TorusWhite, className: "top-170 left-3.75" },
  { src: ConeLime, className: "top-54.75 left-306.5" },
  { src: PyramidWhite, className: "top-115.75 left-275.75" },
  { src: ZigzagWhiteLg, className: "top-168 left-280.75" },
];

export default function HeroOrnaments() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-360 -translate-x-1/2 lg:block"
    >
      {ornaments.map(({ src, className }) => (
        <Image
          key={src.src}
          src={src}
          alt=""
          className={cn("absolute", className)}
        />
      ))}
    </div>
  );
}
