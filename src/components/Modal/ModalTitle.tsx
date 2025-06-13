'use client';

import { cn } from '@/libs/cn';

import { ModalBaseProps } from './types';

/**
 * Modal.Title
 *
 * @description 모달의 제목(텍스트)입니다.
 *
 * @param {ReactNode} children - 제목 내용
 * @param {string} [className] - 사용자 정의 클래스 (스타일 확장용)
 */
export default function ModalTitle({ children, className }: ModalBaseProps) {
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
}
