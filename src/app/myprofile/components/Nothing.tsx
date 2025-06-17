'use client';
import { useRouter } from 'next/navigation';

import ExclamationMark from '@/app/assets/icons/exclamation-mark';
import Button from '@/components/Button';

type NothingProps = {
  type: 'wine' | 'review' | 'favorite';
};

const messages = {
  wine: {
    text: '등록하신 와인이 없습니다.',
    button: '와인 등록하러 가기',
  },
  review: {
    text: '작성하신 리뷰가 없습니다.',
    button: '리뷰 남기러 가기',
  },
  favorite: {
    text: '관심 있는 후기가 없습니다.',
    button: '후기 보러 가기',
  },
};

export default function Nothing({ type }: NothingProps) {
  const router = useRouter();
  const { text, button } = messages[type];

  return (
    <div className='mt-10 flex flex-col items-center justify-center gap-4'>
      <ExclamationMark className='h-[6rem] w-[6rem] md:h-[8rem] md:w-[8rem]' />
      <p className='text-[1.3rem] text-gray-500 md:text-[1.5rem]'>{text}</p>
      <Button
        className='h-[3.3rem] w-[13rem] md:h-[4rem] md:w-[15rem]'
        onClick={() => router.push('/wines')}
      >
        {button}
      </Button>
    </div>
  );
}
