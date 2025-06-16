import WineListCard from './WineListCard';

export default function WineListContainer({ data }) {
  return (
    <section className='col-start-1 col-end-4 row-start-3 row-end-5 flex flex-col gap-6 xl:col-start-2 xl:col-end-4 xl:row-start-3 xl:row-end-5'>
      {data?.map((item) => (
        <WineListCard
          key={item.id}
          country={item.region}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          rating={item.avgRating}
          recentReview={
            item.recentReview?.content ??
            '최신 후기가 없습니다. 후기를 남겨주세요!'
          }
          reviewCount={item.reviewCount}
        />
      ))}
    </section>
  );
}
