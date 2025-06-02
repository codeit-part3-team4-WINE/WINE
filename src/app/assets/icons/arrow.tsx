import { DirectionIconProps } from '@/types/icon';

/**
 * 화살표 아이콘
 *
 * @component
 * @param {number|string} [size=24] - 아이콘의 크기 (px 또는 rem 등)
 * @param {string} [color='#CFDBEA'] - 아이콘 색상
 * @param {'right'|'left'|'top'|'bottom'} [direction='right'] - 화살표 방향 ['right'|'left'|'top'|'bottom']
 * @returns {JSX.Element} SVG 화살표 아이콘
 *
 * @example
 * ```tsx
 * <ArrowIcon direction="left" color="#888" size={32} />
 * ```
 */

export default function ArrowIcon({
  size = 24,
  color = '#CFDBEA',
  direction = 'right',
}: DirectionIconProps) {
  const rotation = {
    right: '0',
    bottom: '90',
    left: '180',
    top: '-90',
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
        d='M16.175 13.0001H5C4.71667 13.0001 4.47917 12.9043 4.2875 12.7126C4.09583 12.5209 4 12.2834 4 12.0001C4 11.7168 4.09583 11.4793 4.2875 11.2876C4.47917 11.0959 4.71667 11.0001 5 11.0001H16.175L11.275 6.10011C11.075 5.90011 10.9792 5.66678 10.9875 5.40011C10.9958 5.13344 11.1 4.90011 11.3 4.70011C11.5 4.51678 11.7333 4.42094 12 4.41261C12.2667 4.40428 12.5 4.50011 12.7 4.70011L19.3 11.3001C19.4 11.4001 19.4708 11.5084 19.5125 11.6251C19.5542 11.7418 19.575 11.8668 19.575 12.0001C19.575 12.1334 19.5542 12.2584 19.5125 12.3751C19.4708 12.4918 19.4 12.6001 19.3 12.7001L12.7 19.3001C12.5167 19.4834 12.2875 19.5751 12.0125 19.5751C11.7375 19.5751 11.5 19.4834 11.3 19.3001C11.1 19.1001 11 18.8626 11 18.5876C11 18.3126 11.1 18.0751 11.3 17.8751L16.175 13.0001Z'
        fill={color}
      />
    </svg>
  );
}
