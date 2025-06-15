/* eslint-disable */
import { createPrivateServerInstance } from '@/apis/privateServerInstance';
import ReviewCard from '../../components/Card/ReviewCard';
import Link from 'next/link';

export default async function Reviews() {
  const axios = await createPrivateServerInstance();

  const { data } = await axios.get('/users/me/reviews', {
    params: {
      limit: 10,
    },
  });

  console.log(data.list[0]['wine']);

  const reviews = data.list;

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <div className='text-gray-500'>작성된 리뷰가 없습니다.</div>;
  }

  return (
    <div className='flex flex-col gap-10'>
      {reviews.map((review: any) => (
        <Link key={review.id} href={`/wines/${review.wine.id}`}>
          <ReviewCard
            key={review.id}
            content={review.content}
            rating={review.rating}
            time={review.updatedAt}
            wine={review.wine.name}
          />
        </Link>
      ))}
    </div>
  );
}
