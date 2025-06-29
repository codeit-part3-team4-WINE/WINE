export default function SkeletonTab() {
  return (
    <div className='mt-[4rem] mb-[3rem] flex h-[2.6rem] w-full animate-pulse items-center justify-between rounded-2xl md:h-[3.2rem]'>
      <div className='flex shrink-0 gap-[1.6rem] md:gap-[3.2rem]'>
        {/* 내가 쓴 후기 */}
        <div className='h-[2rem] w-[6.3rem] rounded-xl bg-gray-100 md:w-[8rem]' />
        {/* 내가 등록한 와인 */}
        <div className='h-[2rem] w-[12rem] rounded-xl bg-gray-100' />
        {/* 관심 있는 후기 */}
        <div className='h-[2rem] w-[12rem] rounded-xl bg-gray-100' />
      </div>
      <div className='h-[2rem] w-[3rem] rounded-xl bg-gray-100' />
    </div>
  );
}
