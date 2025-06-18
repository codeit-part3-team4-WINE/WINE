import { ReviewType } from '../../types';

// 4가지 특성의 평균을 계산하는 함수
export const calculateWineCharacteristics = (reviews: ReviewType[]) => {
  if (!reviews || reviews.length === 0) {
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
