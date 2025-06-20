'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { deleteReview } from '@/actions/review';
import { privateInstance } from '@/apis/privateInstance'; // 좋아요 기능 요청용
import ChevronArrowIcon from '@/app/assets/icons/chevron-arrow';
import HeartIcon from '@/app/assets/icons/heart';
import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import StarBadge from '@/components/Badge/StarBadge';
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal';
import Dropdown from '@/components/Dropdown';
import InputRange from '@/components/InputRange';
import ProfileImg from '@/components/ProfileImg';
import { cn } from '@/libs/cn';
import useUserStore from '@/stores/Auth-store/authStore';
import { getTimeAgo } from '@/utils/getTimeAgo';

import { ReviewType } from '../types';
import { AromaType } from './AromaAnalysis/types';
import { getAromaLabel } from './AromaAnalysis/utils';

interface ReviewCardProps {
  review: ReviewType;
  onEdit?: (review: ReviewType) => void;
  onDelete?: () => void;
  wineId: number;
}

export default function ReviewCard({
  review,
  onEdit,
  onDelete,
  wineId,
}: ReviewCardProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isLiked, setIsLiked] = useState(review.isLiked);
  const [isOwner, setIsOwner] = useState(false);
  const userInfo = useUserStore((state) => state.user);
  const queryClient = useQueryClient();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const [values, setValues] = useState({
    lightBold,
    smoothTannic,
    drySweet,
    softAcidic,
  });

  useEffect(() => {
    setIsLiked(review.isLiked);
    setValues({
      lightBold: review.lightBold,
      smoothTannic: review.smoothTannic,
      drySweet: review.drySweet,
      softAcidic: review.softAcidic,
    });
  }, [review]);

  useEffect(() => {
    if (userInfo?.id === user.id) {
      setIsOwner(true);
    }
  }, [userInfo?.id, user?.id]);

  const handleChange = (name: keyof typeof values, value: number) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    onEdit?.(review);
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
      console.error('Like post error:', error);
    }
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='relative flex flex-col gap-5 rounded-2xl border border-gray-300 p-10'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-5'>
          <ProfileImg className='size-[4.2rem]' size='md' />
          <div className='flex flex-col justify-center'>
            <p className='text-lg font-bold'>{user.nickname}</p>
            <p className='text-md text-gray-500'>{getTimeAgo(createdAt)}</p>
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
                  <Dropdown.Item onClick={handleEdit}>수정하기</Dropdown.Item>
                  <Dropdown.Item onClick={() => setIsDeleteModalOpen(true)}>
                    삭제하기
                  </Dropdown.Item>
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
          <InputRange
            disabled
            className=''
            values={values}
            onChange={handleChange}
          />
        </div>
      </div>

      <div
        className='flex cursor-pointer justify-center transition-all'
        onClick={handleToggle}
      >
        <div className='animate-bounce'>
          <ChevronArrowIcon direction={isOpen ? 'top' : 'bottom'} />
        </div>
      </div>
      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={async () => {
            const result = await deleteReview(review.id);
            if (result === null) {
              queryClient.invalidateQueries({ queryKey: ['wine', wineId] });
              onDelete?.(); // 선택적으로 콜백 실행
              setIsDeleteModalOpen(false);
            } else {
              alert(result);
            }
          }}
        />
      )}
    </div>
  );
}
