'use client';

import { StaticImageData } from 'next/image';

import Button from '@/components/Button';
import ProfileImg from '@/components/ProfileImg';

const PROFILE_SECTION_CLASSNAME =
  'flex h-[40rem] w-[28rem] flex-col items-center justify-around rounded-[1.6rem] border border-gray-300';

export default function ProfileSection({
  nickname,
  image,
}: {
  nickname: string;
  image: string | StaticImageData;
}) {
  return (
    <section className={PROFILE_SECTION_CLASSNAME}>
      <div className='flex flex-col items-center gap-[3rem]'>
        <ProfileImg size='lg' src={image} />
        <span className='text-2xl font-bold text-gray-800'>{nickname}</span>
      </div>
      <Button size='sm' onClick={() => console.log('모달이 띄워질 예정')}>
        변경하기
      </Button>
    </section>
  );
}
