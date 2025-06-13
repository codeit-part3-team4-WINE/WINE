import WineCard from '../../components/Card/WineCard';
import { wines } from '../../components/mock/mock-data';

export default function Wines() {
  const wine = wines.list[0];
  return (
    <WineCard
      image={wine.image}
      name={wine.name}
      price={wine.price}
      region={wine.region}
    />
  );
}
