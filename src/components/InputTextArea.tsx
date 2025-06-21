'use client';

import React from 'react';

import { cn } from '@/libs/cn';

const SIZE_STYLE = {
  lg: 'w-full h-fit text-lg',
  md: 'w-full  h-fit text-lg',
  sm: 'w-full  h-fit text-sm',
} as const;

/**
 * InputTextArea 컴포넌트의 props
 *
 * @property size - 텍스트 영역의 크기 ('sm' | 'md' | 'lg'), 기본값 'md'
 * @property placeholder - 입력 전 표시되는 텍스트
 * @property value - 현재 텍스트 값 (controlled)
 * @property className - 외부에서 전달받는 추가 className
 * @property rows - 표시할 줄 수, 기본값 3
 * @property onChange - 텍스트 변경 시 호출되는 이벤트 핸들러
 */
interface TextAreaProps {
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value: string;
  className?: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function InputTextArea({
  size = 'md',
  placeholder,
  value,
  className,
  onChange,
  rows = 3,
}: TextAreaProps) {
  const baseStyle =
    'resize-none overflow-auto rounded-xl border border-gray-300 px-4 py-2';
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 1000) {
      onChange(e);
    }
  };

  return (
    <div className='relative flex w-full'>
      <textarea
        className={cn(baseStyle, SIZE_STYLE[size], className)}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
