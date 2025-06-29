import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // 브라우저 환경에서만 실행
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);

    updateMatch();

    media.addEventListener('change', updateMatch);
    return () => media.removeEventListener('change', updateMatch);
  }, [query]);

  return matches;
};

const useDeviceSize = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return { isDesktop, isTablet, isMobile };
};

export default useDeviceSize;
