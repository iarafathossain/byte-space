import type { StaticImageData } from "next/image";

import { Avatar1, Avatar2, Avatar3, Avatar4 } from "@/assets/avatar";
import { courses } from "@/data/courses";

export type Creator = {
  slug: string;
  name: string;
  role: string;
  avatar: StaticImageData;
  followers: number;
  bio: string[];
};

// Sample creators; courses link to a creator through `/creators/{slug}`
export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    role: "Passionate UI/UX, Web designer",
    avatar: Avatar1,
    followers: 12,
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
  },
  {
    slug: "pixel-lab",
    name: "Pixel Lab",
    role: "Product designer & frontend educator",
    avatar: Avatar2,
    followers: 48,
    bio: [
      "Pixel Lab turns real product work into hands-on lessons. We focus on the skills teams actually hire for, from interface design to shipping production-ready frontends.",
      "Every course is built around practical projects, so you finish with work you can show, not just notes you've taken.",
    ],
  },
  {
    slug: "sarah-mitchell",
    name: "Sarah Mitchell",
    role: "Illustrator & brand storyteller",
    avatar: Avatar3,
    followers: 31,
    bio: [
      "I help creatives find their visual voice through illustration and brand storytelling. My classes are relaxed, practical, and full of real client examples.",
    ],
  },
  {
    slug: "marcus-allen",
    name: "Marcus Allen",
    role: "Data scientist & Python mentor",
    avatar: Avatar4,
    followers: 27,
    bio: [
      "I make data science approachable. From your first Python script to building models that matter, I break complex ideas into clear, confident steps.",
    ],
  },
];

export const getCreator = (slug: string) =>
  creators.find((creator) => creator.slug === slug);

export const getCreatorHref = (slug: string) => `/creators/${slug}`;

export const getCreatorCourses = (slug: string) =>
  courses.filter((course) => course.creator.href === getCreatorHref(slug));
