import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const { pathname } = request.nextUrl;

  if (
    (pathname === '/login' || pathname === '/signup') &&
    accessToken &&
    refreshToken
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 로그인이 필요한 페이지에 접근할 때 두 토큰 모두 없으면 로그인 페이지로
  const protectedPaths = ['/myprofile', '/authlogictest', '/wines/'];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtected && !accessToken && !refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',
    '/signup',
    '/myprofile/:path*',
    '/authlogictest/:path*',
    '/wines/:path*',
  ],
};
