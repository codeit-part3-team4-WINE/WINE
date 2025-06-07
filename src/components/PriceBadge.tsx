import Badge from './Badge';

export default function PriceBadge({ price }: { price: number }) {
  return (
    <Badge>
      <span>₩</span>
      <span>{price.toLocaleString('ko-KR')}</span>
    </Badge>
  );
}
