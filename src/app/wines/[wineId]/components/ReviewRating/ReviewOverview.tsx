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
    <div className='flex flex-col gap-5 p-5 md:grid md:grid-cols-2 md:p-20 xl:flex xl:flex-col'>
      <div className='flex justify-between gap-5 md:flex-col'>
        <ReviewRating rating={rating} reviewNumber={reviewNumber} />
        <ReviewRatingButton className='h-[4.2rem] md:mt-0 xl:mt-10' />
      </div>
      <div className='flex items-center'>
        <ReviewRangeGroup data={data} />
      </div>
    </div>
  );
}
