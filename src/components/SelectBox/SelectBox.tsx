'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/libs/cn';

import { SelectBoxContext } from './SelectBoxContext';

interface SelectBoxProps {
  children: ReactNode;
  options: string[];
  onChange: (value: string) => void; // eslint-disable-line no-unused-vars
  label?: string;
  labelClassName?: string;
}

export default function SelectBox({
  children,
  options,
  onChange,
  label,
  labelClassName,
}: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState(options[0]);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SelectBoxContext.Provider
      value={{ isOpen, selected, toggle, close, setSelected, onChange }}
    >
      <div ref={ref}>
        {label && (
          <label
            className={cn(
              'mb-[1rem] block text-lg font-medium text-gray-800',
              labelClassName,
            )}
          >
            {label}
          </label>
        )}
        {children}
      </div>
    </SelectBoxContext.Provider>
  );
}
