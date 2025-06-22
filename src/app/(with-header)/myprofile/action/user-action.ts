'use server';

import { AxiosError } from 'axios';

import { createPrivateServerInstance } from '@/apis/privateServerInstance';

type UserProfileResult = {
  success: boolean;
  message?: string;
};

export async function UserProfile(data: {
  nickname?: string;
  image?: string;
}): Promise<UserProfileResult> {
  const axios = await createPrivateServerInstance();

  try {
    await axios.patch('/users/me', {
      nickname: data.nickname,
      image: data.image,
    });

    return { success: true };
  } catch (error) {
    console.error('프로필 업데이트 실패:', error);

    const axiosError = error as AxiosError<{
      message?: string;
      details?: {
        'body.nickname'?: {
          message: string;
          value: string;
        };
      };
    }>;

    // 기본 에러 메세지
    let serverMessage =
      axiosError.response?.data?.message || '프로필 업데이트 실패';

    // nickname 관련 validation 실패 처리
    const nicknameErrorMessage =
      axiosError.response?.data?.details?.['body.nickname']?.message;

    if (nicknameErrorMessage === 'maxLength 30') {
      serverMessage = '닉네임은 최대 30글자만 입력이 가능합니다.';
    }

    if (nicknameErrorMessage === 'unique') {
      serverMessage = '이미 사용중인 닉네임입니다.';
    }

    return {
      success: false,
      message: serverMessage,
    };
  }
}
