'use client';

import CloseIcon from '@/app/assets/icons/close';
import { Slot, Slottable } from '@/components/Slot';
import { cn } from '@/libs/cn';

import { useModalContext } from './ModalContext';
import { ModalSlotProps } from './types';

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
export default function ModalClose({
  children,
  asChild = false,
  className,
}: ModalSlotProps) {
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
}
