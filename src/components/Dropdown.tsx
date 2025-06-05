'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface DropdownItem {
  label: string;
  onClick: () => void;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
}

/**
 * Dropdown 컴포넌트
 *
 * trigger를 클릭하면 메뉴를 열고, 메뉴 항목을 클릭하면 해당 동작을 수행한 후 드롭다운을 닫습니다.
 *
 * @param props.trigger - 드롭다운을 열고 닫는 트리거 요소
 * @param props.items - 드롭다운 항목 목록
 *
 * @example
 * const items = [
 *   { label: '수정하기', onClick: () => () },
 *   { label: '삭제하기', onClick: () => () },
 * ];
 *
 * <Dropdown trigger={<VerticalMoreIcon />} items={items} />
 */
export default function Dropdown({ trigger, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className='relative'>
      <button
        aria-expanded={isOpen}
        aria-haspopup='true'
        className='cursor-pointer'
        type='button'
        onClick={handleToggle}
      >
        {trigger}
      </button>
      {isOpen && (
        <div className='absolute right-0 flex flex-col content-center justify-around rounded-[1.6rem] border border-gray-300 bg-white p-2 md:p-4'>
          {items.map(({ label, onClick }) => (
            <button
              key={label}
              className='hover:bg-primary-10 hover:text-primary-100 text-md z-30 h-[4.6rem] w-[10.1rem] cursor-pointer rounded-[1.2rem] font-medium md:w-[11.8rem] md:text-lg'
              type='button'
              onClick={() => {
                onClick();
                setIsOpen(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
