'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import FileUpload from '@/app/assets/svgs/wine-modal-file-upload.svg';
import InputFile from '@/components/Inputs/InputFile';

import InputPair from '../../Inputs/InputPair';
import { SelectBox } from '../../SelectBox';
type WineFormData = {
  name: string;
  region: string;
  image: string | StaticImageData;
  price: number;
  type: string;
};

const OPTIONS = ['Red', 'White', 'Sparkling'];
const INPUT_CLASSNAME = 'w-full border border-gray-300 rounded-[1.6rem]';

export default function WineForm({
  initialData,
}: {
  initialData?: WineFormData;
}) {
  const isEdit = !!initialData;
  const [formData, setFormData] = useState<WineFormData>(
    initialData ?? {
      name: '',
      region: '',
      image: '',
      price: 0,
      type: '',
    },
  );

  const handleChange =
    (key: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    target.value = target.value.replace(/[^0-9]/g, ''); // 숫자만 허용
  };

  return (
    <form
      className='flex flex-col gap-[2rem]'
      id={`wine-${isEdit ? 'change' : 'add'}-form`}
    >
      <InputPair
        inputClassName={INPUT_CLASSNAME}
        label='와인 이름'
        placeholder={isEdit ? initialData.name : '와인 이름 입력'}
        type='text'
        onChange={handleChange('name')}
      />
      <InputPair
        inputClassName={INPUT_CLASSNAME}
        label='가격'
        placeholder={isEdit ? String(initialData.price) : '가격 입력'}
        step='10000'
        type='number'
        onChange={handleChange('price')}
        onInput={handleNumberInput}
      />
      <InputPair
        inputClassName={INPUT_CLASSNAME}
        label='원산지'
        placeholder={isEdit ? initialData.region : '원산지 입력'}
        type='text'
        onChange={handleChange('region')}
      />
      <SelectBox
        label='타입'
        options={OPTIONS}
        onChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
        {...(isEdit && { value: initialData.type })}
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
      <InputFile
        label='와인 사진'
        onChange={(value: string) =>
          setFormData((prev) => ({ ...prev, image: value }))
        }
      >
        <div className='relative h-[14rem] w-[14rem]'>
          {formData.image !== '' ? (
            <Image
              key={
                typeof formData.image === 'string' ? formData.image : undefined
              }
              fill
              alt={formData.name}
              className='object-contain'
              src={formData.image}
            />
          ) : (
            <Image fill alt='사진을 업로드 해주세요' src={FileUpload} />
          )}
        </div>
      </InputFile>
    </form>
  );
}
