import type { Metadata } from "next";

import AuthCard from "../_components/auth-card";
import AuthForm from "../_components/auth-form";
import AuthShell from "../_components/auth-shell";
import SocialLogin from "../_components/social-login";

export const metadata: Metadata = {
  title: "Sign In",
  alternates: { canonical: "/sign-in" },
  description: "Sign in to your ByteSpace account.",
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footer={{
          text: "New user?",
          linkLabel: "Create an account",
          href: "/sign-up",
        }}
      >
        <div className="flex flex-col gap-16">
          <AuthForm variant="sign-in" />
          <SocialLogin />
        </div>
      </AuthCard>
    </AuthShell>
  );
}
