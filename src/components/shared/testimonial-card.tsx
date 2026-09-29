import UserAvatar from "@/components/shared/user-avatar";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export default function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const { name, role, quote, avatar } = testimonial;

  return (
    <Card
      className={cn(
        "rounded-[1.5rem] p-6 text-card-foreground ring-0",
        className,
      )}
    >
      <figure className="flex flex-col items-start gap-6">
        <UserAvatar src={avatar} className="size-20" />

        <figcaption>
          <p className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em]">
            {name}
          </p>
          <p className="text-lg leading-[1.6] text-primary">{role}</p>
        </figcaption>

        <blockquote className="text-lg leading-[1.6] text-card-foreground/80">
          <p>&ldquo;{quote}&rdquo;</p>
        </blockquote>
      </figure>
    </Card>
  );
}
