const BUTTON_SIZE = {
  xl: 'w-[48rem] py-[1.4rem]',
  lg: 'w-[32rem] py-[1.4rem]',
  md: 'w-[17rem] py-[1rem]',
  sm: 'w-[10rem] py-[1rem]',
  xs: 'px-[2rem] py-[0.5rem] ',
};

const BUTTON_ROUND = {
  rounded: 'rounded-2xl',
  circular: 'rounded-[999]',
  square: '',
};

const BUTTON_VARIANTS = {
  primary: 'bg-primary-100 text-white border border-primary-100',
  secondary: 'bg-primary-10 text-primary-100 border border-primary-10',
  outline:
    'bg-white text-gray-800 border border-gray-300 enabled:hover:bg-gray-50',
  ghost: 'bg-white text-gray-600 enabled:hover:bg-gray-100',
  danger: 'bg-red-500 text-white border border-red-500',
  kakao:
    'bg-white text-black border border-gray-300 hover:bg-yellow-300 hover:opacity-100',
};

const LOADER_VARIANTS = {
  primary: 'text-white',
  secondary: 'text-primary-100',
  outline: 'text-gray-500',
  ghost: 'text-gray-500',
  danger: 'text-white',
};

export { BUTTON_ROUND, BUTTON_SIZE, BUTTON_VARIANTS, LOADER_VARIANTS };
