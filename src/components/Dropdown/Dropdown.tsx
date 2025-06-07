'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

import { DropdownContext } from './DropdownContext';

export function DropdownWrapper({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, dropdownRef }}>
      <div ref={dropdownRef} className='relative'>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}
