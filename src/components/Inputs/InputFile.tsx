'use client';

import { useRef } from 'react';

import Input from './Input';

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange'
>;

interface InputFileProps extends NativeInputProps {
  label?: string;
  children: React.ReactNode;
  onChange?: (file: File) => void;
  accept?: string;
}

/**
 * InputFile 컴포넌트
 *
 * 커스텀 트리거 요소를 클릭하여 파일을 선택하고,
 * 선택된 파일의 URL을 상위 컴포넌트로 전달합니다.
 *
 *  @param {string} [label] - input의 라벨 텍스트. `id`, `name`에도 함께 사용됨
 * @param {React.ReactNode} children - 클릭 가능한 커스텀 트리거 요소
 * @param {(fileUrl: string | null) => void} [onChange] - 파일 선택 시 호출되는 함수 URL 또는 null 반환
 * @param {string} [accept] - 업로드 가능한 파일의 MIME 타입 (기본값: "image/*")
 * @param {...NativeInputProps} props - 기타 기본 input 속성
 *
 * @example
 * ```tsx
 * <InputFile onChange={(url) => setImage(url)}>
 *   <ProfileImg />
 * </InputFile>
 * ```
 */
export default function InputFile({
  label,
  children,
  onChange,
  accept,
  ...inputProps
}: InputFileProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onChange?.(file);
  };

  return (
    <div className='inline-block'>
      {label && (
        <label
          className='mb-1 block text-sm font-medium text-gray-700'
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <div className='inline-block cursor-pointer' onClick={handleClick}>
        {children}
      </div>
      <Input
        ref={inputRef}
        accept={accept ?? 'image/*'}
        className='hidden'
        id={label}
        name={label}
        type='file'
        onChange={handleChange}
        {...inputProps}
      />
    </div>
  );
}
