'use client';

import { useState } from 'react';

import ReviewModal from '@/components/ReviewModal';

import ReviewRangeGroup from './ReviewRangeGroup';
import ReviewRating from './ReviewRating';
import ReviewRatingButton from './ReviewRatingButton';

interface ReviewOverviewProps {
  rating: number;
  reviewNumber: number;
  data: Record<string, number>;
  wineId: number;
  wineName: string;
  onSuccess?: () => void; // 추가
}

export default function ReviewOverview({
  rating = 0,
  reviewNumber = 0,
  data = {},
  wineId,
  wineName,
  onSuccess, // 추가
}: ReviewOverviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className='flex flex-col gap-5 p-5 md:grid md:grid-cols-2 md:p-20 xl:flex xl:flex-col xl:justify-between'>
        <div className='flex justify-between gap-5 md:flex-col'>
          <ReviewRating rating={rating} reviewNumber={reviewNumber} />
          <ReviewRatingButton
            className='mt-4 h-[4.2rem] md:mt-0 xl:hidden'
            onClick={handleOpenModal}
          />
        </div>
        <div className='flex items-center'>
          <ReviewRangeGroup data={data} />
        </div>
        <div className='mt-10 hidden xl:block'>
          <ReviewRatingButton
            className='h-[4.2rem]'
            onClick={handleOpenModal}
          />
        </div>
      </div>

      {isModalOpen && (
        <ReviewModal
          wineId={wineId}
          wineName={wineName}
          onClose={handleCloseModal}
          onSuccess={() => {
            onSuccess?.();
            handleCloseModal();
          }}
        />
      )}
    </>
  );
}
