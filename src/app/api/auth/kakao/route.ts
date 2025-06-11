import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

//카카오 로그인 api route
export async function POST(req: NextRequest) {
  const { code } = await req.json();
  const provider = 'KAKAO';
  const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/signIn/${provider}`,
      { redirectUri, token: code },
      { withCredentials: true },
    );

    const { accessToken, refreshToken, user } = response.data;

    const res = NextResponse.json({ user });

    res.cookies.set('accessToken', accessToken, {
      httpOnly: false,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60,
    });
    res.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        '카카오 로그인 실패:',
        error.response?.data || error.message,
      );
      return NextResponse.json(
        { error: error.response?.data?.message || '카카오 로그인 실패' },
        { status: error.response?.status || 500 },
      );
    } else if (error instanceof Error) {
      console.error('카카오 로그인 실패:', error.message);
      return NextResponse.json(
        { error: error.message || '카카오 로그인 실패' },
        { status: 500 },
      );
    } else {
      console.error('카카오 로그인 실패: 알 수 없는 오류');
      return NextResponse.json(
        { error: '카카오 로그인 실패' },
        { status: 500 },
      );
    }
  }
}
