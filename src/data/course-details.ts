import type { StaticImageData } from "next/image";

import { Avatar1 } from "@/assets/avatar";
import { CourseThumbnail } from "@/assets/images/hero";
import { courses, type Course } from "@/data/courses";

export type CourseModule = { title: string; description: string };

export type CourseDetails = Course & {
  subtitle: string;
  thumbnail: StaticImageData;
  totalLessons: number;
  totalHours: number;
  studentCount: number;
  reviewCount: number;
  lessonPreview: { title: string; duration: string }[];
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
  modules: CourseModule[];
  // Number of reviews for each star rating, 5 → 1
  ratingBreakdown: Record<1 | 2 | 3 | 4 | 5, number>;
};

export const courseCreator = {
  role: "Professional Creator",
  avatar: Avatar1,
  pitch: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
};

// Sample detail content from the design, shared by every course for now
const sampleDetails = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  thumbnail: CourseThumbnail,
  totalLessons: 112,
  totalHours: 24,
  studentCount: 199,
  reviewCount: 172,
  lessonPreview: [
    { title: "Introduction to Digital Assets", duration: "12 mins" },
    { title: "Design Principles for Impacts", duration: "21 mins" },
    { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  description: [
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [1, 2, 3, 4].map((n) => `/course-cover-image/cover-image-${n}.svg`),
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  modules: [
    {
      title: "Module 1: Introduction to Digital Assets",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 3: Advanced Techniques in Digital Creation",
      description:
        "Go beyond the basics with 'Advanced Layer Techniques' and 'Working with Vector Graphics.' Build polished, professional-grade digital assets.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      description:
        "Adapt your work for every screen with 'Responsive Asset Design' and 'Exporting for Web and Print.' Deliver consistent quality across platforms.",
    },
    {
      title: "Module 8: Monetization and Portfolio Building",
      description:
        "Turn skills into income with 'Selling Digital Assets' and complete your 'Capstone Portfolio Project.' Launch your work into the world.",
    },
  ],
  ratingBreakdown: { 5: 1201, 4: 120, 3: 23, 2: 12, 1: 16 },
};

export function getCourseDetails(slug: string): CourseDetails | undefined {
  const course = courses.find((item) => item.slug === slug);
  return course && { ...course, ...sampleDetails };
}
