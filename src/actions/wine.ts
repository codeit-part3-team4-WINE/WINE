// actions/wine.ts
'use server';

import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { invalidateRecommendedWinesCache } from './review';

export async function deleteWine(
  wineId: number,
  isRecommendedWine: boolean,
): Promise<{ success: boolean; message?: string }> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;

    if (!token) {
      return { success: false, message: '로그인이 필요합니다.' };
    }

    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/wines/${wineId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status >= 200 && response.status < 300) {
      // 추천 와인 캐시 무효화
      if (isRecommendedWine) await invalidateRecommendedWinesCache();

      // ✅ 삭제 후 해당 와인 페이지 경로나 목록 경로 무효화
      revalidatePath('/myprofile'); // 또는 `/wines` 목록이 있는 경로로
      return { success: true };
    } else {
      console.error('[deleteWine] 서버 오류:', response.status);
      return {
        success: false,
        message: '와인 삭제 중 오류 발생',
      };
    }
  } catch (error) {
    const err = error as Error;
    console.error('[deleteWine] 실패:', err.message);
    return {
      success: false,
      message: '와인 삭제 중 오류 발생',
    };
  }
}
