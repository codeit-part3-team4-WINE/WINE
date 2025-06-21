import AromaAnalysisSkeleton from './AromaAnalysisSkeleton';
import FlavorAnalysisSkeleton from './FlavorAnalysisSkeleton';
import ReviewCardSkeleton from './ReviewCardSkeleton';
import ReviewOverviewSkeleton from './ReviewOverviewSkeleton';
import WineCardSkeleton from './WineCardSkeleton';

export default function WinePageSkeleton() {
  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      {/* 와인 카드 스켈레톤 */}
      <WineCardSkeleton />

      {/* 맛/아로마 분석 영역 스켈레톤 */}
      <div className='mt-24 mb-15 grid w-full grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-20'>
        <div className='col-span-1 w-full'>
          <FlavorAnalysisSkeleton />
        </div>
        <div className='col-span-1 w-full'>
          <AromaAnalysisSkeleton />
        </div>
      </div>

      {/* 리뷰 섹션 스켈레톤 */}
      <div className='flex w-full flex-col gap-10 xl:grid xl:grid-cols-6'>
        <div className='order-2 col-span-4 w-full xl:order-1'>
          {/* 리뷰 목록 헤더 스켈레톤 */}
          <div className='flex items-center justify-between'>
            <div className='mt-10 mb-10 h-8 w-24 animate-pulse rounded bg-gray-200' />
            <div className='h-5 w-16 animate-pulse rounded bg-gray-200' />
          </div>

          {/* 리뷰 카드들 스켈레톤 */}
          <div className='flex flex-col gap-5'>
            {Array.from({ length: 3 }).map((_, index) => (
              <ReviewCardSkeleton key={index} />
            ))}
          </div>
        </div>

        {/* 리뷰 오버뷰 영역 스켈레톤 */}
        <div className='order-1 col-span-1 xl:order-2 xl:col-span-2'>
          <div className='mt-10 rounded-2xl'>
            <ReviewOverviewSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
