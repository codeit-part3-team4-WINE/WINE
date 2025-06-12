import type { FillIconProps } from '@/types/icon';

/**
 * 하트 아이콘
 *
 * @component
 * @param {number|string} [size=24] - 아이콘의 크기 (px 또는 rem 등)
 * @param {string} [color='#CFDBEA'] - 아이콘 색상
 * @param {boolean} [filled=false] - 내부 채움 여부
 * @returns {JSX.Element} SVG 하트 아이콘
 *
 * @example
 * ```tsx
 *  <HeartIcon filled color="#FF4D6D" size={24} />
 *  <HeartIcon filled={false} color="#FF4D6D" size={24} />
 * ```
 */

export default function HeartIcon({
  size = 24,
  color = '#CFDBEA',
  filled = false,
  className,
}: FillIconProps) {
  return (
    <svg
      className={className}
      fill={filled ? color : 'none'}
      height={size}
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      viewBox='0 0 24 24'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
    </svg>
  );
}

HeartIcon.displayName = 'HeartIcon';
