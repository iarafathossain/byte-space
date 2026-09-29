import type { Metadata } from "next";

import { privacyPolicy } from "@/data/legal";

import LegalDocument from "../_components/legal-document";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <LegalDocument document={privacyPolicy} />;
}
