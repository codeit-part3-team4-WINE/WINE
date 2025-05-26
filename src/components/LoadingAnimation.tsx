export default function LoadingAnimation() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='flex space-x-2'>
          <div className='bg-primary-100 h-3 w-3 animate-bounce rounded-full' />
          <div
            className='bg-primary-100 h-3 w-3 animate-bounce rounded-full'
            style={{ animationDelay: '0.1s' }}
          />
          <div
            className='bg-primary-100 h-3 w-3 animate-bounce rounded-full'
            style={{ animationDelay: '0.2s' }}
          />
        </div>
        <p className='text-lg text-gray-300'>Loading...</p>
      </div>
    </div>
  );
}
