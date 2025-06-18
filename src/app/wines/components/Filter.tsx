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
          radioGroupClassName='gap-3 flex-wrap'
          selectedValue={filterState.selectedWineType}
          title='종류'
          titleClassName='mb-4 text-[1.8rem]'
          onSelect={(type) =>
            onFilterChange({ ...filterState, selectedWineType: type })
          }
        >
          {(Object.keys(WINE_TYPES) as Array<keyof typeof WINE_TYPES>).map(
            (key) => (
              <ToggleRadioGroup.Radio key={key} value={key}>
                {WINE_TYPES[key]}
              </ToggleRadioGroup.Radio>
            ),
          )}
        </ToggleRadioGroup>
      </div>

      <hr className='text-gray-100 xl:hidden' />

      <div>
        <PriceRangeSlider
          currentMaxPrice={filterState.selectedMaxPrice}
          currentMinPrice={filterState.selectedMinPrice}
          maxRange={maxRange ?? DEFAULT_MAX_PRICE}
          title='가격'
          titleClassName='text-[1.8rem]'
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
          title='별점'
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
