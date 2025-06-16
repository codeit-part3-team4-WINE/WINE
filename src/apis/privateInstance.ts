/**
 * 클라이언트 컴포넌트에서 인증(엑세스토큰)이 필요한 API 요청을 위한 Axios 인스턴스입니다.
 *
 * - 요청 시 자동으로 accessToken을 헤더에 추가합니다.
 * - 401 에러 발생 시 /api/auth/refresh를 통해 토큰을 재발급받고, 자동으로 재요청합니다.
 * - 재요청 후 액세스토큰은 클라이언트 쿠키에 저장됩니다.
 *
 * @example
 * import { privateInstance } from '@/apis/privateInstance';
 *
 * // GET 요청
 * const getMe = async () => {
    try {
      const response = await privateInstance.get(`/users/me`);
      setUser(response.data);
    } catch (error) {
      console.error('유저 정보 가져오기 실패:', error);
      setUser(null);
    }
  };
 * // POST 요청
 * const res = await privateInstance.post('/api/wine', { wine: 'hihi' });
 */

import axios, { AxiosInstance } from 'axios';

import { API_HEADERS, API_TIMEOUT } from '@/constants/apiConstants';

// 액세스토큰 파싱
function getAccessToken(): string | null {
  const cookies = document.cookie.split(';').map((c) => c.trim());
  const accessTokenCookie = cookies.find((c) => c.startsWith('accessToken='));
  return accessTokenCookie?.split('=')[1] || null;
}

const privateInstance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: API_TIMEOUT,
  headers: API_HEADERS.JSON,
});

// 헤더에 액세스토큰 추가
privateInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${decodeURIComponent(token)}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

//  401이면 리프레시 토큰을 통해 액세스 토큰을 재발급받고, 재요청
privateInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axios.post('/api/auth/refresh');
        const newAccessToken = getAccessToken();

        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${decodeURIComponent(newAccessToken)}`;
        }

        return privateInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export { privateInstance };
