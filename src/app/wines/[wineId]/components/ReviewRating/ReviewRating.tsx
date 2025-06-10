import RatingSummary from '@/components/RatingSummary';

export default function ReviewRating({ rating = 4.8 }: { rating: number }) {
  return (
    <div>
      <RatingSummary direction='row' rating={rating}>
        <RatingSummary.Text className='text-xs'>
          5,446개의 후기
        </RatingSummary.Text>
      </RatingSummary>
    </div>
  );
}
