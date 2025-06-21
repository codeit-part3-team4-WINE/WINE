'use client';

import { cn } from '@/libs/cn';

import DualRangeSlider from './DualRangeSlider';

interface PriceRangeSliderProps {
  title?: string;
  titleClassName?: string;
  maxRange: number;
  currentMinPrice: number;
  currentMaxPrice: number;
  gap?: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
}

/**
 * 가격 범위를 선택할 수 있는 dual range slider 컴포넌트
 *
 * @component
 * @param {PriceRangeSliderProps} props - 컴포넌트 props
 * @param {string} [props.title] - 슬라이더 제목 텍스트
 * @param {string} [props.titleClassName] - 제목에 적용할 CSS 클래스명
 * @param {number} props.maxValue - 슬라이더 최대값
 * @param {number} props.minValue - 슬라이더 최소값 (기본값: 0)
 * @param {number} [props.gap=100] - 최소값과 최대값 사이의 최소 간격
 * @param {(value: number) => void} props.onMinValueChange - 최소값 변경 시 호출되는 콜백 함수
 * @param {(value: number) => void} props.onMaxValueChange - 최대값 변경 시 호출되는 콜백 함수
 *
 * @example
 * <PriceRangeSlider
 *   title="PRICE"
 *   maxValue={10000}
 *   minValue={0}
 *   onMinValueChange={(value) => console.log('Min:', value)}
 *   onMaxValueChange={(value) => console.log('Max:', value)}
 * />
 */
export default function PriceRangeSlider({
  title,
  titleClassName,
  maxRange,
  currentMinPrice,
  currentMaxPrice,
  gap = 100,
  onMinPriceChange,
  onMaxPriceChange,
}: PriceRangeSliderProps) {
  return (
    <div className='w-full'>
      <h1 className={cn('sub-title-text mb-3', titleClassName)}>{title}</h1>
      <p className='content-text text-primary-100 mb-8'>
        <span className='sub-content-text mr-1 text-gray-400'>₩</span>
        {currentMinPrice.toLocaleString('ko-KR')}
        <span className='mx-2 text-gray-400'>~</span>
        <span className='sub-content-text mr-1 text-gray-400'>₩</span>
        {currentMaxPrice.toLocaleString('ko-KR')}
      </p>
      <DualRangeSlider
        endValue={maxRange}
        gap={gap}
        maxValue={currentMaxPrice}
        minValue={currentMinPrice}
        startValue={0}
        onMaxValueChange={onMaxPriceChange}
        onMinValueChange={onMinPriceChange}
      />
    </div>
  );
}
