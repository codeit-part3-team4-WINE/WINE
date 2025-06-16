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
      <ModalContent>
        <ModalHeader>
          <ModalTitle>와인 등록</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <WineForm />
        </ModalBody>
        <ModalFooter>
          <ModalClose />
          <ModalClose asChild>
            <Button variant='secondary' onClick={() => {}}>
              취소
            </Button>
          </ModalClose>
          <ModalClose asChild>
            <Button variant='primary' onClick={() => {}}>
              등록하기
            </Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
