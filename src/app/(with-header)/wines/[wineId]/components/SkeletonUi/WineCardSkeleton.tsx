export default function WineCardSkeleton() {
  return (
    <div className='relative flex h-[16rem] w-full animate-pulse rounded-[1.2rem] border border-gray-200 px-[2rem] py-[2rem] md:mt-20 md:h-[22.8rem]'>
      <div className='absolute bottom-0 left-[2.5rem] h-[18rem] w-[5.3rem] bg-gray-200 md:-top-17 md:left-[3.5rem] md:h-[27rem] md:w-[8rem]'>
        {/*이미지*/}
      </div>
      <div className='ml-[8rem] flex h-full w-[19rem] flex-col justify-center gap-y-2 md:ml-[14rem] md:w-[30rem] md:gap-y-5'>
        <h1 className='h-[8rem] w-[20rem] bg-gray-200 md:w-[30rem] md:text-[3rem]' />
        <h2 className='h-[1.6rem] w-[18rem] bg-gray-200 md:w-[24rem] md:text-lg' />
        <div className='mt-2'>
          <div className='h-[3.5rem] w-[5rem] rounded-[1.2rem] bg-gray-200' />
        </div>
      </div>
    </div>
  );
}
