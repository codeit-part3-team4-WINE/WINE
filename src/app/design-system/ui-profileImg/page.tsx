import ProfileImg from '@/components/ProfileImg';

import mockImg from './mock-image/mock-img.png';

export default function UiProfileImg() {
  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>
        ProfileImg Components
      </h1>
      <div className='content-text w-full bg-gray-50 p-3 leading-10 text-gray-600'>
        <p>
          <strong>- src:</strong> "" (default){' '}
          <span className='text-gray-400'>|</span> 이미지 URL{' '}
          <span className='text-gray-400'>|</span> StaticImageData
        </p>
        <p>
          <strong>- size:</strong> sm <span className='text-gray-400'>|</span>{' '}
          md (default) <span className='text-gray-400'>|</span> lg
        </p>
        <p>
          <strong>- isSelectable:</strong> true{' '}
          <span className='text-gray-400'>|</span> false (default)
        </p>
        <p>
          <strong>- className:</strong> 사용자 정의 Tailwind 클래스
        </p>
      </div>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>
        Default Profile
      </h2>
      <div className='flex items-center gap-5'>
        <ProfileImg size='sm' />
        <ProfileImg />
        <ProfileImg size='lg' />
        <ProfileImg isSelectable size='lg' />
      </div>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>
        Profile with Image
      </h2>
      <div className='flex items-center gap-5'>
        <ProfileImg size='sm' src={mockImg} />
        <ProfileImg size='md' src={mockImg} />
        <ProfileImg size='lg' src={mockImg} />
        <ProfileImg isSelectable size='lg' src={mockImg} />
      </div>
    </div>
  );
}
