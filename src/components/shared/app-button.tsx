import type { ComponentProps } from "react";
import Link from "next/link";
import type { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Electric Lime pill button from the design system
const brandClassName =
  "h-11.5 rounded-full bg-brand-accent px-6 text-lg leading-[1.2] font-medium text-brand-accent-foreground hover:bg-brand-accent/90";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

type ButtonStyleProps = Omit<VariantProps<typeof buttonVariants>, "variant"> & {
  variant?: ButtonVariant | "brand";
  className?: string;
};

type AppLinkButtonProps = ButtonStyleProps &
  Omit<ComponentProps<typeof Link>, keyof ButtonStyleProps>;

type AppActionButtonProps = ButtonStyleProps &
  Omit<ComponentProps<typeof Button>, keyof ButtonStyleProps> & {
    href?: never;
  };

type AppButtonProps = AppLinkButtonProps | AppActionButtonProps;

export default function AppButton({
  variant,
  size,
  className,
  ...props
}: AppButtonProps) {
  const isBrand = variant === "brand";
  const baseVariant = isBrand ? undefined : variant;
  const mergedClassName = cn(isBrand && brandClassName, className);

  if (props.href !== undefined) {
    return (
      <Link
        className={cn(
          buttonVariants({ variant: baseVariant, size }),
          mergedClassName,
        )}
        {...(props as Omit<AppLinkButtonProps, keyof ButtonStyleProps>)}
      />
    );
  }

  return (
    <Button
      variant={baseVariant}
      size={size}
      className={mergedClassName}
      {...(props as Omit<AppActionButtonProps, keyof ButtonStyleProps>)}
    />
  );
}
