import { createPrivateServerInstance } from '@/apis/privateServerInstance';
import WineCard from '@/app/myprofile/components/Card/WineCard';
import Tab from '@/app/myprofile/components/Tab';

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
        <Tab totalCount={0} />
        <div className='mt-[5rem] flex items-center justify-center'>
          <div>등록된 와인이 없습니다</div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <Tab totalCount={data.totalCount} />
      <div className='flex flex-col gap-10'>
        {wines.map((wine: Wine) => (
          <WineCard key={wine.id} className='cursor-pointer' wine={wine} />
        ))}
      </div>
    </div>
  );
}
