import axios from 'axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

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
  } catch (error) {
    console.error('Like post error:', error);
    return NextResponse.json({ error: 'Failed to like post' }, { status: 500 });
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
  } catch (error) {
    console.error('Like delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete like' },
      { status: 500 },
    );
  }
};
