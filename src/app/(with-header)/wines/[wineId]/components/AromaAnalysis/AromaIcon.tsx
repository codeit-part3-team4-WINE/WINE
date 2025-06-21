// 아이콘 컴포넌트들 import
import AppleIcon from '@/app/assets/tastes/apple';
import BerryIcon from '@/app/assets/tastes/berry';
import CherryIcon from '@/app/assets/tastes/cherry';
import ChocolateIcon from '@/app/assets/tastes/chocolate';
import CitrusIcon from '@/app/assets/tastes/citrus';
import CoconutIcon from '@/app/assets/tastes/coconut';
import EarthyIcon from '@/app/assets/tastes/earthy';
import FloralIcon from '@/app/assets/tastes/floral';
import HoneyIcon from '@/app/assets/tastes/honey';
import LeatherIcon from '@/app/assets/tastes/leather';
import MineralIcon from '@/app/assets/tastes/mineral';
import MintIcon from '@/app/assets/tastes/mint';
import OakIcon from '@/app/assets/tastes/oak';
import PeachIcon from '@/app/assets/tastes/peach';
import PepperIcon from '@/app/assets/tastes/pepper';
import SpicyIcon from '@/app/assets/tastes/spicy';
import ToastyIcon from '@/app/assets/tastes/toasty';
import TropicalIcon from '@/app/assets/tastes/tropical';
import VanillaIcon from '@/app/assets/tastes/vanilla';
import WildFlowerIcon from '@/app/assets/tastes/wild-flower';

import { AromaType } from './types';

interface AromaIconProps {
  aroma: AromaType;
  className?: string;
}

export default function AromaIcon({ aroma, className }: AromaIconProps) {
  const iconProps = { className };

  switch (aroma) {
    case 'CHERRY':
      return <CherryIcon {...iconProps} />;
    case 'BERRY':
      return <BerryIcon {...iconProps} />;
    case 'OAK':
      return <OakIcon {...iconProps} />;
    case 'VANILLA':
      return <VanillaIcon {...iconProps} />;
    case 'PEPPER':
      return <PepperIcon {...iconProps} />;
    case 'BAKING':
      return <ToastyIcon {...iconProps} />;
    case 'GRASS':
      return <WildFlowerIcon {...iconProps} />;
    case 'APPLE':
      return <AppleIcon {...iconProps} />;
    case 'PEACH':
      return <PeachIcon {...iconProps} />;
    case 'CITRUS':
      return <CitrusIcon {...iconProps} />;
    case 'TROPICAL':
      return <TropicalIcon {...iconProps} />;
    case 'MINERAL':
      return <MineralIcon {...iconProps} />;
    case 'FLOWER':
      return <FloralIcon {...iconProps} />;
    case 'TOBACCO':
      return <MintIcon {...iconProps} />;
    case 'EARTH':
      return <EarthyIcon {...iconProps} />;
    case 'CHOCOLATE':
      return <ChocolateIcon {...iconProps} />;
    case 'SPICE':
      return <SpicyIcon {...iconProps} />;
    case 'CARAMEL':
      return <HoneyIcon {...iconProps} />;
    case 'LEATHER':
      return <LeatherIcon {...iconProps} />;
    default:
      return <CoconutIcon {...iconProps} />; // 기본 아이콘
  }
}
