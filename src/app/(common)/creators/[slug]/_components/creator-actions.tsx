"use client";

import { useState } from "react";

import AppButton from "@/components/shared/app-button";

type CreatorActionsProps = {
  productCount: number;
  followers: number;
};

// Stats and Follow button; following bumps the follower count locally
export default function CreatorActions({
  productCount,
  followers,
}: CreatorActionsProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const stats = [
    { value: productCount, label: productCount === 1 ? "Product" : "Products" },
    { value: followers + (isFollowing ? 1 : 0), label: "Followers" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap gap-3 sm:gap-4">
        {stats.map(({ value, label }) => (
          <li
            key={label}
            className="inline-flex h-11.5 items-center gap-2 rounded-full bg-card px-6 text-lg leading-[1.2] font-medium text-card-foreground"
          >
            <span className="text-primary">{value}</span>
            {label}
          </li>
        ))}
      </ul>

      {/* TODO: persist follows through the API */}
      <AppButton
        variant="brand"
        aria-pressed={isFollowing}
        onClick={() => setIsFollowing((current) => !current)}
      >
        {isFollowing ? "Following" : "Follow"}
      </AppButton>
    </div>
  );
}
