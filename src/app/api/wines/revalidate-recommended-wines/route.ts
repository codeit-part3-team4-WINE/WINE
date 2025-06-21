import { revalidateTag } from 'next/cache';

/**
 * @description
 * 추천 와인 캐시를 무효화하는 POST 요청입니다.
 */
export async function POST() {
  revalidateTag('recommended-wines');
  return new Response('Revalidated', { status: 200 });
}
