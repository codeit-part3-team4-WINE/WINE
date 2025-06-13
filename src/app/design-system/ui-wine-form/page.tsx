import WineDummy from '@/app/assets/images/dummy_wine_image.png';
import WineForm from '@/components/Modals/WineModal/WineForm';

const wine = {
  name: 'Sentinal Carbernet Sauvignon 2016',
  region: 'Western Cape, South Africa',
  image: WineDummy,
  price: 64990,
  type: 'White',
};

export default function UiWineForm() {
  return (
    <div className='flex justify-center'>
      <WineForm initialData={wine} />
    </div>
  );
}
