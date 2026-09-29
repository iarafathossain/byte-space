import CoursesSection from "./_components/courses/courses-section";
import CtaSection from "./_components/cta/cta-section";
import GrowthSection from "./_components/growth/growth-section";
import HeroSection from "./_components/hero/hero-section";
import LearningPathsSection from "./_components/learning-paths-section";
import PartnersSection from "./_components/partners-section";
import TestimonialsSection from "./_components/testimonials-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
      <LearningPathsSection />
      <GrowthSection />
      <CtaSection />
      <TestimonialsSection />
    </main>
  );
}
