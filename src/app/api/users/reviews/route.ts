import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

type ServerErrorResponse = {
  error?: string;
};

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const cursor = searchParams.get('cursor');

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/users/me/reviews`,
      {
        params: { limit, cursor },
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (err) {
    const error = err as AxiosError<ServerErrorResponse>;
    const message = error.response?.data?.error || '리뷰 정보 조회 실패';
    const status = error.response?.status || 500;

    return NextResponse.json({ error: message }, { status });
  }
}
