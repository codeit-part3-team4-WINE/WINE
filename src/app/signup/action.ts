'use server';

// 회원가입 서버 액션
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

import {
  DuplicateEmailError,
  InternalServerError,
  PasswordMismatchError,
  PasswordValidateError,
} from '@/libs/errors/signUp/SignUpError';
import { User } from '@/stores/Auth-store/authStore';

// 서버에서 반환하는 에러 메시지 타입 정의
type ServerErrorResponse = {
  message: string;
};

interface SignUpResponse {
  user?: User;
  error?: string;
}

export async function SignUp(
  prevState: unknown,
  formData: FormData,
): Promise<SignUpResponse> {
  // 폼데이터에서 추출
  const email = formData.get('email');
  const nickname = formData.get('nickname');
  const password = formData.get('password');
  const passwordConfirmation = formData.get('passwordConfirmation');

  console.log(email, nickname, password, passwordConfirmation);

  // 회원가입 요청
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/signUp`,
      { email, nickname, password, passwordConfirmation },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );

    // 로그인시와 동일하게 응답에서 유저정보와 토큰들을 추출
    const { user, accessToken, refreshToken } = res.data;
    console.log(res.data);

    if (!user) return { error: '유저 정보가 없습니다.' };

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
    // Axios 에러인 경우에만 처리
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<ServerErrorResponse>;
      const serverMsg = axiosError.response?.data?.message;

      console.log(serverMsg, axiosError.response?.status);

      // 서버에서 반환된 에러 메세지에 따라 커스텀에러 처리
      switch (serverMsg) {
        case '비밀번호가 일치하지 않습니다.':
          return { error: new PasswordMismatchError().message };
        case 'Validation Failed':
          return { error: new PasswordValidateError().message };
        case '이미 사용중인 이메일입니다.':
          return { error: new DuplicateEmailError().message };
        case 'Internal Server Error':
          return { error: new InternalServerError().message };
        default:
          return { error: serverMsg || '회원가입 실패' };
      }
    }

    return { error: new InternalServerError().message };
  }
}
