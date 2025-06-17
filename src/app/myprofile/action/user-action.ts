'use server';

import { createPrivateServerInstance } from '@/apis/privateServerInstance';

type UserProfileResult = {
  success: boolean;
  message?: string;
};

export async function UserProfile(
  _,
  data: {
    nickname?: string;
    image?: string;
  },
): Promise<UserProfileResult> {
  const axios = await createPrivateServerInstance();

  try {
    await axios.patch('/users/me', {
      nickname: data.nickname,
      image: data.image,
    });

    return { success: true };
  } catch (error) {
    console.error('프로필 업데이트 실패:', error);
    return { success: false, message: '프로필 업데이트 실패' };
  }
}
