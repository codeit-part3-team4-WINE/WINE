export interface RangeItem {
  label: string;
  leftText: string;
  rightText: string;
  name: 'lightBold' | 'smoothTannic' | 'drySweet' | 'softAcidic';
}

export const rangeItems: RangeItem[] = [
  {
    label: '바디감',
    leftText: '가벼워요',
    rightText: '진해요',
    name: 'lightBold',
  },
  {
    label: '타닌',
    leftText: '부드러워요',
    rightText: '떫어요',
    name: 'smoothTannic',
  },
  {
    label: '당도',
    leftText: '드라이해요',
    rightText: '달아요',
    name: 'drySweet',
  },
  {
    label: '산미',
    leftText: '안 셔요',
    rightText: '많이 셔요',
    name: 'softAcidic',
  },
];
