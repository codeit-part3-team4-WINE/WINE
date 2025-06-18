'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';
import WineCard from '@/app/myprofile/components/Card/WineCard';
import ReviewModal from '@/components/ReviewModal';
import useUserStore from '@/stores/Auth-store/authStore';

import AromaAnalysis from './components/AromaAnalysis/AromaAnalysis';
import FlavorAnalysis from './components/flavorAnalysis/FlavorAnalysis';
import Nothing from './components/Nothing';
import ReviewCard from './components/ReviewCard';
import ReviewOverview from './components/ReviewRating/ReviewOverview';
import { ReviewType, WineInfoType } from './types';

export default function WinePage() {
  const { wineId } = useParams();
  const [wineInfo, setWineInfo] = useState<WineInfoType | null>(null);
  const [selectedReview, setSelectedReview] = useState<ReviewType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const userInfo = useUserStore((state) => state.user);

  // Fetch wine details and reviews
  const fetchWine = async () => {
    const res = await privateInstance.get(`/wines/${wineId}`);
    setWineInfo(res.data); // 상태 업데이트
  };

  useEffect(() => {
    fetchWine(); // 컴포넌트가 처음 로딩될 때 호출
  }, [wineId]); // 의존성 배열에서 wineId만 추가하여 중복 호출 방지

  useEffect(() => {
    if (userInfo?.id && wineInfo?.userId && userInfo.id === wineInfo.userId) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [userInfo?.id, wineInfo?.userId]);

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

      <div className='mt-10 grid w-full grid-cols-2 gap-10'>
        <div className='col-span-1 w-full'>
          <FlavorAnalysis data={wineInfo?.reviews as ReviewType[]} />
        </div>
        <div className='col-span-1 w-full'>
          <AromaAnalysis reviews={wineInfo?.reviews || []} />
        </div>
      </div>

      <div className='flex w-full flex-col gap-10 xl:grid xl:grid-cols-6'>
        <div className='order-2 col-span-1 w-full xl:order-1 xl:col-span-4'>
          <h3 className='mt-10 mb-10 text-xl font-bold'>리뷰 목록</h3>
          {wineInfo?.reviews && wineInfo?.reviews.length > 0 ? (
            <div className='flex flex-col gap-5'>
              {wineInfo.reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  onDelete={() => fetchWine()} // 리뷰 삭제 시 새로 고침
                  onEdit={(review) => {
                    setSelectedReview(review);
                    setIsModalOpen(true);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className='mt-10'>
              <Nothing
                onClick={() => {
                  setSelectedReview(null);
                  setIsModalOpen(true);
                }}
              />
            </div>
          )}
        </div>

        {wineInfo?.reviews && wineInfo?.reviews.length > 0 && (
          <div className='order-1 col-span-1 xl:order-2 xl:col-span-2'>
            <ReviewOverview
              data={wineInfo.avgRatings}
              rating={wineInfo.avgRating || 0}
              reviewNumber={totalReviews}
              wineId={wineInfo.id}
              wineName={wineInfo.name}
            />
          </div>
        )}
      </div>

      {isModalOpen && (
        <ReviewModal
          initialReview={
            selectedReview
              ? {
                  ...selectedReview,
                  wineId: wineInfo?.id ?? 0,
                  reviewText: selectedReview.content,
                }
              : undefined
          }
          wineId={wineInfo?.id ?? 0}
          wineName={wineInfo?.name || ''}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedReview(null);
          }}
          onSuccess={async () => {
            await fetchWine(); // 리뷰 등록/수정 후 데이터 새로 가져오기
            setIsModalOpen(false);
            setSelectedReview(null);
          }}
        />
      )}
    </div>
  );
}
