'use client';

import { cn } from '@/libs/cn';

import { ModalBaseProps } from './types';

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
export default function ModalBody({ children, className }: ModalBaseProps) {
  return (
    <div className={cn('h-fit max-h-full overflow-y-auto pb-4', className)}>
      {children}
    </div>
  );
}
