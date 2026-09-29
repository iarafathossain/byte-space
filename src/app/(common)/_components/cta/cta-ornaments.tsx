import Image from "next/image";

import {
  ConeLime,
  PyramidWhite,
  TorusWhite,
  ZigzagLime,
  ZigzagWhiteLg,
  ZigzagWhiteSm,
} from "@/assets/images/hero";

import TintedOrnament from "../tinted-ornament";

// Positions are on the 1440px Figma frame, anchored to the section center
export default function CtaOrnaments() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-360 -translate-x-1/2 lg:block"
    >
      <Image src={ZigzagLime} alt="" className="absolute -top-40.5 left-0 max-w-none" />
      <Image src={ZigzagWhiteSm} alt="" className="absolute top-1.5 left-44.75 max-w-none" />
      <TintedOrnament src={TorusWhite} className="absolute top-75 left-4.25 w-86.5" />

      <TintedOrnament src={PyramidWhite} className="absolute -top-0.5 left-269.5 w-47.5" />
      {/* The lime cylinder export, desaturated to Shuttle Gray 50 white */}
      <Image
        src={ConeLime}
        alt=""
        className="absolute top-1 left-305.25 max-w-none brightness-110 grayscale"
      />
      <TintedOrnament src={ZigzagWhiteLg} className="absolute top-72.5 left-277 w-79.25" />
    </div>
  );
}
