// Review 타입 정의
export interface Review {
  id: number;
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    nickname: string;
    image: string;
  };
  isLiked: object;
  wineId: number;
  teamId: string;
}

export const REVIEW_RANGES = [
  {
    label: '5점',
    value: 5,
  },
  {
    label: '4점',
    value: 4,
  },
  {
    label: '3점',
    value: 3,
  },
  {
    label: '2점',
    value: 2,
  },
  {
    label: '1점',
    value: 1,
  },
];

// 더미 리뷰 데이터
export const DUMMY_REVIEWS: Review[] = [
  {
    id: 1,
    rating: 5,
    lightBold: 3,
    smoothTannic: 4,
    drySweet: 2,
    softAcidic: 3,
    aroma: ['CHERRY', 'CHOCOLATE', 'VANILLA'],
    content: '정말 맛있는 와인이에요. 체리향이 강하게 느껴집니다.',
    createdAt: '2025-01-01T12:00:00.000Z',
    updatedAt: '2025-01-01T12:00:00.000Z',
    user: {
      id: 1,
      nickname: '와인러버',
      image: 'https://via.placeholder.com/40',
    },
    isLiked: {},
    wineId: 1,
    teamId: 'team1',
  },
  {
    id: 2,
    rating: 4,
    lightBold: 4,
    smoothTannic: 3,
    drySweet: 3,
    softAcidic: 2,
    aroma: ['BERRY', 'OAK', 'CHERRY'],
    content: '베리향과 오크향이 조화롭게 어우러집니다.',
    createdAt: '2025-01-02T12:00:00.000Z',
    updatedAt: '2025-01-02T12:00:00.000Z',
    user: {
      id: 2,
      nickname: '소믈리에',
      image: 'https://via.placeholder.com/40',
    },
    isLiked: {},
    wineId: 1,
    teamId: 'team1',
  },
  {
    id: 3,
    rating: 5,
    lightBold: 2,
    smoothTannic: 5,
    drySweet: 1,
    softAcidic: 4,
    aroma: ['CITRUS', 'MINERAL', 'FLORAL'],
    content: '상큼한 시트러스향이 인상적입니다.',
    createdAt: '2025-01-03T12:00:00.000Z',
    updatedAt: '2025-01-03T12:00:00.000Z',
    user: {
      id: 3,
      nickname: '와인초보',
      image: 'https://via.placeholder.com/40',
    },
    isLiked: {},
    wineId: 1,
    teamId: 'team1',
  },
  {
    id: 4,
    rating: 4,
    lightBold: 3,
    smoothTannic: 3,
    drySweet: 2,
    softAcidic: 3,
    aroma: ['CHERRY', 'SPICY', 'LEATHER'],
    content: '체리향과 스파이시한 맛이 좋습니다.',
    createdAt: '2025-01-04T12:00:00.000Z',
    updatedAt: '2025-01-04T12:00:00.000Z',
    user: {
      id: 4,
      nickname: '와인마니아',
      image: 'https://via.placeholder.com/40',
    },
    isLiked: {},
    wineId: 1,
    teamId: 'team1',
  },
  {
    id: 5,
    rating: 3,
    lightBold: 4,
    smoothTannic: 2,
    drySweet: 4,
    softAcidic: 2,
    aroma: ['CHOCOLATE', 'VANILLA', 'TOASTY'],
    content: '초콜릿과 바닐라향이 달콤합니다.',
    createdAt: '2025-01-05T12:00:00.000Z',
    updatedAt: '2025-01-05T12:00:00.000Z',
    user: {
      id: 5,
      nickname: '디저트러버',
      image: 'https://via.placeholder.com/40',
    },
    isLiked: {},
    wineId: 1,
    teamId: 'team1',
  },
  {
    id: 6,
    rating: 5,
    lightBold: 3,
    smoothTannic: 4,
    drySweet: 2,
    softAcidic: 3,
    aroma: ['BERRY', 'CHERRY', 'OAK'],
    content: '베리와 체리향이 풍부하고 오크향도 좋습니다.',
    createdAt: '2025-01-06T12:00:00.000Z',
    updatedAt: '2025-01-06T12:00:00.000Z',
    user: {
      id: 6,
      nickname: '와인전문가',
      image: 'https://via.placeholder.com/40',
    },
    isLiked: {},
    wineId: 1,
    teamId: 'team1',
  },
];

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
