'use client';

import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';

import WineFilterSidebar from './WineFilterSidebar';
import WineListContainer from './WineListContainer';
import WineSearchBar from './WineSearchBar';

export default function WineSearchSection() {
  const maxRange = 100000;
  const [filterState, setFilterState] = useState({
    selectedRating: 0, // 4.0, 4.5 이런식으로 호출
    selectedWineTypes: [],
    selectedMinPrice: 0,
    selectedMaxPrice: maxRange,
    searchQuery: '',
  });

  const [wineList, setWineList] = useState();

  useEffect(() => {
    const fetchWine = async () => {
      try {
        const params = {
          limit: 10,
          name: filterState.searchQuery,
          rating: filterState.selectedRating,
          type: filterState.selectedWineTypes.pop() || 'RED', // 첫 번째 타입 또는 빈 문자열
          minPrice: filterState.selectedMinPrice,
          maxPrice: filterState.selectedMaxPrice,
        };

        const response = await privateInstance.get('/wines', { params });
        console.log(response.data.list);
        setWineList(response.data.list);
      } catch (error) {
        console.error('와인 데이터 조회 실패:', error);
      }
    };

    fetchWine();
  }, [filterState]);

  return (
    <>
      <WineSearchBar
        filterState={filterState}
        onFilterChange={setFilterState}
      />
      <WineFilterSidebar
        filterState={filterState}
        onFilterChange={setFilterState}
      />
      <WineListContainer data={wineList} />
    </>
  );
}
