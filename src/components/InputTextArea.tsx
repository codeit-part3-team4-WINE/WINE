'use client';

interface TextAreaProps {
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: string;
  className: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  options?: string[];
}

const sizeStyle = {
  lg: 'w-full max-w-[412px] h-fit text-lg ',
  md: 'w-full max-w-[327px] h-fit text-lg  ',
  sm: 'w-full max-w-[210px] h-fit text-sm  ',
};

export default function InputTextArea({
  size = 'md',
  placeholder,
  value,
  className,
  onChange,
  rows = 3,
}: TextAreaProps) {
  const commonStyle = ` ${className} ${sizeStyle[size]} resize-none overflow-hidden rounded-xl border border-gray-300 px-4 py-2`;

  return (
    <div className='relative mx-auto flex w-full'>
      <textarea
        className={commonStyle}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
