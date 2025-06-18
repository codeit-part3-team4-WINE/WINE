import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// 서버에서 응답하는 에러 메시지 타입
type ServerErrorResponse = {
  error?: string;
};

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  console.log(`route 토큰 : ${accessToken}`);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/users/me`,
      {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
      },
    );
    return NextResponse.json(response.data);
  } catch (err) {
    const error = err as AxiosError<ServerErrorResponse>;
    const message = error.response?.data?.error || '유저 정보 조회 실패';
    const status = error.response?.status || 500;

    return NextResponse.json({ error: message }, { status });
  }
}
