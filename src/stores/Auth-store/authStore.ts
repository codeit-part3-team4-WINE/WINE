import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type User = {
  id: number;
  email: string;
  nickname: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
  image: string | null;
};

type UserStore = {
  user: User | null;
  hasHydrated: boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  setHasHydrated: (state: boolean) => void;
};

/**
 * zustand 사용자 전역 상태관리
 *
 * @example
 * // user 정보 가져오기
 * const user = useUserStore((state) => state.user);
 * <div>{user.id}</div>
 * <div>{user.nickname}</div>
 *
 * // user 정보 설정하기
 * const setUser = useUserStore((state) => state.setUser);
 * setUser({ id: 1, email: 'test@test.com', ... }); //로그인/회원가입시에만 주로 사용됩니다.
 *
 * // user 정보 초기화(로그아웃 등)
 * const clearUser = useUserStore((state) => state.clearUser);
 * clearUser();
 *
 * // 컴포넌트에서 import 후 사용
 * import useUserStore from '@/stores/Auth-store/authStore';
 */
const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        hasHydrated: false,
        setUser: (user: User | null) => set({ user }),
        clearUser: () => set({ user: null }),
        setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
      }),
      {
        name: 'user-storage',
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      },
    ),
  ),
);

export default useUserStore;
