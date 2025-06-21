'use client';

import React from 'react';

import { RangeSlider } from '@/components/RangeSlider';
import { rangeItems } from '@/constants/rangeItems';
import { cn } from '@/libs/cn';

/**
 * 📦 InputRange - 와인 슬라이더 UI 컴포넌트
 *
 * 각각의 슬라이더는 내부적으로 RangeSlider를 사용합니다
 * 상태는 외부에서 객체 형태로 제어하는 **Controlled Component**입니다.
 *
 * @example
 * ```tsx
 * 'use client';
 *
 * import React, { useState } from 'react';
 * import InputRange from '@/components/InputRange';
 *
 * export default function example() {
 *   const [values, setValues] = useState({
 *     body: 5,
 *     tannin: 5,
 *     sweetness: 5,
 *     acidity: 5,
 *   });
 *
 *   const handleChange = (
 *     name: keyof typeof values,
 *     value: number
 *   ) => {
 *     setValues((prev) => ({ ...prev, [name]: value }));
 *   };
 *
 *   return (
 *     <div>
 *       <InputRange values={values} onChange={handleChange} />
 *     </div>
 *   );
 * }
 * ```
 *
 * @param {Option} values - 각 슬라이더의 현재 값 객체 (body, tannin, sweetness, acidity)
 * @param {(name: keyof Option, value: number) => void} onChange - 슬라이더 값 변경 시 호출되는 콜백 함수
 * @param {string} [className] - 외부에서 전달할 추가 Tailwind 클래스
 *
 */

type Option = {
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
};

interface InputRangeProps {
  className?: string;
  values: Option;
  onChange?: (name: keyof Option, value: number) => void;
  disabled?: boolean;
}

export default function InputRange({
  className = '',
  values,
  onChange,
  disabled,

  ...props
}: InputRangeProps) {
  return (
    <div className={cn('w-full space-y-4', className)}>
      {rangeItems.map((item) => (
        <div key={item.name} className='flex items-center gap-4'>
          <span className='md:text-md w-[48px] rounded-xl bg-gray-100 text-center text-xs whitespace-nowrap text-gray-500 md:w-[56px]'>
            {item.label}
          </span>
          <span className='md:text-md w-[62px] shrink-0 text-left text-xs whitespace-nowrap md:w-[70px]'>
            {item.leftText}
          </span>
          <RangeSlider
            disabled={disabled}
            id={item.name}
            label={item.label}
            max={5}
            min={1}
            name={item.name}
            step={1}
            value={values[item.name as keyof Option]}
            onChange={(e) =>
              onChange?.(item.name as keyof Option, Number(e.target.value))
            }
            {...props}
          />
          <span className='md:text-md w-[48px] text-right text-xs whitespace-nowrap md:w-[56px]'>
            {item.rightText}
          </span>
          {/* 현재 값 표시 */}
          <span className='ml-2 max-w-fit text-center text-[1rem] font-semibold text-gray-400 md:text-xs'>
            {values[item.name as keyof Option].toFixed(1)}점
          </span>
        </div>
      ))}
    </div>
  );
}
