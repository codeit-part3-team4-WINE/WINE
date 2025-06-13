'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useActionState } from 'react';

import { SignUp } from '@/actions/auth/signup-action';
import useUserStore, { User } from '@/stores/Auth-store/authStore';

interface SignUpState {
  error?: string;
  user?: User;
}

export default function SignUpForm() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const [state, formAction] = useActionState<SignUpState, FormData>(SignUp, {
    user: undefined,
    error: undefined,
  });

  // 서버액션요청 결과에서 유저정보를 받아 zustand 스토어에 저장
  useEffect(() => {
    if (state.user) {
      setUser(state.user);
      console.log('state:', state);
      console.log('user:', state.user);
      alert('회원가입 성공');
      router.push('/');
    }
    if (state.error) {
      alert(state.error);
    }
  }, [state, setUser, router]);

  return (
    <form
      action={formAction}
      className='mx-auto flex min-h-screen items-center justify-center bg-gray-50'
    >
      <div className='flex w-[400px] flex-col gap-4 rounded-lg bg-white p-8 shadow-lg'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800'>
          회원가입
        </h2>
        <input
          required
          className='h-12 rounded-md border-2 border-gray-300 px-4 transition focus:border-gray-800 focus:outline-none'
          name='email'
          placeholder='이메일'
          type='email'
        />
        <input
          required
          className='h-12 rounded-md border-2 border-gray-300 px-4 transition focus:border-gray-800 focus:outline-none'
          name='nickname'
          placeholder='닉네임'
          type='text'
        />
        <input
          required
          className='h-12 rounded-md border-2 border-gray-300 px-4 transition focus:border-gray-800 focus:outline-none'
          name='password'
          placeholder='비밀번호'
          type='password'
        />
        <input
          required
          className='h-12 rounded-md border-2 border-gray-300 px-4 transition focus:border-gray-800 focus:outline-none'
          name='passwordConfirmation'
          placeholder='비밀번호 확인'
          type='password'
        />
        <button
          className='mt-4 h-12 rounded-md bg-gray-800 font-semibold text-white transition hover:bg-gray-700'
          type='submit'
        >
          회원가입
        </button>
      </div>
    </form>
  );
}
