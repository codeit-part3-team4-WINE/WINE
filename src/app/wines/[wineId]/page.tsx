import ReviewCard from './components/ReviewCard';

export default async function WinePage({
  params,
}: {
  params: Promise<{ wineId: string }>;
}) {
  const wineId = (await params).wineId;
  console.log(wineId);
  return (
    <div>
      <div />
      <div className='grid grid-cols-6'>
        <div className='col-span-4'>
          <h3>리뷰 목록</h3>
          <ReviewCard />
        </div>
        <div className='col-span-2'>별점 컴포넌트 들어가는 곳</div>
      </div>
    </div>
  );
}
