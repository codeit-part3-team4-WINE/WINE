export type AromaType =
  | 'CHERRY'
  | 'BERRY'
  | 'OAK'
  | 'VANILLA'
  | 'PEPPER'
  | 'BAKING'
  | 'GRASS'
  | 'APPLE'
  | 'PEACH'
  | 'CITRUS'
  | 'TROPICAL'
  | 'MINERAL'
  | 'FLOWER'
  | 'TOBACCO'
  | 'EARTH'
  | 'CHOCOLATE'
  | 'SPICE'
  | 'CARAMEL'
  | 'LEATHER';

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
