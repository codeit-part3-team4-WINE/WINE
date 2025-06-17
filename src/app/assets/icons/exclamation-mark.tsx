import type { BaseIconProps } from '@/types/icon';

export default function ExclamationMark({
  size = 130,
  className,
}: BaseIconProps) {
  return (
    <svg
      className={className}
      fill='none'
      height={size}
      viewBox='0 0 136 136'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect fill='#F2F4F8' height='136' rx='68' width='136' />
      <path
        d='M57.3328 32.3197C57.1512 27.7797 60.7827 24 65.3264 24H70.6736C75.2173 24 78.8488 27.7797 78.6672 32.3197L76.6672 82.3197C76.4956 86.6102 72.9675 90 68.6736 90H67.3264C63.0325 90 59.5044 86.6102 59.3328 82.3197L57.3328 32.3197Z'
        fill='white'
      />
      <rect fill='white' height='14' rx='7' width='18' x='59' y='98' />
    </svg>
  );
}
