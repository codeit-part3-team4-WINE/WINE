'use client';

interface RangeItem {
  label: string;
  leftText: string;
  rightText: string;
  name: keyof Option;
}

const items: RangeItem[] = [
  {
    label: '바디감',
    leftText: '가벼워요',
    rightText: '진해요',
    name: 'body',
  },
  {
    label: '타닌',
    leftText: '부드러워요',
    rightText: '떫어요',
    name: 'tannin',
  },
  {
    label: '당도',
    leftText: '드라이해요',
    rightText: '달아요',
    name: 'steetness',
  },
  {
    label: '산미',
    leftText: '얀 셔요',
    rightText: '많이 셔요',
    name: 'acidity',
  },
];

// Modal에서 value 값 전달 할때 사용
interface InputRangeProps {
  className?: string;
  // values?: Option;
  // onChange?: (name: keyof Option, value: number) => void;
}

type Option = {
  body: number;
  tannin: number;
  steetness: number;
  acidity: number;
};

export default function InputRange({ className = '' }: InputRangeProps) {
  return (
    <div className={`mx-auto w-full space-y-4 ${className}`}>
      {items.map(({ label, leftText, rightText, name }) => (
        <div key={name} className='flex items-center gap-4'>
          {/* Label */}
          <span className='md:text-md w-[48px] bg-gray-100 text-center text-xs whitespace-nowrap text-gray-500 md:w-[56px]'>
            {label}
          </span>

          {/* Left Text */}
          <span className='md:text-md w-[62px] shrink-0 text-left text-xs whitespace-nowrap md:w-[70px]'>
            {leftText}
          </span>

          {/* Slider */}
          <div className='max-w-[491px] min-w-0 flex-1'>
            <label className='sr-only' htmlFor={name}>
              {label}
            </label>
            <input
              className='h-2.5 w-full appearance-none rounded-md bg-gray-100 accent-blue-500 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-600'
              max={100}
              min={0}
              type='range'
              value={50}
              onChange={() => {}}
            />
          </div>

          {/* Right Text */}
          <span className='md:text-md w-[48px] text-right text-xs whitespace-nowrap md:w-[56px]'>
            {rightText}
          </span>
        </div>
      ))}
    </div>
  );
}
