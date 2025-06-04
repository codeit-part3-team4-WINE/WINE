import { cn } from '@/libs/cn';

export default function Input({
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
        className={cn(
          'text-md placeholder:text-md w-1/2 rounded-2xl border border-gray-300 px-5 py-3 placeholder:text-gray-500 focus:outline-none',
          className,
        )}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </div>
  );
}
