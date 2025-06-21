'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { deleteReview } from '@/actions/review';
import StarBadge from '@/components/Badge/StarBadge';
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal';
import { getTimeAgo } from '@/utils/getTimeAgo';

import ReviewCardDropdown from './ReviewCardDropdown';

interface Review {
  id: number;
  content: string;
  rating: number;
  updatedAt: string;
  aroma: string[];
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;

  wine: {
    id: number;
    name: string;
    region: string;
    image: string;
    price: number;
    avgRating: number;
    type: string;
  };
}

/**
 * 리뷰 카드 컴포넌트
 *
 * @param {string} props.time - 리뷰 작성 시각
 * @param {number} props.rating - 리뷰 별점
 * @param {string} props.wine - 와인 이름
 * @param {string} props.content - 리뷰 내용
 */
export default function ReviewCard({
  review,

  onDelete,
}: {
  review: Review;

  onDelete?: () => void;
}) {
  const agoTime = getTimeAgo(review.updatedAt);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const queryClient = useQueryClient();

  return (
    <article className='flex min-h-[18.7rem] w-full cursor-pointer flex-col gap-[1.7rem] rounded-[1.6rem] border border-gray-300 bg-white px-[2rem] py-[1.6rem] md:min-h-[19rem] md:px-[4em] md:py-[2.3rem] xl:min-h-[20rem] xl:gap-[2rem]'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-6 md:gap-8'>
          <StarBadge rating={review.rating} />
          <span className='text-md text-gray-500'>{agoTime}</span>
        </div>
        <ReviewCardDropdown
          reviewData={review}
          onDelete={() => setIsDeleteModalOpen(true)}
        />
      </div>
      <div className='flex flex-col gap-[1rem]'>
        <div className='text-md text-gray-500 xl:text-lg'>
          {review.wine.name}
        </div>
        <p className='text-md break-words whitespace-normal text-gray-800 xl:text-lg'>
          {review.content}
        </p>
      </div>
      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={async () => {
            const result = await deleteReview(review.id);
            if (result === null) {
              queryClient.invalidateQueries({
                queryKey: ['wine', review.wine.id],
              });
              onDelete?.(); // 선택적으로 콜백 실행
              setIsDeleteModalOpen(false);
            } else {
              alert(result);
            }
          }}
        />
      )}
    </article>
  );
}
