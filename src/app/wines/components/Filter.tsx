'use client';

import MultiSelect from '@/components/MultiSelect';

import PriceRangeSlider from './PriceRangeSlider';
import RadioGroup from './Radio';

export default function Filter({ filterState, onFilterChange }) {
  const maxRange = 100000; // api 연결 이후 등록된 와인의 최대 가격으로 변경할 예정입니다.

  return (
    <div className='my-10 flex flex-col gap-12'>
      <div>
        <MultiSelect
          selectedValues={filterState.selectedWineTypes}
          title='WINE TYPES'
          titleClassName='mb-6 text-[1.8rem]'
          onSelectionChange={(types) =>
            onFilterChange({ ...filterState, selectedWineTypes: types })
          }
        >
          <MultiSelect.Option value='RED'>Red</MultiSelect.Option>
          <MultiSelect.Option value='WHITE'>White</MultiSelect.Option>
          <MultiSelect.Option value='SPARKLING'>Sparkling</MultiSelect.Option>
        </MultiSelect>
      </div>

      <hr className='text-gray-100' />

      <div>
        <PriceRangeSlider
          currentMaxPrice={filterState.selectedMaxPrice}
          currentMinPrice={filterState.selectedMinPrice}
          maxRange={maxRange}
          title='PRICE'
          onMaxPriceChange={(value) =>
            onFilterChange({ ...filterState, selectedMaxPrice: value })
          }
          onMinPriceChange={(value) =>
            onFilterChange({ ...filterState, selectedMinPrice: value })
          }
        />
      </div>

      <hr className='text-gray-100' />

      <div>
        <RadioGroup
          selectedValue={filterState.selectedRating}
          title='RATING'
          titleClassName='mb-4 text-[1.8rem]'
          onSelect={(value) => {
            onFilterChange({ ...filterState, selectedRating: value });
          }}
        >
          <RadioGroup.Radio value={0.0}>전체</RadioGroup.Radio>
          <RadioGroup.Radio value={5.0}>4.5 - 5.0</RadioGroup.Radio>
          <RadioGroup.Radio value={4.5}>4.0 - 4.5</RadioGroup.Radio>
          <RadioGroup.Radio value={4.0}>3.5 - 4.0</RadioGroup.Radio>
          <RadioGroup.Radio value={3.5}>3.0 - 3.5</RadioGroup.Radio>
        </RadioGroup>
      </div>
    </div>
  );
}
