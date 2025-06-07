'use client';

import { ReactNode } from 'react';

import { cn } from '@/libs/cn';

import { useDropdownContext } from './DropdownContext';

export function DropdownItem({
  children,
  onClick,
  itemClassName,
}: {
  children: string | ReactNode;
  onClick: () => void;
  itemClassName?: string;
}) {
  const { setIsOpen } = useDropdownContext();

  const handleClick = () => {
    onClick();
    setIsOpen(false);
  };

  return (
    <button
      className={cn(
        'hover:bg-primary-10 hover:text-primary-100 text-md z-30 h-[4.6rem] w-[10.1rem] cursor-pointer rounded-[1.2rem] font-medium md:w-[11.8rem] md:text-lg',
        itemClassName,
      )}
      type='button'
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
