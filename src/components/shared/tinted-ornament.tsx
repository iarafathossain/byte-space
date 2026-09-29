import type { CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type TintedOrnamentProps = {
  src: StaticImageData;
  className?: string;
};

/*
 * Recolors a white matcap ornament to Electric Lime: a lime layer masked to
 * the image's shape, with the image multiplied on top to keep its shading.
 */
export default function TintedOrnament({ src, className }: TintedOrnamentProps) {
  return (
    <div aria-hidden="true" className={cn("isolate", className)}>
      <div
        className="tint-mask absolute inset-0 bg-brand-accent"
        style={{ "--tint-mask": `url(${src.src})` } as CSSProperties}
      />
      <Image
        src={src}
        alt=""
        className="relative h-auto w-full mix-blend-multiply"
      />
    </div>
  );
}
