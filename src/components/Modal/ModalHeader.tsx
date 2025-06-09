'use client';

import { cn } from '@/libs/cn';

import { ModalBaseProps } from './types';

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
export default function ModalHeader({ children, className }: ModalBaseProps) {
  return <div className={cn('mb-6', className)}>{children}</div>;
}
