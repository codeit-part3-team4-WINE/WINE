'use client';

import ExclamationMark from '@/app/assets/icons/exclamation-mark';
import Button from '@/components/Button';

interface NothingProps {
  onClick?: () => void;
}

export default function Nothing({ onClick }: NothingProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <ExclamationMark />
      <p className='text-sm text-gray-500'>작성된 리뷰가 없습니다.</p>
      <Button onClick={() => onClick?.()}>리뷰 남기기</Button>
    </div>
  );
}
