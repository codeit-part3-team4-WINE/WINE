'use client';

import { StaticImageData } from 'next/image';
import { useState } from 'react';

import DefaultImg from '@/app/assets/svgs/profile-default.svg';
import MockImg from '@/app/design-system/ui-profileImg/mock-image/mock-img.png';
import Button from '@/components/Button';
import InputFile from '@/components/Inputs/InputFile';
import InputPair from '@/components/Inputs/InputPair';
import ProfileImg from '@/components/ProfileImg';

const user = {
  name: 'WHYNE',
  image: MockImg,
};

export default function ProfileChangeFrom() {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(user.image);
  const placeholder = user.name;

  return (
    <form className='flex flex-col items-center gap-[4rem]'>
      <div className='flex flex-col items-center gap-[2rem]'>
        <InputFile onChange={setImgSrc}>
          <ProfileImg isSelectable size='lg' src={imgSrc || undefined} />
        </InputFile>
        <span className='text-[1.2rem] text-gray-500'>
          {imgSrc === user.image || imgSrc === DefaultImg
            ? '프로필 사진 변경'
            : '미리보기 이미지'}
        </span>
        <div className='flex gap-[0.3rem]'>
          <Button
            className='text-[1.4rem]'
            size='xs'
            variant='ghost'
            onClick={() => setImgSrc(DefaultImg)}
          >
            프로필 사진 삭제
          </Button>

          {imgSrc !== user.image && imgSrc !== DefaultImg && (
            <Button
              className='text-[1.4rem]'
              size='xs'
              variant='ghost'
              onClick={() => setImgSrc(user.image)}
            >
              기존 이미지로 되돌리기
            </Button>
          )}
        </div>
      </div>

      <div className='flex w-full flex-col gap-8'>
        <InputPair
          inputClassName='w-full'
          label='닉네임'
          placeholder={placeholder}
        />
      </div>
    </form>
  );
}
