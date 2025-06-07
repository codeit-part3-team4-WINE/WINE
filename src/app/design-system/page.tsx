import Link from 'next/link';

export default function DesignSystem() {
  return (
    <div className='p-8'>
      <div className='grid gap-4'>
        <Link
          className='block rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:bg-gray-50'
          href='/design-system/ui-button'
        >
          <h2 className='text-xl font-semibold text-gray-900'>
            Button Components
          </h2>
          <p className='mt-2 text-gray-600'>
            View all button variations and examples
          </p>
        </Link>

        <Link
          className='block rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:bg-gray-50'
          href='/design-system/ui-icon'
        >
          <h2 className='text-xl font-semibold text-gray-900'>Icons</h2>
          <p className='mt-2 text-gray-600'>View all icons</p>
        </Link>

        <Link
          className='block rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:bg-gray-50'
          href='/design-system/ui-icon'
        >
          <h2 className='text-xl font-semibold text-gray-900'>
            Dropdown Components
          </h2>
          <p className='mt-2 text-gray-600'>View all dropdown examples</p>
        </Link>
      </div>
    </div>
  );
}
