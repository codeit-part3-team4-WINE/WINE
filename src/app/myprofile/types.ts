import { StaticImageData } from 'next/image';

type ImageType = string | StaticImageData;

interface BaseUser {
  id: number;
  nickname: string;
  image: ImageType;
}

export interface User extends BaseUser {
  updatedAt: string;
  createdAt: string;
  teamId: string;
}

export interface Review extends BaseReview {
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  isLiked: Record<string, boolean>;
}

interface BaseReview {
  id: number;
  rating: number;
  aroma: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  user: BaseUser;
}

export type RecentReview = Omit<
  Review,
  'lightBold' | 'smoothTannic' | 'drySweet' | 'softAcidic' | 'isLiked'
>;

export interface ReviewsResponse {
  totalCount: number;
  nextCursor: number;
  list: Review[];
}

export interface Wine {
  id: number;
  name: string;
  region: string;
  image: ImageType;
  price: number;
  type: string;
  avgRating: number;
  reviewCount: number;
  recentReview: RecentReview;
  userId: number;
}

export interface WinesResponse {
  totalCount: number;
  nextCursor: number;
  list: Wine[];
}
