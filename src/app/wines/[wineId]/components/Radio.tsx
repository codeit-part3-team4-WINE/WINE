'use client';

import { createContext, useContext } from 'react';

import { cn } from '@/libs/cn';

interface RadioContextType {
  title?: string;
  titleClassName?: string;
  radioGroupClassName?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

export default function RadioGroup({
  title,
  titleClassName,
  radioGroupClassName,
  onChange,
  children,
}: RadioContextType) {
  return (
    <RadioContext.Provider value={{ title, onChange }}>
      {title && <RadioGroup.Title className={titleClassName} />}
      <div className={cn('flex flex-col gap-2', radioGroupClassName)}>
        {children}
      </div>
    </RadioContext.Provider>
  );
}

RadioGroup.Title = function Title({ className }: { className?: string }) {
  const { title } = useRadioContext();

  return <h2 className={cn('title-text', className)}>{title}</h2>;
};

RadioGroup.Radio = function Radio({
  id,
  children,
  ...props
}: {
  id?: number | string;
  children?: React.ReactNode;
}) {
  const { onChange } = useRadioContext();

  return (
    <label className='content-text flex w-fit cursor-pointer items-center gap-4'>
      <input
        className='peer hidden'
        name='radioGroup'
        type='radio'
        value={id}
        onChange={onChange}
        {...props}
      />
      <div className='peer-checked:after:bg-primary-100 relative size-6 rounded-md border border-gray-300 bg-gray-50 peer-checked:after:absolute peer-checked:after:inset-[0.25rem] peer-checked:after:rounded peer-checked:after:content-[""]' />
      <span className='peer-checked:text-primary-100 text-gray-700'>
        {children}
      </span>
    </label>
  );
};
