'use client';

import { useState } from 'react';

import MultiSelect from '@/components/MultiSelect';

import PriceRangeSlider from './PriceRangeSlider';
import RadioGroup from './Radio';

export default function Filter() {
  const maxRange = 100000; // api 연결 이후 등록된 와인의 최대 가격으로 변경할 예정입니다.
  const [selectedRating, setSelectedRating] = useState<number | string>(0);
  const [selectedWineTypes, setSelectedWineTypes] = useState<
    (string | number)[]
  >([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxRange);

  return (
    <div className='my-10 flex flex-col gap-12'>
      <div>
        <MultiSelect
          selectedValues={selectedWineTypes}
          title='WINE TYPES'
          titleClassName='mb-6 text-[1.8rem]'
          onSelectionChange={setSelectedWineTypes}
        >
          <MultiSelect.Option value='red'>Red</MultiSelect.Option>
          <MultiSelect.Option value='white'>White</MultiSelect.Option>
          <MultiSelect.Option value='sparkling'>Sparkling</MultiSelect.Option>
        </MultiSelect>
      </div>

      <hr className='text-gray-100' />

      <div>
        <PriceRangeSlider
          currentMaxPrice={selectedMaxPrice}
          currentMinPrice={selectedMinPrice}
          maxRange={maxRange}
          title='PRICE'
          onMaxPriceChange={setSelectedMaxPrice}
          onMinPriceChange={setSelectedMinPrice}
        />
      </div>

      <hr className='text-gray-100' />

      <div>
        <RadioGroup
          selectedValue={selectedRating}
          title='RATING'
          titleClassName='mb-4 text-[1.8rem]'
          onSelect={(value) => setSelectedRating(value)}
        >
          <RadioGroup.Radio value={1}>전체</RadioGroup.Radio>
          <RadioGroup.Radio value={2}>4.5 - 5.0</RadioGroup.Radio>
          <RadioGroup.Radio value={3}>4.0 - 4.5</RadioGroup.Radio>
          <RadioGroup.Radio value={4}>3.5 - 4.0</RadioGroup.Radio>
          <RadioGroup.Radio value={5}>3.0 - 3.5</RadioGroup.Radio>
        </RadioGroup>
      </div>
    </div>
  );
}
