'use client';

import { useState } from 'react';

import FilterIcon from '@/app/assets/icons/filter';
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
import WineModal from '@/components/Modals/WineModal/WineModal';

import Filter from './Filter';

/**
 * DesktopFilterPanel
 *
 * @description 데스크탑에서 보여지는 검색 조건 필터링 패널
 */
function DesktopFilterPanel({ filterState, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='sticky top-30 mt-30 flex h-[30rem] w-full flex-col gap-16 max-xl:hidden'>
        <Filter filterState={filterState} onFilterChange={onFilterChange} />

        <Button
          className='w-full'
          round='rounded'
          size='sm'
          variant='primary'
          onClick={() => {
            setIsOpen(true);
          }}
        >
          와인 등록하기
        </Button>
      </div>
      <WineModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

/**
 * MobileFilterButton
 *
 * @description 모바일과 태블릿에서 보여지는 검색 조건 필터링 버튼
 */
function MobileFilterButton({ filterState, onFilterChange }) {
  const [tempFilterState, setTempFilterState] = useState(filterState); // 모바일, 태블릿용 임시 filterState

  return (
    <div className='flex h-full w-full items-center xl:hidden'>
      <Modal>
        <ModalTrigger asChild>
          <Button
            className='size-[4rem] p-3'
            round='rounded'
            variant='outline'
            onClick={() => setTempFilterState(filterState)}
          >
            <FilterIcon size={23} />
          </Button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>필터</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Filter
              filterState={tempFilterState}
              onFilterChange={setTempFilterState}
            />
          </ModalBody>
          <ModalFooter>
            <ModalClose />
            <Button
              className='flex-1'
              size='sm'
              variant='secondary'
              onClick={() => {
                const resetState = {
                  selectedRating: 0,
                  selectedWineTypes: [],
                  selectedMinPrice: 0,
                  selectedMaxPrice: 10000, // temp
                  searchQuery: filterState.searchQuery, // 검색어는 유지
                };
                onFilterChange(resetState);
                setTempFilterState(resetState);
              }}
            >
              초기화
            </Button>
            <ModalClose asChild>
              <Button
                className='flex-2'
                size='sm'
                variant='primary'
                onClick={() => {
                  onFilterChange(tempFilterState);
                }}
              >
                필터 적용하기
              </Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default function WineFilterSidebar({ filterState, onFilterChange }) {
  return (
    <section className='relative col-start-1 col-end-2 row-start-2 row-end-3 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-4 xl:w-[25rem]'>
      <DesktopFilterPanel
        filterState={filterState}
        onFilterChange={onFilterChange}
      />
      <MobileFilterButton
        filterState={filterState}
        onFilterChange={onFilterChange}
      />
    </section>
  );
}
