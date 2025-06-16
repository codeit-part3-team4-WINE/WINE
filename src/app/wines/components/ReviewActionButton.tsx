'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import WineModal from '@/components/Modals/WineModal/WineModal';

export default function ReviewActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='fixed bottom-0 left-0 z-20 flex h-[8rem] w-full items-center justify-center border-t-1 border-gray-100 bg-white md:relative md:z-auto md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 md:h-full md:w-[20rem] md:border-none xl:hidden'>
      <Button
        className='h-[5rem] w-[90vw] md:h-full md:w-full'
        round='rounded'
        variant='primary'
        onClick={() => setIsOpen(true)}
      >
        와인 등록하기
      </Button>
      <WineModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
