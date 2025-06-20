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

    const axiosError = error as AxiosError<{ message?: string }>;

    const serverMessage = axiosError.response?.data?.message;

    return {
      success: false,
      message: serverMessage || '프로필 업데이트 실패',
    };
  }
}
