'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4 text-center'>
      <h2 className='mb-2 text-2xl font-semibold text-red-500'>
        에러가 발생했습니다
      </h2>
      <p className='mb-6 text-gray-600'>{error.message}</p>
      <button
        className='rounded bg-black px-6 py-2 text-white transition hover:bg-gray-800'
        onClick={reset}
      >
        다시 시도하기
      </button>
    </div>
  );
}
