'use client';

import { useState } from 'react';

import MultiSelect from '@/app/wines/components/MultiSelect';

export default function UiIcon() {
  const [values, setValues] = useState<(string | number)[]>([]);

  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>Multi Select</h1>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Example</h2>
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
  );
}
