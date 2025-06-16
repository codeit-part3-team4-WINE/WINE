import { createPrivateServerInstance } from '@/apis/privateServerInstance';

import WineCard from '../../components/Card/WineCard';
import LoadMoreButton from '../../components/LoadMoreBtn';
import Nothing from '../../components/Nothing';
import Tab from '../../components/Tab';

interface Wine {
  id: number;
  name: string;
  image: string;
  price: number;
  region: string;
  rating: number;
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
        <Tab totalCount={0} />
        <div className='mt-[5rem] flex items-center justify-center'>
          <Nothing type='wine' />
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <Tab totalCount={data.totalCount} />
      <div className='flex flex-col gap-10'>
        {wines.map((wine: Wine) => (
          <WineCard
            key={wine.id}
            className='cursor-pointer'
            image={wine.image}
            name={wine.name}
            price={wine.price}
            region={wine.region}
          />
        ))}
      </div>
      <LoadMoreButton initialCursor={data.nextCursor} type='wine' />
    </div>
  );
}
