import { cn } from '@/libs/cn';

import SkeletonReviewCard from './SkeletonReviewCard';
import SkeletonTab from './SkeletonTab';

function ProfileSection() {
  return (
    <div
      className={cn(
        'mt-[2rem] flex shrink-0 items-center justify-between bg-gray-100',
        'xl:mt-[4rem] xl:h-[40rem] xl:w-[28rem] xl:flex-col xl:justify-around xl:rounded-[1.6rem]',
      )}
    />
  );
}

export default function SkeletonMyprofile() {
  return (
    <div className='animate-pulse'>
      <div className='relative mx-[1.6rem] mt-7 max-w-[120rem] md:mx-[2rem] lg:mx-[2rem] xl:mx-[auto]'>
        <div className='flex w-full flex-col xl:flex-row xl:gap-[5rem]'>
          <ProfileSection />
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
