import Image, { type StaticImageData } from "next/image";

import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  src: StaticImageData;
  alt?: string;
  className?: string;
};

export default function UserAvatar({ src, alt = "", className }: UserAvatarProps) {
  return (
    <Avatar className={cn("after:hidden", className)}>
      <Image src={src} alt={alt} className="size-full rounded-full object-cover" />
    </Avatar>
  );
}
