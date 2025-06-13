import ReviewCard from '../../components/Card/ReviewCard';
import { reviews, wines } from '../../components/mock/mock-data';

export default function Favorite() {
  const review = reviews.list[0];
  const wine = wines.list[0];
  return (
    <ReviewCard
      content={review.content}
      rating={review.rating}
      time={review.updatedAt}
      wine={wine.name}
    />
  );
}
