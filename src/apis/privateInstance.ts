//클라이언트 컴포넌트 요청용 인스턴스
import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

import { API_HEADERS, API_TIMEOUT } from '@/constants/apiConstants';

const privateInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
  timeout: API_TIMEOUT,
  headers: API_HEADERS.JSON,
});

//  인터셉터로 액세스 토큰을 헤더에 추가
privateInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 401 에러 발생 시 api route를 통해 액세스토큰 재발급후 재요청
privateInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axios.post('/api/auth/refresh');
        const newAccessToken = Cookies.get('accessToken');

        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
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
