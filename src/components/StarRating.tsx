'use client';

import { useState } from 'react';

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  size?: number; // 폰트 사이즈
}

export default function StarRating({
  value,
  onChange,
  max = 5,
  size = 24,
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className='flex gap-1'>
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1;
        const isActive =
          hovered !== null ? hovered >= starValue : value >= starValue;

        return (
          <button
            key={starValue}
            aria-label={`${starValue}점`}
            className={`text-[${size}px] transition-colors`}
            type='button'
            onClick={() => onChange(starValue)}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className={isActive ? 'text-yellow-400' : 'text-gray-300'}>
              ★
            </span>
          </button>
        );
      })}
    </div>
  );
}
