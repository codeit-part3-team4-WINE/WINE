export default function ReviewRange({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  // 0~5 범위를 0~100% 비율로 변환
  const percentage = (value / 5) * 100;

  return (
    <div className='flex h-fit w-full items-center gap-3'>
      <label className='text-sm leading-none whitespace-nowrap text-gray-500'>
        {label}
      </label>
      <div className='relative h-3 w-full overflow-hidden rounded-lg bg-gray-200'>
        <div
          className='bg-primary-100 h-full rounded-lg transition-all duration-300 ease-out'
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
