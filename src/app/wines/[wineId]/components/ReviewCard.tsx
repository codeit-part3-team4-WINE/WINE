'use client';
import { useState } from 'react';

import ChevronArrowIcon from '@/app/assets/icons/chevron-arrow';
import HeartIcon from '@/app/assets/icons/heart';
import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import Dropdown from '@/components/Dropdown';
import ProfileImg from '@/components/ProfileImg';
import { formatToTimeAgo } from '@/libs/formmatToTimeago';

export default function ReviewCard() {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='relative flex flex-col gap-5 rounded-2xl border border-gray-300 p-5'>
      <div className='flex items-start justify-between'>
        <div className='flex gap-5'>
          <ProfileImg size='md' />
          <div className='flex flex-col items-center justify-center'>
            <p className='text-2lg font-bold'>와인 러버</p>
            <p className='text-lg text-gray-500'>
              {formatToTimeAgo('2025-02-10')}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2 pt-2'>
          <div className='size-[3.8rem] cursor-pointer'>
            <HeartIcon className='hover:fill-red-500' />
          </div>
          <div className='size-[3.8rem] cursor-pointer'>
            <Dropdown>
              <Dropdown.Trigger>
                <VerticalMoreIcon />
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {}}>수정하기</Dropdown.Item>
                <Dropdown.Item onClick={() => {}}>삭제하기</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        {['체리', '오크', '카라멜', '시트러스', '꽃'].map((flavor) => (
          <div
            key={flavor}
            className='w-fit rounded-full border border-gray-300 px-5 py-2 text-center text-lg text-gray-900'
          >
            {flavor}
          </div>
        ))}
      </div>
      {isOpen ? (
        <>
          <div className='text-lg'>
            <p className='text-gray-900'>
              description, Deep marron color, tasting notes of blackberry,
              cherry, and chocolate. Super rich and complex, with a long finish.
              Amazing value for the price. Could drink all day every day with or
              without food.
            </p>
          </div>
          <div>인풋 레인지지</div>
        </>
      ) : null}
      <div
        className='flex cursor-pointer justify-center transition-all'
        onClick={handleOpen}
      >
        <ChevronArrowIcon direction={isOpen ? 'top' : 'bottom'} />
      </div>
    </div>
  );
}
