'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

import { privateInstance } from '@/apis/privateInstance';
import { WineData } from '@/app/api/action/wine-action';
import Button from '@/components/Button';
import Modal from '@/components/Modal/Modal';
import ModalBody from '@/components/Modal/ModalBody';
import ModalClose from '@/components/Modal/ModalClose';
import ModalContent from '@/components/Modal/ModalContent';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import ModalTitle from '@/components/Modal/ModalTitle';
import useUserStore from '@/stores/Auth-store/authStore';

import WineForm, { WineFormData } from './WineForm';

const DEFAULT_DATA: WineFormData = {
  name: '',
  region: '',
  image: '',
  price: 0,
  type: '',
};

/**
 * WineModal 컴포넌트
 *
 * 와인 정보를 등록하거나 수정할 수 있는 모달 UI를 제공합니다.
 * 사용자 인증 상태 확인, 필수 입력 검증, 변경 여부 확인,
 * WineData 서버 액션 호출 등을 처리합니다.
 *
 * @param {boolean} isOpen - 모달 열림 상태
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setIsOpen - 모달 열림 상태 변경 함수
 * @param {WineFormData} [wineData] - 수정 시 기존 와인 데이터 (없으면 등록으로 간주)
 */
export default function WineModal({
  isOpen,
  setIsOpen,
  wineData,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  wineData?: WineFormData;
}) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const user = useUserStore((state) => state.user);

  // 폼 입력 상태: 초기값은 수정 모드면 wineData, 등록 모드면 빈 값
  const [formData, setFormData] = useState<WineFormData>(
    wineData ?? DEFAULT_DATA,
  );
  const [isLoading, setIsLoading] = useState(false);

  /**
   * 폼 제출 핸들러
   * - 로그인 여부 확인
   * - 입력값 누락 여부 확인
   * - 수정 시 변경사항 존재 여부 확인
   * - WineData 액션 호출 및 성공/실패 처리
   * - 로딩 상태 관리
   */
  const handleSubmit = async () => {
    if (!user) {
      toast.error('로그인이 필요합니다.');
      return;
    }

    const { name, region, image, price, type } = formData;

    if (!name || !region || !image || !price || !type) {
      toast.warning('모든 값을 입력해주세요.');
      return;
    }

    if (wineData) {
      const isUnchanged = JSON.stringify(wineData) === JSON.stringify(formData);

      if (isUnchanged) {
        toast.warning('변경된 사항이 없습니다.');
        return;
      }
    }

    try {
      setIsLoading(true);

      let imageUrl = formData.image;

      if (formData.image instanceof File) {
        try {
          const uploadForm = new FormData();
          uploadForm.append('file', formData.image);

          const res = await privateInstance.post('/images/upload', uploadForm, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          imageUrl = res.data.url;
        } catch (uploadErr) {
          console.error('이미지 업로드 실패:', uploadErr);
          toast.error('이미지 업로드에 실패했습니다.');
          return;
        }
      }

      const payload = {
        name: formData.name,
        region: formData.region,
        image: imageUrl,
        price: Number(formData.price),
        type: formData.type,
        ...(formData.id && { id: formData.id }), // PATCH용 id
      };

      await WineData(payload);

      await queryClient.invalidateQueries({
        queryKey: ['wines'], // 와인 목록 페이지에서 와인이 등록되었을 때 바로 반영되도록 하기 위해
      });

      if (wineData) {
        await queryClient.invalidateQueries({
          queryKey: ['wine', String(wineData.id)], // 와인 상세 페이지에서 와인이 수정되었을 때 바로 반영되도록 하기 위해
        });

        await queryClient.invalidateQueries({
          queryKey: ['wine-analysis', String(wineData.id)], // 수정된 와인 분석 데이터 무효화
        });
      }

      toast.success(
        wineData
          ? '와인이 성공적으로 수정되었습니다.'
          : '와인이 성공적으로 등록되었습니다.',
      );
      setIsOpen(false);

      // 수정/등록 후 페이지 새로고침
      router.refresh();
    } catch (e) {
      console.error(e);
      toast.error(
        wineData
          ? '와인 수정 중 오류가 발생했습니다.'
          : '와인 등록 중 오류가 발생했습니다.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal externalIsOpen={isOpen} onExternalChange={setIsOpen}>
      <ModalContent className='xl:max-w-[50rem]'>
        <ModalHeader>
          <ModalTitle>{wineData ? '와인 수정' : '와인 등록'}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <WineForm wineData={wineData} onChange={setFormData} />
        </ModalBody>
        <ModalFooter>
          <ModalClose />
          <ModalClose asChild>
            <Button
              className='w-[10.8rem] flex-1 md:w-[9rem] xl:w-[10rem]'
              disabled={isLoading}
              variant='secondary'
              onClick={() => setIsOpen(false)}
            >
              취소
            </Button>
          </ModalClose>

          <Button
            className='w-[27rem] flex-2 md:w-[24rem] xl:w-[35rem]'
            loading={isLoading}
            type='submit'
            variant='primary'
            onClick={() => {
              handleSubmit();
            }}
          >
            {isLoading ? '처리 중...' : wineData ? '수정하기' : '등록하기'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
