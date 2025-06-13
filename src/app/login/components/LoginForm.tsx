'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useActionState } from 'react';

import { SignIn } from '@/actions/auth/signin-action';
import useUserStore, { User } from '@/stores/Auth-store/authStore';

interface LoginState {
  error?: string;
  user?: User;
}

export default function LoginForm() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const [state, formAction] = useActionState<LoginState, FormData>(SignIn, {
    user: undefined,
    error: undefined,
  });

  // 서버액션요청 결과에서 유저정보를 받아 zustand 스토어에 저장
  useEffect(() => {
    if (state.user) {
      setUser(state.user);
      console.log('state:', state);
      console.log('user:', state.user);
      alert('로그인 성공');
      router.push('/');
    }
    if (state.error) {
      alert(state.error);
    }
  }, [state, setUser, router]);

  const handleKakaoLogin = () => {
    const redirectUrl = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL ?? '';
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <form
      action={formAction}
      className='flex min-h-screen items-center justify-center bg-gray-50'
    >
      <div className='flex w-[400px] flex-col gap-4 rounded-lg bg-white p-8 shadow-lg'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800'>
          로그인
        </h2>
        <label className='font-medium text-gray-700'>이메일</label>
        <input
          required
          className='h-12 rounded-md border-2 border-gray-300 px-4 transition focus:border-gray-800 focus:outline-none'
          name='email'
          placeholder='이메일'
          type='email'
        />
        <label className='font-medium text-gray-700'>비밀번호</label>
        <input
          required
          className='h-12 rounded-md border-2 border-gray-300 px-4 transition focus:border-gray-800 focus:outline-none'
          name='password'
          placeholder='비밀번호'
          type='password'
        />
        <button
          className='mt-4 h-12 rounded-md bg-gray-800 font-semibold text-white transition hover:bg-gray-700'
          type='submit'
        >
          로그인
        </button>
        <button
          className='mt-2 flex h-12 items-center justify-center gap-2 rounded-md bg-yellow-400 font-semibold text-gray-900 transition hover:bg-yellow-300'
          type='button'
          onClick={handleKakaoLogin}
        >
          카카오로그인
        </button>
      </div>
    </form>
  );
}
