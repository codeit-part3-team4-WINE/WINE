'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

import defaultImg from '@/app/assets/svgs/profile-default.svg';
import selectedOverlayImg from '@/app/assets/svgs/profile-select-overlay.svg';
import { cn } from '@/libs/cn';

const IMG_SIZE = {
  sm: 'w-[2rem] h-[2rem] md:w-[4.5rem] md:h-[4.5rem]',
  md: 'w-[4.2rem] h-[4.2rem] md:w-[6.4rem] md:h-[6.4rem]',
  lg: 'w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] xl:w-[16.4rem] xl:h-[16.4rem]',
} as const;

interface ProfileImgProps {
  src?: string | StaticImageData;
  size?: keyof typeof IMG_SIZE;
  isSelectable?: boolean;
  className?: string;
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
 * @param {'sm' | 'md' | 'lg'} [props.size='m'] - 프로필 이미지 크기 (sm: header, md: 상세 페이지 리뷰 목록, lg: mypage)
 * @param {boolean} [props.isSelectable] - hover 시 이미지 위에 오버레이 표시 여부
 * @param {string} [props.className] - 프로필 이미지 사용자 정의 클래스명 (크기, border, 배경 등 스타일을 유동적으로 커스터마이징 할 수 있습니다.)
 *
 *
 * @example isSelectable없이 기본사용 (hover 오버레이 없음)
 * <ProfileImg src={user.image} size="m" />
 *
 * @example isSelectable사용 (hover시 오버레이 표시됨)
 * <ProfileImg src={{user.image}} size="l" isSelectable={true} />
 *
 */
export default function ProfileImg({
  src,
  size = 'md',
  isSelectable,
  className,
}: ProfileImgProps) {
  const sizeClass = IMG_SIZE[size];
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(
    src || defaultImg,
  );
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (src) setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (!isError) {
      setIsError(true);
      setImgSrc(defaultImg);
    }
  };

  return (
    <div className='group relative flex shrink-0'>
      <div
        className={cn(
          sizeClass,
          'relative overflow-hidden rounded-full border border-gray-300',
          className,
        )}
      >
        <Image
          fill
          alt='프로필 이미지'
          className='pointer-events-none object-cover object-center select-none'
          src={imgSrc}
          onError={handleError}
        />
        {isSelectable && (
          <div
            className='pointer-events-all absolute inset-0 z-10 cursor-pointer opacity-0 group-hover:opacity-100'
            onDragStart={(e) => e.preventDefault()}
          >
            <Image
              fill
              alt='클릭하여 프로필 이미지 변경'
              className='pointer-events-none select-none'
              src={selectedOverlayImg}
            />
          </div>
        )}
      </div>
    </div>
  );
}
