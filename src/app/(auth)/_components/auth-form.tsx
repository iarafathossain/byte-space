"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";

import AppButton from "@/components/shared/app-button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signInSchema, signUpSchema } from "@/lib/validations/auth";

type AuthField = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
};

const emailField: AuthField = {
  name: "email",
  label: "Email",
  type: "email",
  placeholder: "designer@example.com",
  autoComplete: "email",
};

const passwordField = (autoComplete: string): AuthField => ({
  name: "password",
  label: "Password",
  type: "password",
  placeholder: "••••••••",
  autoComplete,
});

// Each variant pairs its Zod schema with the fields it renders
const formVariants = {
  "sign-up": {
    schema: signUpSchema,
    submitLabel: "Continue",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Jamie Davis",
        autoComplete: "name",
      },
      emailField,
      passwordField("new-password"),
    ] satisfies AuthField[],
  },
  "sign-in": {
    schema: signInSchema,
    submitLabel: "Sign In",
    fields: [emailField, passwordField("current-password")] satisfies AuthField[],
  },
};

type FieldErrors = Partial<Record<string, string[]>>;

type AuthFormProps = {
  variant: keyof typeof formVariants;
};

export default function AuthForm({ variant }: AuthFormProps) {
  const { schema, submitLabel, fields } = formVariants[variant];
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = schema.safeParse(Object.fromEntries(new FormData(event.currentTarget)));

    if (!result.success) {
      setErrors(z.flattenError(result.error).fieldErrors);
      setIsSubmitted(false);
      return;
    }

    // TODO: send result.data to the auth API
    setErrors({});
    setIsSubmitted(true);
  }

  // Clear a field's error as soon as the user edits it
  const clearError = (name: string) => {
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col items-end gap-6">
      <FieldGroup className="gap-6">
        {fields.map((field) => {
          const fieldErrors = errors[field.name];

          return (
            <Field key={field.name} data-invalid={Boolean(fieldErrors)} className="gap-2">
              <FieldLabel htmlFor={`${variant}-${field.name}`} className="text-sm leading-[1.2] font-medium">
                {field.label}
              </FieldLabel>
              <Input
                id={`${variant}-${field.name}`}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                aria-invalid={Boolean(fieldErrors)}
                onChange={() => clearError(field.name)}
                className="h-13 rounded-[0.75rem] border-input bg-card px-6 text-lg leading-[1.6] text-card-foreground placeholder:text-muted-foreground md:text-lg dark:bg-card"
              />
              <FieldError errors={fieldErrors?.map((message) => ({ message }))} />
            </Field>
          );
        })}
      </FieldGroup>

      <AppButton type="submit" variant="brand">
        {submitLabel}
      </AppButton>

      {isSubmitted && (
        <p role="status" className="self-stretch text-sm leading-[1.6] text-primary">
          Looks good! Account access will be connected soon.
        </p>
      )}
    </form>
  );
}
