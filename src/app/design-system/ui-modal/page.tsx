'use client';

import Button from '@/components/Button';
import Modal from '@/components/CompoundModal';

export default function UiModal() {
  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>Modal</h1>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Standard</h2>
      <div className='flex flex-wrap gap-5'>
        <Modal>
          <Modal.Trigger asChild>
            <Button size='sm' variant='secondary' onClick={() => {}}>
              삭제 모달
            </Button>
          </Modal.Trigger>

          <Modal.Content className='flex w-[35rem] flex-col items-center'>
            <Modal.Header>
              <Modal.Title className='py-8 text-[2rem] font-medium'>
                정말 삭제하시겠습니까?
              </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Modal.Close asChild>
                <Button
                  className='flex-1'
                  size='sm'
                  variant='outline'
                  onClick={() => {}}
                >
                  취소
                </Button>
              </Modal.Close>
              <Button
                className='flex-1'
                size='sm'
                variant='primary'
                onClick={() => {}}
              >
                삭제하기
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <Modal>
          <Modal.Trigger asChild>
            <Button size='sm' variant='primary' onClick={() => {}}>
              예시 모달
            </Button>
          </Modal.Trigger>

          <Modal.Content>
            <Modal.Header>
              <Modal.Title>제목</Modal.Title>
            </Modal.Header>
            <Modal.Body className='flex-1 overflow-y-auto'>
              {Array.from({ length: 30 }, (_, i) => (
                <p key={i}>예시 내용입니다</p>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close />
              <Modal.Close asChild>
                <Button
                  className='w-full'
                  size='sm'
                  variant='primary'
                  onClick={() => {
                    console.log('action');
                  }}
                >
                  액션 버튼
                </Button>
              </Modal.Close>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}
