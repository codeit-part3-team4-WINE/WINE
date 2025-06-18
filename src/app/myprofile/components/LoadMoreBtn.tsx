'use client';

import Link from 'next/link';
import { useState } from 'react';

import { privateInstance } from '@/apis/privateInstance';
import Button from '@/components/Button';

import ReviewCard from './Card/ReviewCard';
import WineCard from './Card/WineCard';

type LoadMoreType = 'wine' | 'review';

interface Wine {
  id: number;
  name: string;
  image: string;
  price: number;
  region: string;
  rating: number;
  type: string;
}

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

interface Props {
  type: LoadMoreType;
  initialCursor: string | null;
}

export default function LoadMoreButton({ type, initialCursor }: Props) {
  const [items, setItems] = useState<Wine[] | Review[]>([]);
  const [cursor, setCursor] = useState(initialCursor);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (!cursor) return;
    setLoading(true);

    const endpoint = type === 'wine' ? '/users/me/wines' : '/users/me/reviews';
    const { data } = await privateInstance.get(endpoint, {
      params: { limit: 5, cursor },
    });

    setItems((prev) => [...prev, ...data.list]);
    setCursor(data.nextCursor);
    setLoading(false);
  };

  const renderItem = (item: Wine | Review) => {
    if (type === 'wine') {
      const wine = item as Wine;
      return <WineCard key={wine.id} className='cursor-pointer' wine={wine} />;
    } else {
      const review = item as Review;
      return (
        <Link key={review.id} href={`/wines/${review.wine.id}`}>
          <ReviewCard
            content={review.content}
            rating={review.rating}
            time={review.updatedAt}
            wine={review.wine.name}
          />
        </Link>
      );
    }
  };

  if (!cursor) return null;

  return (
    <>
      <div className='mt-10 flex flex-col gap-10'>{items.map(renderItem)}</div>
      <div className='mt-8 mb-15 self-center'>
        <Button
          loading={loading}
          round='rounded'
          size='md'
          variant='outline'
          onClick={handleLoadMore}
        >
          더 보기
        </Button>
      </div>
    </>
  );
}
