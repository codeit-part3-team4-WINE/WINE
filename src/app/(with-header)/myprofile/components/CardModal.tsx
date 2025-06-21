'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '@/app/assets/icons/close';

/**
 * Myprofile 페이지 CardModal 컴포넌트 (div 기반)
 *
 * - 패럴렐 + 인터셉팅 라우팅에서 사용
 * - dialog 대신 div + Portal로 구성 (중첩 모달 대응 위해)
 * - 모달이 열리면 body 스크롤 비활성화
 * - 외부 클릭 또는 닫기 버튼 클릭 시 router.back() 호출
 */
export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    router.back();
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className='fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(0,0,0,0.7)]'
      onClick={handleClose}
    >
      <div
        className='scrollbar-none relative max-h-[90vh] w-[90vw] overflow-y-auto rounded-2xl bg-white p-10 shadow-xl md:w-[80vw] md:p-20'
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달 닫기 버튼 */}
        <button
          className='absolute top-6 right-6 cursor-pointer'
          type='button'
          onClick={handleClose}
        >
          <CloseIcon className='h-[1.5rem] w-[1.5rem] text-gray-400 hover:text-gray-600 md:h-[2rem] md:w-[2rem]' />
        </button>

        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
}
