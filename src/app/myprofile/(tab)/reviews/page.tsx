import Link from 'next/link';

import { createPrivateServerInstance } from '@/apis/privateServerInstance';

import ReviewCard from '../../components/Card/ReviewCard';
import LoadMoreButton from '../../components/LoadMoreBtn';
import Nothing from '../../components/Nothing';
import Tab from '../../components/Tab';

interface Review {
  id: number;
  content: string;
  rating: number;
  updatedAt: string;
  wine: {
    id: number;
    name: string;
    region: string;
    image: string;
    price: number;
    avgRating: number;
    type: string;
  };
}

export default async function Reviews() {
  const axios = await createPrivateServerInstance();

  const { data } = await axios.get('/users/me/reviews', {
    params: {
      limit: 10,
    },
  });

  const reviews = data.list;

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return (
      <div>
        <Tab totalCount={0} />
        <div className='mt-[5rem] flex items-center justify-center'>
          <Nothing type='review' />
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <Tab totalCount={data.totalCount} />
      <div className='flex flex-col gap-10'>
        {reviews.map((review: Review) => (
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
      <LoadMoreButton initialCursor={data.nextCursor} type='review' />
    </div>
  );
}
