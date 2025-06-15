'use client';

import { useEffect, useState } from 'react';

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

import Filter from './Filter';
import WineListContainer from './WineListContainer';
import WineSearchBar from './WineSearchBar';

export default function WineSearchSection() {
  const maxRange = 10000;
  const [filterState, setFilterState] = useState({
    selectedRating: 0,
    selectedWineTypes: [],
    selectedMinPrice: 0,
    selectedMaxPrice: maxRange,
    searchQuery: '',
  });

  useEffect(() => {
    // console.log('Filter state changed:', filterState);
  }, [filterState]);

  return (
    <>
      <WineSearchBar />
      {/* <WineFilterSidebar
        filterState={filterState}
        onFilterChange={setFilterState}
      /> */}

      <section className='relative col-start-1 col-end-2 row-start-2 row-end-3 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-4 xl:w-[25rem]'>
        <div className='sticky top-30 mt-30 flex h-[30rem] w-full flex-col gap-16 max-xl:hidden'>
          <Filter filterState={filterState} onFilterChange={setFilterState} />

          <Button
            className='w-full'
            round='rounded'
            size='sm'
            variant='primary'
            onClick={() => {
              console.log('Filter state changed:', filterState);
            }}
          >
            필터 적용하기
          </Button>
        </div>

        <div className='flex h-full w-full items-center xl:hidden'>
          <Modal>
            <ModalTrigger asChild>
              <Button
                className='size-[4rem] p-3'
                round='rounded'
                variant='outline'
                onClick={() => {}}
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
                  filterState={filterState}
                  onFilterChange={setFilterState}
                />
              </ModalBody>
              <ModalFooter>
                <ModalClose />
                <Button
                  className='flex-1'
                  size='sm'
                  variant='secondary'
                  onClick={() => {
                    setFilterState({
                      selectedRating: 0,
                      selectedWineTypes: [],
                      selectedMinPrice: 0,
                      selectedMaxPrice: maxRange,
                      searchQuery: filterState.searchQuery,
                    });
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
                      console.log('Filter state changed:', filterState);
                    }}
                  >
                    필터 적용하기
                  </Button>
                </ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </section>

      <WineListContainer />
    </>
  );
}
