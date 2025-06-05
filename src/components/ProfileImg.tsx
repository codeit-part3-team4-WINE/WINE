import Image, { StaticImageData } from 'next/image';

import defaultImg from '@/app/assets/image/profile-default.svg';
import selectedOverlayImg from '@/app/assets/image/profile-select-overlay.svg';
import { cn } from '@/libs/cn';

const IMG_SIZE = {
  s: 'w-[2rem] h-[2rem] md:w-[4.5rem] md:h-[4.5rem]',
  m: 'w-[4.2rem] h-[4.2rem] md:w-[6.4rem] md:h-[6.4rem]',
  l: 'w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] xl:w-[16.4rem] xl:h-[16.4rem]',
} as const;

interface ProfileImgProps {
  src?: string | StaticImageData;
  size?: keyof typeof IMG_SIZE;
  isSelectable?: boolean;
}

/**
 * ProfileImg 컴포넌트
 *
 *
 * 프로필 이미지를 보여주는 컴포넌트입니다.
 * 선택 가능 여부에 따라 hover 시 오버레이가 나타납니다.
 * 각 사이즈별로 반응형이 적용되어있습니다.
 *
 *
 * @param {Object} props - 컴포넌트 props
 * @param {string | StaticImageData} [props.src] - 이미지 URL (없을 시 default 이미지 사용)
 * @param {'s' | 'm' | 'l'} [props.size='m'] - 프로필 이미지 크기 (s: header, m: 상세 페이지 리뷰 목록, l: mypage)
 * @param {boolean} [props.isSelectable] - hover 시 이미지 위에 오버레이 표시 여부
 *
 *
 *
 * @example isSelectable 없이 기본 사용 (hover 오버레이 없음)
 * <ProfileImg src={user.image} size="m" />
 *
 * @example isSelectable 사용 (hover 시 오버레이 표시됨)
 * <ProfileImg src={{user.image}} size="l" isSelectable={true} />
 *
 */
export default function ProfileImg({
  src,
  size = 'm',
  isSelectable,
}: ProfileImgProps) {
  const sizeClass = IMG_SIZE[size];

  return (
    <div className='group relative flex shrink-0'>
      <div
        className={cn(
          sizeClass,
          'relative overflow-hidden rounded-full border border-gray-300',
        )}
      >
        <Image
          fill
          alt='프로필 이미지'
          className='object-cover object-center'
          sizes='(max-width: 768px) 100vw, 164px'
          src={src || defaultImg}
        />
        {isSelectable && (
          <div className='absolute inset-0 z-10 cursor-pointer opacity-0 group-hover:opacity-100'>
            <Image fill alt='' src={selectedOverlayImg} />
          </div>
        )}
      </div>
    </div>
  );
}
