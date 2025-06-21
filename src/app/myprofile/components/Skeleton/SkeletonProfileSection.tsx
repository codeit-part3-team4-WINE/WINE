import { cn } from '@/libs/cn';

export default function SkeletonProfileSection() {
  return (
    <div className='animate-pulse'>
      <div
        className={cn(
          'mt-[2rem] flex shrink-0 items-center justify-between',
          'xl:mt-[4rem] xl:h-[40rem] xl:w-[28rem] xl:flex-col xl:justify-around xl:rounded-[1.6rem] xl:border xl:border-gray-300',
        )}
      >
        <div className='flex items-center gap-[1.6rem] xl:flex-col'>
          {/* 프로필 이미지 */}
          <div className='h-[6rem] w-[6rem] rounded-full bg-gray-100 md:h-[8rem] md:w-[8rem] xl:h-[16.4rem] xl:w-[16.4rem]' />
          {/* 유저 이름 */}
          <div className='h-[2rem] w-[5rem] rounded-xl bg-gray-100 md:h-[3.5rem] md:w-[13rem]' />
        </div>
        {/* 변경하기 버튼 */}
        <div className='h-[4.3rem] w-[10rem] rounded-2xl bg-gray-100' />
      </div>
    </div>
  );
}
