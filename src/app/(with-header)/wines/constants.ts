export const DEFAULT_MAX_PRICE = 1000000;

export const WINE_TYPES = {
  RED: '레드 와인',
  WHITE: '화이트 와인',
  SPARKLING: '스파클링 와인',
} as const;

export const RATING_OPTIONS = [
  { value: 0, label: '전체' },
  { value: 5.0, label: '4.5 - 5.0' },
  { value: 4.5, label: '4.0 - 4.5' },
  { value: 4.0, label: '3.5 - 4.0' },
  { value: 3.5, label: '3.0 - 3.5' },
  { value: 3.0, label: '2.5 - 3.0' },
] as const;
