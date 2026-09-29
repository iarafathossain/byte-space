"use client";

import { useState, type FormEvent } from "react";

import AppButton from "@/components/shared/app-button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { newsletterSchema } from "@/lib/validations/newsletter";

export default function NewsletterForm() {
  const [error, setError] = useState<string>();
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const result = newsletterSchema.safeParse({
      email: new FormData(form).get("email"),
    });

    if (!result.success) {
      setError(result.error.issues[0]?.message);
      setIsSubscribed(false);
      return;
    }

    // TODO: send result.data.email to the newsletter API
    setError(undefined);
    setIsSubscribed(true);
    form.reset();
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="w-full max-w-126">
      <FieldGroup>
        <Field data-invalid={!!error} className="gap-6">
          <FieldLabel htmlFor="newsletter-email" className="sr-only">
            Email address
          </FieldLabel>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3 sm:gap-6">
              <Input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                aria-invalid={!!error}
                className="h-13 min-w-0 flex-1 rounded-full border-footer-border bg-footer px-6 text-base leading-[1.6] text-footer-foreground placeholder:text-footer-foreground sm:max-w-94 md:text-base dark:bg-footer"
              />
              <AppButton type="submit" variant="brand" className="shrink-0">
                Search
              </AppButton>
            </div>

            <FieldError>{error}</FieldError>
            {isSubscribed && (
              <p role="status" className="text-sm leading-[1.6]">
                Thanks for subscribing!
              </p>
            )}
          </div>

          <FieldDescription className="text-xs leading-[1.6] text-footer-foreground">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
