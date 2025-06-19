'use client';

import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { deleteWine } from '@/actions/wine';
import PriceBadge from '@/components/Badge/PriceBadge';
import Button from '@/components/Button';
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/components/Modal';
import { cn } from '@/libs/cn';

import CardDropdown from './CardDropdown';

interface WineCardProps {
  wine: {
    id: number;
    name: string;
    region: string;
    image: string;
    price: number;
    type: string;
  };
  className?: string;
  isDropdown?: boolean;
}

/**
 * 와인 카드 컴포넌트
 *
 * @param {string} props.name - 와인 이름
 * @param {string} props.region - 와인 지역
 * @param {string} props.image - 와인 이미지 URL
 * @param {number} props.price - 와인 가격
 * @param {string} [props.className] - 추가 클래스 이름 (cursor-pointer는 기본 스타일에선 적용 X className으로 추가 필요)
 * @param {boolean} [props.isDropdown=true] - 드롭다운 메뉴 표시 여부
 */
export default function WineCard({
  wine,
  className,
  isDropdown = true,
}: WineCardProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  return (
    <article
      className={cn(
        'relative flex h-[16rem] w-full rounded-[1.2rem] border border-gray-300 bg-white px-[2rem] py-[2rem] md:mt-20 md:h-[22.8rem]',
        className,
      )}
    >
      <div className='absolute bottom-0 left-[2.5rem] h-[18rem] w-[5.3rem] md:-top-17 md:left-[3.5rem] md:h-[27rem] md:w-[8rem]'>
        <Image
          fill
          alt='와인 이미지'
          className='object-cover'
          src={wine.image}
        />
      </div>
      <div className='ml-[8rem] flex h-full w-[19rem] flex-col justify-center gap-y-2 md:ml-[14rem] md:w-[30rem] md:gap-y-5'>
        <h1 className='text-[2rem] font-bold text-gray-800 md:text-[3rem]'>
          {wine.name}
        </h1>
        <h2 className='text-[1.3rem] text-gray-500 md:text-lg'>
          {wine.region}
        </h2>
        <div className='mt-2'>
          <PriceBadge price={wine.price} />
        </div>
      </div>
      {isDropdown && (
        <div className='absolute top-12 right-5 md:top-15 md:right-10 xl:right-15'>
          <CardDropdown
            wine={wine}
            onDeleteClick={() => setIsDeleteModalOpen(true)}
          />
        </div>
      )}
      {isDeleteModalOpen && (
        <Modal
          externalIsOpen={isDeleteModalOpen}
          onExternalChange={setIsDeleteModalOpen}
        >
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
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  취소
                </Button>
              </ModalClose>
              <Button
                className='flex-1'
                size='sm'
                variant='primary'
                onClick={async () => {
                  const result = await deleteWine(wine.id);
                  if (result.success) {
                    queryClient.invalidateQueries({ queryKey: ['wines'] }); // 캐시 무효화 (선택)
                    setIsDeleteModalOpen(false);
                    router.push('/wines');
                  } else {
                    alert(result.message || '와인 삭제에 실패했습니다.');
                  }
                }}
              >
                삭제하기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </article>
  );
}
