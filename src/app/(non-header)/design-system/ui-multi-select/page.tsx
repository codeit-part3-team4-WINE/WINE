'use client';

import { useState } from 'react';

import MultiSelect from '@/components/MultiSelect';

export default function UiIcon() {
  const [values, setValues] = useState<(string | number)[]>([]);
  const [flavors, setFlavors] = useState<(string | number)[]>([]);

  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>Multi Select</h1>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Example</h2>
      <div className='mt-5'>
        <MultiSelect
          selectedValues={values}
          title='WINE TYPES'
          onSelectionChange={setValues}
        >
          <MultiSelect.Option value='red'>Red</MultiSelect.Option>
          <MultiSelect.Option value='white'>White</MultiSelect.Option>
          <MultiSelect.Option value='sparkling'>Sparkling</MultiSelect.Option>
        </MultiSelect>
        <p className='content-text mt-10'>선택된 옵션들: {values.join(', ')}</p>
      </div>

      <div className='mt-30'>
        <MultiSelect
          optionsClassName='w-full flex-wrap gap-x-3 gap-y-6'
          selectedValues={flavors}
          title='기억에 남는 향이 있나요?'
          titleClassName='mb-8 text-gray-800'
          onSelectionChange={setFlavors}
        >
          {[
            '체리',
            '베리',
            '오크',
            '바닐라',
            '후추',
            '제빵',
            '풀',
            '사과',
            '복숭아',
            '시트러스',
            '트로피컬',
            '미네랄',
            '꽃',
            '담뱃잎',
            '흙',
            '초콜릿',
            '스파이스',
            '카라멜',
            '가죽',
          ].map((flavor) => {
            return (
              <MultiSelect.Option key={flavor} value={flavor}>
                {flavor}
              </MultiSelect.Option>
            );
          })}
        </MultiSelect>
        <p className='content-text mt-10'>
          선택된 옵션들: {flavors.join(', ')}
        </p>
      </div>
    </div>
  );
}
