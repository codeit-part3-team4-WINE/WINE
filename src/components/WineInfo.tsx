import Image, { StaticImageData } from 'next/image';

import PriceBadge from './PriceBadge';

interface WineInfoProps {
  wineImage: StaticImageData;
}

export default function WineInfo({ wineImage }: WineInfoProps) {
  return (
    <div className='flex h-full gap-4'>
      <div className='relative bottom-0 h-full'>
        <Image alt='wine Image' height={100} src={wineImage} width={100} />
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='w-2/3 text-3xl font-bold'>
          Sentinel Carbernet Sauvignon 2016
        </h1>
        <p className='text-sm text-gray-500'>Western Cape, South Africa</p>
        <PriceBadge price={64990} />
      </div>
    </div>
  );
}
