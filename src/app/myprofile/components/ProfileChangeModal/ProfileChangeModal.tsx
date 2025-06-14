'use client';

import Button from '@/components/Button';
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from '@/components/Modal';

import ProfileChangeFrom from './ProfileChangeForm';

export default function ProfileChangeModal() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button
          className='h-[4.3rem]'
          size='sm'
          variant='outline'
          onClick={() => {}}
        >
          변경하기
        </Button>
      </ModalTrigger>

      <ModalContent className='flex min-h-[50rem] flex-col justify-between px-[2rem] py-[7rem] md:min-h-[35rem] md:max-w-[35rem] md:px-[5rem] md:py-[5rem] xl:min-h-[55rem] xl:max-w-[40rem]'>
        <ModalBody>
          <ProfileChangeFrom />
        </ModalBody>
        <ModalFooter>
          <ModalClose />
          <ModalClose asChild>
            <Button
              className='h-[4.3rem]'
              size='sm'
              variant='outline'
              onClick={() => {}}
            >
              변경하기
            </Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
