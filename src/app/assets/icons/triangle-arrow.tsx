import { DirectionIconProps } from '@/types/icon';

/**
 * 삼각 화살표 아이콘
 *
 * @component
 * @param {number|string} [size=24] - 아이콘의 크기 (px 또는 rem 등)
 * @param {string} [color='#CFDBEA'] - 아이콘 색상
 * @param {'right'|'left'|'top'|'bottom'} [direction='right'] - 화살표 방향 ['right'|'left'|'top'|'bottom']
 * @returns {JSX.Element} SVG 삼각 화살표 아이콘
 *
 * @example
 * ```tsx
 * <TriangleArrowIcon direction="left" color="#888" size={32} />
 * ```
 */

export default function TriangleArrowIcon({
  size = 24,
  color = '#CFDBEA',
  direction = 'bottom',
}: DirectionIconProps) {
  const rotation = {
    right: '-90',
    bottom: '0',
    left: '90',
    top: '180',
  }[direction];

  return (
    <svg
      fill='none'
      height={size}
      style={{ transform: `rotate(${rotation}deg)` }}
      viewBox='0 0 24 24'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.5515 8H5.44853C4.91399 8 4.64628 8.64628 5.02426 9.02426L11.5757 15.5757C11.8101 15.8101 12.1899 15.8101 12.4243 15.5757L18.9757 9.02426C19.3537 8.64629 19.086 8 18.5515 8Z'
        fill={color}
      />
    </svg>
  );
}

TriangleArrowIcon.displayName = 'TriangleArrowIcon';
