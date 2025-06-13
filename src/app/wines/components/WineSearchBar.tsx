'use client';

import SearchInput from '@/components/Inputs/SearchInput';

export default function WineSearchBar() {
  return (
    <section className='col-start-2 col-end-4 row-start-2 row-end-3 md:col-end-3 md:row-end-3 xl:col-start-2 xl:col-end-4 xl:row-start-2 xl:row-end-3'>
      <SearchInput className='w-full' size='lg' />
    </section>
  );
}
