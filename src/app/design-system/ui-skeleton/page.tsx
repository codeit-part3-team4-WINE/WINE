import FlavorAnalysis from '@/app/wines/[wineId]/components/flavorAnalysis/FlavorAnalysis';
import AromaAnalysisSkeleton from '@/app/wines/[wineId]/components/SkeletonUi/AromaAnalysisSkeleton';
import FlavorAnalysisSkeleton from '@/app/wines/[wineId]/components/SkeletonUi/FlavorAnalysisSkeleton';
import ReviewCardSkeleton from '@/app/wines/[wineId]/components/SkeletonUi/ReviewCardSkeleton';
import ReviewOverviewSkeleton from '@/app/wines/[wineId]/components/SkeletonUi/ReviewOverviewSkeleton';
import WineCardSkeleton from '@/app/wines/[wineId]/components/SkeletonUi/WineCardSkeleton';
import WinePageSkeleton from '@/app/wines/[wineId]/components/SkeletonUi/WinePageSkeleton';

export default function UISkeletonPage() {
  return (
    <div>
      <WineCardSkeleton />
      {/* <WineCard
        image=''
        name='Sentinel Cabernet Sauvignon 2016'
        price={0}
        region='Western Cape, South Africa'
      /> */}
      <br />
      <FlavorAnalysisSkeleton />
      <FlavorAnalysis data={[]} />
      <br />
      <AromaAnalysisSkeleton />
      <ReviewCardSkeleton />
      <ReviewOverviewSkeleton />
      <WinePageSkeleton />
    </div>
  );
}
