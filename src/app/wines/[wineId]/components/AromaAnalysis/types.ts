export type AromaType =
  | 'APPLE'
  | 'BERRY'
  | 'CHERRY'
  | 'CHOCOLATE'
  | 'CITRUS'
  | 'COCONUT'
  | 'EARTHY'
  | 'FLORAL'
  | 'HERBAL'
  | 'HONEY'
  | 'LEATHER'
  | 'MINERAL'
  | 'MINT'
  | 'OAK'
  | 'PEACH'
  | 'PEPPER'
  | 'SPICY'
  | 'TOASTY'
  | 'TROPICAL'
  | 'VANILLA'
  | 'WILDFLOWER';

export interface Review {
  id: number;
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: AromaType[];
  content: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    nickname: string;
    image: string;
  };
  isLiked: Record<string, unknown>;
  wineId: number;
  teamId: string;
}

export interface AromaCount {
  aroma: AromaType;
  count: number;
  percentage: number;
}
