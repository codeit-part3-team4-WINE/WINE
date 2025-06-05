'use client';

import useUserStore from '@/stores/Auth-store/authStore';

export default function Test() {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <h2 className='text-2xl'>하이 {user ? user.nickname : '손님'}</h2>
    </div>
  );
}
