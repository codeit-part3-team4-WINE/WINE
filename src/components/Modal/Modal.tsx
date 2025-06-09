'use client';

import { ReactNode, useEffect, useState } from 'react';

import { ModalContext } from './ModalContext';

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
