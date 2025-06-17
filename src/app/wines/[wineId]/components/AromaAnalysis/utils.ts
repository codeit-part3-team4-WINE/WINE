import { ReviewType } from '../../types';
import { AromaCount, AromaType } from './types';

// 향 이름 매핑
export const AROMA_LABELS: Record<AromaType, string> = {
  APPLE: '사과',
  BERRY: '베리',
  CHERRY: '체리',
  CHOCOLATE: '초콜릿',
  CITRUS: '시트러스',
  COCONUT: '코코넛',
  EARTHY: '흙내음',
  FLORAL: '꽃향',
  HERBAL: '허브',
  HONEY: '꿀',
  LEATHER: '가죽',
  MINERAL: '미네랄',
  MINT: '민트',
  OAK: '오크',
  PEACH: '복숭아',
  PEPPER: '후추',
  SPICY: '스파이시',
  TOASTY: '토스티',
  TROPICAL: '트로피컬',
  VANILLA: '바닐라',
  WILDFLOWER: '들꽃',
};

/**
 * 리뷰 배열에서 향 데이터를 분석하여 가장 많이 언급된 상위 3개 향을 반환
 */
export function analyzeAromaData(reviews: ReviewType[]): AromaCount[] {
  // 모든 향을 수집
  const allAromas = reviews.flatMap((review) => review.aroma);

  // 각 향의 개수를 카운트
  const aromaCounts: Record<string, number> = {};
  allAromas.forEach((aroma) => {
    aromaCounts[aroma] = (aromaCounts[aroma] || 0) + 1;
  });

  const totalCount = allAromas.length;

  // 카운트와 퍼센트를 포함한 배열로 변환
  const aromaAnalysis: AromaCount[] = Object.entries(aromaCounts)
    .map(([aroma, count]) => ({
      aroma: aroma as AromaType,
      count,
      percentage: Math.round((count / totalCount) * 100),
    }))
    .sort((a, b) => b.count - a.count); // 내림차순 정렬

  // 상위 3개만 반환
  return aromaAnalysis.slice(0, 3);
}

/**
 * 향 타입에 따른 한글 이름 반환
 */
export function getAromaLabel(aroma: AromaType): string {
  return AROMA_LABELS[aroma] || aroma;
}
