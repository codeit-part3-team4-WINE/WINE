'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import useLogout from '@/hooks/useLogout';
import { ApiErrorClass } from '@/libs/errors/apis/ApiError';
import { ApiErrorResponse } from '@/types/apiErrorResponse';

type User = {
  id: number;
  nickname: string;
};

const UserData = ({ user }: { user: User | null }) => {
  if (!user) {
    return <p>유저 정보가 없습니다.</p>;
  }
  return (
    <div className='mt-6 rounded-md border bg-gray-50 p-4 text-left'>
      <h3 className='mb-2 text-lg font-semibold'>유저 정보</h3>
      <p>
        <strong>유저아이디:</strong> {user.id}
      </p>
      <p>
        <strong>닉네임:</strong> {user.nickname}
      </p>
    </div>
  );
};

export default function Test() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<ApiErrorClass | null>(null);

  const logout = useLogout();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      await router.push('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  // 버튼 트리거 요청 에러 처리 예시-------------------------------------
  const getMe = async () => {
    try {
      const response = await privateInstance.get(`/users/me`);
      setUser(response.data);
      setError(null);
    } catch (error: unknown) {
      const status = (error as ApiErrorResponse)?.response?.status;
      const userMessageMap = {
        404: '해당 유저를 찾을 수 없습니다.',
        401: '로그인이 필요합니다.',
        500: '서버 오류가 발생했습니다.',
      };
      setError(
        new ApiErrorClass(
          status,
          userMessageMap,
          '유저 정보를 불러오지 못했습니다.',
        ),
      );
      setUser(null);
    }
  };
  if (error) throw error;
  //--------------------------------------------------------------------------------------
  return (
    <div className='mx-auto mt-20 max-w-md rounded-lg bg-white p-6 text-center shadow-md'>
      <div className='flex flex-col gap-4'>
        <button
          className='rounded-md bg-red-500 py-3 text-white transition hover:bg-red-600'
          onClick={handleLogout}
        >
          로그아웃
        </button>

        <button
          className='rounded-md bg-green-500 py-3 text-white transition hover:bg-green-600'
          onClick={getMe}
        >
          유저 정보 가져오기(로그인전용 API테스트 (/users/me) )
        </button>
      </div>

      <UserData user={user} />
    </div>
  );
}
