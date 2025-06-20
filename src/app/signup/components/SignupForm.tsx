'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';
import { useActionState } from 'react';

import KakaoLoginIcon from '@/app/assets/icons/kakao-login';
import WineLogoIcon from '@/app/assets/icons/wine-logo';
import { SignUp } from '@/app/signup/action';
import Button from '@/components/Button';
import InputPair from '@/components/Inputs/InputPair';
import useUserStore, { User } from '@/stores/Auth-store/authStore';

import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirmation,
} from '../../../utils/validateInput';

interface SignUpState {
  error?: string;
  user?: User;
}

export default function SignUpForm() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const CustomInputClass =
    'mt-1 block w-full rounded-xl border border-gray-300 px-6 py-2  focus:outline-none';

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordConfirmation: '',
  });

  //검증에러가 있는지 파악
  const hasErrors = Object.values(errors).some((msg) => msg !== '');
  //모든 인풋에 값이 입력되어있는지 파악
  const isAllFilled = email && nickname && password && passwordConfirmation;
  const isDisabled = !isAllFilled || hasErrors; //두개중 하나라도 충족되면 disabled

  const [state, formAction, isPending] = useActionState<SignUpState, FormData>(
    SignUp,
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
    }
  }, [state, setUser, router]);

  const handleKakaoLogin = () => {
    const redirectUrl = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL ?? '';
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <div className='flex min-h-screen items-center justify-center px-4 py-12'>
      <div className='w-full max-w-3xl space-y-8 rounded-xl bg-white p-6 shadow-2xl inset-shadow-sm inset-shadow-gray-200 sm:p-8'>
        <div className='py-8 text-center'>
          <Link aria-label='홈으로 이동' href='/wines'>
            <WineLogoIcon
              className='mx-auto h-12 w-auto cursor-pointer'
              color='#000000'
            />
          </Link>
        </div>
        {state.error && (
          <div className='text-md mx-auto text-center font-bold text-red-600'>
            {state.error}
          </div>
        )}

        <form action={formAction} className='mt-8 space-y-6 pb-[6rem]'>
          <div className='space-y-4 px-8'>
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
                error={errors.nickname}
                inputClassName={CustomInputClass}
                label='닉네임'
                name='nickname'
                placeholder='닉네임을 입력하세요'
                type='text'
                value={nickname}
                onBlur={() =>
                  setErrors({ ...errors, nickname: validateNickname(nickname) })
                }
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>

            <div>
              <InputPair
                required
                error={errors.password}
                inputClassName={CustomInputClass}
                label='비밀번호'
                name='password'
                placeholder='영문,숫자,특수문자 조합 8자 이상'
                type='password'
                value={password}
                onBlur={() =>
                  setErrors({ ...errors, password: validatePassword(password) })
                }
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <InputPair
                required
                error={errors.passwordConfirmation}
                inputClassName={CustomInputClass}
                label='비밀번호 확인'
                name='passwordConfirmation'
                placeholder='비밀번호 확인'
                type='password'
                value={passwordConfirmation}
                onBlur={() =>
                  setErrors({
                    ...errors,
                    passwordConfirmation: validatePasswordConfirmation(
                      passwordConfirmation,
                      password,
                    ),
                  })
                }
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>

            <div className='mt-[4rem] flex items-center justify-center'>
              <Button
                className='w-full'
                disabled={isDisabled}
                loading={isPending}
                size='lg'
                type='submit'
                variant='primary'
                onClick={() => {}}
              >
                회원가입
              </Button>
            </div>

            <div className='mt-[2rem] flex items-center justify-center'>
              <Button
                className='w-full bg-yellow-300'
                round='rounded'
                size='lg'
                variant='outline'
                onClick={handleKakaoLogin}
              >
                <KakaoLoginIcon size={20} />
                Kakao로 시작하기
              </Button>
            </div>
            <div className='mt-[4rem] flex items-center justify-center'>
              <div className='h-px flex-grow bg-gray-500' />
              <span className='text-md mx-4 flex-shrink text-gray-600'>
                또는
              </span>
              <div className='h-px flex-grow bg-gray-500' />
            </div>

            <div className='mt-6 text-center text-lg text-gray-900'>
              이미 계정이 있으신가요?{' '}
              <Link
                className='text-primary-100 hover:text-primary-100 font-medium hover:underline'
                href='/login'
              >
                로그인하기
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
