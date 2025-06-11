import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  //두개의 토큰 모두없으면 로그인페이지로 리다이렉트
  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

//로그인이 필수인 마이프로필페이지에만 적용
export const config = {
  matcher: ['/myprofile/:path*'],
};
