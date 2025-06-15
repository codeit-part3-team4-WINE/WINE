import { useId } from 'react';

import type { FillIconProps } from '@/types/icon';

/**
 * 별 아이콘
 *
 * @component
 * @param {number|string} [size=24] - 아이콘의 크기 (px 또는 rem 등)
 * @param {string} [color='#CFDBEA'] - 아이콘 색상
 * @param {boolean} [filled=false] - 내부 채움 여부
 * @returns {JSX.Element} SVG 별 아이콘
 *
 * @example
 * ```tsx
 *  <StarIcon filled color="#FF4D6D" size={24} />
 *  <StarIcon filled={false} color="#FF4D6D" size={24} />
 * ```
 */

export default function StarIcon({
  size = 24,
  color = '#CFDBEA',
  filled = false,
  fillPercent = 100, // 0 ~ 100
}: FillIconProps & { fillPercent?: number }) {
  const id = useId();

  return (
    <svg
      height={size}
      viewBox='0 0 24 24'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <mask id={id}>
          <rect
            fill='white'
            height='100%'
            width={`${fillPercent}%`}
            x='0'
            y='0'
          />
        </mask>
      </defs>

      <path
        d='M12 17.2742L7.85002 19.7742C7.66668 19.8909 7.47502 19.9409 7.27501 19.9242C7.07501 19.9076 6.90001 19.8409 6.75002 19.7242C6.60001 19.6076 6.48335 19.4617 6.40002 19.2867C6.31668 19.1117 6.30002 18.9159 6.35002 18.6992L7.45002 13.9742L3.77502 10.7992C3.60835 10.6492 3.50418 10.4784 3.46252 10.2867C3.42085 10.0951 3.43335 9.90755 3.50002 9.72422C3.56668 9.54088 3.66668 9.39088 3.80002 9.27422C3.93335 9.15755 4.11668 9.08255 4.35002 9.04922L9.20002 8.62422L11.075 4.17422C11.1583 3.97422 11.2875 3.82422 11.4625 3.72422C11.6375 3.62422 11.8167 3.57422 12 3.57422C12.1833 3.57422 12.3625 3.62422 12.5375 3.72422C12.7125 3.82422 12.8417 3.97422 12.925 4.17422L14.8 8.62422L19.65 9.04922C19.8833 9.08255 20.0667 9.15755 20.2 9.27422C20.3333 9.39088 20.4333 9.54088 20.5 9.72422C20.5667 9.90755 20.5792 10.0951 20.5375 10.2867C20.4958 10.4784 20.3917 10.6492 20.225 10.7992L16.55 13.9742L17.65 18.6992C17.7 18.9159 17.6833 19.1117 17.6 19.2867C17.5167 19.4617 17.4 19.6076 17.25 19.7242C17.1 19.8409 16.925 19.9076 16.725 19.9242C16.525 19.9409 16.3333 19.8909 16.15 19.7742L12 17.2742Z'
        fill={filled ? color : 'none'}
        mask={`url(#${id})`}
        stroke={color}
        strokeWidth={2}
      />
    </svg>
  );
}

StarIcon.displayName = 'StarIcon';
