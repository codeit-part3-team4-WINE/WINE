import { cn } from '@/libs/cn';

const BASIC_CLASSNAME =
  'text-primary-100 bg-primary-100/10 flex w-fit items-center gap-2 rounded-xl px-3 py-2 text-xl font-bold';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return <div className={cn(BASIC_CLASSNAME, className)}>{children}</div>;
}
