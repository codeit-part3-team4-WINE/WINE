'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';

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

  const fetchWines = async ({ pageParam, filters }) => {
    const params = {
      limit: 5,
      cursor: pageParam || 0,
      name: filters.searchQuery,
      rating: filters.selectedRating,
      type: filters.selectedWineTypes[0] || 'RED',
      minPrice: filters.selectedMinPrice,
      maxPrice: filters.selectedMaxPrice,
    };

    const response = await privateInstance.get('/wines', { params });
    return {
      list: response.data.list || [],
      nextCursor: response.data.nextCursor, // API에서 반환하는 다음 cursor
      hasMore: response.data.hasMore, // 더 많은 데이터가 있는지 여부
    };
  };

  const {
    data: wineList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['wines', filterState], // filterState가 변경되면 자동으로 새로운 쿼리 실행
    queryFn: ({ pageParam = 0 }) =>
      fetchWines({ pageParam, filters: filterState }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      // nextCursor가 0이거나 현재 페이지의 데이터가 없으면 더 이상 페이지 없음
      if (lastPage.nextCursor === 0 || !lastPage.list?.length) {
        return undefined;
      }
      return lastPage.nextCursor;
    },
    staleTime: 30 * 1000, // 30초간 캐시 유지
  });

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
      <WineListContainer
        data={wineList}
        hasNextPage={hasNextPage}
        isLoadingMore={isFetchingNextPage}
        onLoadMore={fetchNextPage}
      />
    </>
  );
}
