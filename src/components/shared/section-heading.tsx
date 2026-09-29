import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
};

export default function SectionHeading({
  id,
  title,
  description,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-229.25 flex-col items-center gap-4 text-center",
        className,
      )}
    >
      <h2
        id={id}
        className={cn(
          "font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className="text-base leading-[1.6] text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
