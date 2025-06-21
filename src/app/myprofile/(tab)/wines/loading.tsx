import WineCardSkeleton from '@/app/wines/[wineId]/components/SkeletonUi/WineCardSkeleton';

export default function WineLoading() {
  return (
    <div>
      <WineCardSkeleton />
      <WineCardSkeleton />
      <WineCardSkeleton />
    </div>
  );
}
