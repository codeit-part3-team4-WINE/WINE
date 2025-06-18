'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import useDebounce from '@/hooks/useDebounce';

import { DEFAULT_MAX_PRICE } from '../constants';
import { FilterState, Wine } from '../types';
import WineFilterSidebar from './WineFilterSidebar';
import WineListContainer from './WineListContainer';
import WineSearchBar from './WineSearchBar';

interface WineApiResponse {
  list: Wine[];
  nextCursor: number;
  hasMore: boolean;
}

interface FetchWinesParams {
  pageParam?: number;
  filters: FilterState;
}

export default function WineSearchSection() {
  const priceMaxRange: number = DEFAULT_MAX_PRICE;
  const [filterState, setFilterState] = useState<FilterState>({
    selectedRating: 0, // 4.0, 4.5 이런식으로 호출
    selectedWineType: '',
    selectedMinPrice: 0,
    selectedMaxPrice: priceMaxRange,
    searchQuery: '',
  });
  const debounceFilterValue = useDebounce<FilterState>(filterState, 300);

  // 검색 필터링 조건이 바뀌었을때, 부드럽게 페이지 최상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [debounceFilterValue]);

  const fetchWines = async ({
    pageParam,
    filters,
  }: FetchWinesParams): Promise<WineApiResponse> => {
    const params = {
      limit: 10,
      cursor: pageParam || 0,
      name: filters.searchQuery || null,
      rating: filters.selectedRating || null,
      type: filters.selectedWineType || null,
      minPrice: filters.selectedMinPrice || null,
      maxPrice: filters.selectedMaxPrice || null,
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
    isLoading,
  } = useInfiniteQuery<WineApiResponse, Error>({
    queryKey: ['wines', debounceFilterValue], // filterState가 변경되면 자동으로 새로운 쿼리 실행
    queryFn: ({ pageParam = 0 }) =>
      fetchWines({
        pageParam: pageParam as number,
        filters: debounceFilterValue,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage: WineApiResponse) => {
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
        priceMaxRange={priceMaxRange}
        onFilterChange={setFilterState}
      />
      <WineListContainer
        data={wineList}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        isLoadingMore={isFetchingNextPage}
        onLoadMore={fetchNextPage}
      />
    </>
  );
}
