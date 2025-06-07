'use client';

import { useState } from 'react';

import { CommonSelectBox } from '@/components/SelectBox'; // index.ts에서 export한 합성 컴포넌트

export default function UiSelectBox() {
  const [selected, setSelected] = useState('');

  const OPTIONS = ['Red', 'White', 'Sparkling'];

  return (
    <div className='mb-[20rem] p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>
        SelectBox Components
      </h1>

      <div className='content-text w-full bg-gray-50 p-3 leading-10 text-gray-600'>
        <p>
          <strong>- 지원 props:</strong> <code>label</code>,{' '}
          <code>labelClassName</code>, <code>triggerClassName</code>,{' '}
          <code>optionsClassName</code>, <code>optionClassName</code>
        </p>
        <p>
          <strong>- 제어 방식:</strong> uncontrolled 방식으로 선택 상태를
          관리하며, <code>onChange</code>로 부모에 전달
        </p>
        <p>
          <strong>- 합성 구조:</strong> <code>SelectBox</code>,{' '}
          <code>Trigger</code>, <code>Options</code>, <code>Option</code>으로
          구성
        </p>
      </div>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Example</h2>
      <div className='mb-10 flex flex-col gap-4'>
        <CommonSelectBox
          label='타입'
          options={OPTIONS}
          onChange={(value) => setSelected(value)}
        >
          <CommonSelectBox.Trigger />
          <CommonSelectBox.Options>
            {OPTIONS.map((opt) => (
              <CommonSelectBox.Option key={opt} value={opt}>
                <div className='hover:bg-primary-10 hover:text-primary-100 mx-[0.6rem] my-2 flex h-[3.6rem] w-[31.5] items-center rounded-[1.2rem] md:h-[4rem] md:w-[40rem]'>
                  <span className='ml-[1.6em]'>{opt}</span>
                </div>
              </CommonSelectBox.Option>
            ))}
          </CommonSelectBox.Options>
        </CommonSelectBox>

        <p className='text-sm text-gray-600'>
          선택된 값: <strong>{selected}</strong>
        </p>
      </div>
    </div>
  );
}
