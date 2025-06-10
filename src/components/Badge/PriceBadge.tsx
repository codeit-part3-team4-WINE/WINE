import Badge from './Badge';

/**
 * 가격을 배지 형태로 표시하는 컴포넌트
 * 숫자를 한국 원화 형식으로 포맷팅하여 Badge 컴포넌트로 감싸서 표시
 *
 * @param props - PriceBadge 컴포넌트의 props
 * @param props.price - 표시할 가격 (숫자)
 * @returns 가격이 표시된 배지 JSX 요소
 */
export default function PriceBadge({ price = 0 }: { price: number }) {
  return (
    <Badge>
      <span>₩</span>
      <span>{price.toLocaleString('ko-KR')}</span>
    </Badge>
  );
}
