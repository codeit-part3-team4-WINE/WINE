import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

//액세스토큰 재발급용 route
export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (!refreshToken) {
    return NextResponse.json({ message: '리프레시 토큰없음' }, { status: 401 });
  }

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/refresh-token`,
      { refreshToken },
    );

    const { accessToken } = response.data;

    const res = NextResponse.json({ accessToken, ok: true });

    res.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60,
    });

    console.log('액세스 토큰 갱신 성공');

    return res;
  } catch (error) {
    console.error('액세스 토큰 갱신 실패:', error);
    return NextResponse.json(
      { message: '액세스 토큰 갱신 실패' },
      { status: 401 },
    );
  }
}
