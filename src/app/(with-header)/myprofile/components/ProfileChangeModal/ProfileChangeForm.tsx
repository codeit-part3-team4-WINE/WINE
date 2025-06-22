'use client';

import Button from '@/components/Button';
import InputFile from '@/components/Inputs/InputFile';
import InputPair from '@/components/Inputs/InputPair';
import ProfileImg from '@/components/ProfileImg';

interface ProfileChangeFormProps {
  originalNickname: string;
  nickname: string;
  imageSrc: string;
  imgState: 'original' | 'default' | 'preview';
  onNicknameChange: (value: string) => void;
  onImageChange: (file: File) => void;
  onDeleteImage: () => void;
  onResetImage: () => void;
  isDeletable: boolean;
}

export default function ProfileChangeForm({
  originalNickname,
  nickname,
  imageSrc,
  imgState,
  isDeletable,
  onNicknameChange,
  onImageChange,
  onDeleteImage,
  onResetImage,
}: ProfileChangeFormProps) {
  return (
    <form className='flex flex-col items-center gap-[4rem] overflow-x-hidden md:gap-[8rem] xl:gap-[6rem]'>
      <div className='flex flex-col items-center gap-[2rem]'>
        <InputFile onChange={onImageChange}>
          <ProfileImg
            isSelectable
            className='h-[13rem] w-[13rem] md:h-[13rem] md:w-[13rem]'
            size='lg'
            src={imageSrc || undefined}
          />
        </InputFile>
        {imgState === 'preview' && (
          <span className='text-[1.2rem] text-gray-500'>미리보기 이미지</span>
        )}
        <div className='flex gap-[0.3rem]'>
          {isDeletable && (
            <Button
              className='text-[1.4rem]'
              size='xs'
              variant='ghost'
              onClick={() => {
                onDeleteImage();
              }}
            >
              프로필 사진 삭제
            </Button>
          )}

          {imgState !== 'original' && (
            <Button
              className='text-[1.4rem]'
              size='xs'
              variant='ghost'
              onClick={() => {
                onResetImage();
              }}
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
          placeholder={originalNickname}
          value={nickname}
          onChange={(e) => onNicknameChange(e.target.value)}
        />
      </div>
    </form>
  );
}
