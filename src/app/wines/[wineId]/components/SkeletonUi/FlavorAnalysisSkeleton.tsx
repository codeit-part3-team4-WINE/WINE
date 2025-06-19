export default function FlavorAnalysisSkeleton() {
  return (
    <div className='w-full'>
      {/* 헤더 부분 스켈레톤 */}
      <div className='mb-6 flex items-center justify-between'>
        <div className='h-10 w-60 animate-pulse rounded bg-gray-200' />
      </div>

      {/* InputRange 스켈레톤 */}
      <div className='space-y-4'>
        {/* 4개의 슬라이더 영역 */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='flex w-full items-center gap-4'>
            {/* 라벨 영역 */}
            <div className='h-7 w-30 animate-pulse rounded-xl bg-gray-200' />
            <div className='h-5 w-25 animate-pulse rounded bg-gray-200' />

            {/* 슬라이더 트랙 */}
            <div className='relative h-2 w-full animate-pulse rounded-full bg-gray-200'>
              {/* 슬라이더 핸들 */}
              <div
                className='absolute top-1/2 size-6 -translate-y-1/2 animate-pulse rounded-full bg-gray-300'
                style={{ left: `${20 + index * 15}%` }}
              />
            </div>

            <div className='h-5 w-25 animate-pulse rounded bg-gray-200' />

            <div className='h-4 w-10 animate-pulse rounded bg-gray-200' />
          </div>
        ))}
      </div>
    </div>
  );
}
