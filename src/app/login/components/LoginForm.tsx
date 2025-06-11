'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import useUserStore from '@/stores/Auth-store/authStore';

export default function LoginForm() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/signIn', form, {
        withCredentials: true,
      });

      const data = response.data;

      setUser(data.user);
      router.push('/myprofile');
    } catch (err) {
      alert((err as Error).message || '로그인 실패');
    }
  };

  const handleKakaoLogin = () => {
    const redirectUrl = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL ?? '';
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=code`;

    // 카카오 로그인 URL로 리다이렉트
    window.location.href = kakaoAuthUrl;
  };

  return (
    <form
      className='flex min-h-screen items-center justify-center p-4'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col'>
        <label>이메일</label>
        <input
          required
          className='h-20 w-full border-2 border-solid border-gray-950'
          name='email'
          placeholder='이메일'
          onChange={handleChange}
        />
        <label>비밀번호</label>
        <input
          required
          className='h-20 w-full border-2 border-solid border-gray-950'
          name='password'
          placeholder='비밀번호'
          type='password'
          onChange={handleChange}
        />
        <button
          className='mt-4 h-20 w-80 border-2 border-gray-950'
          type='submit'
        >
          로그인
        </button>

        <button
          className='mt-4 h-20 w-80 border-2 border-gray-950'
          onClick={handleKakaoLogin}
        >
          카카오로그인
        </button>
      </div>
    </form>
  );
}
