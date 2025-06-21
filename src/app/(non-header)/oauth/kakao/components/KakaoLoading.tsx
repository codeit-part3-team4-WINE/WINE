export default function KakaoLoading() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-white'>
      <div className='flex flex-col items-center'>
        <div className='mb-6 h-16 w-16 animate-spin rounded-full border-4 border-yellow-300 border-t-transparent' />
        <p className='mt-4 text-lg font-semibold text-gray-700'>
          카카오 로그인 처리 중...
        </p>
      </div>
    </div>
  );
}
