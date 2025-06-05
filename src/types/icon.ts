export interface BaseIconProps {
  size?: number | string;
  className?: string;
}

export interface ColorIconProps extends BaseIconProps {
  color?: string;
}

export interface DirectionIconProps extends ColorIconProps {
  direction?: 'right' | 'left' | 'top' | 'bottom';
}

export interface FillIconProps extends ColorIconProps {
  filled?: boolean;
}
