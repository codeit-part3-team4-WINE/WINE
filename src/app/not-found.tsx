'use client';

import Image from 'next/image';

import Button from '@/components/Button';
import WaveAnimation from '@/components/WaveAnimation';

import wineImage from './assets/images/wine_.gif';

export default function NotFoundPage() {
  return (
    <div className='fixed inset-0 z-[9999] flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gray-300 text-center'>
      <WaveAnimation />

      <div className='z-10 w-full max-w-xl items-center justify-center space-y-6'>
        <div className='mb-2 flex w-full items-center justify-center'>
          <Image
            priority
            alt='와인 이미지'
            className='mx-auto aspect-square w-[100vw] max-w-md object-contain md:max-w-xl'
            height={400}
            src={wineImage}
            style={{ minWidth: 120, maxWidth: 400 }}
            width={400}
          />
        </div>
        <div className='space-y-6'>
          <h1 className='text-primary-100 text-3xl font-bold'>
            존재하지 않는 페이지입니다
          </h1>
          <h1 className='text-2xl font-medium text-gray-700'>
            지금은 이 잔에 담을 페이지가 없어요.
          </h1>
        </div>
        <div className='mt-12 flex w-full items-center justify-center'>
          <Button
            className='cursor-pointer rounded-lg border border-gray-300 bg-gray-700 py-4 text-xl font-bold text-gray-100 transition-colors hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none'
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
