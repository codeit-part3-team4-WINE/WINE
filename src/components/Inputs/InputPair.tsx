import { cn } from '@/libs/cn';

import Input from './Input';

/**
 * InputPair 컴포넌트의 props 타입
 */
interface InputPairProps
  extends Omit<React.ComponentProps<typeof Input>, 'className' | 'size'> {
  label: string;
  size?: 'md' | 'lg';
  labelClassName?: string;
  inputClassName?: string;
  error?: string; // 에러 메세지 추가
}

/**
 * InputPair 컴포넌트의 사이즈별 스타일 클래스
 */
const SIZE_CLASSES = {
  md: {
    label: 'text-[1.4rem]',
    input: 'w-[30rem] h-[4.2rem]',
  },
  lg: {
    label: 'text-[1.6rem]',
    input: 'w-[40rem] h-[4.8rem]',
  },
};

/**
 * label과 input을 렌더링하는 컴포넌트
 *
 * @component
 * @param {InputProps} props - 컴포넌트 props
 * @param {string} [props.type] - input 타입
 * @param {string} props.label - label 텍스트 (필수)
 * @param {string} [props.className] - Input에 적용할 추가 CSS 클래스
 * @param {string} [props.labelClassName] - Label에 적용할 추가 CSS 클래스
 * @param {'md' | 'lg'} [props.size='lg'] - 컴포넌트 크기
 * @param {React.RefObject<HTMLInputElement>} [props.ref] - input ref
 * @returns {JSX.Element} label과 input이 포함된 JSX 엘리먼트
 *
 * @example
 * 기본 사용법
 * <InputPair label="이메일" type="email" />
 *
 * @example
 * 크기 지정
 * <InputPair label="비밀번호" type="password" size="md" />
 *
 * @example
 * 커스텀 스타일
 * <InputPair
 *   ref={inputRef}
 *   label="이름"
 *   type="text"
 *   size="lg"
 *   inputClassName="border-blue-500"
 *   labelClassName="text-blue-600"
 * />
 */

export default function InputPair({
  label,
  inputClassName,
  labelClassName,
  size = 'lg',
  error,
  ...inputProps
}: InputPairProps) {
  const currentSize = SIZE_CLASSES[size];

  return (
    <div className='flex flex-col'>
      <label
        className={cn(
          `${currentSize.label} leading-[3.2rem] text-black`,
          labelClassName,
        )}
        htmlFor={label}
      >
        <span className='cursor-pointer'>{label}</span>
      </label>
      <Input
        {...inputProps}
        className={cn(`${currentSize.input}`, inputClassName)}
        id={label}
        name={inputProps.name}
      />
      {error && <p className='text-md mt-1 text-red-500'>{error}</p>}
    </div>
  );
}
