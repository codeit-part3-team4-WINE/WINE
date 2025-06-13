'use client';

import { useState } from 'react';

import DualRangeSlider from './DualRangeSlider';

export default function PriceRangeSlider() {
  const max = 10000; // dummy => 와인 데이터에서 최대 값으로 변경 예정
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(max);

  return (
    <div className='w-1/2'>
      <h1 className='sub-title-text text-gray-800'>PRICE</h1>
      <p className='content-text text-primary-100 mt-3 mb-8'>
        <span className='sub-content-text mr-1 text-gray-400'>₩</span>
        {minPrice.toLocaleString('ko-KR')}
        <span className='mx-2 text-gray-400'>~</span>
        <span className='sub-content-text mr-1 text-gray-400'>₩</span>
        {maxPrice.toLocaleString('ko-KR')}
      </p>
      <DualRangeSlider
        endValue={max}
        gap={100}
        startValue={0}
        onMaxValueChange={(value) => setMaxPrice(value)}
        onMinValueChange={(value) => setMinPrice(value)}
      />
    </div>
  );
}
