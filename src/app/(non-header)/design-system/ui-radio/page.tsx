'use client';

import { useState } from 'react';

import RadioGroup from '@/app/(with-header)/wines/components/Radio';
import ToggleRadioGroup from '@/app/(with-header)/wines/components/ToggleRadio';
import Button from '@/components/Button';

export default function UiRadio() {
  const [selected, setSelected] = useState<number | string>(1);
  const [toggleSelected, setToggleSelected] = useState<string>('');

  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>Radio</h1>
      <div className='content-text w-full bg-gray-50 p-3 leading-10 text-gray-600'>
        <p>
          <strong>- 구성:</strong> RadioGroup, RadioGroup.Title,
          RadioGroup.Radio
        </p>

        <p>
          <strong>- RadioGroup [props]: </strong>
          <code>title</code> <span className='text-gray-400'>|</span>{' '}
          <code>titleClassName</code> <span className='text-gray-400'>|</span>{' '}
          <code>radioGroupClassName</code>{' '}
          <span className='text-gray-400'>|</span> <code>onChange</code>
        </p>

        <p>
          <strong>- RadioGroup.Radio [props]: </strong>
          <code>value</code> <span className='text-gray-400'>(required)</span>
        </p>

        <hr className='my-6 border-gray-200' />

        <p className='font-bold text-black'>🧩 기본 사용 예시</p>
        <pre className='bg-white p-4 text-sm text-gray-800'>
          {`<RadioGroup
  radioGroupClassName="gap-3"
  title="Rating"
  titleClassName="mb-4 text-[1.8rem]"
  onSelect={(value) => setSelected(value)}
>
  <RadioGroup.Radio value={1}>전체</RadioGroup.Radio>
  <RadioGroup.Radio value={2}>4.5 - 5.0</RadioGroup.Radio>
  <RadioGroup.Radio value={3}>4.0 - 4.5</RadioGroup.Radio>
  <RadioGroup.Radio value={4}>3.5 - 4.0</RadioGroup.Radio>
  <RadioGroup.Radio value={5}>3.0 - 3.5</RadioGroup.Radio>
</RadioGroup>`}
        </pre>
      </div>

      <h2 className='mt-10 mb-10 text-xl font-bold text-gray-700'>Example</h2>

      <RadioGroup
        radioGroupClassName='gap-3'
        selectedValue={selected}
        title='Rating'
        titleClassName='mb-4 text-[1.8rem]'
        onSelect={(value) => setSelected(value)}
      >
        <RadioGroup.Radio value={1}>전체</RadioGroup.Radio>
        <RadioGroup.Radio value={2}>4.5 - 5.0</RadioGroup.Radio>
        <RadioGroup.Radio value={3}>4.0 - 4.5</RadioGroup.Radio>
        <RadioGroup.Radio value={4}>3.5 - 4.0</RadioGroup.Radio>
        <RadioGroup.Radio value={5}>3.0 - 3.5</RadioGroup.Radio>
      </RadioGroup>
      <p className='content-text mt-6'>선택한 값: {selected}</p>

      <Button onClick={() => setSelected(0)}>리셋</Button>

      <ToggleRadioGroup
        radioGroupClassName='gap-3'
        selectedValue={toggleSelected}
        title='Rating'
        titleClassName='mb-4 text-[1.8rem]'
        onSelect={(value) => setToggleSelected(value)}
      >
        <ToggleRadioGroup.Radio value='RED'>RED</ToggleRadioGroup.Radio>
        <ToggleRadioGroup.Radio value='WHITE'>WHITE</ToggleRadioGroup.Radio>
        <ToggleRadioGroup.Radio value='SPARKLING'>
          SPARKLING
        </ToggleRadioGroup.Radio>
      </ToggleRadioGroup>

      <p className='content-text mt-6 bg-amber-50'>
        선택한 값2: {toggleSelected}
      </p>

      <Button onClick={() => setToggleSelected('')}>리셋2</Button>
    </div>
  );
}
