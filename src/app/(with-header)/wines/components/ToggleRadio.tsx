'use client';

import { createContext, useContext } from 'react';

import { cn } from '@/libs/cn';

interface ToggleRadioContextType {
  title?: string;
  titleClassName?: string;
  radioGroupClassName?: string;
  selectedValue?: string;
  onSelect: (value: string) => void;
  children?: React.ReactNode;
}

interface ToggleRadioProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: string;
  children?: React.ReactNode;
}

const ToggleRadioContext = createContext<ToggleRadioContextType | null>(null);

function useToggleRadioContext() {
  const context = useContext(ToggleRadioContext);
  if (!context) {
    throw new Error('<ToggleRadio> 내부에서 사용되어야 합니다.');
  }
  return context;
}

export default function ToggleRadioGroup({
  title,
  titleClassName,
  radioGroupClassName,
  selectedValue,
  onSelect,
  children,
}: ToggleRadioContextType) {
  return (
    <ToggleRadioContext.Provider
      value={{ title, selectedValue, onSelect, titleClassName }}
    >
      {title && <ToggleRadioGroup.Title />}
      <div className={cn('flex gap-2', radioGroupClassName)}>{children}</div>
    </ToggleRadioContext.Provider>
  );
}

ToggleRadioGroup.Title = function Title() {
  const { title, titleClassName } = useToggleRadioContext();

  return <h2 className={cn('title-text', titleClassName)}>{title}</h2>;
};

ToggleRadioGroup.Radio = function Radio({
  value,
  children,
  ...props
}: ToggleRadioProps) {
  const { selectedValue, onSelect } = useToggleRadioContext();
  const isSelected = selectedValue === value;

  const handleChange = () => {
    if (isSelected) {
      onSelect?.('');
    } else {
      onSelect?.(value);
    }
  };

  return (
    <label className='content-text flex w-fit cursor-pointer items-center gap-4'>
      <input
        readOnly
        checked={isSelected}
        className='hidden'
        name='radioGroup'
        type='radio'
        value={value}
        onClick={handleChange} // Toggle 기능 떄문에 readOnly와 onClick 이벤트의 조합으로 사용
        {...props}
      />

      <div
        className={cn(
          'sub-content-text cursor-pointer rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700',
          isSelected &&
            'bg-primary-100 border-primary-100 cursor-pointer rounded-full border px-5 py-2 text-white',
        )}
      >
        {children}
      </div>
    </label>
  );
};
