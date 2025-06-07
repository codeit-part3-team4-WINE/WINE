'use client';

import { ReactNode } from 'react';

import { useDropdownContext } from './DropdownContext';

export function DropdownTrigger({ children }: { children: ReactNode }) {
  const { isOpen, setIsOpen } = useDropdownContext();

  return (
    <button
      aria-expanded={isOpen}
      aria-haspopup='true'
      className='cursor-pointer'
      type='button'
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {children}
    </button>
  );
}
