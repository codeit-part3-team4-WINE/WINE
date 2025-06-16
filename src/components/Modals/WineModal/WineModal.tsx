import Button from '@/components/Button';
import Modal from '@/components/Modal/Modal';
import ModalBody from '@/components/Modal/ModalBody';
import ModalClose from '@/components/Modal/ModalClose';
import ModalContent from '@/components/Modal/ModalContent';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import ModalTitle from '@/components/Modal/ModalTitle';

import WineForm from './WineForm';

export default function WineModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal externalIsOpen={isOpen} onExternalChange={setIsOpen}>
      <ModalContent className='xl:max-w-[50rem]'>
        <ModalHeader>
          <ModalTitle>와인 등록</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <WineForm />
        </ModalBody>
        <ModalFooter>
          <ModalClose />
          <div className='flex w-full justify-between'>
            <div className='w-[3rem]'>
              <ModalClose asChild>
                <Button
                  className='w-[10.8rem] md:w-[9rem] xl:w-[10rem]'
                  variant='secondary'
                  onClick={() => {}}
                >
                  취소
                </Button>
              </ModalClose>
            </div>
            <div>
              <ModalClose asChild>
                <Button
                  className='w-[27rem] md:w-[24rem] xl:w-[35rem]'
                  variant='primary'
                  onClick={() => {}}
                >
                  등록하기
                </Button>
              </ModalClose>
            </div>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
