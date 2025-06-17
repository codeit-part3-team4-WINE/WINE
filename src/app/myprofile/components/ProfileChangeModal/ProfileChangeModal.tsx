'use client';

import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useActionState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import DEFAULT_PROFILE_IMG from '@/app/assets/svgs/profile-default.svg';
import Button from '@/components/Button';
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from '@/components/Modal';

import { UserProfile } from '../../action/user-action';
import ProfileChangeForm from './ProfileChangeForm';

export default function ProfileChangeModal({
  user,
}: {
  user: { image: string | StaticImageData; nickname: string };
}) {
  const router = useRouter();
  const [originalNickname] = useState(user.nickname);
  const [originalImageUrl] = useState(user.image);
  const [nickname, setNickname] = useState(user.nickname);
  const [imageUrl, setImageUrl] = useState<string>(
    typeof user.image === 'string' ? user.image : '',
  );
  const [displayUrl, setDisplayUrl] = useState<string>(
    typeof user.image === 'string' ? user.image : '',
  );
  const [imgState, setImgState] = useState<'original' | 'default' | 'preview'>(
    'original',
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, isPending] = useActionState(UserProfile, null);

  useEffect(() => {
    if (user.image === DEFAULT_PROFILE_IMG) {
      setImgState('default');
    } else {
      setImgState('original');
    }
  }, [user.image]);

  const handleImageChange = async (file: File) => {
    const form = new FormData();
    form.append('file', file);

    try {
      const res = await privateInstance.post('/images/upload', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const { url } = res.data;
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      setImageUrl(url); // 서버 전송용
      setDisplayUrl(objectUrl); // 미리보기용
      setImgState('preview');
    } catch (err) {
      console.error('이미지 업로드 실패:', err);
      alert('이미지 업로드에 실패했습니다.');
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
      setImageUrl(typeof user.image === 'string' ? user.image : '');
      setDisplayUrl(
        typeof user.image === 'string' ? user.image : DEFAULT_PROFILE_IMG,
      );
      setImgState(user.image === DEFAULT_PROFILE_IMG ? 'default' : 'original');
    }
  };

  const handleDeleteImage = async () => {
    try {
      // 기본 이미지 fetch → blob
      const res = await fetch(DEFAULT_PROFILE_IMG);
      const blob = await res.blob();

      // blob → File 객체 생성 (매번 유니크 이름 부여해 서버 중복 방지)
      const uniqueName = `default-${Date.now()}.svg`;
      const file = new File([blob], uniqueName, { type: 'image/svg+xml' });

      // 서버 업로드 요청
      const form = new FormData();
      form.append('file', file);

      const uploadRes = await privateInstance.post('/images/upload', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 20000,
      });

      const { url } = uploadRes.data;

      // state 업데이트 → 해당 URL이 프로필 삭제 PATCH에 사용
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
      setImageUrl(url); // 서버 전송용
      setDisplayUrl(url); // 미리보기용
      setImgState('default');
    } catch (err) {
      console.error('기본 이미지 업로드 실패:', err);
      alert('기본 이미지 설정에 실패했습니다.');
    }
  };

  const handleResetImage = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    const original = typeof user.image === 'string' ? user.image : '';
    setImageUrl(original);
    setDisplayUrl(original || DEFAULT_PROFILE_IMG);
    setImgState(original === DEFAULT_PROFILE_IMG ? 'default' : 'original');
  };

  const handleSubmit = async () => {
    const nicknameChanged = nickname.trim() !== originalNickname.trim();

    const imageChanged =
      imageUrl.trim() !==
      (typeof originalImageUrl === 'string' ? originalImageUrl.trim() : '');

    if (!nicknameChanged && !imageChanged) {
      alert('변경된 항목이 없습니다.');
      return;
    }

    const payload: { nickname?: string; image?: string } = {};
    if (nicknameChanged) payload.nickname = nickname;
    if (imageChanged) payload.image = imageUrl;

    console.log(payload);

    const result = await UserProfile(null, payload);

    if (result?.success) {
      if (nicknameChanged && imageChanged) {
        alert('닉네임과 이미지가 변경되었습니다.');
      } else if (nicknameChanged) {
        alert('닉네임이 변경되었습니다.');
      } else if (imageChanged) {
        alert('이미지가 변경되었습니다.');
      }
      router.refresh();
    } else {
      alert('프로필 변경에 실패했습니다.');
    }
  };

  return (
    <Modal>
      <ModalTrigger asChild>
        <Button
          className='h-[4.3rem]'
          size='sm'
          variant='outline'
          onClick={() => {
            setNickname('');
            const original = typeof user.image === 'string' ? user.image : '';
            setImageUrl(original);
            setDisplayUrl(original || DEFAULT_PROFILE_IMG);
            setImgState(
              original === DEFAULT_PROFILE_IMG ? 'default' : 'original',
            );
            if (previewUrl) {
              URL.revokeObjectURL(previewUrl);
              setPreviewUrl(null);
            }
          }}
        >
          변경하기
        </Button>
      </ModalTrigger>

      <ModalContent className='flex min-h-[50rem] flex-col justify-between px-[6rem] py-[7rem] md:min-h-[60rem] md:min-w-[45rem] md:px-[5rem] md:py-[5rem] xl:min-h-[55rem] xl:max-w-[40rem]'>
        <ModalBody>
          <ProfileChangeForm
            imageSrc={previewUrl ?? displayUrl}
            imgState={imgState}
            nickname={nickname}
            onDeleteImage={handleDeleteImage}
            onImageChange={handleImageChange}
            onNicknameChange={setNickname}
            onResetImage={handleResetImage}
          />
        </ModalBody>
        <ModalFooter>
          <ModalClose />
          <ModalClose asChild>
            <Button
              className='h-[4.3rem]'
              disabled={isPending}
              size='sm'
              variant='outline'
              onClick={handleSubmit}
            >
              {isPending ? '변경 중...' : '변경하기'}
            </Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
