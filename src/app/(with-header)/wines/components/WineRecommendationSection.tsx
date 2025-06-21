import { ApiErrorClass } from '@/libs/errors/apis/ApiError';
import { ApiErrorResponse } from '@/types/apiErrorResponse';

import { Wine } from '../types';
import StoreInitializer from './RecommendedStoreInitializer';
import RecommendedWineItem from './RecommendedWineItem';

async function getRecommendedWineList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/wines/recommended?limit=8`,
      {
        next: {
          revalidate: 259200, // 3일
          tags: ['recommended-wines'],
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    console.error('추천 와인 데이터 불러오기 실패:', error);

    const status = (error as ApiErrorResponse)?.response?.status;

    const userMessageMap = {
      404: '해당 유저를 찾을 수 없습니다.',
      401: '로그인이 필요합니다.',
      500: '서버 오류가 발생했습니다.',
    };
    throw new ApiErrorClass(status, userMessageMap, '기본 메시지');
  }
}

async function RecommendedWineList({ wines }: { wines: Wine[] }) {
  return (
    <div className='rounded-3xl bg-gray-100 p-8'>
      <h2 className='sub-title-text mb-6'>이런 와인은 어떠세요?</h2>

      <div className='outer-wrapper relative flex overflow-hidden'>
        {/* 왼쪽 그라데이션 */}
        <div className='pointer-events-none absolute top-0 left-0 z-5 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent' />

        {/* 오른쪽 그라데이션 */}
        <div className='pointer-events-none absolute top-0 right-0 z-5 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent' />

        <div className='rolling-list-original'>
          <ul className='flex'>
            {wines.map((item, index) => (
              <li
                key={`${item.id}-${index}`}
                className='mx-[0.75rem] w-[22rem] flex-shrink-0 md:w-[26rem]'
              >
                <RecommendedWineItem
                  id={item.id}
                  imageSrc={item.image}
                  name={item.name}
                  rating={item.avgRating}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='rolling-list-clone'>
          <ul className='flex'>
            {wines.map((item, index) => (
              <li
                key={`clone-${item.id}-${index}`}
                className='mx-[0.75rem] w-[22rem] flex-shrink-0 md:w-[26rem]'
              >
                <RecommendedWineItem
                  id={item.id}
                  imageSrc={item.image}
                  name={item.name}
                  rating={item.avgRating}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default async function WineRecommendationSection() {
  const monthlyRecommendedWines = await getRecommendedWineList();
  const wineIds = monthlyRecommendedWines.map((wine) => wine.id);

  return (
    <section className='col-start-1 col-end-4 row-start-1 row-end-2'>
      <StoreInitializer wineIds={wineIds} />
      <RecommendedWineList wines={monthlyRecommendedWines} />
    </section>
  );
}
