'use client';
import { useState } from 'react';

import ChevronArrowIcon from '@/app/assets/icons/chevron-arrow';
import HeartIcon from '@/app/assets/icons/heart';
import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import StarBadge from '@/components/Badge/StarBadge';
import Dropdown from '@/components/Dropdown';
import InputRange from '@/components/InputRange';
import ProfileImg from '@/components/ProfileImg';
import { formatToTimeAgo } from '@/libs/formmatToTimeago';

import { ReviewType } from '../types';

export default function ReviewCard({ review }: { review: ReviewType }) {
  const [isOpen, setIsOpen] = useState(true);

  const {
    rating,
    lightBold,
    smoothTannic,
    drySweet,
    softAcidic,
    aroma,
    content,
    createdAt,
    user,
  } = review;
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [values, setValues] = useState<{
    lightBold: number;
    smoothTannic: number;
    drySweet: number;
    softAcidic: number;
  }>({
    lightBold,
    smoothTannic,
    drySweet,
    softAcidic,
  });

  const handleChange = (name: keyof typeof values, value: number) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className='relative flex flex-col gap-5 rounded-2xl border border-gray-300 p-10'>
      <div className='flex items-start justify-between'>
        <div className='flex gap-5'>
          <ProfileImg size='md' />
          <div className='flex flex-col items-center justify-center'>
            <p className='text-2lg font-bold'>{user.nickname}</p>
            <p className='text-lg text-gray-500'>
              {formatToTimeAgo(createdAt)}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2 pt-2'>
          <div className='group size-[3.8rem] cursor-pointer'>
            <HeartIcon className='group-hover:fill-red-400 group-hover:stroke-red-400' />
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
      <div className='flex items-center justify-between gap-2'>
        <div
          className='hide-scrollbar flex flex-1 items-center gap-2 overflow-x-scroll'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {aroma.map((flavor) => (
            <div
              key={flavor}
              className='flex-shrink-0 rounded-full border border-gray-300 px-5 py-2 text-center text-lg text-gray-900'
            >
              {flavor}
            </div>
          ))}
        </div>
        <StarBadge className='text-2lg flex-shrink-0' rating={rating} />
      </div>
      {isOpen && (
        <>
          <div className='text-lg'>
            <p className='text-gray-900'>{content}</p>
          </div>
          <div>
            <InputRange disabled values={values} onChange={handleChange} />
          </div>
        </>
      )}
      <div
        className='flex cursor-pointer justify-center transition-all'
        onClick={handleOpen}
      >
        <ChevronArrowIcon direction={isOpen ? 'top' : 'bottom'} />
      </div>
    </div>
  );
}
