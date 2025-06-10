import wineImage from '@/app/assets/images/wine1.png';
import WineInfo from '@/components/WineInfo';

export default function WineInfoBanner() {
  return (
    <div className='w-full rounded-2xl border border-gray-300 px-20 pt-20'>
      <WineInfo
        price={100}
        wineCountry='Wine Country'
        wineImage={wineImage}
        wineName='Wine Name'
      />
    </div>
  );
}
