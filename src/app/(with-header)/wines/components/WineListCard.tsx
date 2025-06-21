import { StaticImageData } from 'next/image';
import Link from 'next/link';

import RatingSummary from '@/components/RatingSummary';
import WineInfo from '@/components/WineInfo';

interface WineListItemProps {
  id: number;
  name: string;
  country: string;
  image: string | StaticImageData;
  rating: number;
  price: number;
  reviewCount: number;
  recentReview?: string;
}

/**
 * 와인 목록에서 사용되는 와인 카드 컴포넌트
 *
 * @description
 * 와인의 기본 정보, 평점, 최신 후기를 카드 형태로 표시합니다.
 * 반응형 디자인을 지원하며 모바일과 데스크탑에서 다른 레이아웃을 제공합니다.
 *
 * @component
 * @param {string} props.id - 와인 id
 * @param {string} props.name - 와인 이름
 * @param {string} props.country - 와인 생산 국가
 * @param {StaticImageData} props.image - 와인 이미지 데이터
 * @param {number} props.rating - 와인 평점 (1-5)
 * @param {number} props.reviewCount - 총 후기 개수
 * @param {string} props.recentReview - 최신 후기 내용
 *
 * @example
 * ```tsx
 * <WineListCard
 *   id={1}
 *   name="Château Margaux"
 *   country="France"
 *   image={wineImage}
 *   rating={4.8}
 *   reviewCount={47}
 *   recentReview="정말 훌륭한 와인입니다. 깊은 맛과 향이 인상적이었어요."
 * />
 * ```
 *
 * @remarks
 * - 모바일에서는 평점이 와인 정보의 아래로 배치됩니다.
 * - 태블릿 이상에서는 평점이 오른쪽에 세로로 배치됩니다.
 * - 와인 이름과 국가명, 최신 후기는 텍스트 길이에 따라 말줄임 처리됩니다.
 */
export default function WineListCard({
  id,
  name,
  country,
  image,
  price,
  rating,
  reviewCount,
  recentReview,
}: WineListItemProps) {
  return (
    <Link
      className='flex min-w-[25rem] cursor-pointer flex-col overflow-hidden'
      href={`/wines/${id}`}
    >
      <div className='relative flex flex-col gap-10 rounded-t-3xl border-1 border-gray-300 bg-white px-8 pt-10 sm:flex-row sm:justify-between'>
        <WineInfo
          price={price}
          priceClassName='text-[1.2rem] sm:text-[1.4rem]'
          wineCountry={country}
          wineCountryClassName='max-sm:text-[1.2rem] line-clamp-1 max-sm:mb-3'
          wineImage={image}
          wineImageClassName='h-[22rem] w-[10rem] sm:w-[12rem]'
          wineName={name}
          wineNameClassName='text-[2rem] mb-2 sm:text-[2.7rem] md:text-[3rem] font-medium line-clamp-2 sm:line-clamp-2'
        />

        <RatingSummary
          className='max-sm:absolute max-sm:bottom-[2rem] max-sm:left-[13rem] max-sm:flex-row'
          rating={rating}
          ratingClassName='max-sm:text-[2.5rem]'
          size='sm'
        >
          <RatingSummary.Text className='max-sm:text-[1.2rem]'>
            {reviewCount}개의 후기
          </RatingSummary.Text>
        </RatingSummary>
      </div>
      <div className='h-[11rem] w-full rounded-b-3xl border-1 border-t-0 border-gray-300 bg-white px-10 py-6'>
        <p className='sub-content-text mb-3 font-semibold text-gray-800'>
          최신 후기
        </p>
        <p className='sub-content-text line-clamp-3 text-gray-500 sm:line-clamp-2'>
          {recentReview}
        </p>
      </div>
    </Link>
  );
}
