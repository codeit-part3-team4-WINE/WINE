import StarIcon from '@/app/assets/icons/star';

import Badge from './Badge';

export default function StarBadge({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <Badge className={className}>
      <StarIcon filled color='#6a42db' />
      <span>{rating.toFixed(1)}</span>
    </Badge>
  );
}
