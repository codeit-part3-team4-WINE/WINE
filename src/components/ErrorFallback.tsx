'use client';

import { useEffect } from 'react';

import type { ErrorFallbackProps } from '@/types/error';

import wineImage from '../app/assets/images/wine_.gif';
import Button from './Button';
import WaveAnimation from './WaveAnimation';

export default function ErrorFallback({
  error,
  reset,
  title = '아이쿠, 문제가 발생했어요! ',
  description,
}: ErrorFallbackProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='fixed inset-0 z-[9999] flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gray-300 text-center'>
      <WaveAnimation />

      <div className='z-10 w-full max-w-xl space-y-6'>
        <div className='mb-2 flex w-full items-center justify-center'>
          <img
            alt='와인 이미지'
            className='mx-auto aspect-square w-[100vw] max-w-md object-contain md:max-w-xl'
            src={
              typeof wineImage === 'string' ? wineImage : (wineImage.src ?? '')
            }
            style={{ minWidth: 120, maxWidth: 400 }}
          />
        </div>
        <div className='space-y-6'>
          <h1 className='text-primary-100 text-3xl font-bold'>{title}</h1>
          <h1 className='text-2xl font-medium text-gray-700'>
            {description || error.message || '알 수 없는 오류가 발생했습니다.'}
          </h1>
        </div>

        <div className='mt-4 flex w-full items-center justify-center gap-x-6'>
          <Button
            className='cursor-pointer rounded-lg bg-gray-800 px-6 py-4 text-xl font-bold text-white transition-colors hover:bg-black focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none'
            size='md'
            onClick={reset}
          >
            다시 시도하기
          </Button>

          <Button
            className='cursor-pointer rounded-lg bg-gray-700 px-6 py-4 text-xl font-bold text-gray-100 transition-colors hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none'
            size='md'
            onClick={() => (window.location.href = '/')}
          >
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
}
