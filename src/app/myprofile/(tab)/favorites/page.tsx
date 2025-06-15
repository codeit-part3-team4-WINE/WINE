import { createPrivateServerInstance } from '@/apis/privateServerInstance';

import FavoriteContent from './components/FavoriteContent';

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

export default async function Favorite() {
  const axios = await createPrivateServerInstance();

  // 1차 요청으로 totalCount 파악
  const { data: page1 } = await axios.get('/wines', {
    params: { limit: 1 },
  });
  const totalCount = page1.totalCount;

  // 2차 요청으로 전체 와인 받아오기
  const { data } = await axios.get('/wines', {
    params: { limit: totalCount },
  });
  const wines = data.list;

  // 각 와인 id로 상세 호출하여 liked 리뷰만 수집
  const likedReviews: Review[] = [];

  for (const wine of wines) {
    const { data: wineDetail } = await axios.get(`/wines/${wine.id}`);

    const wineLikedReviews: Review[] =
      wineDetail.reviews?.filter((review: Review) => review.isLiked) ?? [];

    likedReviews.push(...wineLikedReviews);
  }

  return <FavoriteContent likedReviews={likedReviews} />;
}
