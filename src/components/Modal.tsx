'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import React from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '@/app/assets/icons/close';
import { cn } from '@/libs/cn';

import Button from './Button';
import { Slot, Slottable } from './Slot';

interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('Modal components must be used inside <Modal>');
  return context;
}

export default function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Trigger = function ModalTrigger({
  children,
  asChild = false,
}: {
  children: ReactNode;
  asChild?: boolean;
}) {
  const { open } = useModalContext();

  if (asChild) {
    return (
      <Slot onClick={open}>
        <Slottable>{children}</Slottable>
      </Slot>
    );
  }

  return (
    <Button
      className='h-fit w-fit px-3'
      size='xs'
      variant='outline'
      onClick={open}
    >
      {children}
    </Button>
  );
};

Modal.Content = function ModalContent({
  variant = 'default',
  children,
  className,
}: {
  variant?: 'default' | 'confirm';
  children: ReactNode;
  className?: string;
}) {
  const { isOpen, close } = useModalContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  const modalOverlayClassNames =
    'fixed inset-0 z-50 flex items-center justify-center bg-black/50';

  const baseClass =
    variant === 'confirm'
      ? 'content-text min-x-[30rem] flex h-screen max-h-[80%] w-screen flex-col bg-white p-8 shadow-xl h-fit w-[40rem] max-w-[65rem] rounded-4xl'
      : 'content-text min-x-[30rem] absolute bottom-0 flex h-screen max-h-[80%] w-screen flex-col rounded-t-4xl bg-white p-8 shadow-xl md:relative md:h-fit md:w-[40rem] md:max-w-[65rem] md:rounded-4xl';
  const modalContentClassNames = cn(baseClass, className);

  return isOpen
    ? createPortal(
        <div className={modalOverlayClassNames} onClick={close}>
          <div
            className={modalContentClassNames}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        modalRoot,
      )
    : null;
};

Modal.Header = function ModalHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('mb-6', className)}>{children}</div>;
};

Modal.Title = function ModalTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'text-[1.6rem] font-semibold text-black md:text-[2rem]',
        className,
      )}
    >
      {children}
    </h2>
  );
};

Modal.Body = function ModalBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('h-fit max-h-full overflow-y-auto pb-4', className)}>
      {children}
    </div>
  );
};

Modal.Footer = function ModalFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mt-4 flex w-[100%] justify-center gap-2', className)}>
      {children}
    </div>
  );
};

Modal.Close = function ModalClose({
  children,
  asChild = false,
  className,
}: {
  children?: ReactNode;
  asChild?: boolean;
  className?: string;
}) {
  const { close } = useModalContext();

  if (asChild) {
    return (
      <Slot className={className} onClick={close}>
        <Slottable>{children}</Slottable>
      </Slot>
    );
  }

  return (
    <button
      className={cn('absolute top-8 right-8 cursor-pointer', className)}
      onClick={close}
    >
      {children || (
        <CloseIcon className='text-gray-400 hover:text-gray-600' size={20} />
      )}
    </button>
  );
};
