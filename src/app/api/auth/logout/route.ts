import { NextResponse } from 'next/server';
// 로그아웃용 route
export async function POST() {
  const response = NextResponse.json({ message: '로그아웃 완료' });

  response.cookies.set('accessToken', '', {
    path: '/',
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
  });

  response.cookies.set('refreshToken', '', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
  });

  return response;
}
