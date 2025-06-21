import RatingSummary from '@/components/RatingSummary';

export default function ReviewRating({
  rating = 0,
  reviewNumber = 0,
}: {
  rating: number;
  reviewNumber: number;
}) {
  return (
    <div>
      <RatingSummary direction='row' rating={rating}>
        <RatingSummary.Text className='text-xs'>
          {reviewNumber}개의 후기
        </RatingSummary.Text>
      </RatingSummary>
    </div>
  );
}
