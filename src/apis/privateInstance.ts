import axios, { AxiosInstance } from 'axios';

import { API_HEADERS, API_TIMEOUT } from '@/constants/apiConstants';

const privateInstance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: API_TIMEOUT,
  headers: API_HEADERS.JSON,
});

privateInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axios.post('/api/auth/refresh', null, {});
        console.log('리프레시 보낼게(클라이언트)');
        return privateInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export { privateInstance };
