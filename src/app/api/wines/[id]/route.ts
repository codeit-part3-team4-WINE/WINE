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

  // 페이지네이션 파라미터 추출하기
  const searchParams = request.nextUrl.searchParams;
  console.log('searchParams', searchParams);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '5');

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
    const reviews = data.reviews || [];

    //페이지네이션 처리
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedReviews = reviews.slice(startIndex, endIndex);

    //페이지네이션 메타데이터 추가
    const totalReviews = reviews.length;
    const hasNextPage = endIndex < totalReviews;
    const nextPage = hasNextPage ? page + 1 : null;

    //응답 데이터터
    return NextResponse.json({
      ...data,
      currentPage: page,
      reviews: paginatedReviews,
      totalPages: Math.ceil(totalReviews / limit),
      totalReviews,
      hasNextPage,
      nextPage,
    });
  } catch (err) {
    const error = err as AxiosError<ServerErrorResponse>;
    const message = error.response?.data?.error || '와인 상세 데이터 조회실패';
    const status = error.response?.status || 500;

    return NextResponse.json({ error: message }, { status });
  }
};
