import wineImage from '@/app/assets/Images/image.png';
import WineInfo from '@/components/WineInfo';

export default function LandingPage() {
  // return <h1 className='text-primary-100 text-3xl'>Landing</h1>;
  return <WineInfo wineImage={wineImage} />;
}
