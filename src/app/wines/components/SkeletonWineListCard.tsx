export default function SkeletonWineListCard() {
  return (
    <div className='animate-pulse'>
      <div className='relative flex h-[21rem] flex-col gap-10 rounded-t-3xl border-1 border-gray-200 bg-white px-8 pt-10 sm:flex-row sm:justify-between'>
        <div className='hidden h-full w-[10rem] rounded-t-2xl bg-gray-100 md:block' />
        <div className='flex flex-1 flex-col gap-2'>
          <div className='h-[8rem] w-full rounded-2xl bg-gray-100' />
          <div className='h-[2rem] w-[20rem] rounded-2xl bg-gray-100' />
          <div className='h-[3rem] w-[10rem] rounded-2xl bg-gray-100' />
        </div>
        <div className='hidden h-fit w-[10rem] flex-col gap-2 md:flex'>
          <div className='h-[5rem] w-full rounded-2xl bg-gray-100' />
          <div className='h-[1.5rem] w-full rounded-2xl bg-gray-100' />
          <div className='h-[1.5rem] w-full rounded-2xl bg-gray-100' />
        </div>
      </div>
      <div className='flex h-[11rem] w-full flex-col gap-2 rounded-b-3xl border-1 border-t-0 border-gray-200 bg-white px-10 py-6'>
        <div className='h-[1.5rem] w-[7rem] rounded-2xl bg-gray-100' />
        <div className='h-[3rem] w-full rounded-2xl bg-gray-100' />
      </div>
    </div>
  );
}
