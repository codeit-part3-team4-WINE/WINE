import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import WineIcon from '@/app/assets/icons/wine';
import RatingSummary from '@/components/RatingSummary';

interface RecommendedWineItemProps {
  id: number;
  imageSrc?: string | StaticImageData; // api 연결 전 더미 데이터에 사용하기 위해 StaticImageData도 추가했습니다. 추후 삭제하겠습니다.
  rating?: number;
  name: string;
}

/**
 * 추천 와인 아이템 컴포넌트
 *
 * @description
 * - `/wines/:id`로 이동 가능한 카드입니다.
 * - 이미지가 없으면 대체 아이콘을 보여줍니다.
 * - `RatingSummary`를 통해 별점과 이름을 함께 보여줍니다.
 *
 * @component
 * @param {RecommendedWineItemProps} props - 추천 와인 정보
 * @param {number} props.id - 와인 ID (필수)
 * @param {string} [props.imageSrc=''] - 와인 이미지 URL (없을 경우 아이콘으로 대체)
 * @param {number} [props.rating=0] - 와인 평균 별점
 * @param {string} props.name - 와인 이름 (필수)
 *
 * @example
 * ```tsx
 * <RecommendedWineItem
 *   id={1}
 *   imageSrc='https://example.com/wine.png'
 *   rating={4.2}
 *   name='Sentinel Carbernet Sauvignon 2016'
 * />
 * ```
 */
export default function RecommendedWineItem({
  id,
  imageSrc = '',
  rating = 0,
  name,
}: RecommendedWineItemProps) {
  return (
    <Link
      className='inset-shadow-md flex h-[15rem] min-w-[24rem] cursor-pointer items-center justify-between gap-4 overflow-y-hidden rounded-2xl bg-white px-5 md:h-[18rem] md:w-[26rem]'
      href={`/wines/${id}`}
    >
      {imageSrc ? (
        <div className='flex h-[17rem] w-full max-w-[8rem] min-w-[10rem] items-center justify-center pt-5 md:h-[19rem] md:max-w-[10rem] md:min-w-[8rem]'>
          <Image
            alt='wine'
            className='pointer-events-none relative bottom-[-1rem] h-full max-w-full object-cover select-none md:bottom-[-1.2rem]'
            height={600}
            src={imageSrc}
            width={600}
          />
        </div>
      ) : (
        <div className='flex max-w-[8rem] min-w-[10rem] items-center justify-center'>
          <WineIcon size={50} />
        </div>
      )}

      <RatingSummary
        className='gap-1 md:gap-3'
        direction='col'
        rating={rating}
        ratingClassName='text-[3.2rem] md:text-[3.6rem]'
        size='sm'
      >
        <RatingSummary.Text className='mt-2 text-[1rem] md:w-[13rem] md:text-[1.2rem]'>
          {name}
        </RatingSummary.Text>
      </RatingSummary>
    </Link>
  );
}
