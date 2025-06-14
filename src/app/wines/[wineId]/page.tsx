'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import wineImage from '@/app/assets/images/dummy_wine_image.png';
import WineCard from '@/app/myprofile/components/Card/WineCard';

import ReviewCard from './components/ReviewCard';
import ReviewOverview from './components/ReviewRating/ReviewOverview';
import { REVIEW_RANGES } from './dummy';

export default function WinePage() {
  const [info, setInfo] = useState(null);
  const { wineId } = useParams();
  useEffect(() => {
    const fetchWine = async () => {
      const response = await privateInstance.get(`/wines/${wineId}`);
      setInfo(response.data);
    };
    fetchWine();
  }, [wineId]);
  console.log(info);
  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      {/* <div className='mb-40 grid w-full gap-10 rounded-2xl border border-gray-300 px-10 pt-20 md:grid-cols-4 xl:grid-cols-2'>
        <WineInfo
          className='md:col-span-3'
          price={10000}
          wineCountry='Western Cape, South Africa'
          wineImage={wineImage}
          wineName='Sentinel Cabernet Sauvignon 2016'
        />
      </div> */}
      <WineCard
        image={wineImage}
        name='Sentinel Cabernet Sauvignon 2016'
        price={10000}
        region='Western Cape, South Africa'
      />

      <div className='flex flex-col gap-10 xl:grid xl:grid-cols-6'>
        <div className='order-2 col-span-1 xl:order-1 xl:col-span-4'>
          <h3 className='mb-10 text-xl font-bold'>리뷰 목록</h3>
          <div className='flex flex-col gap-5'>
            {Array.from({ length: 10 }).map((_, index) => (
              <ReviewCard key={index} />
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
