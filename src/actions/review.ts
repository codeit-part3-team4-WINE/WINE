'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

// ✅ 리뷰 등록/수정 서버 액션
export async function submitReview(
  prevState: string | null,
  formData: FormData,
): Promise<string | null> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    return '로그인이 필요합니다.';
  }

  const reviewId = formData.get('reviewId');
  const wineId = Number(formData.get('wineId'));
  const content = formData.get('content')?.toString().trim() ?? '';
  const rating = Number(formData.get('rating'));
  const aroma = JSON.parse(String(formData.get('aroma') || '[]'));

  // ✅ 유효성 검사 (에러 메시지 리턴)
  if (!content) return '리뷰 내용을 입력해 주세요.';
  if (rating === 0) return '별점을 최소 1점 이상 선택해 주세요.';
  if (aroma.length === 0) return '기억에 남는 향을 하나 이상 선택해 주세요.';

  const payload = {
    content,
    rating,
    aroma,
    lightBold: Number(formData.get('lightBold')),
    smoothTannic: Number(formData.get('smoothTannic')),
    drySweet: Number(formData.get('drySweet')),
    softAcidic: Number(formData.get('softAcidic')),
  };
  console.log('[submitReview] payload:', payload);
  if (!reviewId) {
    payload['wineId'] = wineId; // 등록일 때만 wineId 포함
  }

  const endpoint = reviewId
    ? `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews/${reviewId}`
    : `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews`;

  const method = reviewId ? 'patch' : 'post';

  try {
    await axios.request({
      method,
      url: endpoint,
      data: payload,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return null; // 성공
  } catch (error) {
    const err = error as Error;
    console.error('[submitReview] 에러 응답:', err.message);

    return '리뷰 등록 중 오류가 발생했습니다.';
  }
}

// ✅ 리뷰 상세 조회 서버 액션 (수정 시 사용)
export async function getMyReview(reviewId: number) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;

    if (!token) throw new Error('로그인이 필요합니다.');

    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews/${reviewId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    const err = error as Error;
    console.error('[getMyReview] 실패:', err.message);
    return null;
  }
}

// ✅ 리뷰 삭제 서버 액션
export async function deleteReview(reviewId: number): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;

    if (!token) return '로그인이 필요합니다.';

    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews/${reviewId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return null; // 성공
  } catch (error) {
    const err = error as Error;
    console.error('[deleteReview] 실패:', err.message);
    return '리뷰 삭제 중 오류가 발생했습니다.';
  }
}
