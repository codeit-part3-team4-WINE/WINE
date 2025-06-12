'use client';

import React from 'react';

import { rangeItems } from '@/constants/rangeItems';
import { cn } from '@/libs/cn';

/**
 * 슬라이더 옵션 값 타입
 */
type Option = {
  body: number;
  tannin: number;
  sweetness: number;
  acidity: number;
};

/**
 * @param className - 외부에서 전달받는 추가 className
 * @param values - 각 슬라이더의 현재 값 (body, tannin 등)
 * @param handleChange - 슬라이더 값이 바뀔 때 실행되는 콜백 함수
 */
interface InputRangeProps {
  className?: string;
  values: Option;
  handleChange?: (name: keyof Option, value: number) => void;
}

export default function InputRange({
  className = '',
  values,
  handleChange,
}: InputRangeProps) {
  const sliderClass =
    'h-2.5 w-full cursor-pointer appearance-none rounded-md bg-gray-100 accent-blue-500 [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-600';

  return (
    <div className={cn('mx-auto w-full space-y-4', className)}>
      {rangeItems.map((items) => (
        <div key={items.name} className='flex items-center gap-4'>
          {/* Label */}
          <span className='md:text-md w-[48px] rounded-xl bg-gray-100 text-center text-xs whitespace-nowrap text-gray-500 md:w-[56px]'>
            {items.label}
          </span>

          {/* Left Text */}
          <span className='md:text-md w-[62px] shrink-0 text-left text-xs whitespace-nowrap md:w-[70px]'>
            {items.leftText}
          </span>

          {/* Slider */}
          <div className='max-w-[491px] min-w-0 flex-1'>
            <label className='sr-only' htmlFor={items.name}>
              {items.label}
            </label>
            <input
              className={sliderClass}
              id={items.name}
              max={5}
              min={-5}
              step={1}
              type='range'
              value={values[items.name as keyof Option]}
              onChange={(e) =>
                handleChange?.(
                  items.name as keyof Option,
                  Number(e.target.value),
                )
              }
            />
          </div>

          {/* Right Text */}
          <span className='md:text-md w-[48px] text-right text-xs whitespace-nowrap md:w-[56px]'>
            {items.rightText}
          </span>
        </div>
      ))}
    </div>
  );
}
