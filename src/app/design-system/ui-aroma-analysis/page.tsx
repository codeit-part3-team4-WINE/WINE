import AromaAnalysis from '@/app/wines/[wineId]/AromaAnalysis/AromaAnalysis';
import { DUMMY_REVIEWS } from '@/app/wines/[wineId]/dummy';

export default function AromaAnalysisExample() {
  return (
    <div className='mx-auto max-w-4xl space-y-8 p-6'>
      {/* 페이지 제목 */}
      <div className='text-center'>
        <h1 className='mb-2 text-3xl font-bold text-gray-900'>
          와인 향 분석 예시 페이지
        </h1>
        <p className='text-gray-600'>
          AromaAnalysis 컴포넌트와 더미 데이터를 사용한 예시입니다
        </p>
      </div>

      {/* AromaAnalysis 컴포넌트 */}
      <div className='rounded-lg border border-gray-200 bg-white p-6'>
        <AromaAnalysis
          reviews={DUMMY_REVIEWS}
          totalReviews={DUMMY_REVIEWS.length}
        />
      </div>

      {/* 추가 정보 */}
      <div className='rounded-lg bg-gray-50 p-6'>
        <h2 className='mb-3 text-lg font-semibold text-gray-900'>
          컴포넌트 정보
        </h2>
        <div className='grid grid-cols-1 gap-4 text-sm text-gray-600 md:grid-cols-3'>
          <div>
            <span className='font-medium'>총 리뷰 수:</span>{' '}
            {DUMMY_REVIEWS.length}개
          </div>
          <div>
            <span className='font-medium'>분석된 향:</span> 상위 3개
          </div>
        </div>
      </div>
    </div>
  );
}
