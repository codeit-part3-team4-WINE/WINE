import { create } from 'zustand';

interface RecommendedWineStore {
  ids: number[];
  setWineIds: (ids: number[]) => void;
}

export const useRecommendedWineStore = create<RecommendedWineStore>()(
  (set) => ({
    ids: [],
    setWineIds: (ids) => set({ ids }),
  }),
);
