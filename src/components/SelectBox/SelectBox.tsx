'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/libs/cn';

import { SelectBoxContext } from './SelectBoxContext';

interface SelectBoxProps {
  children: ReactNode;
  options: string[];
  onChange: (value: string) => void;
  value?: string;
  label?: string;
  labelClassName?: string;
}

/**
 * SelectBox 컴포넌트
 *
 * SelectBox의 컨텍스트와 레이아웃을 제공하는 컴포넌트입니다.
 *
 * @param options - 선택 가능한 문자열 옵션 목록
 * @param onChange - 선택된 값이 변경되었을 때 호출되는 콜백 함수
 * @param label - 옵션 그룹에 대한 라벨 텍스트
 * @param labelClassName - 라벨에 적용할 커스텀 스타일
 * @param children - 하위 컴포넌트들(Trigger, Options 등)을 포함
 * @returns SelectBox 기능을 제공하는 전체 구성 요소를 반환합니다.
 *
 * @example
 * <SelectBox
 *   options={['apple', 'banana', 'cherry']}
 *   onChange={(value) => console.log(value)}
 *   label="과일 선택"
 * >
 *   <Trigger />
 *   <Options>
 *     <Option value="apple" />
 *     <Option value="banana" />
 *     <Option value="cherry" />
 *   </Options>
 * </SelectBox>
 */
export default function SelectBoxWrapper({
  children,
  options,
  onChange,
  value,
  label,
  labelClassName,
}: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(
    value === undefined || value === null || value === '' ? options[0] : value,
  );
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (value === undefined || value === null || value === '') {
      setSelected(options[0]);
    } else {
      setSelected(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SelectBoxContext.Provider
      value={{ isOpen, selected, toggle, close, setSelected, onChange }}
    >
      <div ref={ref}>
        {label && (
          <label
            className={cn(
              'mb-[1rem] block text-lg font-medium text-gray-800',
              labelClassName,
            )}
          >
            {label}
          </label>
        )}
        {children}
      </div>
    </SelectBoxContext.Provider>
  );
}
