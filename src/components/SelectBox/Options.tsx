'use client';

import { ReactNode } from 'react';

import { cn } from '@/libs/cn';

import { useSelectedBoxContext } from './SelectBoxContext';

export default function Options({
  children,
  optionsClassName,
}: {
  children: ReactNode;
  optionsClassName?: string;
}) {
  const { isOpen } = useSelectedBoxContext();

  if (!isOpen) return null;

  return (
    <ul
      className={cn(
        'absolute z-10 mt-2 w-[32.7rem] rounded-[1.6rem] border border-gray-300 bg-white md:w-[41.2rem]',
        optionsClassName,
      )}
    >
      {children}
    </ul>
  );
}
