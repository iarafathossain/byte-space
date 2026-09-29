import Image from "next/image";

import { Girl, ZigzagWhiteSm } from "@/assets/images/hero";
import { HappyStudentsCard } from "@/components/shared/stat-cards";
import TintedOrnament from "@/components/shared/tinted-ornament";
import { revenueStats } from "@/data/growth";

import RevenueCard from "./revenue-card";

// Fixed 541×596 Figma frame, scaled down on phones (wrapper height tracks it)
export default function CreatorVisual() {
  return (
    <div className="relative h-82 w-full sm:h-149 xl:w-135.25 xl:shrink-0">
      <div className="absolute top-0 left-1/2 h-149 w-135.25 origin-top -translate-x-1/2 scale-55 sm:scale-100">
        <RevenueCard {...revenueStats.total} className="absolute top-11 left-0 w-58" />
        <RevenueCard {...revenueStats.yearToDate} className="absolute top-48.5 left-0 w-33.5" />

        {/* Export includes a 21px drop-shadow bleed around the photo */}
        <Image
          src={Girl}
          alt="Smiling creator with a headset holding a tablet"
          className="absolute -top-0.75 left-1.75 max-w-none"
        />

        <HappyStudentsCard className="absolute top-103.25 left-70.75 w-64.5" />

        <TintedOrnament
          src={ZigzagWhiteSm}
          className="absolute top-28.5 left-76.25 w-54.25 -scale-x-100"
        />
      </div>
    </div>
  );
}
