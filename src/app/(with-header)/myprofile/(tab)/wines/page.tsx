import Link from 'next/link';

import { createPrivateServerInstance } from '@/apis/privateServerInstance';

import WineCard from '../../components/Card/WineCard';
import LoadMoreButton from '../../components/LoadMoreBtn';
import Nothing from '../../components/Nothing';

interface Wine {
  id: number;
  name: string;
  image: string;
  price: number;
  region: string;
  rating: number;
  type: string;
}

export default async function Wines() {
  const axios = await createPrivateServerInstance();

  const { data } = await axios.get('/users/me/wines', {
    params: {
      limit: 10,
    },
  });

  const wines = data.list;

  if (!Array.isArray(wines) || wines.length === 0) {
    return (
      <div>
        <div className='mt-[5rem] flex items-center justify-center'>
          <Nothing type='wine' />
        </div>
      </div>
    );
  }

  return (
    <div className='relative flex flex-col'>
      <span className='text-primary-100 absolute top-[-5.2rem] right-0 shrink-0 text-xs font-medium'>
        총{data.totalCount}개
      </span>
      <div className='flex flex-col gap-10'>
        {wines.map((wine: Wine) => (
          <Link key={wine.id} href={`/wines/${wine.id}`}>
            <WineCard key={wine.id} className='cursor-pointer' wine={wine} />
          </Link>
        ))}
      </div>
      <LoadMoreButton initialCursor={data.nextCursor} type='wine' />
    </div>
  );
}
