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

// 아이콘 아이템 컴포넌트
function IconItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className='flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-3'>
      <div className='flex h-12 w-12 items-center justify-center'>{icon}</div>
      <span className='text-center text-sm font-medium text-gray-700'>
        {name}
      </span>
    </div>
  );
}

export default function UiIcon() {
  return (
    <div className='p-8'>
      <h1 className='mb-3 text-3xl font-bold text-gray-900'>Icons</h1>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>
        Standard Icons
      </h2>
      <div className='grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
        <IconItem
          icon={<ArrowIcon color='#000' direction='right' size={40} />}
          name='Arrow'
        />
        <IconItem icon={<CameraIcon color='#000' size={40} />} name='Camera' />
        <IconItem
          icon={<ChevronArrowIcon color='#000' direction='bottom' size={40} />}
          name='Chevron'
        />
        <IconItem
          icon={<CloseIcon className='text-black' size={40} />}
          name='Close'
        />
        <IconItem icon={<FilterIcon color='#000' size={40} />} name='Filter' />
        <IconItem icon={<GoogleLoginIcon size={40} />} name='Google' />
        <IconItem
          icon={<HeartIcon filled color='#000' size={40} />}
          name='Heart (filled)'
        />
        <IconItem
          icon={<HeartIcon color='#000' filled={false} size={40} />}
          name='Heart'
        />
        <IconItem icon={<KakaoLoginIcon size={40} />} name='Kakao' />
        <IconItem icon={<SearchIcon color='#000' size={40} />} name='Search' />
        <IconItem
          icon={<StarIcon filled color='#000' size={40} />}
          name='Star (filled)'
        />
        <IconItem
          icon={<StarIcon color='#000' filled={false} size={40} />}
          name='Star'
        />
        <IconItem
          icon={<TriangleArrowIcon color='#000' direction='bottom' size={40} />}
          name='Triangle'
        />
        <IconItem
          icon={<VerticalMoreIcon color='#000' direction='bottom' size={40} />}
          name='More'
        />
        <IconItem icon={<WineIcon size={40} />} name='Wine' />
        <IconItem
          icon={<LoaderCircleIcon className='text-black' size={40} />}
          name='Loader'
        />
      </div>

      <h2 className='mt-10 mb-3 text-xl font-bold text-gray-700'>
        Taste Icons
      </h2>
      <div className='grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
        <IconItem icon={<AppleIcon color='#000' size={40} />} name='사과' />
        <IconItem icon={<BerryIcon color='#000' size={40} />} name='베리' />
        <IconItem icon={<CherryIcon color='#000' size={40} />} name='체리' />
        <IconItem
          icon={<ChocolateIcon color='#000' size={40} />}
          name='초콜릿'
        />
        <IconItem
          icon={<CitrusIcon color='#000' size={40} />}
          name='시트러스'
        />
        <IconItem icon={<CoconutIcon color='#000' size={40} />} name='코코넛' />
        <IconItem icon={<EarthyIcon color='#000' size={40} />} name='흙' />
        <IconItem icon={<FloralIcon color='#000' size={40} />} name='꽃' />
        <IconItem icon={<HerbalIcon color='#000' size={40} />} name='허브' />
        <IconItem icon={<HoneyIcon color='#000' size={40} />} name='꿀' />
        <IconItem icon={<LeatherIcon color='#000' size={40} />} name='가죽' />
        <IconItem icon={<MineralIcon color='#000' size={40} />} name='미네랄' />
        <IconItem icon={<MintIcon color='#000' size={40} />} name='민트' />
        <IconItem icon={<OakIcon color='#000' size={40} />} name='오크' />
        <IconItem icon={<PeachIcon color='#000' size={40} />} name='복숭아' />
        <IconItem icon={<PepperIcon color='#000' size={40} />} name='후추' />
        <IconItem icon={<SpicyIcon color='#000' size={40} />} name='스파이스' />
        <IconItem icon={<ToastyIcon color='#000' size={40} />} name='토스티' />
        <IconItem
          icon={<TropicalIcon color='#000' size={40} />}
          name='트로피컬'
        />
        <IconItem icon={<VanillaIcon color='#000' size={40} />} name='바닐라' />
        <IconItem
          icon={<WildFlowerIcon color='#000' size={40} />}
          name='들꽃'
        />
      </div>
    </div>
  );
}
