import ReviewRange from './ReviewRange';

export default function ReviewRangeGroup({
  data,
}: {
  data: Record<string, number>;
}) {
  return (
    <div className='flex w-full flex-col gap-6'>
      {Object.entries(data)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([key, value]) => (
          <ReviewRange
            key={key}
            label={`${key}점`}
            span={value}
            value={value || 0}
          />
        ))}
    </div>
  );
}
