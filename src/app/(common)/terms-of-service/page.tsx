import type { Metadata } from "next";

import { termsOfService } from "@/data/legal";

import LegalDocument from "../_components/legal-document";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.description,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return <LegalDocument document={termsOfService} />;
}
