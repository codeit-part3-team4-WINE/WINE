import Image from 'next/image';

import PriceBadge from '@/components/Badge/PriceBadge';

import CardDropdown from './CardDropdown';

/**
 * 와인 카드 컴포넌트
 *
 * @param {string} props.name - 와인 이름
 * @param {string} props.region - 와인 지역
 * @param {string} props.image - 와인 이미지 URL
 * @param {number|string} props.price - 와인 가격
 */
export default function WineCard({ name, region, image, price }) {
  return (
    <article className='relative mt-10 flex h-[16rem] w-full cursor-pointer rounded-[1.2rem] border border-gray-300 px-[2rem] py-[2rem] md:mt-20 md:h-[22.8rem]'>
      <div className='absolute -top-8 left-[2rem] h-[18rem] w-[5.3rem] md:-top-17 md:h-[27rem] md:w-[6rem]'>
        <Image fill alt={name} className='object-cover' src={image} />
      </div>
      <div className='ml-[7rem] flex h-full flex-col justify-center gap-y-2 md:ml-[10rem] md:w-[30rem] md:gap-y-5'>
        <h1 className='text-xl font-bold text-gray-800 md:text-[3rem]'>
          {name}
        </h1>
        <h2 className='text-md text-gray-500 md:text-lg'>{region}</h2>
        <div className='mt-2'>
          <PriceBadge price={price} />
        </div>
      </div>
      <div className='absolute top-15 right-10'>
        <CardDropdown />
      </div>
    </article>
  );
}
