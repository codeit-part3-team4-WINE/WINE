import { REVIEW_RANGES } from '@/app/design-system/ui-wine-details/page';

import ReviewRangeGroup from './ReviewRangeGroup';
import ReviewRating from './ReviewRating';
import ReviewRatingButton from './ReviewRatingButton';

export default function ReviewOverview() {
  return (
    <div className='flex flex-col gap-5'>
      <ReviewRating rating={4.8} />
      <ReviewRangeGroup data={REVIEW_RANGES} />
      <ReviewRatingButton className='mt-10' />
    </div>
  );
}
