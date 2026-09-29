import type { ComponentType, SVGProps } from "react";

import { Avatar1, Avatar2, Avatar3, Avatar4 } from "@/assets/avatar";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: ComponentType<SVGProps<SVGSVGElement>>;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: Avatar3,
  },
  {
    name: "James R.",
    role: "Product Designer",
    quote:
      "The courses are practical and well structured. I picked up new design skills in weeks and applied them straight away at work. The creators clearly know their craft.",
    avatar: Avatar1,
  },
  {
    name: "Amara K.",
    role: "Frontend Developer",
    quote:
      "I love how easy it is to find exactly what I need. The lessons are short, focused, and the community is always ready to help when I get stuck.",
    avatar: Avatar2,
  },
  {
    name: "David O.",
    role: "Course Creator",
    quote:
      "Publishing on ByteSpace has been a great experience. The tools are simple, the audience is engaged, and I get meaningful feedback from my students.",
    avatar: Avatar4,
  },
];
