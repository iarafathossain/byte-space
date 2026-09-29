import { z } from "zod";

const email = z.email("Please enter a valid email address.");

export const signUpSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email,
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export const signInSchema = z.object({
  email,
  password: z.string().min(1, "Please enter your password."),
});

export type SignUpValues = z.infer<typeof signUpSchema>;
export type SignInValues = z.infer<typeof signInSchema>;
