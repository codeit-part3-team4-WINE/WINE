'use client';

import { useState } from 'react';

import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';
import Button from '@/components/Button';
import SearchInput from '@/components/Inputs/SearchInput';
import MultiSelect from '@/components/MultiSelect';

import FilterIcon from '../assets/icons/filter';
import PriceRangeSlider from './components/PriceRangeSlider';
import RadioGroup from './components/Radio';
import RecommendedWineItem from './components/RecommendedWineItem';
import WineListCard from './components/WineListCard';

function RecommendedWineList() {
  return (
    <div className='rounded-3xl bg-gray-100 p-8'>
      <h2 className='sub-title-text mb-4'>이번 달 추천 와인</h2>

      <div className='flex gap-6 overflow-y-scroll'>
        {Array.from({ length: 10 }, (_, index) => (
          <RecommendedWineItem
            key={index}
            id={index + 1}
            imageSrc={dummyWineImage}
            name='Sentinel Carbernet Sauvignon 2016'
            rating={4.2}
          />
        ))}
      </div>
    </div>
  );
}

function WineRecommendationSection() {
  return (
    <div className='col-start-1 col-end-4 row-start-1 row-end-2'>
      <RecommendedWineList />
    </div>
  );
}

function WineSearchBar() {
  return (
    <div className='col-start-2 col-end-4 row-start-2 row-end-3 md:col-end-3 md:row-end-3 xl:col-start-2 xl:col-end-4 xl:row-start-2 xl:row-end-3'>
      <SearchInput className='w-full' size='lg' />
    </div>
  );
}

function ReviewActionButton() {
  return (
    <div className='fixed bottom-0 left-0 z-20 flex h-[8rem] w-full items-center justify-center border-t-1 border-gray-100 bg-white md:relative md:z-auto md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 md:h-full md:w-[20rem] md:border-none xl:hidden'>
      <Button
        className='h-[5rem] w-[90vw] md:h-full md:w-full'
        round='rounded'
        variant='primary'
        onClick={() => console.log('button')}
      >
        와인 등록하기
      </Button>
    </div>
  );
}

function WineFilterSidebar() {
  const [selected, setSelected] = useState<number | string | null>(null);
  const [values, setValues] = useState<(string | number)[]>([]);

  return (
    <div className='relative col-start-1 col-end-2 row-start-2 row-end-3 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-4 xl:w-[25rem]'>
      <div className='sticky top-30 mt-30 flex h-[30rem] w-full flex-col gap-16 max-xl:hidden'>
        <div>
          <MultiSelect
            selectedValues={values}
            title='WINE TYPES'
            titleClassName='mb-4 text-[1.8rem]'
            onSelectionChange={setValues}
          >
            <MultiSelect.Option value='red'>Red</MultiSelect.Option>
            <MultiSelect.Option value='white'>White</MultiSelect.Option>
            <MultiSelect.Option value='sparkling'>Sparkling</MultiSelect.Option>
          </MultiSelect>
        </div>

        <div>
          <PriceRangeSlider
            maxValue={10000}
            minValue={0}
            title='PRICE'
            titleClassName='mb-0 text-[1.8rem]'
            onMaxValueChange={(value) => console.log('Max:', value)}
            onMinValueChange={(value) => console.log('Min:', value)}
          />
        </div>

        <div>
          <RadioGroup
            title='Rating'
            titleClassName='mb-2 text-[1.8rem]'
            onSelect={(value) => setSelected(value)}
          >
            <RadioGroup.Radio value={1}>전체</RadioGroup.Radio>
            <RadioGroup.Radio value={2}>4.5 - 5.0</RadioGroup.Radio>
            <RadioGroup.Radio value={3}>4.0 - 4.5</RadioGroup.Radio>
            <RadioGroup.Radio value={4}>3.5 - 4.0</RadioGroup.Radio>
            <RadioGroup.Radio value={5}>3.0 - 3.5</RadioGroup.Radio>
          </RadioGroup>
        </div>

        <Button
          className='w-full'
          round='rounded'
          size='sm'
          variant='primary'
          onClick={() => console.log(selected)}
        >
          와인 등록하기
        </Button>
      </div>
      <div className='flex h-full w-full items-center xl:hidden'>
        <Button
          className='size-[4rem] p-3'
          round='rounded'
          variant='outline'
          onClick={() => console.log('button')}
        >
          <FilterIcon size={23} />
        </Button>
      </div>
    </div>
  );
}

function WineListContainer() {
  return (
    <div className='col-start-1 col-end-4 row-start-3 row-end-5 flex flex-col gap-6 xl:col-start-2 xl:col-end-4 xl:row-start-3 xl:row-end-5'>
      {Array.from({ length: 10 }, (_, index) => (
        <WineListCard
          key={index}
          country='Western Cape, South Africa'
          id={index + 1}
          image={dummyWineImage}
          name='Sentinel Carbernet Sauvignon 2016'
          rating={4.8}
          recentReview='Cherry, cocoa, vanilla and clove - beautiful red fruit driven Amarone.
      Low acidity and medium tannins. Nice long velvety finish.'
          reviewCount={47}
        />
      ))}
    </div>
  );
}

export default function WinesPage() {
  return (
    <div className='relative grid min-h-screen grid-cols-[auto_1fr_auto] grid-rows-[auto_4rem_1fr_auto] gap-x-4 gap-y-14 xl:grid-cols-[auto_1fr] xl:gap-x-16'>
      <WineRecommendationSection />
      <WineSearchBar />
      <ReviewActionButton />
      <WineFilterSidebar />
      <WineListContainer />
    </div>
  );
}
