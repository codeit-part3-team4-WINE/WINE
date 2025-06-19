import WineCardSkeleton from '@/app/wines/[wineId]/components/SkeletonUi/WineCardSkeleton';

import SkeletonTab from '../../components/Skeleton/SkeletonTab';

export default function WineLoading() {
  return (
    <div>
      <SkeletonTab />
      <div>
        <WineCardSkeleton />
        <WineCardSkeleton />
        <WineCardSkeleton />
      </div>
    </div>
  );
}
