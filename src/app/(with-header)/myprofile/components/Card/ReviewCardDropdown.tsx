'use client';

import { useState } from 'react';

import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import Dropdown from '@/components/Dropdown';
import ReviewModal from '@/components/Modals/ReviewModal/ReviewModal';

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

interface Props {
  onDelete?: () => void;
  reviewData: Review;
}

export default function ReviewCardDropdown({ onDelete, reviewData }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(reviewData);
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <VerticalMoreIcon />
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setIsOpenModal(true)}>
            수정하기
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onDelete?.()}>삭제하기</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ReviewModal
        initialReview={reviewData}
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        wineId={reviewData.wine.id}
        wineName={reviewData.wine.name}
      />
    </>
  );
}
