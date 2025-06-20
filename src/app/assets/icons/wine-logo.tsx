import type { ColorIconProps } from '@/types/icon';

interface WineTextIconProps extends ColorIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function WineLogoIcon({
  width = 70,
  height = 20,
  color = '#fff',
  className,
}: WineTextIconProps) {
  return (
    <svg
      className={className}
      fill='none'
      height={height}
      viewBox='0 0 52 15'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.304 11.064a4.33 4.33 0 0 1-.352 1.733 4.406 4.406 0 0 1-2.367 2.363 4.394 4.394 0 0 1-1.727.34 4.47 4.47 0 0 1-1.592-.289 4.273 4.273 0 0 1-1.364-.846 4.245 4.245 0 0 1-1.375.846 4.47 4.47 0 0 1-1.592.289 4.47 4.47 0 0 1-1.737-.34 4.654 4.654 0 0 1-1.416-.95 4.642 4.642 0 0 1-.952-1.413 4.442 4.442 0 0 1-.34-1.733V.5h2.966v10.564c0 .206.038.402.114.588.076.179.18.337.31.475.138.13.297.233.476.309.179.076.372.114.579.114a1.472 1.472 0 0 0 1.044-.424 1.48 1.48 0 0 0 .32-.474 1.54 1.54 0 0 0 .114-.588V.5h2.967v10.564c0 .206.038.402.114.588.076.179.179.337.31.475.138.13.296.233.476.309.179.076.372.114.579.114a1.472 1.472 0 0 0 1.044-.424 1.48 1.48 0 0 0 .32-.474 1.43 1.43 0 0 0 .124-.588V.5h2.957v10.564ZM22.49.5h-3.185v15h3.185V.5ZM37.348 15.397h-3.174L28.457 5.66v9.738H25.49V.604h3.174l5.717 9.748V.604h2.967v14.793ZM50.51 15.397H40.348V.604H50.51v2.96h-7.195v2.961h4.869v2.96h-4.87v2.951h7.196v2.961Z'
        fill={color}
      />
    </svg>
  );
}

WineLogoIcon.displayName = 'WineLogoIcon';
