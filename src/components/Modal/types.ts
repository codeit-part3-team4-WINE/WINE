import { ReactNode } from 'react';

export interface ModalBaseProps {
  children?: ReactNode;
  className?: string;
}

export interface ModalSlotProps extends ModalBaseProps {
  asChild?: boolean;
}

export type ModalVariant = 'default' | 'confirm';

export interface ModalContextType {
  externalIsOpen?: boolean;
  onExternalChange?: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
