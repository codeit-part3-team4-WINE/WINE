import AromaIcon from './AromaIcon';
import { AromaCount } from './types';
import { getAromaLabel } from './utils';

interface AromaCardProps {
  aromaData: AromaCount;
}

export default function AromaCard({ aromaData }: AromaCardProps) {
  const { aroma, count, percentage } = aromaData;
  const label = getAromaLabel(aroma);

  return (
    <div className='flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-gray-300 bg-gray-50 p-6'>
      <div className='mb-3 flex h-12 w-12 items-center justify-center'>
        <AromaIcon aroma={aroma} className='h-10 w-10' />
      </div>
      <span className='text-sm font-medium text-gray-700'>{label}</span>
      <span className='mt-1 text-xs text-gray-500'>
        {count}회 ({percentage}%)
      </span>
    </div>
  );
}
