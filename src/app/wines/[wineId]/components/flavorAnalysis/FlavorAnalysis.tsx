import InputRange from '@/components/InputRange';

import { ReviewType } from '../../types';
import { calculateWineCharacteristics } from './utils';

export default function FlavorAnalysis({ data = [] }: { data: ReviewType[] }) {
  const averages = calculateWineCharacteristics(data);

  const values = {
    lightBold: averages.lightBold,
    smoothTannic: averages.smoothTannic,
    drySweet: averages.drySweet,
    softAcidic: averages.softAcidic,
  };

  return (
    <div className='w-full'>
      <div className='mb-6 flex items-center justify-between'>
        <h3 className='text-xl font-bold text-gray-900'>어떤 맛이 있나요?</h3>
        <span className='text-sm text-gray-500'>
          ({(!data || data.length) ?? 0}개 리뷰)
        </span>
      </div>
      <div>
        <InputRange disabled values={values} />
      </div>
    </div>
  );
}
