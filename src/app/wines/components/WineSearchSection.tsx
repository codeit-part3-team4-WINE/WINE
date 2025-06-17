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
      <WineListContainer />
    </>
  );
}
