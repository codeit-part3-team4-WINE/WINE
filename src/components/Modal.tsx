'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import React from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '@/app/assets/icons/close';
import { cn } from '@/libs/cn';

import Button from './Button';
import { Slot, Slottable } from './Slot';

interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('Modal components must be used inside <Modal>');
  return context;
}

/**
 * Modal 컴포넌트
 *
 * @component
 * @description 공통 모달 UI를 구성하는 컴포넌트입니다. 합성 컴포넌트로 구현되어 있으며, 자세한 사용법은 설명을 참고해주세요.
 *
 * @example
 * ```tsx
 * <Modal>
 *   <Modal.Trigger>열기</Modal.Trigger>
 *   <Modal.Content>
 *     <Modal.Header>
 *       <Modal.Title>제목</Modal.Title>
 *     </Modal.Header>
 *     <Modal.Body>본문</Modal.Body>
 *     <Modal.Footer>
 *       <Modal.Close>닫기</Modal.Close>
 *     </Modal.Footer>
 *   </Modal.Content>
 * </Modal>
 * ```
 */
export default function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

/**
 * Modal.Trigger
 *
 * @description 모달을 열기 위해 사용되는 트리거 부분입니다. children으로 원하는 트리거를 커스텀 할 수 있습니다. 기본적으로는 버튼을 제공합니다.
 * @description ⚠️ 만약 트리거를 커스텀하고 싶으면 asChild를 꼭 사용해주세요. asChild가 생략되면 빈 버튼이 렌더링됩니다.
 *
 * @param {ReactNode} children - 버튼 또는 커스텀 트리거
 * @param {boolean} [asChild=false] - Slot 패턴 사용 여부 (Slot: 부모-자식 요소를 합성)
 *
 * @example
 * <Modal.Trigger />
 * @example
 * <Modal.Trigger asChild>
 *   <Button size='sm' variant='secondary' onClick={() => {}}>
 *     모달 열기
 *   </Button>
 * </Modal.Trigger>
 */
Modal.Trigger = function ModalTrigger({
  children,
  asChild = false,
}: {
  children: ReactNode;
  asChild?: boolean;
}) {
  const { open } = useModalContext();

  if (asChild) {
    return (
      <Slot onClick={open}>
        <Slottable>{children}</Slottable>
      </Slot>
    );
  }

  return (
    <Button
      className='h-fit w-fit px-3'
      size='xs'
      variant='outline'
      onClick={open}
    >
      {children}
    </Button>
  );
};

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
Modal.Content = function ModalContent({
  variant = 'default',
  children,
  className,
}: {
  variant?: 'default' | 'confirm';
  children: ReactNode;
  className?: string;
}) {
  const { isOpen, close } = useModalContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  const modalOverlayClassNames =
    'fixed inset-0 z-50 flex items-center justify-center bg-black/50';

  const baseClass =
    variant === 'confirm'
      ? 'content-text min-x-[30rem] flex h-screen max-h-[80%] w-screen flex-col bg-white p-8 shadow-xl h-fit w-[40rem] max-w-[65rem] rounded-4xl'
      : 'content-text min-x-[30rem] absolute bottom-0 flex h-screen max-h-[80%] w-screen flex-col rounded-t-4xl bg-white p-8 shadow-xl md:relative md:h-fit md:w-[40rem] md:max-w-[65rem] md:rounded-4xl';
  const modalContentClassNames = cn(baseClass, className);

  return isOpen
    ? createPortal(
        <div className={modalOverlayClassNames} onClick={close}>
          <div
            className={modalContentClassNames}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        modalRoot,
      )
    : null;
};

/**
 * Modal Header
 * @description 모달의 상단 영역으로, 주로 제목과 x 아이콘의 닫기 버튼 배치합니다. (기본 제공되는 x 아이콘은 따로 배치하지 않아도 됩니다.)
 * @description 생략할 수 있지만 영역을 구분하기 위해 사용하는 것을 추천드립니다.
 *
 * @param {ReactNode} children - 자식 요소
 * @param {string} [className] - 사용자 정의 클래스 (스타일 확장용)
 *
 * @example
 * <Modal.Header>
 *   <Modal.Title>제목</Modal.Title>
 * </Modal.Header>
 */
