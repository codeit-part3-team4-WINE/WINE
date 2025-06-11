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
    <form className='mx-auto flex' onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <input
          required
          className='h-20 w-80 border-2 border-solid border-gray-950'
          name='email'
          placeholder='이메일'
          onChange={handleChange}
        />
        <input
          required
          className='h-20 w-80 border-2 border-solid border-gray-950'
          name='nickname'
          placeholder='닉네임'
          onChange={handleChange}
        />
        <input
          required
          className='h-20 w-80 border-2 border-solid border-gray-950'
          name='password'
          placeholder='비밀번호'
          type='password'
          onChange={handleChange}
        />
        <input
          required
          className='h-20 w-80 border-2 border-solid border-gray-950'
          name='passwordConfirmation'
          placeholder='비밀번호 확인'
          type='password'
          onChange={handleChange}
        />
        <button
          className='h-20 w-80 cursor-pointer border-2 border-solid border-gray-950'
          type='submit'
        >
          회원가입
        </button>
      </div>
    </form>
  );
}
