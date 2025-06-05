import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type User = {
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

  setUser: (user: User | null) => void;
  clearUser: () => void;
};

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user: User | null) => set({ user }),
        clearUser: () => set({ user: null }),
      }),
      {
        name: 'user-storage',
      },
    ),
  ),
);

export default useUserStore;
