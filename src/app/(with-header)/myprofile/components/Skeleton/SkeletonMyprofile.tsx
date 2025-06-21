import SkeletonProfileSection from './SkeletonProfileSection';
import SkeletonReviewCard from './SkeletonReviewCard';
import SkeletonTab from './SkeletonTab';

export default function SkeletonMyprofile() {
  return (
    <div className='animate-pulse'>
      <div className='relative mx-[1.6rem] mt-7 max-w-[120rem] md:mx-[2rem] lg:mx-[2rem] xl:mx-[auto]'>
        <div className='flex w-full flex-col xl:flex-row xl:gap-[5rem]'>
          <SkeletonProfileSection />
          <div className='flex w-full flex-col'>
            <SkeletonTab />
            <div className='flex flex-col gap-10'>
              <SkeletonReviewCard />
              <SkeletonReviewCard />
              <SkeletonReviewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
