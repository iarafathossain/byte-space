import type { Metadata } from "next";

import AuthCard from "../_components/auth-card";
import AuthForm from "../_components/auth-form";
import AuthShell from "../_components/auth-shell";

export const metadata: Metadata = {
  title: "Sign Up",
  alternates: { canonical: "/sign-up" },
  description: "Create your free ByteSpace account.",
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footer={{
          text: "Already have an account?",
          linkLabel: "Login",
          href: "/sign-in",
        }}
      >
        <AuthForm variant="sign-up" />
      </AuthCard>
    </AuthShell>
  );
}
