// import axios from 'axios';
// import { NextRequest, NextResponse } from 'next/server';
// //로그인용 route
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/signIn`,
//       body,
//       {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//       },
//     );
//     const { accessToken, refreshToken, user } = response.data;

//     const res = NextResponse.json({ user });

//     res.cookies.set('accessToken', accessToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       path: '/',
//       maxAge: 60 * 60,
//       sameSite: 'lax',
//     });
//     res.cookies.set('refreshToken', refreshToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       path: '/',
//       maxAge: 60 * 60 * 24 * 7,
//       sameSite: 'lax',
//     });
//     return res;
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error('로그인 실패:', error.response?.data || error.message);
//       return NextResponse.json(
//         { error: error.response?.data?.message || '로그인 실패' },
//         { status: error.response?.status || 500 },
//       );
//     } else if (error instanceof Error) {
//       console.error('로그인 실패:', error.message);
//       return NextResponse.json(
//         { error: error.message || '로그인 실패' },
//         { status: 500 },
//       );
//     } else {
//       console.error('로그인 실패: 알 수 없는 오류');
//       return NextResponse.json({ error: '로그인 실패' }, { status: 500 });
//     }
//   }
// }

export async function POST() {
  return new Response('');
}
