import SkeletonReviewCard from '../../components/Skeleton/SkeletonReviewCard';

export default function ReviewLoading() {
  return (
    <div>
      {/* <SkeletonTab /> */}
      <div className='flex flex-col gap-10'>
        <SkeletonReviewCard />
        <SkeletonReviewCard />
        <SkeletonReviewCard />
      </div>
    </div>
  );
}
