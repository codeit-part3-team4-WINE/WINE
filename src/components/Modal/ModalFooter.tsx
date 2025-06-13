'use client';

import { cn } from '@/libs/cn';

import { ModalBaseProps } from './types';

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
export default function ModalFooter({ children, className }: ModalBaseProps) {
  return (
    <div className={cn('mt-4 flex w-[100%] justify-center gap-2', className)}>
      {children}
    </div>
  );
}
