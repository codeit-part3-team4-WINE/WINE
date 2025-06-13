import { BaseIconProps } from '@/types/icon';

export default function LoaderCircleIcon({
  size = 24,
  className,
}: BaseIconProps) {
  return (
    <svg
      className={`animate-spin ${className}`}
      fill='none'
      height={size}
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='3'
      viewBox='0 0 24 24'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  );
}

LoaderCircleIcon.displayName = 'LoaderCircleIcon';