Modal.Header = function ModalHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('mb-6', className)}>{children}</div>;
};

/**
 * Modal.Title
 *
 * @description 모달의 제목(텍스트)입니다.
 *
 * @param {ReactNode} children - 제목 내용
 * @param {string} [className] - 사용자 정의 클래스 (스타일 확장용)
 */
Modal.Title = function ModalTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'text-[1.6rem] font-semibold text-black md:text-[2rem]',
        className,
      )}
    >
      {children}
    </h2>
  );
};

/**
 * Modal.Body
 *
 * @description 모달의 본문 영역입니다.
 *
 * @param {ReactNode} children - 본문 내용
 * @param {string} [className] - 사용자 정의 클래스 (스타일 확장용)
 *
 * @example
 * <Modal.Body className='flex-1 overflow-y-auto'>
 *   이곳에 본문 내용을 자유롭게 추가해주세요.
 * </Modal.Body>
 */
Modal.Body = function ModalBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('h-fit max-h-full overflow-y-auto pb-4', className)}>
      {children}
    </div>
  );
};

/**
 * Modal.Footer
 *
 * @description 모달의 하단 영역으로, 주로 액션 버튼을 배치합니다. (ex. 취소, 리뷰 등록, 리뷰 수정 등)
 *
 * @param {ReactNode} children - 자식 요소
 * @param {string} [className] - 사용자 정의 클래스 (스타일 확장용)
 *
 * @example
 * ```tsx
 * <Modal.Footer>
 *   <Modal.Close />
 *   <Modal.Close asChild>
 *     <Button
 *       className='w-full'
 *       size='sm'
 *       variant='primary'
 *       onClick={() => {
 *         console.log('action');
 *       }}
 *     >
 *       액션 버튼
 *     </Button>
 *   </Modal.Close>
 * </Modal.Footer>
 * ```
 */
Modal.Footer = function ModalFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mt-4 flex w-[100%] justify-center gap-2', className)}>
      {children}
    </div>
  );
};

/**
 * Modal.Close
 *
 * @description 모달의 닫기 버튼입니다. 모달창은 기본적으로 esc 혹은 모달창 외부를 누르면 닫힙니다.
 * @description 1) 기본으로 제공되는 <Modal.Close />를 통해, 우측 상단에 x 아이콘의 닫기 버튼을 추가할 수 있습니다.
 * @description 2) asChild={true}와 함께 children으로 닫기 트리거를 커스텀 할 수 있습니다.
 * @description ⚠️ 만약 트리거를 커스텀하고 싶으면 asChild를 꼭 사용해주세요. asChild가 생략되면 빈 버튼이 렌더링됩니다.

 *
 * @param {ReactNode} [children] - 커스텀 닫기 트리거 설정. default로 사용시 우측 상단에 x 아이콘의 닫기 버튼 추가.
 * @param {boolean} [asChild=false] - Slot 패턴 사용 여부 (Slot: 부모-자식 요소를 합성)
 * @param {string} [className] - 사용자 정의 클래스 (스타일 확장용)
 *
 * @example
 * ```tsx
 * <Modal.Close />
 * ```
 * @example
 * ```tsx
 * <Modal.Close asChild>
 *   <Button
 *     onClick={() => {
 *       console.log('action');
 *     }}
 *   >
 *     액션 버튼
 *   </Button>
 * </Modal.Close>
 * ```
 */
Modal.Close = function ModalClose({
  children,
  asChild = false,
  className,
}: {
  children?: ReactNode;
  asChild?: boolean;
  className?: string;
}) {
  const { close } = useModalContext();

  if (asChild) {
    return (
      <Slot className={className} onClick={close}>
        <Slottable>{children}</Slottable>
      </Slot>
    );
  }

  return (
    <button
      className={cn('absolute top-8 right-8 cursor-pointer', className)}
      onClick={close}
    >
      {children || (
        <CloseIcon className='text-gray-400 hover:text-gray-600' size={20} />
      )}
    </button>
  );
};
