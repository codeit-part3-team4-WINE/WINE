'use client';

import PriceRangeSlider from './PriceRangeSlider';
import RadioGroup from './Radio';
import ToggleRadioGroup from './ToggleRadio';

export default function Filter({ priceMaxRange, filterState, onFilterChange }) {
  const maxRange = priceMaxRange;

  return (
    <div className='my-10 flex flex-col gap-12 xl:gap-24'>
      <div>
        <ToggleRadioGroup
          radioGroupClassName='gap-3'
          selectedValue={filterState.selectedWineTypes}
          title='WINE TYPES'
          titleClassName='mb-4 text-[1.8rem]'
          onSelect={(types) =>
            onFilterChange({ ...filterState, selectedWineTypes: types })
          }
        >
          <ToggleRadioGroup.Radio value='RED'>RED</ToggleRadioGroup.Radio>
          <ToggleRadioGroup.Radio value='WHITE'>WHITE</ToggleRadioGroup.Radio>
          <ToggleRadioGroup.Radio value='SPARKLING'>
            SPARKLING
          </ToggleRadioGroup.Radio>
        </ToggleRadioGroup>
      </div>

      <hr className='text-gray-100 xl:hidden' />

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

      <hr className='text-gray-100 xl:hidden' />

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
