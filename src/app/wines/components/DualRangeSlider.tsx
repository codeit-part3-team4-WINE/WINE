'use client';

import { ChangeEvent, useEffect, useState } from 'react';

interface DualRangeSliderProps {
  startValue?: number;
  endValue?: number;
  gap?: number;
  minValue?: number;
  maxValue?: number;
  onMinValueChange: (value: number) => void;
  onMaxValueChange: (value: number) => void;
}

/**
 * Dual Range Slider
 *
 * @description 최소값과 최대값을 동시에 조정하는 range input입니다.
 *
 * @param startValue - 슬라이더의 시작값 (기본값: 0)
 * @param endValue - 슬라이더의 끝값 (기본값: 100)
 * @param gap - 최소값과 최대값 사이의 최소 간격 (기본값: 1)
 * @param onMinValueChange - 최소값이 변경될 때 호출되는 콜백 함수
 * @param onMaxValueChange - 최대값이 변경될 때 호출되는 콜백 함수
 *
 * @example
 * ```
 * const [minPrice, setMinPrice] = useState(0);
 * const [maxPrice, setMaxPrice] = useState(100);
 *
 * <DualRangeSlider
 *   startValue={0}
 *   endValue={1000}
 *   gap={10}
 *   onMinValueChange={setMinPrice}
 *   onMaxValueChange={setMaxPrice}
 * />
 * ```
 */
export default function DualRangeSlider({
  startValue = 0,
  endValue = 100,
  gap = 1,
  minValue = 0,
  maxValue = 100,
  onMinValueChange,
  onMaxValueChange,
}: DualRangeSliderProps) {
  const [rangeMinValue, setRangeMinValue] = useState(startValue);
  const [rangeMaxValue, setRangeMaxValue] = useState(endValue);
  const [rangeMinPercent, setRangeMinPercent] = useState(0);
  const [rangeMaxPercent, setRangeMaxPercent] = useState(0);
  const disabledGap = gap * 5;

  // UI 업데이트
  useEffect(() => {
    setRangeMinPercent((minValue / endValue) * 100);
    setRangeMaxPercent(100 - (maxValue / endValue) * 100);
  }, [minValue, maxValue, endValue]);

  /** 최소값 슬라이더 변경 핸들러 */
  const rangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = parseInt(e.target.value);

    if (newMinValue >= rangeMaxValue - disabledGap) {
      // min이 max보다 커지면 max도 같이 함께 커진다.
      const newMaxValue = Math.min(newMinValue + disabledGap, endValue);
      const adjustedMinValue = newMaxValue - disabledGap;

      setRangeMinValue(adjustedMinValue);
      setRangeMaxValue(newMaxValue);
      onMinValueChange?.(adjustedMinValue);
      onMaxValueChange?.(newMaxValue);
    } else {
      setRangeMinValue(newMinValue);
      onMinValueChange?.(newMinValue);
    }
  };

  /** 최대값 슬라이더 변경 핸들러 */
  const rangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = parseInt(e.target.value);

    if (newMaxValue <= rangeMinValue + disabledGap) {
      // max가 min보다 작아지면 min도 같이 함께 작아진다.
      const newMinValue = Math.max(newMaxValue - disabledGap, startValue);
      const adjustedMaxValue = newMinValue + disabledGap;

      setRangeMinValue(newMinValue);
      setRangeMaxValue(adjustedMaxValue);
      onMinValueChange?.(newMinValue);
      onMaxValueChange?.(adjustedMaxValue);
    } else {
      setRangeMaxValue(newMaxValue);
      onMaxValueChange?.(newMaxValue);
    }
  };

  return (
    <>
      <div className='relative h-[0.7rem] w-full rounded-2xl bg-gray-100 md:h-[0.9rem]'>
        <div
          className='bg-primary-100 absolute right-[30%] left-[30%] h-[0.7rem] rounded-2xl md:h-[0.9rem]'
          style={{
            left: `${rangeMinPercent}%`,
            right: `${rangeMaxPercent}%`,
          }}
        />
      </div>

      <div className='relative'>
        <input
          className='range-slider'
          max={endValue - gap}
          min={startValue}
          step={gap}
          type='range'
          value={minValue}
          onChange={rangeMinValueHandler}
        />
        <input
          className='range-slider'
          max={endValue}
          min={startValue + gap}
          step={gap}
          type='range'
          value={maxValue}
          onChange={rangeMaxValueHandler}
        />
      </div>
    </>
  );
}
