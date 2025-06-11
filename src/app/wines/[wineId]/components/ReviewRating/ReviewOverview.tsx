import { REVIEW_RANGES } from '../../dummy';
import ReviewRangeGroup from './ReviewRangeGroup';
import ReviewRating from './ReviewRating';
import ReviewRatingButton from './ReviewRatingButton';

export default function ReviewOverview({
  rating = 0,
  reviewNumber = 0,
  data = REVIEW_RANGES,
}: {
  rating: number;
  reviewNumber: number;
  data: { label: string; value: number }[];
}) {
  return (
    <div className='flex flex-col gap-5'>
      <ReviewRating rating={rating} reviewNumber={reviewNumber} />
      <ReviewRangeGroup data={data} />
      <ReviewRatingButton className='mt-10' />
    </div>
  );
}
