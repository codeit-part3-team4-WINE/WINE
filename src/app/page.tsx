import InputPair from '@/components/Inputs/InputPair';
import SearchInput from '@/components/Inputs/SearchInput';

export default function LandingPage() {
  return (
    <h1 className='text-primary-100 text-3xl'>
      <InputPair label='와인 인름' />
      <SearchInput />
    </h1>
  );
}
