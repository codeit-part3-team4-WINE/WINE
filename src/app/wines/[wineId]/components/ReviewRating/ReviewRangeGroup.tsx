import ReviewRange from './ReviewRange';

export default function ReviewRangeGroup({
  data,
}: {
  data: { label: string; value: number }[];
}) {
  return (
    <div className='flex w-full flex-col gap-6'>
      {data.map((range) => (
        <ReviewRange
          key={range.label}
          label={range.label}
          value={range.value}
        />
      ))}
    </div>
  );
}
