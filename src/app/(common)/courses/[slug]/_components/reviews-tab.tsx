import type { CourseDetails } from "@/data/course-details";

import RatingSummary from "./rating-summary";
import ReviewList from "./review-list";
import TabHeading from "./tab-heading";

type ReviewsTabProps = {
  course: CourseDetails;
};

export default function ReviewsTab({ course }: ReviewsTabProps) {
  return (
    <div className="flex flex-col gap-6 text-base leading-[1.6] text-foreground/75">
      <TabHeading>What Learners Are Saying</TabHeading>
      <p>
        Discover what our learners have to say about their experiences with &lsquo;
        {course.title}&rsquo;. Read reviews and ratings from individuals who have
        embarked on the transformative journey of learning with us.
      </p>

      <RatingSummary rating={course.rating} breakdown={course.ratingBreakdown} />

      <TabHeading>Individual Reviews</TabHeading>
      <ReviewList />
    </div>
  );
}
