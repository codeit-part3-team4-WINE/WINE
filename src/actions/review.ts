'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

// ✅ 리뷰 등록 전용 서버 액션
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

    const wineId = Number(formData.get('wineId'));

    const payload = {
      wineId,
      content: String(formData.get('reviewText')),
      rating: Number(formData.get('rating')),
      aroma: JSON.parse(String(formData.get('aroma'))),
      lightBold: Number(formData.get('lightBold')),
      smoothTannic: Number(formData.get('smoothTannic')),
      drySweet: Number(formData.get('drySweet')),
      softAcidic: Number(formData.get('softAcidic')),
    };

    console.log('[submitReview] 전송 JSON:', payload);

    await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reviews`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return { success: true };
  } catch (error) {
    const err = error as { response?: { data?: { error?: string } } };
    console.error('[submitReview] 에러 응답:', err.response?.data);
    return {
      success: false,
      message: err.response?.data?.error ?? '리뷰 등록 중 오류 발생',
    };
  }
}
