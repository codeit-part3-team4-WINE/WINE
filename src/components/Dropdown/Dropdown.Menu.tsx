'use client';

import { ReactNode } from 'react';

import { cn } from '@/libs/cn';

import { useDropdownContext } from './DropdownContext';

export function DropdownMenu({
  children,
  menuClassName,
}: {
  children: ReactNode;
  menuClassName?: string;
}) {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'absolute right-0 flex flex-col content-center justify-around rounded-[1.6rem] border border-gray-300 bg-white p-2 md:p-4',
        menuClassName,
      )}
    >
      {children}
    </div>
  );
}
