import Image, { StaticImageData } from 'next/image';

import PriceBadge from './PriceBadge';

/**
 * Props for the WineInfo component
 */
interface WineInfoProps {
  /** 와인의 이름 */
  wineName: string;
  /** 와인 이미지 (StaticImageData 타입) */
  wineImage: StaticImageData;
  /** 와인 생산 국가 */
  wineCountry: string;
}

/**
 * 와인의 기본 정보를 표시하는 컴포넌트
 * 와인 이미지, 이름, 국가, 가격을 포함한 정보를 레이아웃으로 구성
 *
 * @param props - WineInfo 컴포넌트의 props
 * @returns 와인 정보를 표시하는 JSX 요소
 */
export default function WineInfo({
  wineName,
  wineImage,
  wineCountry,
}: WineInfoProps) {
  return (
    <div className='flex'>
      <div className='flex h-full w-full gap-4'>
        <div className='relative aspect-[3/4] w-full max-w-xs'>
          <Image
            fill
            alt='wine Image'
            className='object-contain'
            src={wineImage}
          />
        </div>
        <div className='flex flex-col pb-20'>
          <h1 className='mb-10 w-full text-3xl font-bold'>{wineName}</h1>
          <p className='text-md mb-5 text-gray-500'>{wineCountry}</p>
          <PriceBadge price={64990} />
        </div>
      </div>
    </div>
  );
}
