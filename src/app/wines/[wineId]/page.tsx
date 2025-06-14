'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';
import WineCard from '@/app/myprofile/components/Card/WineCard';

import ReviewCard from './components/ReviewCard';
import ReviewOverview from './components/ReviewRating/ReviewOverview';
import { REVIEW_RANGES } from './dummy';
import { WineInfoType } from './types';

export default function WinePage() {
  const [wineInfo, setWineInfo] = useState<WineInfoType | null>(null);
  const { wineId } = useParams();

  useEffect(() => {
    const fetchWine = async () => {
      const response = await privateInstance.get(`/wines/${wineId}`);
      setWineInfo(response.data);
    };
    fetchWine();
  }, [wineId]);

  console.log(wineInfo);
  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      <WineCard
        image={wineInfo?.image || dummyWineImage}
        name={wineInfo?.name || 'Sentinel Cabernet Sauvignon 2016'}
        price={wineInfo?.price || 10000}
        region={wineInfo?.region || 'Western Cape, South Africa'}
      />

      <div className='flex flex-col gap-10 xl:grid xl:grid-cols-6'>
        <div className='order-2 col-span-1 xl:order-1 xl:col-span-4'>
          <h3 className='mb-10 text-xl font-bold'>리뷰 목록</h3>
          <div className='flex flex-col gap-5'>
            {wineInfo?.reviews &&
              wineInfo?.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
          </div>
        </div>
        <div className='order-1 col-span-1 xl:order-2 xl:col-span-2'>
          <ReviewOverview
            data={REVIEW_RANGES}
            rating={4.8}
            reviewNumber={100}
          />
        </div>
      </div>
    </div>
  );
}
