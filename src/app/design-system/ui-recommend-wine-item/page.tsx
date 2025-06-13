import dummyWineImage from '@/app/assets/images/dummy_wine_image.png';
import RecommendedWineItem from '@/app/wines/components/RecommendedWineItem';

export default function UiIcon() {
  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>
        Recommended Wine Item Component
      </h1>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Examples</h2>
      <div className='mt-10 flex gap-10'>
        <RecommendedWineItem
          id={1}
          imageSrc={dummyWineImage}
          name='Sentinel Carbernet Sauvignon 2016'
          rating={4.8}
        />
        <RecommendedWineItem
          id={2}
          imageSrc=''
          name='Sentinel Carbernet Sauvignon 2016'
          rating={3.2}
        />
      </div>
    </div>
  );
}
