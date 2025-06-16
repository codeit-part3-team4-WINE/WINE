import ExclamationMark from '@/app/assets/icons/exclamation-mark';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { Wine } from '../types';
import SkeletonWineListCard from './SkeletonWineListCard';
import WineListCard from './WineListCard';

interface WinePage {
  list: Wine[];
}

interface InfiniteQueryData {
  pages: WinePage[];
  pageParams: unknown[];
}

interface WineListContainerProps {
  data: InfiniteQueryData | undefined;
  onLoadMore: () => void;
  hasNextPage: boolean;
  isLoadingMore: boolean;
  isLoading: boolean;
}

export default function WineListContainer({
  data,
  onLoadMore,
  hasNextPage,
  isLoadingMore,
  isLoading,
}: WineListContainerProps) {
  const observerRef = useIntersectionObserver(
    onLoadMore,
    isLoadingMore,
    !hasNextPage,
  );

  const isEmpty =
    !isLoading &&
    !isLoadingMore &&
    data !== undefined &&
    data?.pages?.length > 0 &&
    data.pages[0]?.list?.length === 0;

  if (isLoading) {
    return (
      <section className='col-start-1 col-end-4 row-start-3 row-end-5 flex flex-col gap-6 xl:col-start-2 xl:col-end-4 xl:row-start-3 xl:row-end-5'>
        <SkeletonWineListCard />
        <SkeletonWineListCard />
        <SkeletonWineListCard />
      </section>
    );
  }

  if (isEmpty) {
    return (
      <section className='col-start-1 col-end-4 row-start-3 row-end-5 flex flex-col items-center justify-center gap-4 xl:col-start-2 xl:col-end-4 xl:row-start-3 xl:row-end-5'>
        <ExclamationMark size={80} />
        <h3 className='content-text mt-4 font-semibold text-gray-600'>
          검색 결과가 없습니다
        </h3>
        <p className='caption-text text-gray-500'>
          다른 검색어나 필터 조건을 시도해보세요
        </p>
      </section>
    );
  }

  return (
    <section className='col-start-1 col-end-4 row-start-3 row-end-5 flex flex-col gap-6 xl:col-start-2 xl:col-end-4 xl:row-start-3 xl:row-end-5'>
      {data?.pages?.map((page) =>
        page.list?.map((item) => (
          <WineListCard
            key={item.id}
            country={item.region}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.avgRating}
            recentReview={
              item.recentReview?.content ??
              '최신 후기가 없습니다. 후기를 남겨주세요!'
            }
            reviewCount={item.reviewCount}
          />
        )),
      )}
      {/* 다음 데이터 요청을 위한 observer 감지 영역 */}
      <div ref={observerRef} className='h-6 w-full' />

      {isLoadingMore && <SkeletonWineListCard />}
    </section>
  );
}
