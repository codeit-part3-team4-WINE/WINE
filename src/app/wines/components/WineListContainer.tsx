import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';

import WineListCard from './WineListCard';

export default function WineListContainer() {
  return (
    <section className='col-start-1 col-end-4 row-start-3 row-end-5 flex flex-col gap-6 xl:col-start-2 xl:col-end-4 xl:row-start-3 xl:row-end-5'>
      {Array.from({ length: 10 }, (_, index) => (
        <WineListCard
          key={index}
          country='Western Cape, South Africa'
          id={index + 1}
          image={dummyWineImage}
          name='Sentinel Carbernet Sauvignon 2016'
          rating={4.8}
          recentReview='Cherry, cocoa, vanilla and clove - beautiful red fruit driven Amarone.
      Low acidity and medium tannins. Nice long velvety finish.'
          reviewCount={47}
        />
      ))}
    </section>
  );
}
