import { CircleCheck } from "lucide-react";

import { cn } from "@/lib/utils";

type CheckListProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
};

export default function CheckList({ items, className, itemClassName }: CheckListProps) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-center gap-2", itemClassName)}>
          <CircleCheck className="size-6 shrink-0 fill-primary text-background" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
