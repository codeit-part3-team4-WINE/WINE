import { cn } from '@/libs/cn';

const BASIC_CLASSNAME =
  'text-primary-100 bg-primary-100/10 flex w-fit items-center gap-2 rounded-xl px-3 py-2 text-xl font-bold';

/**
 * Props for the Badge component
 */
interface BadgeProps {
  /** 배지 내부에 렌더링될 컨텐츠 */
  children: React.ReactNode;
  /** 추가적인 CSS 클래스명 (선택사항) */
  className?: string;
}

/**
 * 기본 배지 컴포넌트
 * 텍스트나 아이콘 등의 컨텐츠를 배지 형태로 스타일링하여 표시
 *
 * @param props - Badge 컴포넌트의 props
 * @returns 스타일이 적용된 배지 JSX 요소
 */
export default function Badge({ children, className }: BadgeProps) {
  return <div className={cn(BASIC_CLASSNAME, className)}>{children}</div>;
}
