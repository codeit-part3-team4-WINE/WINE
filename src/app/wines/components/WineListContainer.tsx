import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import WineListCard from './WineListCard';

export default function WineListContainer({
  data,
  onLoadMore,
  hasNextPage,
  isLoadingMore,
}) {
  const observerRef = useIntersectionObserver(
    onLoadMore,
    isLoadingMore,
    !hasNextPage,
  );

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

      {isLoadingMore && <div>로딩 중...</div>}
    </section>
  );
}
