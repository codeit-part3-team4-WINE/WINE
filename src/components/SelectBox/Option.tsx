'use client';

import { ReactNode } from 'react';

import { cn } from '@/libs/cn';

import { useSelectedBoxContext } from './SelectBoxContext';

export default function Option({
  value,
  optionClassName,
  children,
}: {
  value: string;
  optionClassName?: string;
  children?: ReactNode;
}) {
  const { setSelected, onChange, close } = useSelectedBoxContext();

  const handleClick = () => {
    setSelected(value);
    onChange(value);
    close();
  };

  return (
    <li
      className={cn(
        'flex h-[5.2rem] w-[32.7rem] cursor-pointer items-center rounded-[1.2rem] text-lg font-medium text-gray-800 md:w-[41.2rem]',
        optionClassName,
      )}
      onClick={handleClick}
    >
      {children ?? value}
    </li>
  );
}
