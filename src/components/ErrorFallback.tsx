'use client';

import { useEffect } from 'react';

interface ErrorFallbackProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  description?: string;
}

export default function ErrorFallback({
  error,
  reset,
  title = '에러가 발생했습니다',
  description,
}: ErrorFallbackProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4 text-center'>
      <div className='w-full max-w-md space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold text-red-500'>{title}</h1>
          <p className='text-gray-600'>
            {description || error.message || '알 수 없는 오류가 발생했습니다.'}
          </p>
          {process.env.NODE_ENV === 'development' && error.digest && (
            <p className='mt-2 text-xs text-gray-400'>
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className='space-y-3'>
          <button
            className='w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none'
            onClick={reset}
          >
            다시 시도하기
          </button>

          <button
            className='w-full rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none'
            onClick={() => (window.location.href = '/')}
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
