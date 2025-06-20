'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '@/app/assets/icons/close';

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });

      document.body.style.overflow = 'hidden';
    }
  }, []);

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
      {/* Close Icon 버튼 */}
      <button
        className='absolute top-6 right-6 cursor-pointer'
        type='button'
        onClick={handleClose}
      >
        <CloseIcon className='h-[1.5rem] w-[1.5rem] text-gray-400 hover:text-gray-600 md:h-[2rem] md:w-[2rem]' />
      </button>
      {children}
    </dialog>,
    document.getElementById('modal-root') as HTMLElement,
  );
}
