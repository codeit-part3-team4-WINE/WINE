'use client';

import { StaticImageData } from 'next/image';

import ProfileImg from '@/components/ProfileImg';
import { cn } from '@/libs/cn';
import useUserStore from '@/stores/Auth-store/authStore';

import ProfileChangeModal, {
  DEFAULT_IMAGE_URL,
} from './ProfileChangeModal/ProfileChangeModal';

/**
 * 프로필 섹션 컴포넌트
 *
 * @example
 * ```tsx
 * <ProfileSection />
 * ```
 */
export default function ProfileSection() {
  const user = useUserStore((state) => state.user);

  if (!user) return null;

  return (
    <section
      className={cn(
        'mt-[2rem] flex shrink-0 items-center justify-between bg-white',
        'xl:mt-[4rem] xl:h-[40rem] xl:w-[28rem] xl:flex-col xl:justify-around xl:rounded-[1.6rem] xl:border xl:border-gray-300',
      )}
    >
      <div className={cn('flex items-center gap-[1.6rem]', 'xl:flex-col')}>
        <ProfileImg size='lg' src={user.image as string | StaticImageData} />
        <span className='px-8 text-xl font-bold text-gray-800 md:text-2xl'>
          {user.nickname}
        </span>
      </div>
      <ProfileChangeModal
        user={{
          image: user.image ?? DEFAULT_IMAGE_URL, // null이면 기본 이미지
          nickname: user.nickname,
        }}
      />
    </section>
  );
}
