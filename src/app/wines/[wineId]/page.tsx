'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';
import WineCard from '@/app/myprofile/components/Card/WineCard';
import { ApiErrorClass } from '@/libs/errors/apis/ApiError';
import { ApiErrorResponse } from '@/types/apiErrorResponse';

import Nothing from './components/Nothing';
import ReviewCard from './components/ReviewCard';
import ReviewOverview from './components/ReviewRating/ReviewOverview';
import { REVIEW_RANGES } from './dummy';
import { WineInfoType } from './types';

export default function WinePage() {
  const [wineInfo, setWineInfo] = useState<WineInfoType | null>(null);
  const { wineId } = useParams();

  const [wineError, setWineError] = useState<{
    message: string;
    status?: number;
  } | null>(null);

  useEffect(() => {
    const fetchWine = async () => {
      try {
        const response = await privateInstance.get(`/wines/${wineId}`);
        setWineInfo(response.data);
      } catch (error: unknown) {
        const status = (error as ApiErrorResponse)?.response?.status;

        const wineMessageMap = {
          404: '해당 와인을 찾을 수 없습니다.',
          401: '로그인이 필요합니다.',
          500: '서버 오류가 발생했습니다.',
        };
        setWineError(
          new ApiErrorClass(
            status,
            wineMessageMap,
            '와인 정보를 불러오지 못했습니다.',
          ),
        );
      }
    };
    fetchWine();
  }, [wineId]);

  if (wineError) throw wineError;

  const totalReviews = wineInfo?.reviews.length || 0;
  console.log(wineInfo);
  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      <WineCard
        image={wineInfo?.image || dummyWineImage}
        name={wineInfo?.name || 'Sentinel Cabernet Sauvignon 2016'}
        price={wineInfo?.price || 10000}
        region={wineInfo?.region || 'Western Cape, South Africa'}
      />

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
              data={REVIEW_RANGES}
              rating={4.8}
              reviewNumber={totalReviews}
            />
          </div>
        )}
      </div>
    </div>
  );
}
