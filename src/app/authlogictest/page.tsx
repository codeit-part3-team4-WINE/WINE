export const dynamic = 'force-dynamic';

import { createPrivateServerInstance } from '@/apis/privateServerInstance';

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
  } catch (error) {
    console.error('유저 데이터 불러오기 실패:', error);
    return (
      <div>
        <p>데이터를 불러오는데 실패했습니다.</p>
      </div>
    );
  }
}
