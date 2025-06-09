import ArrowIcon from '@/app/assets/icons/arrow';
import CameraIcon from '@/app/assets/icons/camera';
import ChevronArrowIcon from '@/app/assets/icons/chevron-arrow';
import CloseIcon from '@/app/assets/icons/close';
import FilterIcon from '@/app/assets/icons/filter';
import GoogleLoginIcon from '@/app/assets/icons/google-login';
import HeartIcon from '@/app/assets/icons/heart';
import KakaoLoginIcon from '@/app/assets/icons/kakao-login';
import LoaderCircleIcon from '@/app/assets/icons/loader-circle';
import SearchIcon from '@/app/assets/icons/search';
import StarIcon from '@/app/assets/icons/star';
import TriangleArrowIcon from '@/app/assets/icons/triangle-arrow';
import VerticalMoreIcon from '@/app/assets/icons/vertical-more';
import WineIcon from '@/app/assets/icons/wine';
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

export default function UiIcon() {
  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>Icons</h1>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>Standard</h2>
      <div className='flex flex-wrap gap-5'>
        <ArrowIcon color='#000' direction='right' size={40} />
        <CameraIcon color='#000' size={40} />
        <ChevronArrowIcon color='#000' direction='bottom' size={40} />
        <CloseIcon color='#000' size={40} />
        <FilterIcon color='#000' size={40} />
        <GoogleLoginIcon size={40} />
        <HeartIcon filled color='#000' size={40} />
        <HeartIcon color='#000' filled={false} size={40} />
        <KakaoLoginIcon size={40} />
        <SearchIcon color='#000' size={40} />
        <StarIcon filled color='#000' size={40} />
        <StarIcon color='#000' filled={false} size={40} />
        <TriangleArrowIcon color='#000' direction='bottom' size={40} />
        <VerticalMoreIcon color='#000' direction='bottom' size={40} />
        <WineIcon size={40} />
        <LoaderCircleIcon className='text-black' size={40} />
        {/* 아래는 와인 리뷰시 사용할 맛 관련 아이콘 */}
        <AppleIcon color='#000' size={40} />
        <BerryIcon color='#000' size={40} />
        <CherryIcon color='#000' size={40} />
        <ChocolateIcon color='#000' size={40} />
        <CitrusIcon color='#000' size={40} />
        <CoconutIcon color='#000' size={40} />
        <EarthyIcon color='#000' size={40} />
        <FloralIcon color='#000' size={40} />
        <HerbalIcon color='#000' size={40} />
        <HoneyIcon color='#000' size={40} />
        <LeatherIcon color='#000' size={40} />
        <MineralIcon color='#000' size={40} />
        <MintIcon color='#000' size={40} />
        <OakIcon color='#000' size={40} />
        <PeachIcon color='#000' size={40} />
        <PepperIcon color='#000' size={40} />
        <SpicyIcon color='#000' size={40} />
        <ToastyIcon color='#000' size={40} />
        <TropicalIcon color='#000' size={40} />
        <VanillaIcon color='#000' size={40} />
        <WildFlowerIcon color='#000' size={40} />
      </div>
    </div>
  );
}
