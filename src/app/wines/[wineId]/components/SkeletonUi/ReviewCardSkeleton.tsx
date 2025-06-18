export default function ReviewCardSkeleton() {
  return (
    <div className='relative flex animate-pulse flex-col gap-5 rounded-2xl border border-gray-300 p-10'>
      {/* 상단 프로필 및 액션 버튼 영역 */}
      <div className='flex items-start justify-between'>
        <div className='flex gap-5'>
          {/* 프로필 이미지 */}
          <div className='h-[4.8rem] w-[4.8rem] rounded-full bg-gray-200' />
          <div className='flex flex-col justify-center gap-2'>
            {/* 닉네임 */}
            <div className='h-7 w-22 rounded bg-gray-200' />
            {/* 시간 */}
            <div className='h-5 w-16 rounded bg-gray-200' />
          </div>
        </div>
        <div className='flex items-center gap-2 pt-2'>
          {/* 하트 아이콘 */}
          <div className='size-[2.5rem] rounded-full bg-gray-200' />
        </div>
      </div>

      {/* 아로마 태그 및 별점 영역 */}
      <div className='flex items-center justify-between gap-2'>
        <div className='flex flex-1 items-center gap-2'>
          {/* 아로마 태그들 */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className='h-10 w-20 rounded-full bg-gray-200' />
          ))}
        </div>
        {/* 별점 배지 */}
        <div className='h-8 w-12 rounded bg-gray-200' />
      </div>

      {/* 접힌/펼쳐진 컨텐츠 영역 */}
      <div className='space-y-10'>
        {/* 리뷰 내용 */}
        <div className='space-y-2'>
          <div className='h-5 w-full rounded bg-gray-200' />
          <div className='h-5 w-3/4 rounded bg-gray-200' />
        </div>

        {/* InputRange 스켈레톤 */}
        <div className='space-y-4'>
          {/* 4개의 슬라이더 영역 */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className='flex w-full items-center gap-4'>
              {/* 라벨 영역 */}
              <div className='h-7 w-30 rounded rounded-xl bg-gray-200' />
              <div className='h-5 w-25 rounded bg-gray-200' />

              {/* 슬라이더 트랙 */}
              <div className='relative h-2 w-full rounded-full bg-gray-200'>
                {/* 슬라이더 핸들 */}
                <div
                  className='absolute top-1/2 size-6 -translate-y-1/2 rounded-full bg-gray-300'
                  style={{ left: `${20 + index * 15}%` }}
                />
              </div>

              <div className='h-5 w-25 rounded bg-gray-200' />

              <div className='h-4 w-10 rounded bg-gray-200' />
            </div>
          ))}
        </div>

        {/* 펼치기/접기 버튼 */}
        <div className='flex justify-center'>
          <div className='h-6 w-6 rounded bg-gray-200' />
        </div>
      </div>
    </div>
  );
}
