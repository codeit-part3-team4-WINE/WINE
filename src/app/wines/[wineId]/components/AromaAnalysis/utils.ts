import { ReviewType } from '../../types';
import { AromaCount, AromaType } from './types';

// 향 이름 매핑
export const AROMA_LABELS: Record<AromaType, string> = {
  CHERRY: '체리',
  BERRY: '베리',
  OAK: '오크',
  VANILLA: '바닐라',
  PEPPER: '후추',
  BAKING: '제빵',
  GRASS: '풀',
  APPLE: '사과',
  PEACH: '복숭아',
  CITRUS: '시트러스',
  TROPICAL: '트로피컬',
  MINERAL: '미네랄',
  FLOWER: '꽃',
  TOBACCO: '담배인',
  EARTH: '흙',
  CHOCOLATE: '초콜릿',
  SPICE: '스파이스',
  CARAMEL: '카라멜',
  LEATHER: '가죽',
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
