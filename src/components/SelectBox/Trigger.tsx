'use client';

import { ReactNode } from 'react';

import TriangleArrowIcon from '@/app/assets/icons/triangle-arrow';
import { cn } from '@/libs/cn';

import { useSelectedBoxContext } from './SelectBoxContext';

export default function Trigger({
  triggerClassName,
  children,
}: {
  triggerClassName?: string;
  children?: ReactNode;
}) {
  const { selected, toggle, isOpen } = useSelectedBoxContext();

  return (
    <button
      aria-expanded={isOpen}
      aria-haspopup='listbox'
      className={cn(
        'flex h-[4.2rem] w-[32.7rem] cursor-pointer items-center justify-between rounded-[1.6rem] border border-gray-300 px-[2rem] text-lg text-gray-500 md:h-[4.8rem] md:w-[41.2rem]',
        triggerClassName,
      )}
      type='button'
      onClick={toggle}
    >
      {children ? (
        children
      ) : (
        <>
          {selected}
          <TriangleArrowIcon />
        </>
      )}
    </button>
  );
}
