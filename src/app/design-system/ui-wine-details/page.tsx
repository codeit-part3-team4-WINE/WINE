'use client';
import FlavorAnalysis from '@/app/wines/[wineId]/components/flavorAnalysis/FlavorAnalysis';
import Nothing from '@/app/wines/[wineId]/components/Nothing';
import ReviewOverview from '@/app/wines/[wineId]/components/ReviewRating/ReviewOverview';
import ReviewRange from '@/app/wines/[wineId]/components/ReviewRating/ReviewRange';
import ReviewRangeGroup from '@/app/wines/[wineId]/components/ReviewRating/ReviewRangeGroup';
import ReviewRating from '@/app/wines/[wineId]/components/ReviewRating/ReviewRating';
import ReviewRatingButton from '@/app/wines/[wineId]/components/ReviewRating/ReviewRatingButton';
import { DUMMY_REVIEWS, REVIEW_RANGES } from '@/app/wines/[wineId]/dummy';

export default function UiWineDetail() {
  return (
    <div>
      <ReviewRange label='5점' value={3} />
      <ReviewRating rating={4.8} reviewNumber={100} />
      <ReviewRangeGroup data={REVIEW_RANGES} />
      <ReviewRatingButton />

      <ReviewOverview data={REVIEW_RANGES} rating={4.8} reviewNumber={100} />
      <Nothing />
      <FlavorAnalysis data={DUMMY_REVIEWS} />
    </div>
  );
}
