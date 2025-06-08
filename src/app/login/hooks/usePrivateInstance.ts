import { useEffect } from 'react';

import { instance } from '@/apis/instance';

import useRefresh from './useRefresh';

const usePrivateInstance = () => {
  const refresh = useRefresh();

  useEffect(() => {
    const responseInterceptor = instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const res = await refresh();
            const newAccessToken = res.data?.accessToken;

            if (newAccessToken) {
              document.cookie = `accessToken=${newAccessToken}; path=/;`;

              originalRequest.headers['Authorization'] =
                `Bearer ${newAccessToken}`;

              return instance(originalRequest);
            }
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [refresh]);
};

export default usePrivateInstance;
