import StarBadge from '@/components/Badge/StarBadge';
import { getTimeAgo } from '@/utils/getTimeAgo';

import CardDropdown from './CardDropdown';

/**
 * 리뷰 카드 컴포넌트
 *
 * @param {string} props.time - 리뷰 작성 시각
 * @param {number} props.rating - 리뷰 별점
 * @param {string} props.wine - 와인 이름
 * @param {string} props.content - 리뷰 내용
 */
export default function ReviewCard({ time, rating, wine, content }) {
  const agoTime = getTimeAgo(time);

  return (
    <article className='mt-[1.6rem] flex min-h-[18.7rem] w-full cursor-pointer flex-col gap-[1.7rem] rounded-[1.6rem] border border-gray-300 px-[2rem] py-[1.6rem] md:mt-[2.2rem] md:min-h-[19rem] md:px-[4em] md:py-[2.3rem] lg:min-h-[20rem] lg:gap-[2rem]'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-6 md:gap-8'>
          <StarBadge rating={rating} />
          <span className='text-md text-gray-500'>{agoTime}</span>
        </div>
        <CardDropdown />
      </div>
      <div className='flex flex-col gap-[1rem]'>
        <div className='text-md text-gray-500 lg:text-lg'>{wine}</div>
        <p className='text-md break-words whitespace-normal text-gray-800 lg:text-lg'>
          {content}
        </p>
      </div>
    </article>
  );
}
