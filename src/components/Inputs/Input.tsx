import { cn } from '@/libs/cn';

const BASIC_CLASSNAME =
  'text-md placeholder:text-md w-1/2 rounded-2xl border border-gray-300 bg-white px-5 py-3 placeholder:text-gray-500 focus:outline-none';

export default function Input({
  ref,
  className,
  type,
  placeholder = '',
  name,
  id,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <div>
      <input
        ref={ref}
        className={cn(BASIC_CLASSNAME, className)}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </div>
  );
}
