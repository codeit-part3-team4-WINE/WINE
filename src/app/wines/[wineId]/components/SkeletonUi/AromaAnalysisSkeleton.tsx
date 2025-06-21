export default function AromaAnalysisSkeleton() {
  return (
    <div className='w-full'>
      {/* 헤더 부분 스켈레톤 */}
      <div className='mb-6 flex items-center justify-between'>
        <div className='h-10 w-60 animate-pulse rounded bg-gray-200' />
      </div>

      {/* AromaCard 그리드 스켈레톤 */}
      <div className='grid grid-cols-3 gap-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className='flex min-h-[12rem] flex-col items-center justify-center space-y-3 rounded-lg border border-gray-200 p-4'
          >
            {/* 아로마 아이콘 영역 */}
            <div className='flex justify-center'>
              <div className='h-12 w-12 animate-pulse rounded-full bg-gray-200' />
            </div>

            {/* 아로마 이름 */}
            <div className='text-center'>
              <div className='mx-auto h-4 w-16 animate-pulse rounded bg-gray-200' />
            </div>

            {/* 퍼센티지 */}
            <div className='text-center'>
              <div className='mx-auto h-3 w-10 animate-pulse rounded bg-gray-200' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
