import type { ColorIconProps } from '@/types/icon';

/**
 * Tastes 아이콘 컴포넌트
 *
 * @component
 * @param {number|string} [props.size=40] - 아이콘의 크기 (px 또는 rem 등)
 * @param {string} [props.color='#CFDBEA'] - 아이콘의 색상
 * @returns {JSX.Element} SVG 아이콘
 *
 * @example
 * ```tsx
 * <TasteIcon />
 * <TasteIcon size={48} color="#000" />
 * ```
 */

export default function MineralIcon({
  size = 40,
  color = '#CFDBEA',
}: ColorIconProps) {
  return (
    <svg
      fill='none'
      height={size}
      viewBox='0 0 40 40'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.5585 29.482L16.49 37.035L27.1435 32.7736L25.0312 20.0996L18.5585 29.482Z'
        fill={color}
      />
      <path
        d='M19.335 6.60234L26.1406 15.6765L40 11.0567L31.4604 2.51711C31.1289 2.18562 30.6318 2.08359 30.1966 2.25765L19.335 6.60234Z'
        fill={color}
      />
      <path
        d='M6.69173 17.3711L0.8479 26.2547L10.2502 24.1636L6.69173 17.3711Z'
        fill={color}
      />
      <path
        d='M17.2013 27.3269L24.2685 17.0828L17.682 8.30078L15.7863 12.0923C15.6644 12.3361 15.4612 12.5298 15.2117 12.6398L8.42407 15.6338L12.907 24.1907L17.2013 27.3269Z'
        fill={color}
      />
      <path
        d='M0 28.8421L4.16773 37.1776C4.36625 37.5746 4.77203 37.8254 5.21586 37.8254H13.8462L16.1398 29.4502L11.7338 26.2324L0 28.8421Z'
        fill={color}
      />
      <path
        d='M29.1582 30.6194L35.6818 21.9213L39.8563 13.5723L27.0295 17.8478L29.1582 30.6194Z'
        fill={color}
      />
    </svg>
  );
}

MineralIcon.displayName = 'MineralIcon';
