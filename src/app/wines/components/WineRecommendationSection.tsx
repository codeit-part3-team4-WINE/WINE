import { unstable_cache } from 'next/cache';

import { Wine } from '../types';
import RecommendedWineItem from './RecommendedWineItem';

/**
 * @param array 아이템 리스트
 * @param cnt 뽑을 아이템 개수
 * @returns 랜덤으로 추출된 아이템 리스트
 */
const getItemRandomly = (array: Wine[], cnt: number): Wine[] => {
  const copyArr = [...array]; // splice로 인해 원본 배열이 바뀌는 것을 방지하기 위해 복사본 생성
  if (copyArr.length < cnt) return copyArr;
  const result: Wine[] = [];
  while (result.length < cnt) {
    const randomIndex = Math.floor(Math.random() * copyArr.length);
    const item = copyArr.splice(randomIndex, 1)[0];
    if (item !== undefined && !!item) {
      result.push(item);
    }
  }
  return result;
};

/**
 * getCachedRandomWines
 * @description
 * 이번 달 추천 와인에 사용될 데이터를 캐시합니다. (캐시 기간 : 3일)
 * 전체 와인 데이터를 받아와서, 특정 rating 이상의 와인을 최대 8개까지 랜덤으로 선별하여 추천 와인을 반환합니다.
 */
const getMonthlyRecommendedWines = unstable_cache(
  async () => {
    const totalCountResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/wines?limit=1`,
    );
    const totalCountData = await totalCountResponse.json();
    const allWinesResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/wines?limit=${totalCountData.totalCount}`,
    );
    const allWinesData = await allWinesResponse.json();

    const topRatedWines = allWinesData.list.filter(
      (wine) => wine.avgRating >= 3.5,
    );
    return getItemRandomly(topRatedWines, Math.min(8, topRatedWines.length));
  },
  ['recommended-wines-random-8'],
  {
    revalidate: 259200, // 캐시 3일
    tags: ['recommended-wines'],
  },
);

async function RecommendedWineList() {
  const monthlyRecommendedWines = await getMonthlyRecommendedWines();

  return (
    <div className='rounded-3xl bg-gray-100 p-8'>
      <h2 className='sub-title-text mb-4'>이번 달 추천 와인</h2>

      <div className='outer-wrapper flex overflow-hidden'>
        <div className='rolling-list-original'>
          <ul className='flex'>
            {monthlyRecommendedWines.map((item, index) => (
              <li
                key={`${item.id}-${index}`}
                className='mx-[0.75rem] w-[22rem] flex-shrink-0 md:w-[26rem]' // mx-3 = 0.75rem = gap-6의 절반
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
            {monthlyRecommendedWines.map((item, index) => (
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

export default function WineRecommendationSection() {
  return (
    <section className='col-start-1 col-end-4 row-start-1 row-end-2'>
      <RecommendedWineList />
    </section>
  );
}
