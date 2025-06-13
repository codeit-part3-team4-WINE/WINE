'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import WineLogoIcon from '@/app/assets/icons/wine-logo';
import useLogout from '@/hooks/useLogout';
import useUserStore from '@/stores/Auth-store/authStore';

import Dropdown from './Dropdown';
import ProfileImg from './ProfileImg';

export default function Header() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  const logout = useLogout();
  const setUser = useUserStore((state) => state.setUser);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      alert('로그아웃 실패');
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <div>
      <header className='mt-7 h-[5rem] rounded-2xl bg-[#101318] text-white md:h-[7rem]'>
        <div className='flex h-full items-center justify-between px-[4rem] md:px-[8rem]'>
          <Link aria-label='홈으로 이동' href='/'>
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

            {/* <button
              className='cursor-pointer transition-colors hover:text-gray-600'
              onClick={() => router.push(`/login`)}
            >
              로그인
            </button>
            <button
              className='cursor-pointer transition-colors hover:text-gray-600'
              onClick={() => router.push(`/signup`)}
            >
              회원가입
            </button> */}
          </div>
        </div>
      </header>
    </div>
  );
}
