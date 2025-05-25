'use client';

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center'>
      <h1 className='mb-8 text-5xl font-bold text-gray-900 dark:text-white'>
        404 - 페이지를 찾을 수 없습니다.
      </h1>
      <p className='mb-8 text-2xl text-gray-600 dark:text-gray-400'>
        요청하신 페이지가 존재하지 않거나, 주소가 잘못되었어요.
      </p>
    </main>
  );
}
