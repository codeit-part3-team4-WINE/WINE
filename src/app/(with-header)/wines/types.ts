export interface FilterState {
  selectedWineType: string;
  selectedMaxPrice: number;
  selectedMinPrice: number;
  selectedRating: number | string;
  searchQuery?: string;
}

export interface FilterProps {
  priceMaxRange?: number;
  filterState: FilterState;
  onFilterChange: (
    updater: FilterState | ((prev: FilterState) => FilterState),
  ) => void;
}

export interface Wine {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  avgRating: number;
  reviewCount: number;
  recentReview?: {
    content: string;
  } | null;
  userId?: number;
}
