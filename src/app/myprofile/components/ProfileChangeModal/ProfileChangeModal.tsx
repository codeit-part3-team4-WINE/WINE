'use client';

import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
import {
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_SIZE,
} from '@/constants/fileValidation';
import useUserStore from '@/stores/Auth-store/authStore';

import { UserProfile } from '../../action/user-action';
import ProfileChangeForm from './ProfileChangeForm';

export const DEFAULT_IMAGE_URL =
  'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1256/1750160791489/1750160791476.svg';

/**
 * 사용자 프로필 변경 모달
 *
 * - 닉네임 변경
 * - 이미지 변경, 삭제, 초기화(기존 이미지로)
 * - 서버에 PATCH 요청 전송
 *
 * @param user 현재 로그인된 사용자의 초기 프로필 정보
 */
export default function ProfileChangeModal({
  user,
}: {
  user: { image: string | StaticImageData; nickname: string };
}) {
  const router = useRouter();

  // 최초 사용자 닉네임 (변경 전 기준)
  const [originalNickname, setOriginalNickname] = useState(user.nickname);

  // 최초 사용자 이미지 URL
  const [originalImageUrl, setOriginalImageUrl] = useState(user.image);

  // 변경할 현재 입력중인 닉네임
  const [nickname, setNickname] = useState(user.nickname);

  // 변경할 이미지 URL (서버 전송용)
  const [imageUrl, setImageUrl] = useState<string>(
    typeof user.image === 'string' ? user.image : '',
  );

  // 방금 업로드한 이미지를 미리보기로 띄울 Blob URL
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // 화면에 표시될 이미지 URL → preview가 있을경우 그걸 없을 경우 서버에서 받은 이미지를 보여줌
  // 기존 이미지로 되돌리기, 프로필 이미지 삭제하기의 미리보기 변수로 사용됨
  const [displayUrl, setDisplayUrl] = useState<string>(
    typeof user.image === 'string' ? user.image : '',
  );

  // 이미지 상태: 원본, 기본, 미리보기 중 어떤 상태인지 구분
  const [imgState, setImgState] = useState<'original' | 'default' | 'preview'>(
    'original',
  );

  // 프로필 변경 처리 로딩 상태
  const [loading, setLoading] = useState(false);

  // 현재 선택된 새 프로필 이미지 파일 (서버 전송용, 업로드 버튼 클릭 시 사용됨)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 사용자 이미지가 DEFAULT_IMAGE인 경우 삭제 버튼을 렌더링 하지 않기 위한 변수
  const isDeletable = originalImageUrl !== DEFAULT_IMAGE_URL;

  /** 사용자 정보 변경 시 원본 상태 초기화 */
  useEffect(() => {
    setOriginalNickname(user.nickname);
    setOriginalImageUrl(user.image);
  }, [user.nickname, user.image]);

  /**
   * 프로필 변경 모달 오픈 핸들러
   *
   * - 닉네임, 이미지 상태 초기화
   * - 선택된 파일 초기화
   * - 미리보기 URL 해제 및 초기화
   */
  const handleOpenModal = () => {
    // 모달 오픈 시 초기 상태 복원
    setNickname(user.nickname);
    setSelectedFile(null);
    const original = typeof user.image === 'string' ? user.image : '';
    setImageUrl(original);
    setDisplayUrl(original || DEFAULT_PROFILE_IMG);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  /**
   * 프로필 이미지 변경 핸들러
   * - 선택된 이미지를 API로 요청을 보내 URL을 받아옴
   * @param file 선택된 이미지 파일
   */
  const handleImageChange = async (file: File) => {
    // 5MB 제한
    if (file.size > MAX_IMAGE_SIZE) {
      alert('5MB 이하 이미지만 업로드 가능합니다.');
      return;
    }

    // 확장자 제한
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      alert('지원하지 않는 파일 형식입니다. (jpg, png, webp만 가능)');
      return;
    }

    // 기존 미리보기 URL revoke
    if (previewUrl) URL.revokeObjectURL(previewUrl);

    // 새 미리보기 URL 생성
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setSelectedFile(file);
    setDisplayUrl(objectUrl);
    setImgState('preview');
  };

  /**
   * 프로필 이미지 삭제 핸들러
   * - 기본 이미지로 변경
   * - 삭제 버튼 클릭시 미리 받아온 DEFAULT_PROFILE_IMG URL을 요청으로 보냄
   */
  const handleDeleteImage = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setSelectedFile(null);

    setImageUrl(DEFAULT_IMAGE_URL); // 서버 전송용 실제 URL
    setDisplayUrl(DEFAULT_PROFILE_IMG); // 미리보기용
    setImgState('default');
  };

  /**
   * 이미지 변경 취소 핸들러
   * - 원래 이미지로 복구
   */
  const handleResetImage = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setSelectedFile(null);

    const original = typeof user.image === 'string' ? user.image : '';
    setImageUrl(original);
    setDisplayUrl(original || DEFAULT_PROFILE_IMG);
    setImgState(original === DEFAULT_PROFILE_IMG ? 'default' : 'original');
  };

  /**
   * 프로필 변경 제출 핸들러
   * - 닉네임, 이미지 중 변경된 항목만 서버에 전송
   */
  const handleSubmit = async () => {
    const nicknameChanged = nickname.trim() !== originalNickname.trim();

    const imageChanged =
      selectedFile !== null ||
      imageUrl.trim() !==
        (typeof originalImageUrl === 'string' ? originalImageUrl.trim() : '');

    if (!nicknameChanged && !imageChanged) {
      alert('변경된 항목이 없습니다.');
      return;
    }

    setLoading(true);

    try {
      let newImageUrl = imageUrl;

      // 이미지 변경 시 업로드
      if (selectedFile) {
        const form = new FormData();
        form.append('file', selectedFile);

        const res = await privateInstance.post('/images/upload', form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        newImageUrl = res.data.url;
      }

      // 변경된 데이터 payload 구성
      const payload: { nickname?: string; image?: string } = {};
      if (nicknameChanged) payload.nickname = nickname;
      if (imageChanged) payload.image = newImageUrl;

      const result = await UserProfile(payload);

      if (result?.success) {
        // 프로필 변경 사항을 user store에 반영
        const setUser = useUserStore.getState().setUser;

        setUser({
          ...useUserStore.getState().user!,
          nickname: nicknameChanged
            ? nickname
            : useUserStore.getState().user!.nickname,
          image: imageChanged
            ? newImageUrl
            : useUserStore.getState().user!.image,
        });

        if (nicknameChanged && imageChanged) {
          alert('닉네임과 이미지가 변경되었습니다.');
        } else if (nicknameChanged) {
          alert('닉네임이 변경되었습니다.');
        } else if (imageChanged) {
          alert('이미지가 변경되었습니다.');
        }

        router.refresh();
      } else {
        if (result.message === '이미 사용중인 닉네임입니다.') {
          alert(result.message);
        } else {
          alert('프로필 변경에 실패했습니다.');
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <ModalTrigger asChild>
        <Button
          className='h-[4.3rem]'
          size='sm'
          variant='outline'
          onClick={handleOpenModal}
        >
          변경하기
        </Button>
      </ModalTrigger>

      <ModalContent className='flex min-h-[50rem] flex-col justify-between px-[6rem] py-[7rem] md:min-h-[60rem] md:min-w-[45rem] md:px-[5rem] md:py-[5rem] xl:min-h-[55rem] xl:max-w-[40rem]'>
        <ModalBody>
          <ProfileChangeForm
            imageSrc={previewUrl ?? displayUrl}
            imgState={imgState}
            isDeletable={isDeletable}
            nickname={nickname}
            originalNickname={originalNickname}
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
              disabled={loading}
              size='sm'
              variant='outline'
              onClick={handleSubmit}
            >
              {loading ? '변경 중...' : '변경하기'}
            </Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
