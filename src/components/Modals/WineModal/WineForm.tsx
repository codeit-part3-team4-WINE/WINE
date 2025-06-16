'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import FileUpload from '@/app/assets/svgs/wine-modal-file-upload.svg';
import InputFile from '@/components/Inputs/InputFile';

import InputPair from '../../Inputs/InputPair';
import { SelectBox } from '../../SelectBox';

export type WineFormData = {
  id?: number;
  name: string;
  region: string;
  image: string | File;
  price: number;
  type: string;
};

const OPTIONS = ['RED', 'WHITE', 'SPARKLING'];
const INPUT_CLASSNAME = 'w-full border border-gray-300 rounded-[1.6rem]';
const DEFAULT_DATA: WineFormData = {
  name: '',
  region: '',
  image: '',
  price: 0,
  type: '',
};

/**
 * WineForm 컴포넌트
 *
 * 와인 정보를 입력받는 폼을 렌더링하며, 등록/수정 모두 지원합니다.
 * 입력값 변경 시 상위 컴포넌트에 전달하며, 이미지 업로드 처리도 포함됩니다.
 *
 * @param {WineFormData} [wineData] - 수정 시 전달받는 초기값
 * @param {(data: WineFormData) => void} [onChange] - 입력 변경 시 호출되는 콜백
 */
export default function WineForm({
  wineData,
  onChange,
}: {
  wineData?: WineFormData;
  onChange?: (data: WineFormData) => void;
}) {
  const isEdit = !!wineData;
  const [formData, setFormData] = useState<WineFormData>(
    wineData ?? DEFAULT_DATA,
  );
  const [hasInputChanged, setHasInputChanged] = useState({
    name: false,
    price: false,
    region: false,
  });

  // 이미지 미리보기를 위한 src 설정
  const imageSrc =
    typeof formData.image === 'string'
      ? formData.image
      : formData.image instanceof File
        ? URL.createObjectURL(formData.image)
        : '';

  // wineData 변경 시 formData 초기화
  useEffect(() => {
    if (wineData) {
      setFormData(wineData);
    } else {
      setFormData(DEFAULT_DATA);
    }
    setHasInputChanged({
      name: false,
      price: false,
      region: false,
    });
  }, [wineData]);

  // formData 변경 시 상위 컴포넌트에 전달
  useEffect(() => {
    onChange?.(formData);
  }, [formData, onChange]);

  const handleChange =
    (key: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = key === 'price' ? Number(e.target.value) : e.target.value;
      setFormData((prev) => ({ ...prev, [key]: value }));
      setHasInputChanged((prev) => ({ ...prev, [key]: true }));
    };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    target.value = target.value.replace(/[^0-9]/g, '');

    const numericValue = Number(target.value);

    // 100만원 초과 시 경고 및 초기화
    if (numericValue > 1000000) {
      alert('100만원 이하만 입력 가능합니다.');
      target.value = '';
    }
  };

  return (
    <form className='flex flex-col gap-[2rem]'>
      <InputPair
        inputClassName={INPUT_CLASSNAME}
        label='와인 이름'
        placeholder={isEdit ? wineData.name : '와인 이름 입력'}
        type='text'
        value={!hasInputChanged.name ? '' : formData.name}
        onChange={handleChange('name')}
      />
      <InputPair
        inputClassName={INPUT_CLASSNAME}
        label='가격'
        placeholder={isEdit ? String(wineData.price) : '가격 입력'}
        type='text'
        value={
          !hasInputChanged.price ? '' : formData.price.toLocaleString('ko-KR')
        }
        onChange={handleChange('price')}
        onInput={handleNumberInput}
      />
      <InputPair
        inputClassName={INPUT_CLASSNAME}
        label='원산지'
        placeholder={isEdit ? wineData.region : '원산지 입력'}
        type='text'
        value={!hasInputChanged.region ? '' : formData.region}
        onChange={handleChange('region')}
      />
      <div className='relative w-full'>
        <SelectBox
          label='타입'
          options={OPTIONS}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, type: value }))
          }
          {...(isEdit && { value: wineData.type })}
        >
          <SelectBox.Trigger triggerClassName='w-full' />
          <SelectBox.Options>
            {OPTIONS.map((opt) => (
              <SelectBox.Option key={opt} value={opt}>
                <div className='hover:bg-primary-10 hover:text-primary-100 mx-[0.6rem] my-2 flex h-[3.6rem] w-full items-center rounded-[1.2rem] px-2 py-2 md:h-[4rem]'>
                  <span className='ml-[1.6em]'>{opt}</span>
                </div>
              </SelectBox.Option>
            ))}
          </SelectBox.Options>
        </SelectBox>
      </div>
      <InputFile
        label='와인 사진'
        onChange={async (file: File) => {
          const form = new FormData();
          form.append('file', file);

          try {
            const res = await privateInstance.post('/images/upload', form, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });

            const { url } = res.data;

            setFormData((prev) => ({ ...prev, image: url }));
          } catch (err) {
            console.error('이미지 업로드 실패:', err);
            alert('이미지 업로드에 실패했습니다.');
          }
        }}
      >
        <div className='relative h-[14rem] w-[14rem]'>
          {formData.image !== '' ? (
            <Image
              key={
                typeof formData.image === 'string' ? formData.image : undefined
              }
              fill
              alt={formData.name}
              className='rounded-[1.6rem] border border-gray-300 object-contain'
              src={imageSrc || FileUpload}
            />
          ) : (
            <Image fill alt='사진을 업로드 해주세요' src={FileUpload} />
          )}
        </div>
      </InputFile>
    </form>
  );
}
