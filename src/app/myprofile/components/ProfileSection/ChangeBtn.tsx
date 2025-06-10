'use client';

import Button from '@/components/Button';

export function ChangeBtn() {
  const handleChange = () => console.log('모달이 뜨워질 예정');
  return (
    <Button
      className='h-[4.3rem]'
      size='sm'
      variant='outline'
      onClick={handleChange}
    >
      변경하기
    </Button>
  );
}
