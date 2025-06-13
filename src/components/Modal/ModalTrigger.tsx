'use client';

import Button from '@/components/Button';
import { Slot, Slottable } from '@/components/Slot';

import { useModalContext } from './ModalContext';
import { ModalSlotProps } from './types';

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
export default function ModalTrigger({
  children,
  asChild = false,
}: ModalSlotProps) {
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
}
