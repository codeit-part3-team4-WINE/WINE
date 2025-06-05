import SearchIcon from '@/app/assets/icons/search';
import { cn } from '@/libs/cn';

import Input from './Input';

interface SearchInputProps
  extends Omit<React.ComponentProps<typeof Input>, 'className' | 'size'> {
  placeholder?: string;
  size?: 'sm' | 'lg';
}

const sizeClasses = {
  sm: 'w-[21rem] h-[3.8rem]',
  lg: 'w-[40rem] h-[4.8rem]',
};

/**
 * SearchInput 컴포넌트
 *
 * @component
 * @param {SearchInputProps} props - 컴포넌트 props
 * @param {string} props.type - input 타입
 * @param {string} [props.placeholder] - placeholder 텍스트
 * @param {'sm' | 'lg'} [props.size='sm'] - 컴포넌트 크기
 * @param {React.RefObject<HTMLInputElement>} [props.ref] - input ref
 * @returns {JSX.Element} SearchInput 컴포넌트
 *
 * @example
 * 기본 사용법 (type은 기본적으로 text)
 * <SearchInput />
 *
 * @example
 * 크기 지정
 * <SearchInput size="lg" />
 */

export default function SearchInput({
  type = 'text',
  placeholder = '와인을 검색해보세요',
  size = 'sm',
  ...inputProps
}: SearchInputProps) {
  return (
    <div className='relative'>
      <SearchIcon className='absolute top-7 left-5' size={20} />
      <Input
        {...inputProps}
        className={cn('rounded-full pl-15', sizeClasses[size])}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
