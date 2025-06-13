'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import WineLogoIcon from '@/app/assets/icons/wine-logo';

export default function Header() {
  // const [isLogin, setIsLogin] = useState(false); //추후에 zustand store에서 state를 가져와 User정보 유무에 따라 조건부렌더링으로 수정
  const router = useRouter();

  return (
    <div className=''>
      <header className='mt-7 h-[5rem] rounded-2xl bg-[#101318] text-white md:h-[7rem]'>
        <div className='flex h-full items-center justify-between px-[4rem] md:px-[8rem]'>
          <Link aria-label='홈으로 이동' href='/'>
            <WineLogoIcon className='cursor-pointer' />
          </Link>

          <div className='flex items-center space-x-8 text-[1.4rem] md:text-[1.6rem] lg:space-x-20'>
            {/* {isLogin ? (
              <div className='h-[3rem] w-[3rem] rounded-full bg-white md:h-[4.5rem] md:w-[4.5rem]' />
            ) : (
              // 위의 div대신 아바타 컴포넌트 들어가기
              <>
                <p
                  onClick={() => router.push(`/login`)}
                  className='cursor-pointer transition-colors hover:text-gray-600'
                >
                  로그인
                </p>
                <p
                  onClick={() => router.push(`/signup`)}
                  className='cursor-pointer transition-colors hover:text-gray-600'
                >
                  회원가입
                </p>
              </>
            )} */}

            <button
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
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
