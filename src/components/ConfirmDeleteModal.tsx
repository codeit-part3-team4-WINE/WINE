'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

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
  const router = useRouter();
  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
      toast.success('삭제에 성공했습니다.');
    } catch (error) {
      toast.error('삭제에 실패했습니다.');
      console.log(error);
    } finally {
      setLoading(false);
      router.refresh();
    }
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
