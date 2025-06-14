import WineCard from '../../components/Card/WineCard';
import { wines } from '../../components/mock/mock-data';

export default function Wines() {
  const wine = wines.list[0];
  return (
    <div className='flex flex-col gap-10'>
      {Array.from({ length: 10 }).map((_, index) => (
        <WineCard
          key={index}
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
