'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useActionState } from 'react';
import { toast } from 'sonner';

import { SignIn } from '@/app/(non-header)/login/action';
import KakaoLoginIcon from '@/app/assets/icons/kakao-login';
import WineLogoIcon from '@/app/assets/icons/wine-logo';
import Button from '@/components/Button';
import InputPair from '@/components/Inputs/InputPair';
import useUserStore, { User } from '@/stores/Auth-store/authStore';
import { validateEmail, validatePassword } from '@/utils/validateInput';

interface LoginState {
  error?: string;
  user?: User;
}

export default function LoginForm() {
  const CustomInputClass =
    'mt-1 block w-full rounded-xl border border-gray-300 px-6 py-2  focus:outline-none';

  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  //검증에러가 있는지 파악
  const hasErrors = Object.values(errors).some((msg) => msg !== '');
  //모든 인풋에 값이 입력되어있는지 파악
  const isAllFilled = email && password;
  const isDisabled = !isAllFilled || hasErrors; //두개중 하나라도 충족되면 disabled

  const [state, formAction, isPending] = useActionState<LoginState, FormData>(
    SignIn,
    {
      user: undefined,
      error: undefined,
    },
  );

  // 서버액션요청 결과에서 유저정보를 받아 zustand 스토어에 저장
  useEffect(() => {
    if (state.user) {
      setUser(state.user);
      console.log('state:', state);
      console.log('user:', state.user);

      router.push('/wines');
    }
    if (state.error) {
      console.log(state.error);
      toast.error(state.error);
    }
  }, [state, setUser, router]);

  const handleKakaoLogin = () => {
    const redirectUrl = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL ?? '';
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 px-2 py-4 sm:px-4 sm:py-12'>
      <div className='w-full max-w-3xl space-y-4 rounded-xl bg-white p-4 shadow-2xl inset-shadow-sm inset-shadow-gray-200 sm:space-y-8 sm:p-6 md:p-8'>
        <div className='py-4 text-center sm:py-8'>
          <Link aria-label='홈으로 이동' href='/wines'>
            <WineLogoIcon
              className='mx-auto h-12 w-auto cursor-pointer'
              color='#000000'
            />
          </Link>
        </div>

        <form
          action={formAction}
          className='mt-4 space-y-4 pb-4 sm:mt-8 sm:space-y-6 sm:pb-[6rem]'
        >
          <div className='space-y-3 px-4 sm:space-y-4 sm:px-8'>
            <div>
              <InputPair
                required
                error={errors.email}
                inputClassName={CustomInputClass}
                label='이메일'
                name='email'
                placeholder='example@email.com'
                type='email'
                value={email}
                onBlur={() =>
                  setErrors({ ...errors, email: validateEmail(email) })
                }
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <InputPair
                required
                error={errors.password}
                inputClassName={CustomInputClass}
                label='비밀번호'
                name='password'
                placeholder='비밀번호'
                type='password'
                value={password}
                onBlur={() =>
                  setErrors({ ...errors, password: validatePassword(password) })
                }
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='mt-6 flex items-center justify-center sm:mt-[4rem]'>
              <Button
                className='w-full'
                disabled={isDisabled}
                loading={isPending}
                size='lg'
                type='submit'
                variant='primary'
                onClick={() => {}}
              >
                로그인
              </Button>
            </div>

            <div className='mt-4 flex items-center justify-center sm:mt-[2rem]'>
              <Button
                className='w-full'
                round='rounded'
                size='lg'
                variant='kakao'
                onClick={handleKakaoLogin}
              >
                <KakaoLoginIcon size={20} />
                Kakao로 로그인하기
              </Button>
            </div>

            <div className='mt-6 flex items-center justify-center sm:mt-[4rem]'>
              <div className='h-px flex-grow bg-gray-400' />
              <span className='text-md mx-4 flex-shrink text-gray-500'>
                또는
              </span>
              <div className='h-px flex-grow bg-gray-400' />
            </div>

            <div className='text-md mt-4 text-center text-gray-900 sm:mt-6 sm:text-lg'>
              계정이 없으신가요?{' '}
              <Link
                className='text-primary-100 hover:text-primary-100 font-medium hover:underline'
                href='/signup'
              >
                회원가입하기
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
