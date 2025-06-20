'use client';

import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';

import FavoriteContent from './components/FavoriteContent';

interface Wine {
  id: number;
}

interface Review {
  wineId: number;
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

export default function Favorite({ modal }: { modal: React.ReactNode }) {
  const [likedReviews, setLikedReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLikedReviews = async () => {
      try {
        const { data: page1 } = await privateInstance.get('/wines', {
          params: { limit: 1 },
        });
        const totalCount = page1.totalCount;

        const { data } = await privateInstance.get('/wines', {
          params: { limit: totalCount },
        });
        const wines: Wine[] = data.list;

        const allLikedReviews: Review[] = [];

        for (const wine of wines) {
          const { data: wineDetail } = await privateInstance.get(
            `/wines/${wine.id}`,
          );
          const wineLikedReviews: Review[] =
            wineDetail.reviews
              ?.filter((review: Review) => review.isLiked)
              .map((review: Review) => ({
                ...review,
                wineId: wine.id,
              })) ?? [];

          allLikedReviews.push(...wineLikedReviews);
        }

        setLikedReviews(allLikedReviews);
      } catch (error) {
        console.error('리뷰 불러오기 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikedReviews();
  }, []);

  return (
    <>
      <FavoriteContent isLoading={isLoading} likedReviews={likedReviews} />
      {modal}
    </>
  );
}
