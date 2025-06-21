'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import TriangleArrowIcon from '@/app/assets/icons/triangle-arrow';
import FileUpload from '@/app/assets/svgs/wine-modal-file-upload.svg';
import InputFile from '@/components/Inputs/InputFile';
import {
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_SIZE,
} from '@/constants/fileValidation';
import { cn } from '@/libs/cn';

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

const WINE_NAME_PLACEHOLDERS = [
  'Château Margaux',
  'Louis Latour Pinot Noir',
  'Tenuta San Guido Sassicaia',
  'Opus One',
  'Pfeiffer Going for Broke',
];

const REGION_PLACEHOLDERS = [
  'Bordeaux, France',
  'Tuscany, Italy',
  'Sonoma County, California, USA',
  'Barossa Valley, Australia',
  'Mendoza, Argentina',
];

const PRICE_PLACEHOLDERS = ['49,000', '64,900', '120,000', '89,500', '230,000'];

const OPTIONS = ['RED', 'WHITE', 'SPARKLING'];
const OPTION_LABELS = {
  RED: '레드와인',
  WHITE: '화이트와인',
  SPARKLING: '스파클링와인',
} as const;

const INPUT_CLASSNAME =
  'w-full border border-gray-300 rounded-[1.6rem], focus:border-2 focus:border-gray-500';

const DEFAULT_DATA: WineFormData = {
  name: '',
  region: '',
  image: '',
  price: 0,
  type: OPTIONS[Math.floor(Math.random() * OPTIONS.length)],
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
  const DEFAULT_DATA: WineFormData = {
    name: '',
    region: '',
    image: '',
    price: 0,
    type: OPTIONS[Math.floor(Math.random() * OPTIONS.length)],
  };

  const isEdit = !!wineData;
  const [formData, setFormData] = useState<WineFormData>(
    wineData ?? DEFAULT_DATA,
  );

  const [priceError, setPriceError] = useState('');
  const [imgError, setImgError] = useState('');

  // placeholder 랜덤 값
  const [randomPlaceholders] = useState(() => ({
    name: WINE_NAME_PLACEHOLDERS[
      Math.floor(Math.random() * WINE_NAME_PLACEHOLDERS.length)
    ],
    region:
      REGION_PLACEHOLDERS[
        Math.floor(Math.random() * REGION_PLACEHOLDERS.length)
      ],
    price:
      PRICE_PLACEHOLDERS[Math.floor(Math.random() * PRICE_PLACEHOLDERS.length)],
  }));

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
    };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    target.value = target.value.replace(/[^0-9]/g, '');

    const numericValue = Number(target.value);

    // 100만원 이상 입력시 에러
    if (numericValue > 1000000) {
      setPriceError('100만원 이하만 입력 가능합니다.');
      target.value = '1000000';
      setFormData((prev) => ({ ...prev, price: 1000000 }));
    } else {
      setPriceError('');
      setFormData((prev) => ({ ...prev, price: numericValue }));
    }
  };

  const handleFileChange = (file: File) => {
    if (file.size > MAX_IMAGE_SIZE) {
      setImgError('이미지 용량은 5MB 이하만 업로드 가능합니다.');
      return;
    }

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setImgError('지원하지 않는 파일 형식입니다. (jpg, png, webp만 가능)');
      return;
    }

    setFormData((prev) => ({ ...prev, image: file }));
    console.log(file);
  };

  return (
    <form className='flex flex-col gap-[2rem]'>
      <InputPair
        inputClassName={INPUT_CLASSNAME}
        label='와인 이름'
        placeholder={isEdit ? wineData.name : randomPlaceholders.name}
        type='text'
        value={formData.name}
        onChange={handleChange('name')}
      />
      <div>
        <InputPair
          inputClassName={cn(
            INPUT_CLASSNAME,
            priceError && 'border-red-500 focus:border-2 focus:border-red-500',
          )}
          label='가격'
          placeholder={
            isEdit ? String(wineData.price) : randomPlaceholders.price
          }
          type='text'
          value={
            formData.price === 0 ? '' : formData.price.toLocaleString('ko-KR')
          }
          onChange={handleChange('price')}
          onInput={handleNumberInput}
        />
        {priceError && (
          <p className='mt-1 ml-2 text-sm text-red-500'>{priceError}</p>
        )}
      </div>
      <InputPair
        inputClassName={INPUT_CLASSNAME}
        label='원산지'
        placeholder={isEdit ? wineData.region : randomPlaceholders.region}
        type='text'
        value={formData.region}
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
          <SelectBox.Trigger
            triggerClassName={`w-full focus:border-2 text-md focus:border-gray-500 ${isEdit ? '' : 'text-gray-800'}`}
          >
            <>
              {OPTION_LABELS[formData.type] || ''}
              <TriangleArrowIcon />
            </>
          </SelectBox.Trigger>
          <SelectBox.Options>
            {(
              Object.keys(OPTION_LABELS) as Array<keyof typeof OPTION_LABELS>
            ).map((key) => (
              <SelectBox.Option key={key} value={key}>
                <div className='hover:bg-primary-10 hover:text-primary-100 mx-[0.6rem] my-2 flex h-[3.6rem] w-full items-center rounded-[1.2rem] px-2 py-2 md:h-[4rem]'>
                  <span className='ml-[1.6em]'>{OPTION_LABELS[key]}</span>
                </div>
              </SelectBox.Option>
            ))}
          </SelectBox.Options>
        </SelectBox>
      </div>
      <InputFile label='와인 사진' onChange={handleFileChange}>
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
        {imgError && (
          <p className='mt-1 ml-2 text-sm text-red-500'>{imgError}</p>
        )}
      </InputFile>
    </form>
  );
}
