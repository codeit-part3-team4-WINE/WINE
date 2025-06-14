import ReviewCard from '../../components/Card/ReviewCard';
import { reviews, wines } from '../../components/mock/mock-data';

export default function Reviews() {
  const review = reviews.list[0];
  const wine = wines.list[0];
  return (
    <div className='flex flex-col gap-10'>
      {Array.from({ length: 10 }).map((_, index) => (
        <ReviewCard
          key={index}
          content={review.content}
          rating={review.rating}
          time={review.updatedAt}
          wine={wine.name}
        />
      ))}
    </div>
  );
}
