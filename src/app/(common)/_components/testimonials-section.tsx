import TestimonialCard from "@/components/shared/testimonial-card";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="testimonials-glow overflow-hidden"
    >
      <div className="mx-auto flex max-w-301 flex-col gap-12 px-4 py-20 sm:px-6 lg:gap-18 lg:px-0 lg:pt-18.5 lg:pb-14.25">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-10.75">
          <h2
            id="testimonials-title"
            className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-foreground sm:text-4xl lg:w-144.25 lg:shrink-0 lg:text-[2.75rem]"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-base leading-[1.6] text-foreground/70 sm:text-lg lg:w-145">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10.25">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
