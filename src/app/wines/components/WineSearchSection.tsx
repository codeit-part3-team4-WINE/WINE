'use client';

import { useEffect, useState } from 'react';

import WineFilterSidebar from './WineFilterSidebar';
import WineListContainer from './WineListContainer';
import WineSearchBar from './WineSearchBar';

export default function WineSearchSection() {
  const maxRange = 10000;
  const [filterState, setFilterState] = useState({
    selectedRating: 0,
    selectedWineTypes: [],
    selectedMinPrice: 0,
    selectedMaxPrice: maxRange,
    searchQuery: '',
  });

  useEffect(() => {
    console.log('Filter state changed:', filterState);
  }, [filterState]);

  // client에서만 렌더링하지 않으면 하이드레이션 오류가 계속 발생
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <WineSearchBar />
      <WineFilterSidebar
        filterState={filterState}
        onFilterChange={setFilterState}
      />
      <WineListContainer />
    </>
  );
}
