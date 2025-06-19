/**
 * 서버 컴포넌트에서 인증(엑세스토큰)이 필요한 API 요청을 위한 Axios 인스턴스 생성 함수입니다.
 *
 * - 서버의 쿠키(accessToken, refreshToken)를 읽어 Authorization 헤더에 자동으로 추가합니다.
 * - accessToken이 없고 refreshToken만 있을 경우, /api/auth/refresh를 통해 토큰을 재발급받아 사용합니다.
 *  !!! 재요청후 accessToken을 쿠키에 저장하지 않습니다. 서버 컴포넌트에서는 클라이언트 쿠키에 접근할 수 없어서입니다.
 *
 * @example
 * import { createPrivateInstanceServer } from '@/apis/privateInstanceServer';
 *
 * export default async function MyServerComponent() {
 *   const axiosInstance = await createPrivateInstanceServer();
 *   const res = await axiosInstance.get('/api/protected');
 *   // ...
 * }
 */

//서버컴포넌트에서의 요청용 인스턴스

import axios, { AxiosInstance } from 'axios';
import { cookies } from 'next/headers';

import { API_HEADERS, API_TIMEOUT } from '@/constants/apiConstants';

const getCookieHeader = async () => {
  const cookieStore = await cookies();
  return cookieStore
    .getAll()
    .map((token) => `${token.name}=${token.value}`)
    .join('; ');
};

const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/refresh`,
      {},
      {
        headers: {
          Cookie: await getCookieHeader(),
        },
      },
    );
    console.log(`서버인스턴스 토큰 재발급 성공 ${res.data.accessToken}`);
    return res.data.accessToken;
  } catch (e) {
    console.error('토큰 재발급 실패', e);
    return null;
  }
};

export const createPrivateServerInstance = async (): Promise<AxiosInstance> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}`,
    timeout: API_TIMEOUT,
    headers: {
      ...API_HEADERS.JSON,
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  // 401 에러일시 토큰 재발급 받고 재요청 처리
  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        refreshToken
      ) {
        originalRequest._retry = true;

        const newAccessToken = await refreshAccessToken();
        console.log('새 accessToken:', newAccessToken);

        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          console.log(
            '재요청 Authorization 헤더:',
            originalRequest.headers.Authorization,
          );

          return instance(originalRequest);
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
};
