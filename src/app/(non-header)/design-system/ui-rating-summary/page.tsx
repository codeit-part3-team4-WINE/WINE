import RatingSummary from '@/components/RatingSummary';

export default function UiRatingSummary() {
  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>Rating Summary</h1>
      <div className='content-text w-full bg-gray-50 p-3 leading-10 text-gray-600'>
        <pre className='whitespace-pre-wrap'>
          <code>
            {`RatingSummary() : 별점 및 리뷰 요약을 보여주는 컴포넌트
  @component
  @param {number} rating - 별점
  @param {'row' | 'col'} [direction='col'] - 레이아웃 방향
  @param {'sm' | 'md' | 'lg'} [size='md'] - 별 아이콘 및 텍스트 크기
  @param {string} [iconColor='#6A42DB'] - 별 아이콘 색상 (색상 코드)
  @param {string} [className] - 클래스명 추가 (스타일 확장)

  @example
  <RatingSummary direction='row' rating={4.8} size='lg'>
    <RatingSummary.Text>47개의 후기</RatingSummary.Text>
  </RatingSummary>`}
          </code>
        </pre>
      </div>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Example</h2>
      <div className='flex flex-col flex-wrap gap-5'>
        <div className='flex gap-10'>
          <RatingSummary direction='row' rating={4.8} size='lg'>
            <RatingSummary.Text size='lg'>47개의 후기</RatingSummary.Text>
          </RatingSummary>

          <RatingSummary direction='row' rating={2.7} size='md'>
            <div>
              <RatingSummary.Text size='lg'>102개의 후기</RatingSummary.Text>
              <RatingSummary.Text
                className='cursor-pointer text-gray-300'
                size='sm'
              >
                더보기
              </RatingSummary.Text>
            </div>
          </RatingSummary>
        </div>

        <div className='mt-10 flex gap-10'>
          <RatingSummary direction='col' rating={3.5} size='sm'>
            <RatingSummary.Text size='sm'>
              Sentinel Carbernet Sauvignon 2016
            </RatingSummary.Text>
          </RatingSummary>
        </div>
      </div>
    </div>
  );
}
