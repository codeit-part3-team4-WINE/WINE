import { createPrivateServerInstance } from '@/apis/privateServerInstance';

import Test from './components/Test';

export default async function AuthLogicTest() {
  //서버 컴포넌트 인스턴스로 요청(로그인시만 가능한 요청 테스트)
  const instance = await createPrivateServerInstance();

  try {
    const res = await instance.get('/users/me');

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
