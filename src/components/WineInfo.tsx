import Image, { StaticImageData } from 'next/image';

import PriceBadge from './PriceBadge';

interface WineInfoProps {
  wineName: string;
  wineImage: StaticImageData;
  wineCountry: string;
}

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
