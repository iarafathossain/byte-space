import type { ComponentType, SVGProps } from "react";

import { Avatar1, Avatar2, Avatar3, Avatar4 } from "@/assets/avatar";

export type Review = {
  id: string;
  name: string;
  role: string;
  avatar: ComponentType<SVGProps<SVGSVGElement>>;
  rating: number;
  postedAt: string;
  comment: string;
};

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: Avatar1,
    rating: 5,
    postedAt: "2025-09-10",
    comment:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: "review-2",
    name: "Amara K.",
    role: "Frontend Developer",
    avatar: Avatar2,
    rating: 4,
    postedAt: "2026-06-02",
    comment:
      "Clear explanations and great pacing. A few lessons could go deeper, but overall it helped me ship better interfaces at work.",
  },
  {
    id: "review-3",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: Avatar3,
    rating: 5,
    postedAt: "2026-09-15",
    comment:
      "One of the best courses I have taken. The projects are realistic and the creator answers questions quickly.",
  },
  {
    id: "review-4",
    name: "David O.",
    role: "Product Manager",
    avatar: Avatar4,
    rating: 4,
    postedAt: "2026-03-21",
    comment:
      "Helped me speak the same language as my design team. Well structured and easy to follow.",
  },
];
