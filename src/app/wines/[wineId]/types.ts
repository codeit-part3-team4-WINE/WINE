export interface WineInfoType {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  type: string;
  avgRating: number;
  reviewCount: number;
  recentReview: {
    user: {
      id: number;
      nickname: string;
      image: string;
    };
    updatedAt: string;
    createdAt: string;
    content: string;
    aroma: string[];
    rating: number;
    id: number;
  };
  userId: number;
  reviews: [
    {
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
      isLiked: boolean;
    },
  ];
  avgRatings: {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
  };
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
  user: {
    id: number;
    nickname: string;
    image: string;
  };
  isLiked: boolean;
}
