'use client';

import { useEffect, useRef } from 'react';

/**
 * 무한 스크롤을 위한 Intersection Observer 커스텀 훅
 *
 * @param callback 대상 옵저버 div가 완전히 보일때 실행할 콜백 함수
 * @param isLoading 현재 데이터를 불러오는 중인지 여부. true일 때 관찰 중단
 * @param isLastPage 마지막 페이지인지 여부. true일 때 관찰 중단
 * @returns observerRef : 관찰할 DOM 요소에 연결할 ref 객체
 *
 * @example
 * 1) import
 * const observerRef = useInfiniteScroll(fetchData, isLoading, isLastPage);
 *
 * 2) ref 연결
 * <div ref={observerRef} className="h-4" />
 */

export default function useIntersectionObserver(
  callback: () => void,
  isLoading: boolean,
  isLastPage: boolean,
) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLoading || isLastPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoading, isLastPage, callback]);

  return observerRef;
}
