import type { Metadata } from "next";

import { cookiePolicy } from "@/data/legal";

import LegalDocument from "../_components/legal-document";
import CookiePreferences from "./_components/cookie-preferences";

export const metadata: Metadata = {
  title: cookiePolicy.title,
  description: cookiePolicy.description,
  alternates: { canonical: "/cookies-settings" },
};

export default function CookiesSettingsPage() {
  return (
    <LegalDocument document={cookiePolicy}>
      <CookiePreferences />
    </LegalDocument>
  );
}
