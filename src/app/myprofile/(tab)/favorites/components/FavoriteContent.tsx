'use client';

import { useState } from 'react';

import Nothing from '@/app/myprofile/components/Nothing';
import Tab from '@/app/myprofile/components/Tab';
import ReviewCard from '@/app/wines/[wineId]/components/ReviewCard';
import Button from '@/components/Button';

interface Review {
  id: number;
  rating: number;
  aroma: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  user: {
    id: number;
    nickname: string;
    image: string;
  };
  isLiked: boolean;
}

export default function FavoriteContent({
  likedReviews = [],
}: {
  likedReviews?: Review[];
}) {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  if (!Array.isArray(likedReviews) || likedReviews.length === 0) {
    return (
      <div>
        <Tab totalCount={0} />
        <div className='mt-[5rem] flex items-center justify-center'>
          <Nothing type='favorite' />
        </div>
      </div>
    );
  }

  const visibleReviews = likedReviews.slice(0, visibleCount);

  return (
    <div className='flex flex-col'>
      <Tab totalCount={likedReviews.length} />
      <div className='flex flex-col gap-10'>
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {visibleCount < likedReviews.length && (
        <div className='mt-10 mb-15 self-center'>
          <Button variant='outline' onClick={handleLoadMore}>
            더 보기
          </Button>
        </div>
      )}
    </div>
  );
}
