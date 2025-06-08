import StarIcon from '@/app/assets/icons/star';
import { cn } from '@/libs/cn';

type Direction = 'row' | 'col';
type Size = 'sm' | 'md' | 'lg';

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

function RatingSummary({
  rating,
  direction = 'col',
  size = 'md',
  iconColor = '#6A42DB',
  className,
  children,
}: {
  rating: number;
  direction?: Direction;
  size?: Size;
  iconColor?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const ratingSize = SIZE_VARIANTS[size].rating;

  const Content = (
    <>
      <Stars color={iconColor} rating={rating} size={size} />
      {children}
    </>
  );

  return direction === 'col' ? (
    <div className={cn('flex flex-col items-start gap-[1rem]', className)}>
      <p className={cn('font-bold', ratingSize)}>{rating.toFixed(1)}</p>
      {Content}
    </div>
  ) : (
    <div className={cn('flex items-center gap-[2rem]', className)}>
      <p className={cn('font-bold', ratingSize)}>{rating.toFixed(1)}</p>
      <div className='flex flex-col items-start gap-[1rem]'>{Content}</div>
    </div>
  );
}

function Stars({
  rating,
  size = 'md',
  color = '#6A42DB',
}: {
  rating: number;
  size?: Size;
  color?: string;
}) {
  const max = 5;
  const iconSize = SIZE_VARIANTS[size].icon;
  const fullStars = Math.floor(rating);

  return (
    <div className='relative flex'>
      {/* 빈 별 */}
      {Array.from({ length: max }, (_, i) => (
        <StarIcon key={`empty-${i}`} filled size={iconSize} />
      ))}
      {/* 채워진 별 */}
      <div className='pointer-events-none absolute flex'>
        {Array.from({ length: fullStars }, (_, i) => (
          <StarIcon key={`filled-${i}`} filled color={color} size={iconSize} />
        ))}
        <StarIcon
          key='filled-last'
          filled
          color={color}
          fillPercent={getFillPercent(rating)}
          size={iconSize}
        />
      </div>
    </div>
  );
}

function Text({
  children,
  size = 'md',
  className,
}: {
  children: React.ReactNode;
  size?: Size;
  className?: string;
}) {
  const textSize = SIZE_VARIANTS[size].text;
  return (
    <p className={cn('w-[10rem] text-gray-500', textSize, className)}>
      {children}
    </p>
  );
}
RatingSummary.Stars = Stars;
RatingSummary.Text = Text;

export default RatingSummary;
