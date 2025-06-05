'use client';

import FilterIcon from '@/app/assets/icons/filter';
import GoogleLoginIcon from '@/app/assets/icons/google-login';
import KakaoLoginIcon from '@/app/assets/icons/kakao-login';
import Button from '@/components/Button';

export default function UiButton() {
  const click = () => console.log('button click');

  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>
        Button Components
      </h1>
      <div className='content-text w-full bg-gray-50 p-3 leading-10 text-gray-600'>
        <p>
          <strong>- type:</strong> enabled (default){' '}
          <span className='text-gray-400'>|</span> disabled{' '}
          <span className='text-gray-400'>|</span> loading
        </p>
        <p>
          <strong>- size:</strong> xl <span className='text-gray-400'>|</span>{' '}
          lg <span className='text-gray-400'>|</span> md (default){' '}
          <span className='text-gray-400'>|</span> sm{' '}
          <span className='text-gray-400'>|</span> xs
        </p>
        <p>
          <strong>- round:</strong> rounded (default){' '}
          <span className='text-gray-400'>|</span> circular{' '}
          <span className='text-gray-400'>|</span> square
        </p>
        <p>
          <strong>- variant:</strong> primary (default){' '}
          <span className='text-gray-400'>|</span> secondary{' '}
          <span className='text-gray-400'>|</span> outline{' '}
          <span className='text-gray-400'>|</span> ghost{' '}
          <span className='text-gray-400'>|</span> danger
        </p>
      </div>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Standard</h2>
      <div className='flex flex-wrap gap-5'>
        <Button onClick={click}>Default</Button>

        <Button round='rounded' size='md' variant='primary' onClick={click}>
          Primary Button
        </Button>

        <Button round='rounded' size='md' variant='secondary' onClick={click}>
          Secondary Button
        </Button>

        <Button round='rounded' size='md' variant='outline' onClick={click}>
          Outline Button
        </Button>

        <Button
          loading
          round='rounded'
          size='md'
          variant='primary'
          onClick={click}
        >
          로딩중...
        </Button>

        <Button
          disabled
          round='rounded'
          size='md'
          variant='outline'
          onClick={click}
        >
          Disabled Button
        </Button>

        <Button round='rounded' size='md' variant='ghost' onClick={click}>
          Ghost Button
        </Button>

        <Button round='rounded' size='md' variant='danger' onClick={click}>
          Danger Button
        </Button>
      </div>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Examples</h2>
      <div className='flex flex-col items-start gap-5'>
        <Button round='rounded' size='xl' variant='primary' onClick={click}>
          리뷰 남기기
        </Button>

        <Button round='circular' size='lg' variant='primary' onClick={click}>
          와인 보러가기
        </Button>

        <Button round='rounded' size='lg' variant='outline' onClick={click}>
          <GoogleLoginIcon size={20} />
          Google로 시작하기
        </Button>

        <Button round='rounded' size='lg' variant='outline' onClick={click}>
          <KakaoLoginIcon size={20} />
          Kakao로 시작하기
        </Button>

        <div className='flex gap-3'>
          <Button round='rounded' size='sm' variant='secondary' onClick={click}>
            취소
          </Button>

          <Button round='rounded' size='md' variant='primary' onClick={click}>
            와인 등록하기
          </Button>
        </div>

        <Button round='rounded' size='xs' variant='primary' onClick={click}>
          변경하기
        </Button>

        <Button
          className='h-fit w-fit p-3'
          round='rounded'
          variant='outline'
          onClick={click}
        >
          <FilterIcon size={20} />
        </Button>

        <div className='flex w-[30rem] gap-3'>
          <Button
            className='flex-1'
            round='rounded'
            size='md'
            variant='outline'
            onClick={click}
          >
            취소
          </Button>
          <Button
            className='flex-1'
            round='rounded'
            size='md'
            variant='primary'
            onClick={click}
          >
            삭제하기
          </Button>
        </div>

        <Button
          className='bg-amber-400 hover:animate-spin'
          variant='outline'
          onClick={click}
        >
          hover me!
        </Button>
      </div>
    </div>
  );
}
