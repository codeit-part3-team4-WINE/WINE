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
    <div className='flex flex-col items-center justify-center gap-4'>
      <ExclamationMark />
      <p className='text-sm text-gray-500'>{text}</p>
      <Button onClick={() => router.push('/wines')}>{button}</Button>
    </div>
  );
}
