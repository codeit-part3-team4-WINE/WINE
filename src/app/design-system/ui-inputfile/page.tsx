'use client';

import { useState } from 'react';

import InputFile from '@/components/Inputs/InputFile';
import ProfileImg from '@/components/ProfileImg';

export default function UiInputFile() {
  const [previewSrc, setPreviewSrc] = useState('');

  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>
        InputFile Component
      </h1>

      <div className='content-text w-full bg-gray-50 p-3 leading-8 text-gray-600'>
        <p>
          <strong>- label:</strong> input 요소의 label로 사용되며, id 및
          name에도 동일하게 적용됩니다.
        </p>
        <p>
          <strong>- children:</strong> 클릭 시 파일 선택을 유도하는 커스텀
          트리거 요소입니다. (예: 이미지, 버튼 등)
        </p>
        <p>
          <strong>- accept:</strong> 허용할 파일의 MIME 타입 지정. (예:
          "image/*", ".pdf")
        </p>
        <p className='pb-4'>
          <strong>- onChange:</strong> 파일이 선택되면 해당 파일의 Blob URL을
          콜백으로 전달합니다.
        </p>

        <h3>Example Code</h3>
        <div className='mt-4 rounded bg-white p-3 text-sm text-gray-700'>
          <pre>
            <code>
              {`<InputFile onChange={setPreviewSrc}>
  <ProfileImg size="lg" src={previewSrc || undefined} isSelectable />
</InputFile>`}
            </code>
          </pre>
        </div>
      </div>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Example</h2>
      <div className='flex flex-col items-start gap-5'>
        <InputFile onChange={setPreviewSrc}>
          <ProfileImg isSelectable size='lg' src={previewSrc || undefined} />
        </InputFile>

        <p className='text-sm text-gray-500'>
          위의 이미지를 클릭하면 이미지 파일 선택창이 열립니다. <br />
          선택된 이미지는 미리보기로 표시됩니다.
        </p>
      </div>
    </div>
  );
}
