'use client';

import { AxiosError } from 'axios';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import useUserStore from '@/stores/Auth-store/authStore';

export default function SignUpForm() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const [form, setForm] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/signUp', form);

      setUser(response.data.user);
      router.push('/myprofile');
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ error: string }>;
      alert(axiosError.response?.data?.error || '회원가입 실패');
    }
  };

  return (
    <form
      className='mx-auto flex min-h-screen items-center justify-center bg-gray-50'
      onSubmit={handleSubmit}
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
          onChange={handleChange}
        />
        <input
          required
          className='h-12 rounded-md border-2 border-gray-300 px-4 transition focus:border-gray-800 focus:outline-none'
          name='nickname'
          placeholder='닉네임'
          onChange={handleChange}
        />
        <input
          required
          className='h-12 rounded-md border-2 border-gray-300 px-4 transition focus:border-gray-800 focus:outline-none'
          name='password'
          placeholder='비밀번호'
          type='password'
          onChange={handleChange}
        />
        <input
          required
          className='h-12 rounded-md border-2 border-gray-300 px-4 transition focus:border-gray-800 focus:outline-none'
          name='passwordConfirmation'
          placeholder='비밀번호 확인'
          type='password'
          onChange={handleChange}
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
