'use client';

import Button from '@/components/Button';
import { cn } from '@/libs/cn';

interface ReviewRatingButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function ReviewRatingButton({
  className,
  onClick,
}: ReviewRatingButtonProps) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <Button className={cn('w-fit', className)} size='xs' onClick={handleClick}>
      리뷰 남기기
    </Button>
  );
}
