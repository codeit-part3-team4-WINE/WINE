'use client';

import { createContext, useContext } from 'react';

import { cn } from '@/libs/cn';

/**
 * @interface
 * @type {string} [title] - 제목
 * @type {string} [titleClassName] - 제목 className (스타일 확장용)
 * @type {string} [radioGroupClassName] - 라디오 그룹 className (스타일 확장용)
 * @type {(value: string | number) => void} onSelect - 라디오 선택 시 값 변경을 위해 사용되는 이벤트 핸들러 (콜백 함수)
 * @type {React.ReactNode} children
 */
interface RadioContextType {
  title?: string;
  titleClassName?: string;
  radioGroupClassName?: string;
  onSelect: (value: string | number) => void;
  children?: React.ReactNode;
}

interface RadioProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: number | string;
  children?: React.ReactNode;
}

const RadioContext = createContext<RadioContextType | null>(null);

function useRadioContext() {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error('<Radio> 내부에서 사용되어야 합니다.');
  }
  return context;
}

/**
 * RadioGroup 컴포넌트
 *
 * @description radio input을 재사용할 수 있게 합성 컴포넌트로 구현하였습니다. 내부에서 onChange 이벤트를 처리하기 때문에, 외부에서는 선택된 값을 처리할 onSelect 전달하면 됩니다.
 *
 * @component
 * @param {string} [title] - 제목
 * @param {string} [titleClassName] - 제목 className (스타일 확장용)
 * @param {string} [radioGroupClassName] - 라디오 그룹 className (스타일 확장용)
 * @param {(value: string | number) => void} onSelect - 라디오 선택 시 값 변경을 위해 사용되는 이벤트 핸들러 (콜백 함수)
 * @param {React.ReactNode} children
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   radioGroupClassName="gap-3"
 *   title="Rating"
 *   titleClassName="mb-4 text-[1.8rem]"
 *   onSelect={(value) => setValue(value)}
 * >
 *   <RadioGroup.Radio value={1}>전체</RadioGroup.Radio>
 *   <RadioGroup.Radio value={2}>4.5 - 5.0</RadioGroup.Radio>
 *   <RadioGroup.Radio value={3}>4.0 - 4.5</RadioGroup.Radio>
 *   <RadioGroup.Radio value={4}>3.5 - 4.0</RadioGroup.Radio>
 *   <RadioGroup.Radio value={5}>3.0 - 3.5</RadioGroup.Radio>
 * </RadioGroup>
 * ```
 */
export default function RadioGroup({
  title,
  titleClassName,
  radioGroupClassName,
  onSelect,
  children,
}: RadioContextType) {
  return (
    <RadioContext.Provider value={{ title, onSelect, titleClassName }}>
      {title && <RadioGroup.Title />}
      <div className={cn('flex flex-col gap-2', radioGroupClassName)}>
        {children}
      </div>
    </RadioContext.Provider>
  );
}

/**
 * RadioGroup.Title
 *
 * @description 라디오 그룹의 제목으로, 생략할 수 있습니다. titleClassName을 통해 스타일 확장도 가능합니다.
 */
RadioGroup.Title = function Title() {
  const { title, titleClassName } = useRadioContext();

  return <h2 className={cn('title-text', titleClassName)}>{title}</h2>;
};

/**
 * RadioGroup.Radio
 *
 * @description 각 옵션은 RadioGroup.Radio 컴포넌트로 정의되며, 선택 시 onChange 콜백이 호출됩니다.
 *
 * @component
 * @param {string | number} [value] 라디오 버튼의 value (선택된 값을 구분할 때 사용하기 때문에 고유한 값이어야 합니다.)
 * @param {React.ReactNode} children 라벨로 표시할 텍스트 또는 요소
 * @param {...any} props 추가로 전달할 input 속성들
 *
 * @example
 * <RadioGroup.Radio value={1}>전체</RadioGroup.Radio>
 */
RadioGroup.Radio = function Radio({ value, children, ...props }: RadioProps) {
  const { onSelect } = useRadioContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSelect?.(value);
  };

  return (
    <label className='content-text flex w-fit cursor-pointer items-center gap-4'>
      <input
        className='peer hidden'
        name='radioGroup'
        type='radio'
        value={value}
        onChange={handleChange}
        {...props}
      />
      <div className='peer-checked:after:bg-primary-100 relative size-6 rounded-md border border-gray-300 bg-gray-50 peer-checked:after:absolute peer-checked:after:inset-[0.25rem] peer-checked:after:rounded peer-checked:after:content-[""]' />
      <span className='peer-checked:text-primary-100 text-gray-700'>
        {children}
      </span>
    </label>
  );
};
