import { DUMMY_REVIEWS, Review } from './[wineId]/dummy';

// 4가지 특성의 평균을 계산하는 함수
export const calculateWineCharacteristics = (reviews: Review[]) => {
  if (reviews.length === 0) {
    return {
      lightBold: 0,
      smoothTannic: 0,
      drySweet: 0,
      softAcidic: 0,
    };
  }

  const totals = reviews.reduce(
    (acc, review) => {
      acc.lightBold += review.lightBold;
      acc.smoothTannic += review.smoothTannic;
      acc.drySweet += review.drySweet;
      acc.softAcidic += review.softAcidic;
      return acc;
    },
    { lightBold: 0, smoothTannic: 0, drySweet: 0, softAcidic: 0 },
  );

  const count = reviews.length;

  return {
    lightBold: Number((totals.lightBold / count).toFixed(2)),
    smoothTannic: Number((totals.smoothTannic / count).toFixed(2)),
    drySweet: Number((totals.drySweet / count).toFixed(2)),
    softAcidic: Number((totals.softAcidic / count).toFixed(2)),
  };
};

// calculateWineCharacteristics 함수를 사용하여 평균값을 계산할 수 있습니다.
// 예시: const average = calculateWineCharacteristics(DUMMY_REVIEWS);

// 현재 더미 리뷰들의 평균값 계산 결과
export const WINE_CHARACTERISTICS_AVERAGE =
  calculateWineCharacteristics(DUMMY_REVIEWS);

// 각 특성별 자세한 정보를 위한 헬퍼 함수
export const getWineCharacteristicsWithLabels = (reviews: Review[]) => {
  const averages = calculateWineCharacteristics(reviews);

  return {
    lightBold: {
      value: averages.lightBold,
      label: '라이트 ← → 볼드',
      description: '와인의 바디감 (가벼움 vs 진함)',
    },
    smoothTannic: {
      value: averages.smoothTannic,
      label: '스무스 ← → 타닉',
      description: '와인의 떫은맛 정도 (부드러움 vs 떫음)',
    },
    drySweet: {
      value: averages.drySweet,
      label: '드라이 ← → 스위트',
      description: '와인의 단맛 정도 (드라이 vs 달콤함)',
    },
    softAcidic: {
      value: averages.softAcidic,
      label: '소프트 ← → 에시딕',
      description: '와인의 산미 정도 (부드러움 vs 신맛)',
    },
  };
};
