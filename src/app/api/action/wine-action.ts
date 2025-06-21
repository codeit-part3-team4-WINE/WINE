'use server';

import { cookies } from 'next/headers';

import { createPrivateServerInstance } from '@/apis/privateServerInstance';

type WineFormData = {
  id?: number;
  name: string;
  region: string;
  image: string | File;
  price: number;
  type: string;
};

/**
 * 와인 데이터 등록 또는 수정 서버 액션
 *
 * 클라이언트에서 전달받은 와인 정보를 기반으로
 * - 새로운 와인을 등록하거나
 * - 기존 와인을 수정합니다.
 *
 * ⚠️ FormData가 아닌 일반 객체를 받아 처리합니다.
 *    (이미지 업로드는 클라이언트 측에서 처리되어 URL로 전달됨)
 *
 * @param {WineFormData} data - 와인 정보
 */
export async function WineData(data: WineFormData) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) throw new Error('로그인 정보가 없습니다.');

  const axios = await createPrivateServerInstance();

  const payload = {
    name: data.name,
    region: data.region,
    image: data.image,
    price: Number(data.price),
    type: data.type,
  };

  // id가 있으면 PATCH (수정), 없으면 POST (등록)
  if (data.id) {
    await axios.patch(`/wines/${data.id}`, payload, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  } else {
    await axios.post('/wines', payload, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
}
