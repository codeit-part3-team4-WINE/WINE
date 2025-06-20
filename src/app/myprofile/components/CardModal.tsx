'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '@/app/assets/icons/close';

/**
 * Myprofile 페이지 CardModal 컴포넌트
 *
 * - Myprofile 페이지에서 Card 클릭 시 패럴렐 + 인터셉팅 라우팅을 적용하기 위해 사용됩니다.
 * - dialog 요소를 사용하여 모달을 생성합니다.
 * - 모달이 열리면 body의 스크롤을 비활성화하고, 닫히면 다시 활성화합니다.
 * - 외부 영역 클릭 또는 Close 버튼 클릭 시 뒤로 가기(router.back())를 호출하여 모달을 닫습니다.
 *
 * @param {ReactNode} props.children - 모달 내부에 렌더링될 콘텐츠
 */
export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    // 모달이 열려 있지 않다면 showModal()을 호출
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });

      // 모달이 열리면 배경 페이지 스크롤을 비활성화
      document.body.style.overflow = 'hidden';
    }

    return () => {
      // 모달이 닫히면 스크롤을 다시 활성화
      document.body.style.overflow = '';
    };
  }, []);

  /**
   * 모달 닫기 핸들러
   * - router.back()을 호출하여 이전 페이지로 이동
   */
  const handleClose = () => {
    router.back();
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      className='scrollbar-none fixed top-1/2 left-1/2 z-50 h-full w-[90vw] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border-0 p-10 shadow-xl backdrop:bg-[rgba(0,0,0,0.7)] md:w-[80vw] md:p-20'
      onClick={(e) => {
        if ((e.target as HTMLElement).nodeName === 'DIALOG') {
          router.back();
        }
      }}
      onClose={() => router.back()}
    >
      {/* 모달 닫기 버튼 */}
      <button
        className='absolute top-6 right-6 cursor-pointer'
        type='button'
        onClick={handleClose}
      >
        <CloseIcon className='h-[1.5rem] w-[1.5rem] text-gray-400 hover:text-gray-600 md:h-[2rem] md:w-[2rem]' />
      </button>
      {/* 모달 콘텐츠 */}
      {children}
    </dialog>,
    document.getElementById('modal-root') as HTMLElement,
  );
}
