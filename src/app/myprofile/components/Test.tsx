'use client';

import useLogout from '@/app/login/hooks/useLogout';
import useRefresh from '@/app/login/hooks/useRefresh';
import useUserStore from '@/stores/Auth-store/authStore';

export default function Test() {
  const user = useUserStore((state) => state.user);

  const refresh = useRefresh();

  const logout = useLogout();

  return (
    <div>
      <h2 className='text-2xl'>하이 {user ? user.nickname : '손님'}</h2>
      <h2 className='text-5xl'>{user ? `유저아이디 : ${user.id}` : 'ㅇㅇ'}</h2>

      <button onClick={refresh}>눌러</button>

      <button onClick={logout}>로그아웃</button>
    </div>
  );
}
