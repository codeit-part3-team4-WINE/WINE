export default function ReviewOverviewSkeleton() {
  return (
    <div className='flex flex-col gap-5 p-5 md:grid md:grid-cols-2 md:p-20 xl:flex xl:flex-col xl:justify-between'>
      <div className='flex justify-between gap-6 md:flex-col'>
        <div className='flex items-center gap-[2rem]'>
          {/* 평점 숫자 (4.8rem) */}
          <div className='h-[4.8rem] w-30 animate-pulse rounded bg-gray-200' />
          <div className='flex flex-col items-start gap-[0.5rem] sm:gap-[1rem]'>
            {/* 별점 아이콘들 */}
            <div className='flex'>
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className='mr-1 size-7 animate-pulse rounded bg-gray-200'
                />
              ))}
            </div>
            {/* "X개의 후기" 텍스트 */}
            <div className='h-[1rem] w-[6rem] animate-pulse rounded bg-gray-200' />
          </div>
        </div>

        {/* ReviewRatingButton 스켈레톤 (모바일/태블릿용) */}
        <div className='mt-4 h-[4rem] w-[10rem] animate-pulse rounded-lg bg-gray-200 md:mt-0 xl:hidden' />
      </div>

      {/* ReviewRangeGroup 스켈레톤 */}
      <div className='flex items-center'>
        <div className='flex w-full flex-col gap-6'>
          {/* 5개의 ReviewRange (5점, 4점, 3점, 2점, 1점) */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className='flex h-fit w-full items-center gap-3'>
              {/* 라벨 (점수와 개수) */}
              <div className='flex flex-col gap-1'>
                <div className='h-[1.4rem] w-8 animate-pulse rounded bg-gray-200' />
                <div className='h-4 w-10 animate-pulse rounded bg-gray-200' />
              </div>
              {/* 프로그레스 바 */}
              <div className='relative h-3 w-full animate-pulse rounded-lg bg-gray-200'>
                <div
                  className='h-full animate-pulse rounded-lg bg-gray-300'
                  style={{ width: `${20 + index * 15}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ReviewRatingButton 스켈레톤 (데스크톱용) */}
      <div className='mt-6 hidden xl:block'>
        <div className='h-[4rem] animate-pulse rounded-xl bg-gray-200 px-4 xl:w-[8rem]' />
      </div>
    </div>
  );
}
