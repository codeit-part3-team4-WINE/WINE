'use server';

import axios from 'axios';
import { revalidatePath } from 'next/cache'; // ✅ 추가
import { cookies } from 'next/headers';

// ✅ 리뷰 등록/수정 서버 액션
export async function submitReview(
  _: undefined,
  formData: FormData,
): Promise<{ success: boolean; message?: string }> {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    if (!accessToken) {
      return {
        success: false,
        message: '로그인이 필요합니다.',
      };
    }

    const reviewId = formData.get('reviewId');
    const wineId = Number(formData.get('wineId'));

    const payload = {
      content: String(formData.get('reviewText')),
      rating: Number(formData.get('rating')),
      aroma: JSON.parse(String(formData.get('aroma'))),
      lightBold: Number(formData.get('lightBold')),
      smoothTannic: Number(formData.get('smoothTannic')),
      drySweet: Number(formData.get('drySweet')),
      softAcidic: Number(formData.get('softAcidic')),
    };

    if (!reviewId) {
      payload['wineId'] = wineId; // ✅ 등록일 때만 wineId 포함
    }

    const endpoint = reviewId
      ? `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews/${reviewId}`
      : `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews`;

    const method = reviewId ? 'patch' : 'post';

    const response = await axios.request({
      method,
      url: endpoint,
      data: payload,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // response 상태가 200번대일 때만 캐시 무효화
    if (response.status >= 200 && response.status < 300) {
      revalidatePath(`/wines/${wineId}`);
      return { success: true };
    } else {
      console.error('[submitReview] 서버 오류:', response.status);
      return {
        success: false,
        message: '리뷰 등록 중 오류 발생',
      };
    }
  } catch (error) {
    const err = error as Error;
    console.error('[submitReview] 에러 응답:', err.message);
    return {
      success: false,
      message: '리뷰 등록 중 오류 발생',
    };
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
export async function deleteReview(
  reviewId: number,
): Promise<{ success: boolean; message?: string }> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;

    if (!token) {
      return { success: false, message: '로그인이 필요합니다.' };
    }

    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews/${reviewId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    // response 상태가 200번대일 때만 성공으로 처리
    if (response.status >= 200 && response.status < 300) {
      return { success: true };
    } else {
      console.error('[deleteReview] 서버 오류:', response.status);
      return {
        success: false,
        message: '리뷰 삭제 중 오류 발생',
      };
    }
  } catch (error) {
    const err = error as Error;
    console.error('[deleteReview] 실패:', err.message);
    return {
      success: false,
      message: '리뷰 삭제 중 오류 발생',
    };
  }
}
