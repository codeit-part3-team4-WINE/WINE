import { ReviewType } from '../../types';
import AromaCard from './AromaCard';
import { analyzeAromaData } from './utils';

/**
 * 와인 향 분석 컴포넌트
 *
 * @param reviews - 리뷰 데이터
 */

interface AromaAnalysisProps {
  reviews: ReviewType[];
}

export default function AromaAnalysis({ reviews }: AromaAnalysisProps) {
  const topAromas = analyzeAromaData(reviews);

  return (
    <div className='w-full'>
      <div className='mb-6 flex items-center justify-between'>
        <h3 className='text-xl font-bold text-gray-900'>어떤 향이 있나요?</h3>
      </div>

      {topAromas.length > 0 ? (
        <div className='grid grid-cols-3 gap-4'>
          {topAromas.map((aromaData) => (
            <AromaCard key={aromaData.aroma} aromaData={aromaData} />
          ))}
        </div>
      ) : (
        <div className='flex h-32 items-center justify-center rounded-2xl'>
          <p className='text-md text-gray-500'>
            아직 향에 대한 리뷰가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}
