'use client';

import { useState } from 'react';

import FilterIcon from '@/app/assets/icons/filter';
import Button from '@/components/Button';
import MultiSelect from '@/components/MultiSelect';

import PriceRangeSlider from './PriceRangeSlider';
import RadioGroup from './Radio';

/**
 * DesktopFilterPanel
 *
 * @description 데스크탑에서 보여지는 검색 조건 필터링 패널
 */
function DesktopFilterPanel() {
  const maxRange = 100000; // api 연결 이후 등록된 와인의 최대 가격으로 변경할 예정입니다.
  const [selectedRating, setSelectedRating] = useState<number | string | null>(
    null,
  );
  const [selectedWineTypes, setSelectedWineTypes] = useState<
    (string | number)[]
  >([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState<number>(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number>(maxRange);

  return (
    <div className='sticky top-30 mt-30 flex h-fit w-full flex-col gap-16 max-xl:hidden'>
      <div>
        <MultiSelect
          selectedValues={selectedWineTypes}
          title='WINE TYPES'
          titleClassName='mb-4 text-[1.8rem]'
          onSelectionChange={setSelectedWineTypes}
        >
          <MultiSelect.Option value='red'>Red</MultiSelect.Option>
          <MultiSelect.Option value='white'>White</MultiSelect.Option>
          <MultiSelect.Option value='sparkling'>Sparkling</MultiSelect.Option>
        </MultiSelect>
      </div>

      <div>
        <PriceRangeSlider
          maxValue={maxRange}
          minValue={0}
          title='PRICE'
          titleClassName='mb-0 text-[1.8rem]'
          onMaxValueChange={(value) => setSelectedMinPrice(value)}
          onMinValueChange={(value) => setSelectedMaxPrice(value)}
        />
      </div>

      <div>
        <RadioGroup
          title='Rating'
          titleClassName='mb-2 text-[1.8rem]'
          onSelect={(value) => setSelectedRating(value)}
        >
          <RadioGroup.Radio value={1}>전체</RadioGroup.Radio>
          <RadioGroup.Radio value={2}>4.5 - 5.0</RadioGroup.Radio>
          <RadioGroup.Radio value={3}>4.0 - 4.5</RadioGroup.Radio>
          <RadioGroup.Radio value={4}>3.5 - 4.0</RadioGroup.Radio>
          <RadioGroup.Radio value={5}>3.0 - 3.5</RadioGroup.Radio>
          <RadioGroup.Radio value={5}>3.0 이하</RadioGroup.Radio>
        </RadioGroup>
      </div>

      <Button
        className='w-full'
        round='rounded'
        size='sm'
        variant='primary'
        onClick={() =>
          console.log(
            selectedWineTypes,
            selectedMinPrice,
            selectedMaxPrice,
            selectedRating,
          )
        }
      >
        와인 등록하기
      </Button>
    </div>
  );
}

/**
 * MobileFilterButton
 *
 * @description 모바일과 태블릿에서 보여지는 검색 조건 필터링 버튼
 */
function MobileFilterButton() {
  return (
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
  );
}

export default function WineFilterSidebar() {
  return (
    <section className='relative col-start-1 col-end-2 row-start-2 row-end-3 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-4 xl:w-[25rem]'>
      <DesktopFilterPanel />
      <MobileFilterButton />
    </section>
  );
}
