import { instance } from '@/apis/instance';

//리프레시토큰을 통해 액세스토큰 갱신용 커스텀훅

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
  return null;
};

const setCookie = (name: string, value: string, maxAgeSeconds: number) => {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAgeSeconds}; secure; samesite=strict`;
};

const useRefresh = () => {
  const refresh = async () => {
    const refreshToken = getCookie('refreshToken');

    if (!refreshToken) {
      throw new Error('refreshToken을 가지고있지않음!');
    }

    const response = await instance.post('/auth/refresh-token', {
      refreshToken,
    });

    const { accessToken } = response.data;

    setCookie('accessToken', accessToken, 3600);

    console.log(`바뀐 토큰: ${accessToken}`);
    return accessToken;
  };

  return refresh;
};

export default useRefresh;
