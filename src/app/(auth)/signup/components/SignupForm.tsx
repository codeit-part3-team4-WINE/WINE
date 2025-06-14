'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useActionState } from 'react';

import { SignUp } from '@/actions/auth/signup-action';
import WineLogoIcon from '@/app/assets/icons/wine-logo';
import Button from '@/components/Button';
import InputPair from '@/components/Inputs/InputPair';
import useUserStore, { User } from '@/stores/Auth-store/authStore';

import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirmation,
} from '../../utils/validateInput';

interface SignUpState {
  error?: string;
  user?: User;
}

export default function SignUpForm() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

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
  const isAllFieldsFilled =
    email && nickname && password && passwordConfirmation;
  const isDisabled = !isAllFieldsFilled || hasErrors; //두개중 하나라도 충족되면 disabled

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
      alert('회원가입 성공');
      router.push('/');
    }
    if (state.error) {
      alert(state.error);
    }
  }, [state, setUser, router]);

  return (
    <div className='flex min-h-screen items-center justify-center px-4 py-12'>
      <div className='w-full max-w-3xl space-y-8 rounded-lg bg-white p-6 shadow-2xl inset-shadow-sm inset-shadow-gray-500 sm:p-8'>
        <div className='py-8 text-center'>
          <WineLogoIcon
            className='mx-auto h-12 w-auto cursor-pointer'
            color='#000000'
          />
        </div>
        {state.error && (
          <div className='text-md mx-auto text-center text-red-600'>
            {state.error}
          </div>
        )}

        <form
          action={formAction}
          className='mt-8 space-y-6 border-2 border-amber-600 pb-[6rem]'
        >
          <div className='space-y-4 px-8'>
            <div>
              <InputPair
                required
                error={errors.email}
                inputClassName='mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm  focus:outline-none '
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
                inputClassName='mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm  focus:outline-none'
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
                inputClassName='mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm  focus:outline-none'
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
                inputClassName='mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm  focus:outline-none '
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

            {isPending ? (
              <div className='mt-10 flex items-center justify-center'>
                <Button
                  loading
                  className='w-full'
                  size='lg'
                  type='submit'
                  onClick={() => {}}
                >
                  회원가입
                </Button>
              </div>
            ) : (
              <div className='mt-10 flex items-center justify-center'>
                <Button
                  className='w-full'
                  disabled={isDisabled}
                  size='lg'
                  type='submit'
                  onClick={() => {}}
                >
                  회원가입
                </Button>
              </div>
            )}

            <div className='mt-[1rem] flex items-center justify-center'>
              <div className='h-px flex-grow bg-gray-900' />
              <span className='text-md mx-4 flex-shrink text-gray-900'>
                또는
              </span>
              <div className='h-px flex-grow bg-gray-900' />
            </div>

            <div className='mt-6 text-center text-lg text-gray-500'>
              이미 계정이 있으신가요?{' '}
              <Link
                className='font-medium text-purple-600 hover:text-purple-700 hover:underline'
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
