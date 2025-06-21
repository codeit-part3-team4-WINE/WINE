'use client';

import { Children, isValidElement } from 'react';

import LoaderCircleIcon from '@/app/assets/icons/loader-circle';
import {
  BUTTON_ROUND,
  BUTTON_SIZE,
  BUTTON_VARIANTS,
  LOADER_VARIANTS,
} from '@/constants/button';
import { cn } from '@/libs/cn';

type DisplayNameType = {
  displayName?: string;
};

interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'type' | 'onClick' | 'disabled' | 'className' | 'ref'
  > {
  /** 버튼 클릭 시 호출되는 함수 */
  onClick: () => void;
  /** 버튼에 표시될 자식 요소 (텍스트, 아이콘 등) */
  children: React.ReactNode;
  /** 버튼의 타입 - 기본값: 'button' */
  type?: 'button' | 'submit' | 'reset';
  /** 버튼 스타일 타입 */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'kakao';
  /** 버튼 크기 */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  /** 버튼 모서리 스타일 */
  round?: 'rounded' | 'circular' | 'square';
  /** 로딩 상태 표시 여부 */
  loading?: boolean;
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 사용자 정의 클래스 */
  className?: string;
  /** 버튼의 ref */
  ref?: React.Ref<HTMLButtonElement>;
}

function LoadingButton({ className }: { className: string }) {
  return (
    <>
      <LoaderCircleIcon className={className} size={20} />
      <p className='opacity-70'>Processing...</p>
    </>
  );
}

/**
 * <공통 버튼 컴포넌트>
 * 필수 props으로는 onClick과 children을 받습니다.
 * children으로 텍스트나 아이콘을 전달 받습니다. (string과 컴포넌트 이름에 'Icon' 혹은 'Image'가 있어야만 렌더링 가능합니다.)
 *
 * @component
 * @param {ButtonProps} props - 버튼 속성 타입
 * @property {function} onCLick - 버튼이 눌렸을때 실행될 함수입니다.
 * @property {React.ReactNode} children - 버튼 안에 보여질 콘텐츠를 전달 받습니다. 문자열과 아이콘(컴포넌트 이름에 'Icon' 혹은 'Image' 포함 필수)만 가능하며, 그 외에 요소들은 필터링됩니다.
 * @property {'button' | 'submit' | 'reset'} [type] - 버튼의 타입을 정의합니다.
 * @property {'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'} [variant] - 총 5가지의 버튼 테마를 제공합니다. 기본으로 설정된 테마는 없습니다.
 * @property {'xl' | 'lg' | 'md' | 'sm' | 'xs'} [size] - 버튼의 사이즈를 지정합니다.
 * @property {'rounded' | 'circular' | 'square'} [round] - 버튼의 모서리 스타일을 지정합니다. (default == rounded)
 * @property {boolean} [loading] - 버튼을 로딩 상태로 보여줍니다. 인터랙션이 불가합니다. (default == false)
 * @property {boolean} [disabled] - 버튼을 비활성화 합니다. 인터랙션이 불가합니다. (default == false)
 * @property {string} [className] - variant, size, round 외적으로 스타일 조정이 필요할 때 사용합니다. 스타일 우선순위가 가장 높습니다.
 * @property {React.Ref<HTMLButtonElement>} [ref] - 버튼의 ref를 설정합니다.
 * @returns {JSX.Element} 버튼 요소
 *
 * @example
 * ```tsx
 * <Button onClick={() => console.log('clicked')}>확인</Button>
 * <Button variant="primary" size="md" round="rounded" loading>로딩 중</Button>
 * ```
 */

export default function Button({
  type = 'button',
  onClick,
  variant = 'primary',
  size = 'md',
  round = 'rounded',
  loading = false,
  disabled = false,
  className = '',
  children,
  ref,
  ...props
}: ButtonProps) {
  const buttonClassNames = cn(
    'sub-content-text flex gap-3 flex-shrink-0 justify-center items-center hover:opacity-75 cursor-pointer p-2 disabled:cursor-not-allowed disabled:opacity-60',
    variant ? BUTTON_VARIANTS[variant] : 'border-none',
    BUTTON_SIZE[size],
    BUTTON_ROUND[round],
    className,
  );

  const loaderClassNames = cn('opacity-50', LOADER_VARIANTS[variant]);

  // 텍스트와 아이콘, 이미지만 필터링
  const childrenArray = Children.toArray(children);
  const validChildren = childrenArray.filter(
    (child) =>
      typeof child === 'string' ||
      (isValidElement(child) &&
        typeof child.type === 'function' &&
        ((child.type as DisplayNameType).displayName?.includes('Icon') ||
          (child.type as DisplayNameType).displayName?.includes('Image'))),
  );

  return (
    <button
      ref={ref}
      className={buttonClassNames}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      {...props}
    >
      {loading ? <LoadingButton className={loaderClassNames} /> : validChildren}
    </button>
  );
}
