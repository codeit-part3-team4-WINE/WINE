'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import WineLogoIcon from '@/app/assets/icons/wine-logo';
import useLogout from '@/hooks/useLogout';
import useUserStore from '@/stores/Auth-store/authStore';

import Dropdown from './Dropdown';
import ProfileImg from './ProfileImg';

export default function Header() {
  const router = useRouter();
  const { user, hasHydrated } = useUserStore();

  const logout = useLogout();
  const setUser = useUserStore((state) => state.setUser);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      toast.error('로그아웃 실패');
      console.error('로그아웃 실패:', error);
    }
  };

  //플리커링 방지를 위해 하이드레이션이 완료되기 전에는 이부분을 렌더링
  if (!hasHydrated) {
    return (
      <header className='mt-7 h-[5rem] animate-pulse rounded-2xl bg-[#101318] text-white md:h-[7rem]'>
        <div className='flex h-full items-center justify-between px-[4rem] md:px-[8rem]'>
          <div className='flex space-x-6' />
        </div>
      </header>
    );
  }
  return (
    <div>
      <header className='mt-7 h-[5rem] rounded-2xl bg-[#101318] text-white md:h-[7rem]'>
        <div className='flex h-full items-center justify-between px-[4rem] md:px-[8rem]'>
          <Link aria-label='wines 이동' href='/wines'>
            <WineLogoIcon className='cursor-pointer' />
          </Link>

          <div className='flex items-center justify-center space-x-8 text-[1.4rem] md:text-[1.6rem] lg:space-x-20'>
            {user ? (
              <div className='text-gray-700'>
                <Dropdown>
                  <Dropdown.Trigger>
                    <ProfileImg
                      className='mt-3 inline-block h-[3rem] w-[3rem] align-middle hover:animate-pulse md:h-[4rem] md:w-[4rem]'
                      src={user?.image ?? undefined}
                    />
                  </Dropdown.Trigger>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>
                      로그아웃
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => router.push(`/myprofile`)}>
                      마이페이지
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <>
                <p
                  className='cursor-pointer transition-colors hover:text-gray-600'
                  onClick={() => router.push(`/login`)}
                >
                  로그인
                </p>
                <p
                  className='cursor-pointer transition-colors hover:text-gray-600'
                  onClick={() => router.push(`/signup`)}
                >
                  회원가입
                </p>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
