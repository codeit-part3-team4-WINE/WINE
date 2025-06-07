'use client';

import { ReactNode } from 'react';

import { cn } from '@/libs/cn';

import { useDropdownContext } from './DropdownContext';

/**
 * DropdownMenu
 *
 * 드롭다운 메뉴 컨테이너 컴포넌트입니다.
 *
 * 드롭다운이 열려 있을 때만 자식 요소들을 보여줍니다.
 *
 * @param {ReactNode} props.children - 드롭다운 메뉴에 들어갈 내용 (보통 `DropdownItem` 컴포넌트들)
 * @param {string} props.menuClassName - 메뉴 컨테이너에 추가로 적용할 클래스명 (선택사항)
 *
 * @example
 * ```tsx
 * <DropdownMenu>
 *   <DropdownItem onClick={() => console.log('메뉴 1 클릭')}>메뉴 1</DropdownItem>
 *   <DropdownItem onClick={() => console.log('메뉴 2 클릭')}>메뉴 2</DropdownItem>
 * </DropdownMenu>
 * ```
 *
 * ```
 */
export function DropdownMenu({
  children,
  menuClassName,
}: {
  children: ReactNode;
  menuClassName?: string;
}) {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'absolute right-0 flex flex-col content-center justify-around rounded-[1.6rem] border border-gray-300 bg-white p-2 md:p-4',
        menuClassName,
      )}
    >
      {children}
    </div>
  );
}
