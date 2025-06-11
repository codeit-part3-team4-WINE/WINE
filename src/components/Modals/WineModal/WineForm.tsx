import InputPair from '../../Inputs/InputPair';
import { SelectBox } from '../../SelectBox';

const OPTIONS = ['Red', 'White', 'Sparkling'];

export default function WineForm() {
  return (
    <form>
      <InputPair label='와인 이름' type='text' />
      <InputPair label='가격' step='1000' type='number' />
      <InputPair label='원산지' type='text' />
      <SelectBox
        label='타입'
        options={OPTIONS}
        onChange={(value) => console.log(value)}
      >
        <SelectBox.Trigger />
        <SelectBox.Options>
          {OPTIONS.map((opt) => (
            <SelectBox.Option key={opt} value={opt}>
              <div className='hover:bg-primary-10 hover:text-primary-100 mx-[0.6rem] my-2 flex h-[3.6rem] w-[31.5] items-center rounded-[1.2rem] md:h-[4rem] md:w-[40rem]'>
                <span className='ml-[1.6em]'>{opt}</span>
              </div>
            </SelectBox.Option>
          ))}
        </SelectBox.Options>
      </SelectBox>
    </form>
  );
}
