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

/**
 * getFillPercent()
 * : 소수점 이하 별점의 백분율 계산
 * @param rating 별점
 * @returns 마지막 별의 채워지는 비율 (0~100)
 */
const getFillPercent = (rating: number) => {
  return rating % 1 === 0 ? 100 : (rating % 1) * 100;
};

/**
 * RatingSummary()
 * : 별점 및 리뷰 요약을 보여주는 컴포넌트
 *
 * @component
 * @param {number} rating - 별점
 * @param {'row'|'col'} [direction='col'] - 레이아웃 방향
 * @param {'sm'|'md'|'lg'} [size='md'] - 별 아이콘 및 텍스트 크기
 * @param {string} [iconColor='#6A42DB'] - 별 아이콘 색상 (색상 코드)
 * @param {string} [className] - 클래스명 추가 (스타일 확장)
 *
 * @example
 * ```tsx
 * <RatingSummary rating={4.8} size="lg" direction="row">
 *   <RatingSummary.Text>47개의 후기</RatingSummary.Text>
 * </RatingSummary>
 * ```
 */
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

  // Stars(별점 아이콘)은 레이아웃 고정
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

/**
 * Stars()
 * : 별점 아이콘. 0.1 단위로 색을 채워 소수점 표현.
 *
 * @param {number} rating - 별점
 * @param {'sm'|'md'|'lg'} [size='md'] - 별 아이콘 크기
 * @param {string} [color='#6A42DB'] - 아이콘 색상
 */
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

/**
 * Text()
 * : 후기 개수 및 와인 정보를 보여주는 텍스트 컴포넌트 (ex. "100개의 후기" / "Sentinel Carbernet Sauvignon 2016")
 *   --> 기본으로 제공되는 문자열 템플릿이 없어서 "100개의 후기"라면, "개의 후기"까지 작성하셔야 합니다.
 *
 * @param {React.ReactNode} children - 표시할 텍스트
 * @param {'sm'|'md'|'lg'} [size='md'] - 텍스트 크기
 * @param {string} [className] - 클래스명 추가 (스타일 확장)
 */
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
