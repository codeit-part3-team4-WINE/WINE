'use client';

import React from 'react';

import { cn } from '@/libs/cn';

const BASIC_CLASSNAME =
  'h-2.5 w-full cursor-pointer appearance-none rounded-md bg-gray-100 accent-blue-500 ' +
  '[&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none ' +
  '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-600';

interface RangeSliderProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  label?: string;
  containerClassName?: string;
}

export function RangeSlider({
  className,
  label,
  containerClassName,
  id,
  name,
  ...props
}: RangeSliderProps) {
  return (
    <div className={cn('max-w-[491px] min-w-0 flex-1', containerClassName)}>
      {label && (
        <label className='sr-only' htmlFor={id || name}>
          {label}
        </label>
      )}
      <input
        className={cn(BASIC_CLASSNAME, className)}
        id={id}
        name={name}
        type='range'
        {...props}
      />
    </div>
  );
}
