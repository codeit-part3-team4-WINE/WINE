import StarIcon from '@/app/assets/icons/star';
import { cn } from '@/libs/cn';

interface RatingSummaryContextType {
  rating: number;
  totalReviews?: number | null;
  description?: string | null;
  direction: 'row' | 'col';
  size: 'sm' | 'md' | 'lg';
}

const SIZE_VARIANTS = {
  lg: {
    rating: 'text-[5.4rem]',
    icon: 20,
    text: 'text-[1.4rem]',
  },
  md: {
    rating: 'text-[4.8rem]',
    icon: 20,
    text: 'text-[1.4rem]',
  },
  sm: {
    rating: 'text-[3.6rem]',
    icon: 15,
    text: 'text-[1.2rem]',
  },
};

const getFillPercent = (rating: number) => {
  return rating % 1 === 0 ? 100 : (rating % 1) * 100;
};

export default function RatingSummary({
  rating,
  totalReviews = null,
  description = null,
  direction = 'col',
  size,
}: RatingSummaryContextType) {
  const {
    rating: ratingSize,
    icon: iconSize,
    text: textSize,
  } = SIZE_VARIANTS[size];

  const Stars = (
    <div className='relative flex'>
      <div className='flex'>
        {/* 별점 배경 (빈 별) */}
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={`empty-${i}`} filled size={iconSize} />
        ))}

        {/* 별점 (채워진 별) */}
        <div className='absolute flex'>
          {Array.from({ length: rating - 1 }, (_, i) => (
            <StarIcon
              key={`filled-${i}`}
              filled
              color='#6A42DB'
              size={iconSize}
            />
          ))}

          {/* 소수점 단위 표현 */}
          <StarIcon
            key='filled-last'
            filled
            color='#6A42DB'
            fillPercent={getFillPercent(rating)}
            size={iconSize}
          />
        </div>
      </div>
    </div>
  );

  const Texts = (
    <div className='w-[10rem]'>
      {totalReviews && (
        <p className={cn('content-text text-gray-500', textSize)}>
          {totalReviews}개의 후기
        </p>
      )}
      {description && (
        <p className={cn('content-text text-gray-500', textSize)}>
          {description}
        </p>
      )}
    </div>
  );

  return direction === 'col' ? (
    <div className='flex flex-col items-start gap-[1rem]'>
      <p className={cn('font-bold', ratingSize)}>{rating.toFixed(1)}</p>
      {Stars}
      {Texts}
    </div>
  ) : (
    <div className='flex items-center gap-[2rem]'>
      <p className={cn('font-bold', ratingSize)}>{rating.toFixed(1)}</p>
      <div className='flex flex-col items-start gap-[1rem]'>
        {Stars}
        {Texts}
      </div>
    </div>
  );
}
