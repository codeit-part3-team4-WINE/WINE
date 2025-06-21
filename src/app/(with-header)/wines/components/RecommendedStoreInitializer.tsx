'use client';

import { useEffect } from 'react';

import { useRecommendedWineStore } from '@/stores/recommendedWines';

interface StoreInitializerProps {
  wineIds: number[];
}

export default function StoreInitializer({ wineIds }: StoreInitializerProps) {
  const setWineIds = useRecommendedWineStore((state) => state.setWineIds);

  useEffect(() => {
    setWineIds(wineIds);
  }, [wineIds, setWineIds]);

  return null;
}
