import InputPair from '@/components/Inputs/InputPair';
import SearchInput from '@/components/Inputs/SearchInput';

export default function LandingPage() {
  return (
    <h1 className='text-primary-100 text-3xl'>
      <SearchInput type='text' />
      <InputPair label='와인 이름' />
    </h1>
  );
}
