export interface UserType {
  id: number;
  nickname: string;
  image: string;
}

export interface ReviewType {
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
  user: UserType;
  isLiked: boolean;
}

export interface WineInfoType {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  type: string;
  avgRating: number;
  reviewCount: number;
  recentReview: Pick<
    ReviewType,
    'id' | 'user' | 'updatedAt' | 'createdAt' | 'content' | 'aroma' | 'rating'
  >;
  userId: number;
  reviews: ReviewType[];
  avgRatings: {
    lightBold: number;
    smoothTannic: number;
    drySweet: number;
    softAcidic: number;
  };
}
