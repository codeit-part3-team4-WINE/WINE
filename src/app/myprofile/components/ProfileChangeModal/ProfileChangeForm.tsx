'use client';

import { useState } from 'react';

import DefaultImg from '@/app/assets/svgs/profile-default.svg';
import Button from '@/components/Button';
import InputFile from '@/components/Inputs/InputFile';
import InputPair from '@/components/Inputs/InputPair';
import ProfileImg from '@/components/ProfileImg';

const user = {
  name: 'WHYNE',
};

export default function ProfileChangeFrom() {
  const [imgSrc, setImgSrc] = useState('');
  const placeholder = user.name;

  return (
    <form className='flex flex-col items-center gap-[4rem]'>
      <div className='flex flex-col items-center gap-[2rem]'>
        <InputFile onChange={setImgSrc}>
          <ProfileImg isSelectable size='lg' src={imgSrc || undefined} />
        </InputFile>
        <span className='text-md text-gray-500'>
          {imgSrc === '' || imgSrc === DefaultImg
            ? '프로필 사진 변경'
            : '미리보기 이미지'}
        </span>
      </div>

      <div className='flex flex-col items-end gap-8'>
        <InputPair
          inputClassName='w-full'
          label='닉네임'
          placeholder={placeholder}
        />

        <Button
          className='text-[1rem]'
          size='xs'
          variant='ghost'
          onClick={() => setImgSrc(DefaultImg)}
        >
          기본 이미지로 변경
        </Button>
      </div>
    </form>
  );
}
