import { createContext, useContext } from 'react';

import { ModalContextType } from './types';

export const ModalContext = createContext<ModalContextType | null>(null);

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('Modal components must be used inside <Modal>');
  return context;
}
