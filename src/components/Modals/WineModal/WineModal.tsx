'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
      alert('로그인이 필요합니다.');
      return;
    }

    const { name, region, image, price, type } = formData;

    if (!name || !region || !image || !price || !type) {
      alert('모든 값을 입력해주세요.');
      return;
    }

    if (wineData) {
      const isUnchanged =
        wineData.name === name &&
        wineData.region === region &&
        wineData.image === image &&
        wineData.price === price &&
        wineData.type === type;

      if (isUnchanged) {
        alert('변경된 사항이 없습니다.');
        return;
      }
    }

    try {
      setIsLoading(true);

      const payload = {
        name: formData.name,
        region: formData.region,
        image: formData.image,
        price: Number(formData.price),
        type: formData.type,
        ...(formData.id && { id: formData.id }), // PATCH용 id
      };

      await WineData(payload);

      alert(
        wineData
          ? '와인이 성공적으로 수정되었습니다.'
          : '와인이 성공적으로 등록되었습니다.',
      );
      setIsOpen(false);

      // 수정/등록 후 페이지 새로고침
      router.refresh();
    } catch (err) {
      console.error('Wine 등록/수정 오류:', err);
      alert(
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
          <div className='flex w-full justify-between'>
            <div className='w-[3rem]'>
              <ModalClose asChild>
                <Button
                  className='w-[10.8rem] md:w-[9rem] xl:w-[10rem]'
                  disabled={isLoading}
                  variant='secondary'
                  onClick={() => setIsOpen(false)}
                >
                  취소
                </Button>
              </ModalClose>
            </div>
            <div>
              <Button
                className='w-[27rem] md:w-[24rem] xl:w-[35rem]'
                disabled={isLoading}
                variant='primary'
                onClick={() => {
                  handleSubmit();
                }}
              >
                {isLoading ? '처리 중...' : wineData ? '수정하기' : '등록하기'}
              </Button>
            </div>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
