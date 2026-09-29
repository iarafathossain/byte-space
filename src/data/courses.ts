import type { StaticImageData } from "next/image";

import { Avatar1, Avatar2, Avatar3, Avatar4 } from "@/assets/avatar";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;

export type CourseLevel = (typeof courseLevels)[number];

export const courseCategories = [
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

export type CourseCategory = (typeof courseCategories)[number];

export type Course = {
  slug: string;
  title: string;
  category: CourseCategory;
  featured: boolean;
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
    avatars: StaticImageData[];
    total: string;
  };
};

const sampleStudents = {
  avatars: [Avatar1, Avatar2, Avatar3, Avatar4],
  total: "26+",
};

const purepearl = {
  name: "purepearl studio",
  href: "/creators/purepearl-studio",
};

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    featured: true,
    creator: purepearl,
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
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    category: "Graphic Design",
    featured: true,
    creator: purepearl,
    coverImage: "/course-cover-image/cover-image-2.svg",
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
    slug: "the-power-of-big-data",
    title: "The Power of Big Data",
    category: "Data Science",
    featured: true,
    creator: purepearl,
    coverImage: "/course-cover-image/cover-image-3.svg",
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
    slug: "mobile-app-ui-design",
    title: "Mobile App UI Design",
    category: "UI/UX Design",
    featured: true,
    creator: { name: "purepearl studio", href: "/creators/pixel-lab" },
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
  {
    slug: "responsive-web-design",
    title: "Responsive Web Design",
    category: "Web Development",
    featured: true,
    creator: { name: "purepearl studio", href: "/creators/pixel-lab" },
    coverImage: "/course-cover-image/cover-image-2.svg",
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
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Social Media",
    featured: true,
    creator: purepearl,
    coverImage: "/course-cover-image/cover-image-3.svg",
    lessons: 24,
    duration: "3 hours 40 mins",
    comments: 82,
    rating: 4.8,
    level: "Intermediate",
    price: 39,
    priceUnit: "lifetime",
    students: sampleStudents,
  },
  ...catalogCourses(),
];

// Sample catalog to fill the course listing: [slug, title, category, level, price, rating, featured]
function catalogCourses(): Course[] {
  const rows: [
    string,
    string,
    CourseCategory,
    CourseLevel,
    number,
    number,
    boolean,
  ][] = [
    [
      "music-production-essentials",
      "Music Production Essentials",
      "Music",
      "Beginner",
      29,
      4.7,
      true,
    ],
    [
      "watercolor-painting-basics",
      "Watercolor Painting Basics",
      "Drawing & Painting",
      "Beginner",
      19,
      4.6,
      true,
    ],
    [
      "content-marketing-strategy",
      "Content Marketing Strategy",
      "Marketing",
      "Intermediate",
      35,
      4.5,
      false,
    ],
    [
      "2d-animation-fundamentals",
      "2D Animation Fundamentals",
      "Animation",
      "Beginner",
      39,
      4.8,
      true,
    ],
    [
      "instagram-growth-playbook",
      "Instagram Growth Playbook",
      "Social Media",
      "Beginner",
      25,
      4.4,
      false,
    ],
    [
      "ux-research-methods",
      "UX Research Methods",
      "UI/UX Design",
      "Intermediate",
      45,
      4.7,
      true,
    ],
    [
      "brand-storytelling",
      "Brand Storytelling",
      "Creative Marketing",
      "Intermediate",
      32,
      4.6,
      false,
    ],
    [
      "digital-illustration-procreate",
      "Digital Illustration in Procreate",
      "Digital Illustration",
      "Beginner",
      27,
      4.9,
      true,
    ],
    [
      "smartphone-filmmaking",
      "Smartphone Filmmaking",
      "Film & Video",
      "Beginner",
      22,
      4.5,
      false,
    ],
    [
      "handmade-jewelry-making",
      "Handmade Jewelry Making",
      "Crafts",
      "Beginner",
      18,
      4.3,
      false,
    ],
    [
      "freelancing-for-designers",
      "Freelancing for Designers",
      "Freelance & Entrepreneurship",
      "Intermediate",
      49,
      4.8,
      true,
    ],
    [
      "logo-design-masterclass",
      "Logo Design Masterclass",
      "Graphic Design",
      "Advanced",
      55,
      4.9,
      true,
    ],
    [
      "portrait-photography",
      "Portrait Photography",
      "Photography",
      "Intermediate",
      42,
      4.6,
      false,
    ],
    [
      "notion-for-productivity",
      "Notion for Productivity",
      "Productivity",
      "Beginner",
      15,
      4.4,
      false,
    ],
    [
      "nextjs-for-beginners",
      "Next.js for Beginners",
      "Web Development",
      "Beginner",
      39,
      4.8,
      true,
    ],
    [
      "python-for-data-analysis",
      "Python for Data Analysis",
      "Data Science",
      "Intermediate",
      59,
      4.7,
      false,
    ],
    [
      "everyday-italian-cooking",
      "Everyday Italian Cooking",
      "Cooking",
      "Beginner",
      21,
      4.9,
      false,
    ],
    [
      "advanced-motion-design",
      "Advanced Motion Design",
      "Animation",
      "Advanced",
      65,
      4.8,
      false,
    ],
  ];

  return rows.map(
    ([slug, title, category, level, price, rating, featured], index) => ({
      slug,
      title,
      category,
      featured,
      creator:
        index % 2 === 0
          ? purepearl
          : { name: "purepearl studio", href: "/creators/pixel-lab" },
      coverImage: `/course-cover-image/cover-image-${(index % 4) + 1}.svg`,
      lessons: 12 + ((index * 5) % 20),
      duration: `${1 + (index % 4)} hours ${10 + ((index * 7) % 50)} mins`,
      comments: 20 + index * 6,
      rating,
      level,
      price,
      priceUnit: "lifetime",
      students: sampleStudents,
    }),
  );
}
