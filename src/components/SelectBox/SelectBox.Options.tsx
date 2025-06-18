'use client';

import { ReactNode } from 'react';

import { cn } from '@/libs/cn';

import { useSelectedBoxContext } from './SelectBoxContext';

interface OptionsProps {
  children: ReactNode;
  optionsClassName?: string;
}

/**
 * Options 컴포넌트
 * 드롭다운이 열렸을 때 옵션 목록을 감싸는 컴포넌트입니다.
 *
 * @param {ReactNode} children - Option 컴포넌트들을 자식으로 전달받음
 * @param {string} optionsClassName - 옵션 목록에 적용할 커스텀 스타일
 * @returns 드롭다운이 열려 있을 때만 <ul> 요소로 옵션 목록을 렌더링합니다.
 *
 * @example
 * <CommonSelectBox.Options>
 *   <CommonSelectBox.Option value="Red"/>
 *   <CommonSelectBox.Option value="White"/>
 * </CommonSelectBox.Options>
 */
export default function Options({ children, optionsClassName }: OptionsProps) {
  const { isOpen } = useSelectedBoxContext();

  if (!isOpen) return null;

  return (
    <ul
      className={cn(
        'scrollbar-thin absolute z-10 mt-2 max-h-[30rem] w-full overflow-x-hidden overflow-y-auto rounded-[1.6rem] border border-gray-300 bg-white',
        optionsClassName,
      )}
    >
      {children}
    </ul>
  );
}
