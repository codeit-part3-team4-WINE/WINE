'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';
import WineCard from '@/app/myprofile/components/Card/WineCard';
import LoadingAnimation from '@/components/LoadingAnimation';
import { cn } from '@/libs/cn';
import useUserStore from '@/stores/Auth-store/authStore';

import AromaAnalysis from './components/AromaAnalysis/AromaAnalysis';
import FlavorAnalysis from './components/flavorAnalysis/FlavorAnalysis';
import Nothing from './components/Nothing';
import ReviewCard from './components/ReviewCard';
import ReviewOverview from './components/ReviewRating/ReviewOverview';
import { ReviewType } from './types';

export default function WinePage() {
  const { wineId } = useParams();
  const [isOwner, setIsOwner] = useState(false);
  const userInfo = useUserStore((state) => state.user);
  const loaderRef = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['wine', wineId],
      queryFn: ({ pageParam = 1 }) => {
        return privateInstance.get(
          `/wines/${wineId}?page=${pageParam}&limit=5`,
        );
      },
      getNextPageParam: (lastPage) => lastPage.data.nextPage,
      initialPageParam: 1,
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const wineInfo = data?.pages[0]?.data;
  const allReviews = data?.pages.flatMap((page) => page.data.reviews) || [];

  useEffect(() => {
    if (userInfo?.id && wineInfo?.userId && userInfo.id === wineInfo.userId) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [wineId, userInfo?.id, wineInfo?.userId]);

  if (status === 'pending')
    return (
      <div className='flex h-screen items-center justify-center'>
        <LoadingAnimation />
      </div>
    );
  if (status === 'error') {
    return (
      <div className='flex h-screen items-center justify-center'>
        <p>Error fetching wine data</p>
      </div>
    );
  }

  const totalReviews = wineInfo?.reviews.length || 0;

  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      <WineCard
        image={wineInfo?.image || dummyWineImage}
        isDropdown={isOwner}
        name={wineInfo?.name || 'Sentinel Cabernet Sauvignon 2016'}
        price={wineInfo?.price || 10000}
        region={wineInfo?.region || 'Western Cape, South Africa'}
      />

      <div className='my-15 grid w-full grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-20'>
        <div className='col-span-1 w-full'>
          <FlavorAnalysis data={wineInfo?.reviews as ReviewType[]} />
        </div>
        <div className='col-span-1 w-full'>
          <AromaAnalysis reviews={wineInfo?.reviews || []} />
        </div>
      </div>

      <div className='flex w-full flex-col gap-10 xl:grid xl:grid-cols-6'>
        <div
          className={cn(
            'order-2 col-span-1 w-full xl:order-1',
            allReviews.length > 0 ? 'xl:col-span-4' : 'xl:col-span-6',
          )}
        >
          <div className='flex items-center justify-between'>
            <h3 className='mt-10 mb-10 text-xl font-bold'>리뷰 목록</h3>
            <span className='text-sm text-gray-500'>
              {allReviews.length || 0}개 리뷰
            </span>
          </div>
          {allReviews.length > 0 ? (
            <div className='flex flex-col gap-5'>
              {allReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}

              {hasNextPage && (
                <div ref={loaderRef} className='h-10'>
                  <LoadingAnimation />
                </div>
              )}
            </div>
          ) : (
            <div className='mt-10'>
              <Nothing />
            </div>
          )}
        </div>
        {allReviews.length > 0 ? (
          <div className='col-span1 order-1 xl:order-2 xl:col-span-2'>
            <ReviewOverview
              data={wineInfo.avgRatings}
              rating={wineInfo.avgRating || 0}
              reviewNumber={totalReviews}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
