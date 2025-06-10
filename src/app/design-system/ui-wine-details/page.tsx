import ReviewOverview from '@/app/wines/[wineId]/components/ReviewRating/ReviewOverview';
import ReviewRange from '@/app/wines/[wineId]/components/ReviewRating/ReviewRange';
import ReviewRangeGroup from '@/app/wines/[wineId]/components/ReviewRating/ReviewRangeGroup';
import ReviewRating from '@/app/wines/[wineId]/components/ReviewRating/ReviewRating';
import ReviewRatingButton from '@/app/wines/[wineId]/components/ReviewRating/ReviewRatingButton';

export const REVIEW_RANGES = [
  {
    label: '5점',
    value: 5,
  },
  {
    label: '4점',
    value: 4,
  },
  {
    label: '3점',
    value: 3,
  },
  {
    label: '2점',
    value: 2,
  },
  {
    label: '1점',
    value: 1,
  },
];

export default function UiWineDetail() {
  return (
    <div>
      <ReviewRange label='5점' value={3} />
      <ReviewRating rating={4.8} />
      <ReviewRangeGroup data={REVIEW_RANGES} />
      <ReviewRatingButton />

      <ReviewOverview />
    </div>
  );
}
