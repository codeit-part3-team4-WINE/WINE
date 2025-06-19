'use client';

import { ReactNode } from 'react';

import { cn } from '@/libs/cn';

import { useSelectedBoxContext } from './SelectBoxContext';

interface OptionProps {
  value: string;
  optionClassName?: string;
  children?: ReactNode;
}

/**
 * Option 컴포넌트
 * SelectBox의 선택 가능한 개별 옵션 항목을 나타내는 컴포넌트입니다.
 *
 * @param {string} value - 선택될 값
 * @param {string} optionClassName - 옵션 항목에 적용할 커스텀 스타일
 * @param {ReactNode} children - 옵션 항목에 표시할 사용자 정의 요소.
 * 기본적으로 `value`가 렌더링되며, hover 효과를 개별적으로 커스터마이징할 수 있도록
 * `children`을 통해 커스텀한 요소를 전달할 수 있습니다.
 *
 * @example
 * <CommonSelectBox.Option value="항목 요소의 값" />
 *
 * @returns 옵션 항목을 나타내는 <li> 요소를 반환합니다.
 */
export default function Option({
  value,
  optionClassName,
  children,
}: OptionProps) {
  const optionClasses = cn(
    ' h-auto w-full cursor-pointer px-4 py-3 text-lg font-medium text-gray-800',
    optionClassName,
  );
  const { setSelected, onChange, close } = useSelectedBoxContext();

  const handleClick = () => {
    setSelected(value);
    onChange(value);
    close();
  };

  return (
    <li className={optionClasses} onClick={handleClick}>
      {children ?? (
        <span className='hover:bg-primary-10 block w-full rounded-[1.2rem] break-all whitespace-normal'>
          {value}
        </span>
      )}
    </li>
  );
}
