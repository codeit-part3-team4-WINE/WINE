'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/Modal';

export default function UiModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>Modal</h1>
      <div className='content-text w-full bg-gray-50 p-3 leading-10 text-gray-600'>
        <p>
          <strong>- 구성:</strong> Modal, ModalTrigger, ModalContent,
          ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose
        </p>

        <p>
          <strong>- ModalContent [variant]:</strong> default (default){' '}
          <span className='text-gray-400'>|</span> confirm
        </p>

        <p>
          <strong>- ModalTrigger [asChild]:</strong> false (default){' '}
          <span className='text-gray-400'>|</span> true
        </p>

        <p>
          <strong>- ModalClose [asChild]:</strong> false (default){' '}
          <span className='text-gray-400'>|</span> true
        </p>

        <hr className='my-6 border-gray-200' />

        <p className='font-bold text-black'>🧩 기본 사용 예시</p>
        <pre className='bg-white p-4 text-sm text-gray-800'>
          {`<Modal>
  <ModalTrigger>모달 열기</ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>제목</ModalTitle>
    </ModalHeader>
    <ModalBody>본문</ModalBody>
    <ModalFooter>
      <ModalClose>닫기</ModalClose>
    </ModalFooter>
  </ModalContent>
</Modal>`}
        </pre>

        <p className='mt-6 font-bold text-black'>🧩 asChild 패턴 사용 예시</p>
        <pre className='bg-white p-4 text-sm text-gray-800'>
          {`<Modal>
  <ModalTrigger asChild>
    <Button size='sm' variant='secondary'>열기</Button>
  </ModalTrigger>
  <ModalContent variant='confirm'>
    <ModalBody>정말 삭제하시겠습니까?</ModalBody>
    <ModalFooter>
      <ModalClose asChild>
        <Button variant='outline'>취소</Button>
      </ModalClose>
      <ModalClose asChild>
        <Button variant='primary'>확인</Button>
      </ModalClose>
    </ModalFooter>
  </ModalContent>
</Modal>`}
        </pre>

        <p className='mt-6'>
          <strong>⚠️ 참고:</strong> <code>asChild</code>를 사용하는 경우, 반드시
          자식 요소를 단일 React 엘리먼트로 감싸야 합니다.
        </p>
      </div>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Standard</h2>
      <div className='flex flex-wrap gap-5'>
        <Modal>
          <ModalTrigger asChild>
            <Button size='sm' variant='secondary' onClick={() => {}}>
              삭제 모달
            </Button>
          </ModalTrigger>

          <ModalContent
            className='flex w-[35rem] flex-col items-center'
            variant='confirm'
          >
            <ModalHeader>
              <ModalTitle className='py-8 font-medium'>
                정말 삭제하시겠습니까?
              </ModalTitle>
            </ModalHeader>
            <ModalFooter>
              <ModalClose asChild>
                <Button
                  className='flex-1'
                  size='sm'
                  variant='outline'
                  onClick={() => {}}
                >
                  취소
                </Button>
              </ModalClose>
              <Button
                className='flex-1'
                size='sm'
                variant='primary'
                onClick={() => {}}
              >
                삭제하기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal>
          <ModalTrigger asChild>
            <Button size='sm' variant='primary' onClick={() => {}}>
              예시 모달
            </Button>
          </ModalTrigger>

          <ModalContent>
            <ModalHeader>
              <ModalTitle>제목</ModalTitle>
            </ModalHeader>
            <ModalBody className='flex-1 overflow-y-auto'>
              {Array.from({ length: 10 }, () => (
                <p key={Math.random()} className='mb-4'>
                  이것은 더미 텍스트입니다. 실제 내용이 들어갈 자리이며,
                  디자인이나 레이아웃을 테스트할 때 사용됩니다. 사용자는 이
                  부분을 자신의 목적에 맞게 수정할 수 있습니다. 다양한 길이의
                  문장과 단락을 포함하여, 실제 본문과 유사한 느낌을 줄 수
                  있습니다.
                </p>
              ))}
            </ModalBody>
            <ModalFooter>
              <ModalClose />
              <ModalClose asChild>
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
              </ModalClose>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 제어 가능 모달 = 드롭다운에서 모달창 띄울 수 있는지 확인 */}
        <Button variant='outline' onClick={() => setIsOpen(true)}>
          제어 모달을 열어요
        </Button>

        <Modal externalIsOpen={isOpen} onExternalChange={setIsOpen}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>제목</ModalTitle>
            </ModalHeader>
            <ModalBody className='flex-1 overflow-y-auto'>
              외부에서 제어한 모달입니다.
            </ModalBody>
            <ModalFooter>
              <ModalClose />
              <ModalClose asChild>
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
              </ModalClose>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
