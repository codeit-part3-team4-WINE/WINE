'use server';

import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

import {
  InternalServerError,
  NonExistentEmailError,
  PasswordMismatchError,
  UserNotFoundError,
} from '@/libs/errors/signIn/SignInError';
import { User } from '@/stores/Auth-store/authStore';

// 서버에서 반환하는 에러 메시지 타입 정의
type ServerErrorResponse = {
  message: string;
};

interface SignInResponse {
  user?: User;
  error?: string;
}

export async function SignIn(
  prevState: unknown,
  formData: FormData,
): Promise<SignInResponse> {
  // 폼데이터에서 이메일과 비밀번호 추출
  const email = formData.get('email');
  const password = formData.get('password');

  // 로그인요청
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/signIn`,
      { email, password },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );

    // 응답에서 유저정보와 토큰들을 추출
    const { user, accessToken, refreshToken } = res.data;
    console.log(res.data);

    if (!user) throw new UserNotFoundError();

    // 쿠키 저장
    const cookieStore = await cookies();
    cookieStore.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60,
      sameSite: 'lax',
    });
    cookieStore.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
    });

    // 클라이언트측에서(zustand) 저장해야만하는 유저정보반환
    return { user };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<ServerErrorResponse>;
      const serverMsg = axiosError.response?.data?.message;
      const statusCode = axiosError.response?.status;
      console.log(serverMsg, statusCode);

      // 서버에서 반환된 에러 메세지에따라 커스텀에러 처리
      if (serverMsg === 'Validation Failed') {
        return { error: new PasswordMismatchError().message };
      }

      if (serverMsg === '존재하지 않는 이메일입니다.') {
        return { error: new NonExistentEmailError().message };
      }
    }

    return { error: new InternalServerError().message };
  }
}
