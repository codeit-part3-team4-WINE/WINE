import Image, { StaticImageData } from 'next/image';

import PriceBadge from '@/components/Badge/PriceBadge';
import { cn } from '@/libs/cn';

interface WineInfoProps {
  /**
   * 와인의 이름
   */
  wineName: string;
  /**
   * Next.js의 StaticImageData 타입의 와인 이미지
   */

  wineImage: StaticImageData | string;
  /**
   * 와인 생산 국가
   */
  wineCountry: string;
  /**
   * 와인 가격
   */
  price: number;
  /**
   * 와인 이름 스타일링을 위한 선택적 CSS 클래스명
   */
  wineNameClassName?: string;
  /**
   * 와인 국가 스타일링을 위한 선택적 CSS 클래스명
   */
  wineCountryClassName?: string;
  /**
   * 와인 이미지 스타일링을 위한 선택적 CSS 클래스명
   */
  wineImageClassName?: string;
  /**

   * 와인 정보 컨테이너 스타일링을 위한 선택적 CSS 클래스명
   */
  className?: string;
  /**
   * 가격 배지 스타일링을 위한 선택적 CSS 클래스명
   */
  priceClassName?: string;
  /**
   * 와인 정보 컨테이너 스타일링을 위한 선택적 CSS 클래스명
   */
  wineInfoClassName?: string;
}

/**
 * WineInfo 컴포넌트
 *
 * @component
 * @param {WineInfoProps} props -  컴포넌트 프로퍼티
 * @param {string} props.wineName - 표시할 와인 이름
 * @param {StaticImageData | string} props.wineImage - 와인 이미지 데이터
 * @param {string} props.wineCountry - 와인 생산 국가
 * @param {number} props.price - 와인 가격
 * @param {string} [props.wineNameClassName] - 와인 이름용 선택적 CSS 클래스
 * @param {string} [props.wineCountryClassName] - 와인 국가용 선택적 CSS 클래스
 * @param {string} [props.wineImageClassName] - 와인 이미지용 선택적 CSS 클래스
 * @param {string} [props.priceClassName] - 가격 배지용 선택적 CSS 클래스
 *
 * @returns {JSX.Element} 와인 정보를 표시하는 JSX 요소
 *
 * @example
 * ```tsx
 * import wineImage from '/public/images/wine.jpg';
 *
 * <WineInfo
 *   wineName="Château Margaux"
 *   wineImage={wineImage}
 *   wineCountry="France"
 *   price={150000}
 *   wineNameClassName="text-red-600"
 * />
 * ```
 */
export default function WineInfo({
  wineName,
  wineImage,
  wineCountry,
  price,
  wineNameClassName,
  wineCountryClassName,
  wineImageClassName,
  className,
  priceClassName,
}: WineInfoProps) {
  return (
    <div className={cn('flex', className)}>
      <div className='flex h-full w-full gap-4'>
        <div
          className={cn(
            'relative aspect-[10/26] h-[22rem] w-[10rem] md:h-[22rem] md:w-[10rem] xl:h-[26rem] xl:w-[10rem]',
            wineImageClassName,
          )}
        >
          <Image
            fill
            alt='wine Image'
            className='object-cover px-6 xl:px-5'
            src={wineImage}
          />
        </div>
        <div className='flex flex-col pb-20'>
          <h1
            className={cn('mb-10 w-full text-3xl font-bold', wineNameClassName)}
          >
            {wineName}
          </h1>
          <p className={cn('text-md mb-5 text-gray-500', wineCountryClassName)}>
            {wineCountry}
          </p>
          <PriceBadge className={priceClassName} price={price} />
        </div>
      </div>
    </div>
  );
}
