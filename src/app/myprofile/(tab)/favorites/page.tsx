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

/**
 * Favorite 페이지 컴포넌트
 *
 * 사용자가 좋아요를 누른 리뷰들을 불러와 표시하는 페이지입니다.
 *
 * @param {React.ReactNode} modal - 인터셉팅 라우트에 의해 전달되는 모달 콘텐츠.
 * 예: 좋아요한 리뷰 카드 클릭 시 상세 정보를 모달 형태로 표시.
 *
 * 해당 modal은 layout.tsx에서 함께 전달되며,
 * 페이지 전환 없이 모달만 겹쳐 렌더링하는 패럴렐 + 인터셉팅 라우팅에 사용됩니다.
 */
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
