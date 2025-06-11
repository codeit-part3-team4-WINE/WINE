//서버컴포넌트에서의 요청용 인스턴스

import axios, { AxiosInstance } from 'axios';
import { cookies } from 'next/headers';

import { API_HEADERS, API_TIMEOUT } from '@/constants/apiConstants';

export const createPrivateInstanceServer = async (): Promise<AxiosInstance> => {
  const cookieStore = await cookies();

  let accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  console.log('accessToken:', accessToken, 'refreshToken:', refreshToken);

  //리프레시토큰만 존재하는경우 액세스토큰 재발급
  if (!accessToken && refreshToken) {
    try {
      const cookieHeader = cookieStore
        .getAll()
        .map((token) => `${token.name}=${token.value}`)
        .join('; ');

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/refresh`,
        {},
        {
          headers: {
            Cookie: cookieHeader,
          },
        },
      );

      accessToken = res.data.accessToken;

      console.log(accessToken);

      if (!accessToken) {
        throw new Error('새 액세스 토큰 받기 실패');
      }
    } catch (e) {
      console.error('토큰 리프레시 실패', e);
      throw new Error('토큰 리프레시 실패');
    }
  }

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
    timeout: API_TIMEOUT,
    headers: {
      ...API_HEADERS.JSON,
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  return instance;
};
