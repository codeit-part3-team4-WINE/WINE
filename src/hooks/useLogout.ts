import axios from 'axios';

import useUserStore from '@/stores/Auth-store/authStore';

const useLogout = () => {
  const clearUser = useUserStore((state) => state.clearUser);

  const logout = async () => {
    try {
      const res = await axios.post('/api/auth/logout');

      if (res.status !== 200) {
        throw new Error('로그아웃에 실패했습니다.');
      }

      clearUser();

      window.location.reload();
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃 오류 발생.');
    }
  };

  return logout;
};

export default useLogout;
