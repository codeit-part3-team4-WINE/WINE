// app/design-system/layout.tsx
import Link from 'next/link';

import ArrowIcon from '@/app/assets/icons/arrow';

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen'>
      {/* Header */}
      <header className='sticky top-0 z-10 mt-10 border-gray-200 bg-white py-3'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Link
                className='rounded-mdtext-sm caption-text flex cursor-pointer items-center gap-2 font-medium text-gray-500 transition-colors hover:text-gray-900'
                href='/design-system'
              >
                <ArrowIcon direction='left' size={15} />
                Home
              </Link>
              <div className='h-6 w-px bg-gray-300' />
              <h1 className='text-xl font-bold text-gray-900'>
                Wine Design System
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className='mx-auto my-10 max-w-7xl'>{children}</main>
    </div>
  );
}
