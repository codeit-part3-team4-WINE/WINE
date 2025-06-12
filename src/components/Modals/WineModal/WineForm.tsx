'use client';

import Image from 'next/image';

import FileUpload from '@/app/assets/svgs/wine-modal-file-upload.svg';
import InputFile from '@/components/Inputs/InputFile';

import InputPair from '../../Inputs/InputPair';
import { SelectBox } from '../../SelectBox';

const OPTIONS = ['Red', 'White', 'Sparkling'];

export default function WineForm() {
  return (
    <form className='flex flex-col gap-[2rem]'>
      <InputPair inputClassName='w-full' label='와인 이름' type='text' />
      <InputPair
        inputClassName='w-full'
        label='가격'
        step='1000'
        type='number'
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          target.value = target.value.replace(/[^0-9]/g, ''); // 숫자만 허용
        }}
      />
      <InputPair inputClassName='w-full' label='원산지' type='text' />
      <SelectBox
        label='타입'
        options={OPTIONS}
        onChange={(value) => console.log(value)}
      >
        <SelectBox.Trigger triggerClassName='w-full' />
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
      <InputFile label='와인 사진'>
        <div className='relative h-[14rem] w-[14rem]'>
          <Image fill alt='사진을 업로드 해주세요' src={FileUpload} />
        </div>
      </InputFile>
    </form>
  );
}
