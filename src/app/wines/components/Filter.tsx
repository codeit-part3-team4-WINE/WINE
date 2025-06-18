'use client';

import { DEFAULT_MAX_PRICE, RATING_OPTIONS, WINE_TYPES } from '../constants';
import { FilterProps } from '../types';
import PriceRangeSlider from './PriceRangeSlider';
import RadioGroup from './Radio';
import ToggleRadioGroup from './ToggleRadio';

export default function Filter({
  priceMaxRange,
  filterState,
  onFilterChange,
}: FilterProps) {
  const maxRange = priceMaxRange;

  return (
    <div className='my-10 flex flex-col gap-12 xl:gap-24'>
      <div>
        <ToggleRadioGroup
          radioGroupClassName='gap-3'
          selectedValue={filterState.selectedWineType}
          title='WINE TYPES'
          titleClassName='mb-4 text-[1.8rem]'
          onSelect={(type) =>
            onFilterChange({ ...filterState, selectedWineType: type })
          }
        >
          <ToggleRadioGroup.Radio value={WINE_TYPES.RED}>
            {WINE_TYPES.RED}
          </ToggleRadioGroup.Radio>
          <ToggleRadioGroup.Radio value={WINE_TYPES.WHITE}>
            {WINE_TYPES.WHITE}
          </ToggleRadioGroup.Radio>
          <ToggleRadioGroup.Radio value={WINE_TYPES.SPARKLING}>
            {WINE_TYPES.SPARKLING}
          </ToggleRadioGroup.Radio>
        </ToggleRadioGroup>
      </div>

      <hr className='text-gray-100 xl:hidden' />

      <div>
        <PriceRangeSlider
          currentMaxPrice={filterState.selectedMaxPrice}
          currentMinPrice={filterState.selectedMinPrice}
          maxRange={maxRange ?? DEFAULT_MAX_PRICE}
          title='PRICE'
          onMaxPriceChange={(value) =>
            onFilterChange((prev) => ({
              ...prev,
              selectedMaxPrice: value,
            }))
          }
          onMinPriceChange={(value) =>
            onFilterChange((prev) => ({
              ...prev,
              selectedMinPrice: value,
            }))
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
          {RATING_OPTIONS.map((option) => (
            <RadioGroup.Radio key={option.value} value={option.value}>
              {option.label}
            </RadioGroup.Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
