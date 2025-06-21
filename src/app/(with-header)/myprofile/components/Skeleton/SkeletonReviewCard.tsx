export default function SkeletonReviewCard() {
  return (
    <div className='animate-pulse'>
      <div className='flex min-h-[18.7rem] w-full flex-col gap-[1.7rem] rounded-[1.6rem] border border-gray-300 px-[2rem] py-[1.6rem] md:min-h-[19rem] md:px-[4em] md:py-[2.3rem] xl:min-h-[20rem] xl:gap-[2rem]'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center gap-6 md:gap-8'>
            {/* starBadge */}
            <div className='h-[3rem] w-[6rem] rounded-xl bg-gray-100' />
            {/* time */}
            <div className='h-[2rem] w-[4rem] rounded-xl bg-gray-100' />
          </div>
          {/* dropdown */}
          <div className='h-[3rem] w-[2rem] rounded-xl bg-gray-100' />
        </div>
        <div className='flex flex-col gap-[1rem]'>
          {/* wine name */}
          <div className='h-[2rem] w-[10rem] rounded-xl bg-gray-100' />
          {/* review content */}
          <div className='h-[2rem] w-[30rem] rounded-xl bg-gray-100' />
          <div className='h-[2rem] w-[20rem] rounded-xl bg-gray-100' />
        </div>
      </div>
    </div>
  );
}
