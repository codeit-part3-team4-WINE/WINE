/* eslint-disable */
import { createPrivateServerInstance } from '@/apis/privateServerInstance';
import WineCard from '../../components/Card/WineCard';

export default async function Wines() {
  const axios = await createPrivateServerInstance();

  const { data } = await axios.get('/users/me/wines', {
    params: {
      limit: 10,
    },
  });

  const wines = data.list;

  if (!Array.isArray(wines) || wines.length === 0) {
    return <div className='text-gray-500'>등록된 와인이 없습니다.</div>;
  }

  return (
    <div className='flex flex-col gap-10'>
      {wines.map((wine: any) => (
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
  );
}
