"use client";

import { useState, useSyncExternalStore } from "react";

import AppButton from "@/components/shared/app-button";
import { Switch } from "@/components/ui/switch";

const STORAGE_KEY = "bytespace-cookie-preferences";

const categories = [
  {
    id: "essential",
    label: "Essential",
    description: "Required for sign-in, security and saving your settings.",
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Help us understand how learners use ByteSpace.",
    required: false,
  },
  {
    id: "marketing",
    label: "Marketing",
    description: "Show you relevant courses and offers.",
    required: false,
  },
] as const;

type Preferences = { analytics: boolean; marketing: boolean };

const defaultPreferences: Preferences = { analytics: false, marketing: false };

// Saved choices are read from localStorage as an external store, so the
// server render (no storage) and first client render agree
const subscribe = (onChange: () => void) => {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
};

const readSaved = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const parsePreferences = (saved: string | null): Preferences => {
  try {
    return saved
      ? { ...defaultPreferences, ...JSON.parse(saved) }
      : defaultPreferences;
  } catch {
    return defaultPreferences;
  }
};

export default function CookiePreferences() {
  const saved = useSyncExternalStore(subscribe, readSaved, () => null);
  // Unsaved edits; null means "show what's saved"
  const [draft, setDraft] = useState<Preferences | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const preferences = draft ?? parsePreferences(saved);

  function toggle(id: keyof Preferences, checked: boolean) {
    setDraft({ ...preferences, [id]: checked });
    setIsSaved(false);
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // Storage unavailable: preferences apply for this visit only
    }
    setIsSaved(true);
  }

  return (
    <section
      aria-labelledby="cookie-preferences-title"
      className="flex flex-col gap-6 rounded-[1.5rem] border border-border p-6 sm:p-8"
    >
      <h2
        id="cookie-preferences-title"
        className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-foreground"
      >
        Your preferences
      </h2>

      <ul className="flex flex-col divide-y divide-border">
        {categories.map(({ id, label, description, required }) => (
          <li
            key={id}
            className="flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0"
          >
            <div>
              <label
                htmlFor={`cookie-${id}`}
                className="font-medium text-foreground"
              >
                {label}
                {required && (
                  <span className="ml-2 text-sm font-normal text-muted-foreground">
                    Always on
                  </span>
                )}
              </label>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <Switch
              id={`cookie-${id}`}
              checked={required || preferences[id]}
              disabled={required}
              onCheckedChange={(checked) => !required && toggle(id, checked)}
            />
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-4">
        <AppButton variant="brand" onClick={save}>
          Save preferences
        </AppButton>
        <p role="status" className="text-sm text-primary">
          {isSaved ? "Your preferences have been saved." : ""}
        </p>
      </div>
    </section>
  );
}
