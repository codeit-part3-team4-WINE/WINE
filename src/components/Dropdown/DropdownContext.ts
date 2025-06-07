'use client';

import { createContext, useContext } from 'react';

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

export const DropdownContext = createContext<DropdownContextType | null>(null);

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('<Dropdown> 내부에서 사용되어야 합니다.');
  }
  return context;
}
