// 아이콘 컴포넌트들 import
import AppleIcon from '@/app/assets/tastes/apple';
import BerryIcon from '@/app/assets/tastes/berry';
import CherryIcon from '@/app/assets/tastes/cherry';
import ChocolateIcon from '@/app/assets/tastes/chocolate';
import CitrusIcon from '@/app/assets/tastes/citrus';
import CoconutIcon from '@/app/assets/tastes/coconut';
import EarthyIcon from '@/app/assets/tastes/earthy';
import FloralIcon from '@/app/assets/tastes/floral';
import HerbalIcon from '@/app/assets/tastes/herbal';
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
    case 'APPLE':
      return <AppleIcon {...iconProps} />;
    case 'BERRY':
      return <BerryIcon {...iconProps} />;
    case 'CHERRY':
      return <CherryIcon {...iconProps} />;
    case 'CHOCOLATE':
      return <ChocolateIcon {...iconProps} />;
    case 'CITRUS':
      return <CitrusIcon {...iconProps} />;
    case 'COCONUT':
      return <CoconutIcon {...iconProps} />;
    case 'EARTHY':
      return <EarthyIcon {...iconProps} />;
    case 'FLORAL':
      return <FloralIcon {...iconProps} />;
    case 'HERBAL':
      return <HerbalIcon {...iconProps} />;
    case 'HONEY':
      return <HoneyIcon {...iconProps} />;
    case 'LEATHER':
      return <LeatherIcon {...iconProps} />;
    case 'MINERAL':
      return <MineralIcon {...iconProps} />;
    case 'MINT':
      return <MintIcon {...iconProps} />;
    case 'OAK':
      return <OakIcon {...iconProps} />;
    case 'PEACH':
      return <PeachIcon {...iconProps} />;
    case 'PEPPER':
      return <PepperIcon {...iconProps} />;
    case 'SPICY':
      return <SpicyIcon {...iconProps} />;
    case 'TOASTY':
      return <ToastyIcon {...iconProps} />;
    case 'TROPICAL':
      return <TropicalIcon {...iconProps} />;
    case 'VANILLA':
      return <VanillaIcon {...iconProps} />;
    case 'WILDFLOWER':
      return <WildFlowerIcon {...iconProps} />;
    default:
      return <FloralIcon {...iconProps} />; // 기본 아이콘
  }
}
