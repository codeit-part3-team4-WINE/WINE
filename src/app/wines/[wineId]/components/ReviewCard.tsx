'use client';
import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import ChevronArrowIcon from '@/app/assets/icons/chevron-arrow';
import HeartIcon from '@/app/assets/icons/heart';
import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import StarBadge from '@/components/Badge/StarBadge';
import Dropdown from '@/components/Dropdown';
import InputRange from '@/components/InputRange';
import ProfileImg from '@/components/ProfileImg';
import { cn } from '@/libs/cn';
import { formatToTimeAgo } from '@/libs/formmatToTimeago';
import useUserStore from '@/stores/Auth-store/authStore';

import { ReviewType } from '../types';
import { AromaType } from './AromaAnalysis/types';
import { getAromaLabel } from './AromaAnalysis/utils';

export default function ReviewCard({ review }: { review: ReviewType }) {
  const [isOpen, setIsOpen] = useState(true);

  const [isLiked, setIsLiked] = useState(review.isLiked);
  const userInfo = useUserStore((state) => state.user);
  const [isOwner, setIsOwner] = useState(false);

  const {
    id,
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

  useEffect(() => {
    if (userInfo?.id === user.id) {
      setIsOwner(true);
    }
  }, [userInfo?.id, user?.id]);

  const handleChange = (name: keyof typeof values, value: number) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleLike = async () => {
    try {
      if (isLiked) {
        await privateInstance.delete(`/wines/${id}/like`);
      } else {
        await privateInstance.post(`/wines/${id}/like`);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Like post error:', error); // 토스트로 변경
    }
  };

  return (
    <div className='relative flex flex-col gap-5 rounded-2xl border border-gray-300 p-10'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-5'>
          <ProfileImg className='size-[4.2rem]' size='md' />
          <div className='flex flex-col justify-center'>
            <p className='text-lg font-bold'>{user.nickname}</p>
            <p className='text-md text-gray-500'>
              {formatToTimeAgo(createdAt)}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2 pt-2'>
          <div className='group size-[3.8rem]' onClick={handleLike}>
            <HeartIcon
              className={cn(
                'cursor-pointer transition-all group-hover:fill-red-400 group-hover:stroke-red-400 hover:animate-pulse',
                isLiked && 'fill-red-400 stroke-red-400',
              )}
            />
          </div>
          {isOwner && (
            <div className='size-[3.8rem]'>
              <Dropdown>
                <Dropdown.Trigger>
                  <VerticalMoreIcon className='cursor-pointer' />
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => {}}>수정하기</Dropdown.Item>
                  <Dropdown.Item onClick={() => {}}>삭제하기</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
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
              className='text-md flex-shrink-0 rounded-full border border-gray-300 px-5 py-2 text-center text-gray-900'
            >
              {getAromaLabel(flavor as AromaType)}
            </div>
          ))}
        </div>
        <StarBadge className='flex-shrink-0' rating={rating} />
      </div>
      <div
        className={cn(
          'space-y-10 overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[50rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className='text-lg'>
          <p className='text-gray-900'>{content}</p>
        </div>
        <div>
          <InputRange disabled values={values} onChange={handleChange} />
        </div>
      </div>
      <div
        className='flex cursor-pointer justify-center transition-all'
        onClick={handleOpen}
      >
        <div className='animate-bounce'>
          <ChevronArrowIcon direction={isOpen ? 'top' : 'bottom'} />
        </div>
      </div>
    </div>
  );
}
