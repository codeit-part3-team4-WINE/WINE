'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/components/Modal';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  message = '정말 삭제하시겠습니까?',
  confirmText = '삭제하기',
  cancelText = '취소',
}: ConfirmDeleteModalProps) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm(); // 외부에서 넘긴 삭제 핸들러 실행
    setLoading(false);
  };

  return (
    <Modal externalIsOpen={isOpen} onExternalChange={onClose}>
      <ModalContent
        className='flex w-[35rem] flex-col items-center'
        variant='confirm'
      >
        <ModalHeader>
          <ModalTitle className='py-8 font-medium'>{message}</ModalTitle>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild>
            <Button
              className='flex-1'
              disabled={loading}
              size='sm'
              variant='outline'
              onClick={onClose}
            >
              {cancelText}
            </Button>
          </ModalClose>
          <Button
            className='flex-1'
            loading={loading}
            size='sm'
            variant='primary'
            onClick={handleConfirm}
          >
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
