import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';
import WineListCard from '@/app/wines/components/WineListCard';

export default function UiWineListCard() {
  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>Wine List Card</h1>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Example</h2>
      <div className='flex flex-wrap gap-5'>
        <WineListCard
          country='Western Cape, South Africa'
          image={dummyWineImage}
          name='Sentinel Carbernet Sauvignon 2016'
          rating={4.8}
          recentReview='Cherry, cocoa, vanilla and clove - beautiful red fruit driven Amarone.
          Low acidity and medium tannins. Nice long velvety finish.'
          reviewCount={47}
        />

        <WineListCard
          country='Western Cape, South Africa Western Cape, South Africa Western Cape, South Africa'
          image={dummyWineImage}
          name='Palazzo della Torre 2017 Palazzo della Torre 2017 Palazzo della Torre 2017 Palazzo della Torre 2017'
          rating={4.8}
          recentReview='Cherry, cocoa, vanilla and clove - beautiful red fruit driven Amarone.
          Low acidity and medium tannins. Nice long velvety finish. Cherry, cocoa, vanilla and clove - beautiful red fruit driven Amarone.
          Low acidity and medium tannins. Nice long velvety finish. Cherry, cocoa, vanilla and clove - beautiful red fruit driven Amarone.
          Low acidity and medium tannins. Nice long velvety finish.'
          reviewCount={47}
        />
      </div>
    </div>
  );
}
