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

export default function ChocolateIcon({
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
        d='M7.93945 8.82227H14.4173V15.3001H7.93945V8.82227Z'
        fill={color}
      />
      <path d='M16.761 8.82227H23.2389V15.3001H16.761V8.82227Z' fill={color} />
      <path
        d='M7.93945 17.6426H14.4173V24.1205H7.93945V17.6426Z'
        fill={color}
      />
      <path d='M16.761 17.6426H23.2389V24.1205H16.761V17.6426Z' fill={color} />
      <path
        d='M25.5828 8.82227H32.0607V15.3001H25.5828V8.82227Z'
        fill={color}
      />
      <path
        d='M14.4173 0H9.11133C8.46414 0 7.93945 0.524688 7.93945 1.17188V6.47789H14.4173V0Z'
        fill={color}
      />
      <path d='M16.761 0H23.2389V6.47789H16.761V0Z' fill={color} />
      <path
        d='M25.5828 6.47789H32.0607V1.17188C32.0607 0.524688 31.536 0 30.8888 0H25.5828V6.47789Z'
        fill={color}
      />
      <path
        d='M25.5828 17.6426H32.0607V24.1205H25.5828V17.6426Z'
        fill={color}
      />
      <path
        d='M16.9543 33.1079C14.6141 29.8095 12.5689 26.9276 7.93945 26.5156V38.8282C7.93945 39.4754 8.46414 40.0001 9.11133 40.0001H23.5894C20.5495 38.1749 18.6866 35.5496 16.9543 33.1079Z'
        fill={color}
      />
      <path
        d='M14.2402 26.4648C16.1403 27.9109 17.5149 29.8476 18.8659 31.7517C21.6349 35.6547 24.263 39.3583 31.2982 39.925C31.7431 39.7588 32.0605 39.3311 32.0605 38.8281V26.4648H14.2402Z'
        fill={color}
      />
    </svg>
  );
}

ChocolateIcon.displayName = 'ChocolateIcon';
