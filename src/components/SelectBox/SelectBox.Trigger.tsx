'use client';

import { ReactNode } from 'react';

import TriangleArrowIcon from '@/app/assets/icons/triangle-arrow';
import { cn } from '@/libs/cn';

import { useSelectedBoxContext } from './SelectBoxContext';

interface TriggerProps {
  triggerClassName?: string;
  children?: ReactNode;
}

/**
 * Trigger 컴포넌트
 * SelectBox를 클릭하여 열고 닫는 트리거 버튼입니다.
 *
 * @param {string} triggerClassName - trigger 버튼에 적용할 커스텀 스타일
 * @param {ReactNode} children - 버튼 내에 표시할 콘텐츠 (없을 경우 selected 값과 TriangleArrowIcon 표시)
 * @returns 드롭다운을 토글하는 버튼 요소를 반환합니다.
 *
 * @example
 * <CommonSelectBox.Trigger />
 */
export default function Trigger({ triggerClassName, children }: TriggerProps) {
  const { selected, toggle, isOpen, hasChanged } = useSelectedBoxContext();

  return (
    <button
      aria-expanded={isOpen}
      aria-haspopup='listbox'
      className={cn(
        'flex h-auto min-h-[4.2rem] min-w-[32.7rem] cursor-pointer items-center justify-between rounded-[1.6rem] border border-gray-300 px-[2rem] text-lg md:min-h-[4.8rem] md:w-[41.2rem]',
        hasChanged ? 'text-gray-800' : 'text-gray-500',
        triggerClassName,
      )}
      type='button'
      onClick={toggle}
    >
      {children || (
        <>
          {selected}
          <TriangleArrowIcon />
        </>
      )}
    </button>
  );
}
