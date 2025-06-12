'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function Tab({ totalCount }: { totalCount: number }) {
  const router = useRouter();
  const pathname = usePathname();

  const TABS = [
    { label: '내가 쓴 후기', path: '/myprofile/reviews' },
    { label: '내가 등록한 와인', path: '/myprofile/wines' },
    { label: '관심 있는 후기', path: '/myprofile/favorites' },
  ];

  return (
    <nav className='mt-[4rem] flex h-[2.6rem] w-full items-center justify-between md:h-[3.2rem]'>
      <div className='md:text-2lg flex shrink-0 gap-[1.6rem] text-lg font-bold text-gray-500 md:gap-[3.2rem]'>
        {TABS.map(({ label, path }) => (
          <button
            key={path}
            className={`cursor-pointer hover:text-gray-800 ${
              pathname === path && 'text-gray-800'
            }`}
            type='button'
            onClick={() => router.push(path)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className='text-primary-100 shrink-0 text-xs font-medium'>
        총{totalCount}개
      </p>
    </nav>
  );
}
