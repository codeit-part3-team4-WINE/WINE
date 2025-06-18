export const dynamic = 'force-dynamic';
import { createPrivateServerInstance } from '@/apis/privateServerInstance';
import { ApiErrorClass } from '@/libs/errors/apis/ApiError';
import { ApiErrorResponse } from '@/types/apiErrorResponse';

import Test from './components/Test';

export default async function AuthLogicTest() {
  const instance = await createPrivateServerInstance();

  try {
    console.log('GET /users/me 요청 시작');
    const res = await instance.get('/users/me');
    console.log('GET /users/me 응답:', res.data);

    return (
      <div>
        <h2 className='text-3xl text-blue-600'>서버 컴포넌트요청</h2>
        <h3 className='text-3xl'>닉네임 : {res.data.nickname}</h3>
        <h3 className='text-3xl'>유저ID : {res.data.id}</h3>
        <Test />
      </div>
    );

    // 서버컴포넌트 에러처리예시 ------------------------------------------------------------------
  } catch (error: unknown) {
    console.error('유저 데이터 불러오기 실패:', error);

    const status = (error as ApiErrorResponse)?.response?.status;

    const userMessageMap = {
      404: '해당 유저를 찾을 수 없습니다.',
      401: '로그인이 필요합니다.',
      500: '서버 오류가 발생했습니다.',
    };
    throw new ApiErrorClass(status, userMessageMap, '기본 메시지');
  }
}
