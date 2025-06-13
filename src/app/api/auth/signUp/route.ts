// import axios from 'axios';
// import { NextResponse } from 'next/server';

// // 회원가입용 route
// export async function POST(req: NextResponse) {
//   try {
//     const body = await req.json();

//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/signUp`,
//       body,
//     );

//     const { user, accessToken, refreshToken } = response.data;

//     const res = NextResponse.json({ user });

//     res.cookies.set('accessToken', accessToken, {
//       path: '/',
//       maxAge: 60 * 60,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       httpOnly: false,
//     });

//     res.cookies.set('refreshToken', refreshToken, {
//       path: '/',
//       maxAge: 60 * 60 * 24 * 7,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       httpOnly: true,
//     });

//     return res;
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error('회원가입 실패:', error.response?.data || error.message);
//       return NextResponse.json(
//         { error: error.response?.data?.message || '회원가입 실패' },
//         { status: error.response?.status || 500 },
//       );
//     } else if (error instanceof Error) {
//       console.error('회원가입 실패:', error.message);
//       return NextResponse.json(
//         { error: error.message || '회원가입 실패' },
//         { status: 500 },
//       );
//     } else {
//       console.error('회원가입 실패: 알 수 없는 오류');
//       return NextResponse.json({ error: '회원가입 실패' }, { status: 500 });
//     }
//   }
// }
export async function POST() {
  return new Response('');
}
