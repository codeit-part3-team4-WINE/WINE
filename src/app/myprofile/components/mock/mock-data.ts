import { StaticImageData } from 'next/image';

import profile1 from './profile1.png';
import wineDummy from './wine-dummy.png';

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

export const user: User = {
  image: profile1,
  updatedAt: '2025-06-09T17:55:31.454Z',
  createdAt: '2025-06-09T17:55:31.454Z',
  teamId: 'string',
  nickname: 'WHYNE',
  id: 1,
};

export const reviews: ReviewsResponse = {
  totalCount: 15,
  nextCursor: 0,
  list: [
    {
      id: 0,
      rating: 3.0,
      lightBold: 0,
      smoothTannic: 0,
      drySweet: 0,
      softAcidic: 0,
      aroma: ['CHERRY'],
      content:
        'Deep maroon color, tasting notes of blackberry, dark chocolate, plum. Super jammy and bold with some smoky after notes. Big flavor. Amazing value (would pay three times the price for it), well balanced flavor. Could drink all day everyday with or without food. I need more immediately.',
      createdAt: '2025-06-10T05:13:11.914Z',
      updatedAt: '2024-03-04T02:10:04.356Z',
      user: {
        id: 0,
        nickname: 'WHYNE',
        image: 'string',
      },
      isLiked: {},
    },
  ],
};

export const wines: WinesResponse = {
  totalCount: 0,
  nextCursor: 0,
  list: [
    {
      id: 0,
      name: 'Sentinal Carbernet Sauvignon 2016',
      region: 'Western Cape, South Africa',
      image: wineDummy,
      price: 64990,
      type: 'string',
      avgRating: 0,
      reviewCount: 0,
      recentReview: {
        user: {
          id: 0,
          nickname: 'WHYNE',
          image: 'string',
        },
        updatedAt: '2025-06-10T13:21:35.878Z',
        createdAt: '2025-06-10T06:21:35.878Z',
        content: 'string',
        aroma: ['CHERRY'],
        rating: 0,
        id: 0,
      },
      userId: 0,
    },
  ],
};
