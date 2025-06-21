import WineCardSkeleton from '@/app/(with-header)/wines/[wineId]/components/SkeletonUi/WineCardSkeleton';

export default function WineLoading() {
  return (
    <div>
      <WineCardSkeleton />
      <WineCardSkeleton />
      <WineCardSkeleton />
    </div>
  );
}
