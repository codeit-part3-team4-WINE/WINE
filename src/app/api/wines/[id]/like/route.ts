import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { ServerErrorResponse } from '@/types/error';

export const POST = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews/${id}/like`,
      {},
      {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
      },
    );
    return NextResponse.json({ message: 'Like post success' }, { status: 200 });
  } catch (err) {
    const error = err as AxiosError<ServerErrorResponse>;
    const message = error.response?.data?.error || '유저 정보 조회 실패';
    const status = error.response?.status || 500;

    return NextResponse.json({ error: message }, { status });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  try {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews/${id}/like`,
      {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
      },
    );
    return NextResponse.json(
      { message: 'Like delete success' },
      { status: 200 },
    );
  } catch (err) {
    const error = err as AxiosError<ServerErrorResponse>;
    const message = error.response?.data?.error || '유저 정보 조회 실패';
    const status = error.response?.status || 500;

    return NextResponse.json({ error: message }, { status });
  }
};
