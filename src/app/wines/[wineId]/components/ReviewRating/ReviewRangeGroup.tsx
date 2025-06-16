import ReviewRange from './ReviewRange';

export default function ReviewRangeGroup({
  data,
}: {
  data: Record<string, number>;
}) {
  return (
    <div className='flex w-full flex-col gap-6'>
      {[5, 4, 3, 2, 1].map((score) => (
        <ReviewRange
          key={score}
          label={`${score}점`}
          value={data[score] || 0}
        />
      ))}
    </div>
  );
}
