'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/libs/cn';

import { useModalContext } from './ModalContext';
import { ModalBaseProps, ModalVariant } from './types';

/**
 * Modal.Content
 *
 * @description 모달의 콘텐츠 영역입니다. 지원하는 모달의 종류는 default와 confrim입니다. className을 통해 외부에서도 스타일을 확장할 수 있습니다.
 * @description default modal: 태블릿과 PC에서는 콘텐츠의 크기에 따라 모달창의 크기가 결정되고, 모바일에서는 모달창이 화면을 꽉 채웁니다. (ex. 리뷰 등록 모달, 와인 등록 모달)
 * @description confirm modal: 주로 간단한 메시지와 확인 용도로 사용됩니다. 모든 디바이스에서 모달창의 크기가 동일합니다. (ex. 삭제 확인 모달)
 *
 * @param {'default' | 'confirm'} [variant='default'] - 모달 스타일 타입 (default: 모바일에서 화면을 꽉 채우는 모달 / confirm: 주로 확인 용도로 사용하며, 모바일과 pc에서 크기가 동일한 모달 (ex. 삭제 모달))
 * @param {ReactNode} children - 콘텐츠 영역
 * @param {string} [className] - 사용자 정의 클래스 (스타일 확장용)
 */
export default function ModalContent({
  variant = 'default',
  children,
  className,
}: ModalBaseProps & { variant?: ModalVariant }) {
  const { isOpen, close } = useModalContext();
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  if (!isOpen || !mountedRef.current) return null;

  const modalRoot = document.getElementById('modal-root') ?? document.body;

  const overlayClass =
    'fixed inset-0 z-50 flex items-center justify-center bg-black/50';

  const baseClass =
    variant === 'confirm'
      ? 'content-text min-w-[35rem] flex h-screen max-h-[80%] w-screen flex-col bg-white p-8 shadow-xl h-fit w-[40rem] max-w-[65rem] rounded-4xl'
      : 'content-text min-w-[35rem] absolute bottom-0 flex h-fit max-h-[85%] w-screen flex-col rounded-t-4xl bg-white p-8 shadow-xl md:relative md:h-fit md:w-[50%] md:max-w-[60rem] md:rounded-4xl';
  const contentClassNames = cn(baseClass, className);

  return isOpen
    ? createPortal(
        <div className={overlayClass} onClick={close}>
          <div
            className={contentClassNames}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        modalRoot,
      )
    : null;
}
