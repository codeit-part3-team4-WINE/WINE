'use client';

import { useState } from 'react';

import DualRangeSlider from '@/app/(with-header)/wines/components/DualRangeSlider';
import Button from '@/components/Button';

export default function UiDualRangeSlider() {
  const max = 10000;
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(max);

  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>
        Dual Range Slider
      </h1>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Example</h2>

      <div className='mt-10'>
        <DualRangeSlider
          endValue={max}
          gap={100}
          maxValue={maxPrice}
          minValue={minPrice}
          startValue={0}
          onMaxValueChange={(value) => setMaxPrice(value)}
          onMinValueChange={(value) => setMinPrice(value)}
        />
      </div>

      <p className='content-text mt-10'>
        {minPrice.toLocaleString()}원 ~ {maxPrice.toLocaleString()}원
      </p>

      <Button
        onClick={() => {
          setMinPrice(0);
          setMaxPrice(max);
        }}
      >
        reset
      </Button>
    </div>
  );
}
