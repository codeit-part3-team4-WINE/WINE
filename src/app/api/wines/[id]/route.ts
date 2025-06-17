import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { ServerErrorResponse } from '@/types/error';

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  console.log(`api route wine 쿠키 : ${accessToken} `);

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/wines/${id}`,
      {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
      },
    );
    const data = response.data;

    return NextResponse.json(data);
  } catch (err) {
    const error = err as AxiosError<ServerErrorResponse>;

    const message = error.response?.data?.error || '와인 상세 데이터 조회실패';
    const status = error.response?.status || 500;

    return NextResponse.json({ error: message }, { status });
  }
};
