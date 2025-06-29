import { DirectionIconProps } from '@/types/icon';

/**
 * 꺾인 화살표 아이콘
 *
 * @component
 * @param {number|string} [size=24] - 아이콘의 크기 (px 또는 rem 등)
 * @param {string} [color='#CFDBEA'] - 아이콘 색상
 * @param {'right'|'left'|'top'|'bottom'} [direction='right'] - 화살표 방향 ['right'|'left'|'top'|'bottom']
 * @returns {JSX.Element} SVG 꺾인 화살표 아이콘
 *
 * @example
 * ```tsx
 * <ChevronArrowIcon direction="left" color="#888" size={32} />
 * ```
 */

export default function ChevronArrowIcon({
  size = 24,
  color = '#CFDBEA',
  direction = 'bottom',
  className,
}: DirectionIconProps) {
  const rotation = {
    right: '-90',
    bottom: '0',
    left: '90',
    top: '180',
  }[direction];

  return (
    <svg
      className={className}
      fill='none'
      height={size}
      style={{ transform: `rotate(${rotation}deg)` }}
      viewBox='0 0 24 24'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.9998 14.9504C11.8665 14.9504 11.7415 14.9296 11.6248 14.8879C11.5081 14.8462 11.3998 14.7754 11.2998 14.6754L6.6998 10.0754C6.51647 9.89206 6.4248 9.65872 6.4248 9.37539C6.4248 9.09206 6.51647 8.85872 6.6998 8.67539C6.88314 8.49206 7.11647 8.40039 7.3998 8.40039C7.68314 8.40039 7.91647 8.49206 8.0998 8.67539L11.9998 12.5754L15.8998 8.67539C16.0831 8.49206 16.3165 8.40039 16.5998 8.40039C16.8831 8.40039 17.1165 8.49206 17.2998 8.67539C17.4831 8.85872 17.5748 9.09206 17.5748 9.37539C17.5748 9.65872 17.4831 9.89206 17.2998 10.0754L12.6998 14.6754C12.5998 14.7754 12.4915 14.8462 12.3748 14.8879C12.2581 14.9296 12.1331 14.9504 11.9998 14.9504Z'
        fill={color}
      />
    </svg>
  );
}

ChevronArrowIcon.displayName = 'ChevronArrowIcon';
