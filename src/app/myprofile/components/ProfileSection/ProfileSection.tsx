import { StaticImageData } from 'next/image';

import { createPrivateServerInstance } from '@/apis/privateServerInstance';
import ProfileImg from '@/components/ProfileImg';
import { cn } from '@/libs/cn';

import { ChangeBtn } from './ChangeBtn';

/**
 * 프로필 섹션 컴포넌트
 *
 * @example
 * ```tsx
 * <ProfileSection />
 * ```
 */
export default async function ProfileSection() {
  const axios = await createPrivateServerInstance();
  const { data: user } = await axios.get('/users/me');

  return (
    <section
      className={cn(
        'mt-[2rem] flex shrink-0 items-center justify-between',
        'xl:mt-[4rem] xl:h-[40rem] xl:w-[28rem] xl:flex-col xl:justify-around xl:rounded-[1.6rem] xl:border xl:border-gray-300',
      )}
    >
      <div className={cn('flex items-center gap-[1.6rem]', 'xl:flex-col')}>
        <ProfileImg size='lg' src={user.image as string | StaticImageData} />
        <span className='text-xl font-bold text-gray-800 md:text-2xl'>
          {user.nickname}
        </span>
      </div>
      <ChangeBtn />
    </section>
  );
}
