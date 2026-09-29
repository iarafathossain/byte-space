"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

import AppButton from "@/components/shared/app-button";

type ShareButtonProps = {
  title: string;
};

// Uses the native share sheet where available, otherwise copies the link
export default function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // The user closed the share sheet
      }
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <AppButton
        variant="brand"
        onClick={handleShare}
        className="h-10 w-fit gap-2 px-6 text-base leading-6 [&_svg:not([class*='size-'])]:size-6"
      >
        <Share2 />
        {copied ? "Copied" : "Share"}
      </AppButton>
      <span aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </>
  );
}
