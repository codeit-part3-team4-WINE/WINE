'use client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import WineCard from '@/app/(with-header)/myprofile/components/Card/WineCard';
import ReviewModal from '@/components/Modals/ReviewModal/ReviewModal';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/libs/cn';
import useUserStore from '@/stores/Auth-store/authStore';

import AromaAnalysis from './components/AromaAnalysis/AromaAnalysis';
import FlavorAnalysis from './components/flavorAnalysis/FlavorAnalysis';
import Nothing from './components/Nothing';
import ReviewCard from './components/ReviewCard';
import ReviewOverview from './components/ReviewRating/ReviewOverview';
import ReviewCardSkeleton from './components/SkeletonUi/ReviewCardSkeleton';
import WinePageSkeleton from './components/SkeletonUi/WinePageSkeleton';
import { ReviewType } from './types';

export default function WinePage() {
  const { wineId } = useParams();
  const [isOwner, setIsOwner] = useState(false);
  const userInfo = useUserStore((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const [selectedReview, setSelectedReview] = useState<
    (ReviewType & { wineId: number }) | null
  >(null);

  // 분석용 데이터 (모든 리뷰 포함)
  const { data: analysisData, status: analysisStatus } = useQuery({
    queryKey: ['wine-analysis', wineId],
    queryFn: async () => {
      return privateInstance.get(`/wines/${wineId}/analysis`);
    },
  });

  // 리뷰 목록용 데이터 (무한스크롤)
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['wine-reviews', wineId],
      queryFn: async ({ pageParam = 1 }) => {
        return privateInstance.get(
          `/wines/${wineId}?page=${pageParam}&limit=5`,
        );
      },
      getNextPageParam: (lastPage) => lastPage.data.nextPage,
      initialPageParam: 1,
    });

  const observerRef = useIntersectionObserver(
    fetchNextPage,
    isFetchingNextPage,
    !hasNextPage,
  );

  const wineInfo = analysisData?.data; // 분석용 데이터 (모든 리뷰 포함)
  const allReviews = data?.pages.flatMap((page) => page.data.reviews) || []; // 무한스크롤용 리뷰

  useEffect(() => {
    if (userInfo?.id && wineInfo?.userId && userInfo.id === wineInfo.userId) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [wineId, userInfo?.id, wineInfo?.userId]);

  const handleEdit = (review: ReviewType) => {
    setSelectedReview({
      ...review,
      wineId: wineInfo?.id ?? 0,
    });
    setIsModalOpen(true);
  };

  if (status === 'pending' || analysisStatus === 'pending')
    return <WinePageSkeleton />;

  if (status === 'error' || analysisStatus === 'error') {
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
        isDropdown={isOwner}
        wine={{
          id: wineInfo?.id || 0,
          name: wineInfo?.name || '',
          region: wineInfo?.region || '',
          image: wineInfo?.image || '',
          price: wineInfo?.price || 0,
          type: wineInfo?.type || '',
        }}
      />

      <div className='mt-24 mb-15 grid w-full grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-20'>
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
              {wineInfo?.reviews.length || 0}개 리뷰
            </span>
          </div>
          {allReviews.length > 0 ? (
            <div className='flex flex-col gap-5'>
              {allReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  wineId={wineInfo.id}
                  onDelete={() => {
                    queryClient.invalidateQueries({
                      queryKey: ['wine-analysis', wineId],
                    });
                    queryClient.invalidateQueries({
                      queryKey: ['wine-reviews', wineId],
                    });
                  }}
                  onEdit={handleEdit}
                />
              ))}

              {hasNextPage && (
                <div ref={observerRef}>
                  <ReviewCardSkeleton />
                  <ReviewCardSkeleton />
                </div>
              )}
            </div>
          ) : (
            <div className='mt-10'>
              <Nothing
                onClick={() => {
                  setSelectedReview(null); // 등록용 초기화
                  setIsModalOpen(true); // 모달 열기
                }}
              />
            </div>
          )}
        </div>
        {allReviews.length > 0 ? (
          <div className='col-span1 order-1 xl:order-2 xl:col-span-2'>
            <ReviewOverview
              data={wineInfo.avgRatings}
              rating={wineInfo.avgRating || 0}
              reviewNumber={totalReviews}
              wineId={wineInfo.id}
              wineName={wineInfo.name}
              onWriteReview={() => {
                setSelectedReview(null); // 등록용으로 초기화
                setIsModalOpen(true); // 모달 열기
              }}
            />
          </div>
        ) : null}
        {isModalOpen && (
          <ReviewModal
            initialReview={selectedReview || undefined}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            wineId={wineInfo?.id || 0}
            wineName={wineInfo?.name || ''}
            onSuccess={() => {
              queryClient.invalidateQueries({
                queryKey: ['wine-analysis', wineId],
              });
              queryClient.invalidateQueries({
                queryKey: ['wine-reviews', wineId],
              });
              setIsModalOpen(false);
              setSelectedReview(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
