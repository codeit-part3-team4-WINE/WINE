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

export default function FloralIcon({
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
      <g clipPath='url(#clip0_1_2768)'>
        <path
          d='M7.81909 17.619C7.81909 20.2476 9.9524 22.3809 12.581 22.3809C13.581 22.3809 14.5143 22.0666 15.2762 21.5428L15.2381 21.9046C15.2381 24.5332 17.3714 26.6665 20 26.6665C22.6286 26.6665 24.7619 24.5332 24.7619 21.9046L24.7237 21.5428C25.4952 22.0761 26.419 22.3809 27.419 22.3809C30.0476 22.3809 32.1809 20.2476 32.1809 17.619C32.1809 15.7238 31.0666 14.0952 29.457 13.3333C31.057 12.5714 32.1809 10.9429 32.1809 9.04759C32.1809 6.41902 30.0476 4.28571 27.419 4.28571C26.419 4.28571 25.4857 4.6 24.7237 5.12384L24.7619 4.76196C24.7619 2.1333 22.6286 0 20.0001 0C17.3715 0 15.2382 2.1333 15.2382 4.76188L15.2763 5.12375C14.5048 4.59045 13.5811 4.28571 12.5811 4.28571C9.95248 4.28571 7.81918 6.41902 7.81918 9.04759C7.81918 10.9429 8.93347 12.5714 10.543 13.3333C8.93338 14.0953 7.81909 15.7238 7.81909 17.619ZM20.0001 8.57143C22.6286 8.57143 24.7619 10.7047 24.7619 13.3333C24.7619 15.9619 22.6286 18.0953 20.0001 18.0953C17.3715 18.0953 15.2382 15.962 15.2382 13.3334C15.2382 10.7048 17.3715 8.57143 20.0001 8.57143Z'
          fill={color}
        />
        <path
          d='M2.85718 22.8574C2.85718 32.3241 10.5333 40.0003 20 40.0003C20 30.5336 12.3239 22.8574 2.85718 22.8574Z'
          fill={color}
        />
        <path
          d='M20 40.0003C29.4667 40.0003 37.1429 32.3241 37.1429 22.8574C27.6762 22.8574 20 30.5336 20 40.0003Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_1_2768'>
          <rect fill='white' height='40' width='40' />
        </clipPath>
      </defs>
    </svg>
  );
}

FloralIcon.displayName = 'FloralIcon';
