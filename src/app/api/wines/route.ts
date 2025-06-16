import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

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
  } catch (error) {
    console.error('Wine fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch wine' },
      { status: 500 },
    );
  }
};
