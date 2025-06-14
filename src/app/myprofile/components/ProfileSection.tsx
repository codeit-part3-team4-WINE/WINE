import { StaticImageData } from 'next/image';

import ProfileImg from '@/components/ProfileImg';
import { cn } from '@/libs/cn';

import ProfileChangeModal from './ProfileChangeModal/ProfileChangeModal';

/**
 * 프로필 섹션 컴포넌트
 *
 * @param {string} props.nickname - 사용자 닉네임
 * @param {string | StaticImageData} props.image - 프로필 이미지 URL 또는 StaticImageData
 *
 * @example
 * ```tsx
 * <ProfileSection nickname={nickname} image={image} />
 * ```
 */
export default function ProfileSection({
  nickname,
  image,
}: {
  nickname: string;
  image: string | StaticImageData;
}) {
  return (
    <section
      className={cn(
        'mt-[2rem] flex shrink-0 items-center justify-between',
        'xl:mt-[4rem] xl:h-[40rem] xl:w-[28rem] xl:flex-col xl:justify-around xl:rounded-[1.6rem] xl:border xl:border-gray-300',
      )}
    >
      <div className={cn('flex items-center gap-[1.6rem]', 'xl:flex-col')}>
        <ProfileImg size='lg' src={image} />
        <span className='text-xl font-bold text-gray-800 md:text-2xl'>
          {nickname}
        </span>
      </div>
      <ProfileChangeModal />
    </section>
  );
}
