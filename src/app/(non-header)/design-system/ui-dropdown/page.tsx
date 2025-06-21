'use client';

import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import Dropdown from '@/components/Dropdown';

export default function UiDropdown() {
  return (
    <div className='mb-[40rem] p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>
        Dropdown Components
      </h1>

      <section className='mb-8 bg-gray-50 p-4 text-gray-700'>
        <h2 className='mb-2 text-xl font-semibold'>구성 요소</h2>
        <ul className='list-disc pl-5 leading-8'>
          <li>
            <strong>Dropdown</strong>: 드롭다운 전체를 감싸며, 열림/닫힘 상태 및
            외부 클릭 처리 등 핵심 로직 담당
            <br />
            <span className='text-sm text-gray-500'>
              props: <code>children</code>
            </span>
          </li>
          <li>
            <strong>DropdownTrigger</strong>: 클릭 시 드롭다운 메뉴를 열거나
            닫는 트리거 버튼
            <br />
            <span className='text-sm text-gray-500'>
              props: <code>children</code>
            </span>
          </li>
          <li>
            <strong>DropdownMenu</strong>: 드롭다운 메뉴 컨테이너. 열려 있을
            때만 렌더링
            <br />
            <span className='text-sm text-gray-500'>
              props: <code>children</code>, <code>menuClassName</code>
            </span>
          </li>
          <li>
            <strong>DropdownItem</strong>: 메뉴 내부의 클릭 가능한 항목. 클릭 시
            드롭다운 자동 닫힘
            <br />
            <span className='text-sm text-gray-500'>
              props: <code>children</code>, <code>onClick</code>,{' '}
              <code>itemClassName</code>
            </span>
          </li>
        </ul>
      </section>

      <h2 className='mb-3 text-xl font-bold text-gray-700'>Examples</h2>
      <div className='flex items-center justify-center gap-[4rem]'>
        <Dropdown>
          <Dropdown.Trigger>
            <VerticalMoreIcon />
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => console.log('수정하기 클릭')}>
              수정하기
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log('삭제하기 클릭')}>
              삭제하기
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Trigger>
            <div className='h-[4rem] w-[4rem] rounded-full bg-red-500' />
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => console.log('로그아웃 클릭')}>
              로그아웃
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log('마이페이지 클릭')}>
              마이페이지
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
