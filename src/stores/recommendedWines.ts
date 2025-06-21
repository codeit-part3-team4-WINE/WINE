import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface RecommendedWineStore {
  ids: number[];
  setWineIds: (ids: number[]) => void;
}

export const useRecommendedWineStore = create<RecommendedWineStore>()(
  persist(
    (set) => ({
      ids: [],
      setWineIds: (ids) => set({ ids }),
    }),
    {
      name: 'recommended-wine-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
