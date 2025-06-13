'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';
import { cn } from '@/libs/cn';

import RecommendedWineItem from './RecommendedWineItem';

const WineCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wineData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    imageSrc: dummyWineImage,
    name: 'Sentinel Carbernet Sauvignon 2016',
    rating: 4.2,
  }));

  const cardsPerView = 3;
  const maxIndex = wineData.length - cardsPerView;

  // 자동 슬라이드 (선택사항)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return maxIndex;
      return prev - 1;
    });
  };

  return (
    <div className='rounded-3xl bg-gray-100 p-8'>
      <h2 className='sub-title-text mb-4'>이번 달 추천 와인</h2>

      <div className='relative overflow-hidden'>
        <motion.div
          animate={{
            x: `-${currentIndex * (100 / cardsPerView)}%`,
          }}
          className='flex gap-6'
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {wineData.map((wine) => (
            <motion.div
              key={wine.id}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <RecommendedWineItem
                id={wine.id}
                imageSrc={wine.imageSrc}
                name={wine.name}
                rating={wine.rating}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 네비게이션 버튼 */}
        <button
          className='absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 shadow-lg transition-colors hover:bg-white'
          onClick={prevSlide}
        >
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              d='M15 19l-7-7 7-7'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
          </svg>
        </button>

        <button
          className='absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 shadow-lg transition-colors hover:bg-white'
          onClick={nextSlide}
        >
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              d='M9 5l7 7-7 7'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
          </svg>
        </button>
      </div>

      {/* 인디케이터 */}
      <div className='mt-6 flex justify-center gap-2'>
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              index === currentIndex ? 'bg-gray-600' : 'bg-gray-300',
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function WineRecommendationSection() {
  return (
    <section className='col-start-1 col-end-4 row-start-1 row-end-2'>
      <WineCarousel />
    </section>
  );
}
