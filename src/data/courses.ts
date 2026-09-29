import type { ComponentType, SVGProps } from "react";

import { Avatar1, Avatar2, Avatar3, Avatar4 } from "@/assets/avatar";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  slug: string;
  title: string;
  creator: { name: string; href: string };
  coverImage: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: CourseLevel;
  price: number;
  priceUnit: string;
  students: {
    avatars: ComponentType<SVGProps<SVGSVGElement>>[];
    total: string;
  };
};

const sampleStudents = {
  avatars: [Avatar1, Avatar2, Avatar3, Avatar4],
  total: "26+",
};

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    creator: { name: "purepearl studio", href: "/creators/purepearl-studio" },
    coverImage: "/course-cover-image/cover-image-1.svg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceUnit: "lifetime",
    students: sampleStudents,
  },
  {
    slug: "design-system-in-figma",
    title: "Design System in Figma",
    creator: { name: "purepearl studio", href: "/creators/purepearl-studio" },
    coverImage: "/course-cover-image/cover-image-2.svg",
    lessons: 24,
    duration: "3 hours 40 mins",
    comments: 82,
    rating: 4.8,
    level: "Intermediate",
    price: 39,
    priceUnit: "lifetime",
    students: sampleStudents,
  },
  {
    slug: "responsive-web-design",
    title: "Responsive Web Design",
    creator: { name: "pixel lab", href: "/creators/pixel-lab" },
    coverImage: "/course-cover-image/cover-image-3.svg",
    lessons: 20,
    duration: "2 hours 55 mins",
    comments: 47,
    rating: 4.6,
    level: "Beginner",
    price: 29,
    priceUnit: "lifetime",
    students: sampleStudents,
  },
  {
    slug: "mobile-app-ui-design",
    title: "Mobile App UI Design",
    creator: { name: "pixel lab", href: "/creators/pixel-lab" },
    coverImage: "/course-cover-image/cover-image-4.svg",
    lessons: 31,
    duration: "4 hours 12 mins",
    comments: 103,
    rating: 4.9,
    level: "Advanced",
    price: 49,
    priceUnit: "lifetime",
    students: sampleStudents,
  },
];
