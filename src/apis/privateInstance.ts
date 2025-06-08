import axios, { AxiosInstance } from 'axios';

import { API_HEADERS, API_TIMEOUT } from '@/constants/apiConstants';

const privateInstance: AxiosInstance = axios.create({
  //로그인시만 가능한 api요청
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
  timeout: API_TIMEOUT,
  headers: API_HEADERS.JSON,
});

const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (typeof message === 'string') return message;
    if (status) {
      switch (status) {
        case 400:
          return '🚨 잘못된 요청입니다. (400)';
        case 401:
          return '🚨 인증이 필요합니다. (401)';
        case 403:
          return '🚨 권한이 없습니다. (403)';
        case 404:
          return '🚨 요청한 리소스를 찾을 수 없습니다. (404)';
        case 500:
          return '🚨 서버 내부 오류가 발생했습니다. (500)';
        default:
          return `🚨 요청에 실패했습니다. (Status: ${status})`;
      }
    }
  }

  if (error instanceof Error && error.message === 'Network Error') {
    return '🚨 네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.';
  }

  return '🚨 알 수 없는 오류가 발생했습니다.';
};

// 최대 재시도 횟수
const MAX_RETRY = 3;

// 재시도 횟수 Map (URL별 독립적으로 재시도를 카운트하기 위함)
const retryCounts = new Map<string, number>();

// 응답 인터셉터 - 서버에서 내려주는 message를 그대로 사용하고, 네트워크 오류 시 자동 재시도 (최대 3번)
privateInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const config = err.config;

    // config 없다면 재시도 불가능
    if (!config || !config.url) {
      return Promise.reject(new Error(getErrorMessage(err)));
    }

    const currentRetry = retryCounts.get(config.url) || 0;

    // 네트워크 오류 또는 5xx 서버 오류일 때 재시도
    if (
      (err.message === 'Network Error' ||
        (err.response && err.response.status >= 500)) &&
      currentRetry < MAX_RETRY
    ) {
      retryCounts.set(config.url, currentRetry + 1);
      return privateInstance(config); // 재시도
    }

    retryCounts.delete(config.url); // 카운터 Map 정리 (메모리 누수 방지)
    return Promise.reject(new Error(getErrorMessage(err)));
  },
);

export { privateInstance };
