import axios, { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { ServerErrorResponse } from '@/types/error';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/wines`,
      {
        params: Object.fromEntries(searchParams), // 모든 쿼리 파라미터 전달
      },
    );

    return NextResponse.json(response.data);
  } catch (err) {
    const error = err as AxiosError<ServerErrorResponse>;
    const message = error.response?.data?.error || '와인 목록 조회 실패';
    const status = error.response?.status || 500;

    return NextResponse.json({ error: message }, { status });
  }
};
