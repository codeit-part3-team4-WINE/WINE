//oAuth 카카오 로그인용 콜백페이지

'use client';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

import useUserStore from '@/stores/Auth-store/authStore';

import KakaoLoading from './components/KakaoLoading';

export default function KakaoCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    // URL에서 code 파라미터를 꺼내옴
    const code = searchParams.get('code');
    if (code) {
      axios
        .post('/api/auth/kakao', { code }) //code를 route로 전달
        .then((res) => {
          //route 응답에서 사용자정보를 받아 zustand에 저장
          const data = res.data;
          if (data.user) {
            setUser(data.user);
            router.push('/wines');
          } else {
            toast.error('카카오 로그인 실패');
            router.push('/login');
          }
        })
        .catch(() => {
          toast.error('카카오 로그인 실패');

          router.push('/login');
        });
    }
  }, [searchParams, router]);

  return <KakaoLoading />;
}
