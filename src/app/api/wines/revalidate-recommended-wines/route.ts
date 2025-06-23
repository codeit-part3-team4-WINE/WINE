import { revalidatePath } from 'next/cache';

/**
 * @description
 * 추천 와인 캐시를 무효화하는 POST 요청입니다.
 */
export async function POST() {
  try {
    revalidatePath('/wines');
    return new Response('Revalidated', { status: 200 });
  } catch (error) {
    console.error('캐시 무효화 실패:', error);
    return new Response('Failed to revalidate', { status: 500 });
  }
}
