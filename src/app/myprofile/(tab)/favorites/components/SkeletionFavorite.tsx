function SkeletonCard() {
  return <div className='h-[37rem] w-full rounded-2xl bg-gray-100' />;
}

export default function SkeletonFavorite() {
  return (
    <div className='animate-pulse'>
      <div className='flex flex-col gap-10 overflow-y-hidden'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}
