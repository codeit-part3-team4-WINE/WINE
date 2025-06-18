'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import WineCard from '@/app/myprofile/components/Card/WineCard';
import useUserStore from '@/stores/Auth-store/authStore';

import AromaAnalysis from './components/AromaAnalysis/AromaAnalysis';
import FlavorAnalysis from './components/flavorAnalysis/FlavorAnalysis';
import Nothing from './components/Nothing';
import ReviewCard from './components/ReviewCard';
import ReviewOverview from './components/ReviewRating/ReviewOverview';
import { ReviewType, WineInfoType } from './types';

export default function WinePage() {
  const [wineInfo, setWineInfo] = useState<WineInfoType | null>(null);
  const { wineId } = useParams();
  const [isOwner, setIsOwner] = useState(false);
  const userInfo = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchWine = async () => {
      const response = await privateInstance.get(`/wines/${wineId}`);
      setWineInfo(response.data);
    };
    fetchWine();
    if (userInfo?.id && wineInfo?.userId && userInfo.id === wineInfo.userId) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [wineId, userInfo?.id, wineInfo?.userId]);

  const totalReviews = wineInfo?.reviews.length || 0;

  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      <WineCard
        image={wineInfo?.image || null}
        isDropdown={isOwner}
        name={wineInfo?.name || ''}
        price={wineInfo?.price || 0}
        region={wineInfo?.region || ''}
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
              {wineInfo?.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className='mt-10'>
              <Nothing />
            </div>
          )}
        </div>
        {wineInfo?.reviews && wineInfo?.reviews.length > 0 && (
          <div className='order-1 col-span-1 xl:order-2 xl:col-span-2'>
            <ReviewOverview
              data={wineInfo.avgRatings}
              rating={wineInfo.avgRating || 0}
              reviewNumber={totalReviews}
            />
          </div>
        )}
      </div>
    </div>
  );
}
