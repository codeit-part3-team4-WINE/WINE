'use client';

import Button from '@/components/Button';
import { cn } from '@/libs/cn';

export default function ReviewRatingButton({
  className,
}: {
  className?: string;
}) {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <Button className={cn('w-fit', className)} size='xs' onClick={handleClick}>
      리뷰 남기기
    </Button>
  );
}
