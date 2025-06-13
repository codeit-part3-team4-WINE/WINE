import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';

import RecommendedWineItem from './RecommendedWineItem';

function RecommendedWineList() {
  return (
    <div className='rounded-3xl bg-gray-100 p-8'>
      <h2 className='sub-title-text mb-4'>이번 달 추천 와인</h2>

      <div className='flex gap-6 overflow-y-scroll'>
        {Array.from({ length: 10 }, (_, index) => (
          <RecommendedWineItem
            key={index}
            id={index + 1}
            imageSrc={dummyWineImage}
            name='Sentinel Carbernet Sauvignon 2016'
            rating={4.2}
          />
        ))}
      </div>
    </div>
  );
}

export default function WineRecommendationSection() {
  return (
    <section className='col-start-1 col-end-4 row-start-1 row-end-2'>
      <RecommendedWineList />
    </section>
  );
}
