'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import GitHub from '../app/assets/icons/github-logo';
import ArrowIcon from './assets/icons/arrow';
import StarIcon from './assets/icons/star';
import WineLogoIcon from './assets/icons/wine-logo';
import bottleImage from './assets/images/bottle.png';
import bottle2Image from './assets/images/bottle2.png';
import BerryIcon from './assets/tastes/berry';

function TopButton({ containerRef }) {
  const handleScrollToTop = () => {
    if (containerRef?.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className='fixed right-16 bottom-16 z-100 cursor-pointer rounded-full bg-white p-6 shadow-2xs'
      onClick={handleScrollToTop}
    >
      <ArrowIcon direction='top' />
    </div>
  );
}

function LandingSection_1() {
  return (
    <div className='bg-primary-10 border-primary-100 relative flex h-screen w-screen snap-center items-center justify-center border-b-1'>
      <p className='text-primary-100 font-modak absolute left-[20vw] text-[22vw] leading-none'>
        W
      </p>
      <p className='text-primary-100 font-modak absolute left-[57vw] text-[22vw] leading-none'>
        N
      </p>
      <p className='text-primary-100 font-modak absolute left-[72vw] text-[22vw] leading-none'>
        E
      </p>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function LandingSection_2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? 'visible' : 'hidden'}
      className='border-primary-100 bg-primary-10 relative flex h-screen w-screen snap-center items-center justify-center border-b'
      initial='hidden'
      variants={containerVariants}
    >
      <div className='border-primary-100 absolute bottom-0 flex h-[10vh] w-screen items-center justify-center border-t-1'>
        <p className='text-primary-100 text-[3rem] font-[300]'>
          추천은 우리가 할게요. 당신은 고르기만 하세요.
        </p>
      </div>

      <p className='font-archivo text-primary-100 absolute top-[13vh] text-[11vw] font-[700]'>
        RECOMMEND
      </p>

      <div className='absolute top-[27vh] left-[40vw] flex w-[19vw] flex-col items-center justify-center'>
        <div className='h-[25vw] w-fit' />
        <div className='mt-[0.3vw] flex flex-col items-center gap-3'>
          <div className='flex gap-[0.2vw]'>
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
          </div>
          <p className='text-primary-100 text-[3rem]'>5.0</p>
        </div>
      </div>

      <div className='absolute top-[27vh] left-[10vw] flex w-[19vw] flex-col items-center justify-center'>
        <div className='h-[25vw] w-fit'>
          <Image
            alt='bottle'
            className='h-full w-full object-contain grayscale'
            src={bottle2Image}
          />
        </div>
        <div className='mt-[0.3vw] flex flex-col items-center gap-3'>
          <div className='flex gap-[0.2vw]'>
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon color='#6a42db' size={20} />
            <StarIcon color='#6a42db' size={20} />
          </div>
          <p className='text-[2rem] text-gray-500'>3.2</p>
        </div>
      </div>

      <div className='absolute top-[27vh] left-[25vw] flex w-[19vw] flex-col items-center justify-center'>
        <div className='h-[25vw] w-fit'>
          <Image
            alt='bottle'
            className='h-full w-full object-contain grayscale'
            src={bottle2Image}
          />
        </div>
        <div className='mt-[0.3vw] flex flex-col items-center gap-3'>
          <div className='flex gap-[0.2vw]'>
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon color='#6a42db' size={20} />
            <StarIcon color='#6a42db' size={20} />
          </div>
          <p className='text-[2rem] text-gray-500'>3.4</p>
        </div>
      </div>

      <div className='absolute top-[27vh] left-[55vw] flex w-[19vw] flex-col items-center justify-center'>
        <div className='h-[25vw] w-fit'>
          <Image
            alt='bottle'
            className='h-full w-full object-contain grayscale'
            src={bottle2Image}
          />
        </div>
        <div className='mt-[0.3vw] flex flex-col items-center gap-3'>
          <div className='flex gap-[0.2vw]'>
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon color='#6a42db' size={20} />
          </div>
          <p className='text-[2rem] text-gray-500'>4.1</p>
        </div>
      </div>

      <div className='absolute top-[27vh] left-[70vw] flex w-[19vw] flex-col items-center justify-center'>
        <div className='h-[25vw] w-fit'>
          <Image
            alt='bottle'
            className='h-full w-full object-contain grayscale'
            src={bottle2Image}
          />
        </div>
        <div className='mt-[0.3vw] flex flex-col items-center gap-3'>
          <div className='flex gap-[0.2vw]'>
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon filled color='#6a42db' size={20} />
            <StarIcon color='#6a42db' size={20} />
            <StarIcon color='#6a42db' size={20} />
          </div>
          <p className='text-[2rem] text-gray-500'>3.0</p>
        </div>
      </div>
    </motion.div>
  );
}

function LandingSection_3() {
  return (
    <div className='bg-primary-10 border-primary-100 relative flex h-screen w-screen snap-center items-center justify-center border-b-1'>
      <div className='absolute top-[13vh] flex items-center gap-[1vw]'>
        <p className='font-archivo text-primary-100 text-[11vw] font-[700]'>
          SEARCH
        </p>
        <motion.div
          animate={{ opacity: [0, 0.7, 0, 0.7] }}
          className='bg-primary-100 h-[8.5vw] w-[0.1vw]'
          initial={{ opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>

      <div className='absolute top-[45vh] left-[70vw] flex w-[25vw] flex-col gap-[0.7vw]'>
        <p className='text-[1.6rem] text-gray-500'>TYPES</p>
        <div className='flex gap-[1vw]'>
          <p className='h-fit w-fit rounded-full border-1 border-gray-200 bg-gray-100 px-8 py-3 text-[2rem] text-gray-500'>
            RED
          </p>
          <p className='h-fit w-fit rounded-full border-1 border-gray-200 bg-gray-100 px-8 py-3 text-[2rem] text-gray-500'>
            WHITE
          </p>
          <p className='bg-primary-100 h-fit w-fit rounded-full border-1 border-gray-200 px-8 py-3 text-[2rem] text-white'>
            SPARKLING
          </p>
        </div>
      </div>

      <div className='absolute top-[60vh] left-[70vw] flex w-[25vw] flex-col gap-[0.7vw]'>
        <p className='text-[1.6rem] text-gray-500'>PRICE</p>
        <div className='flex gap-[1vw]'>
          <div className='relative flex h-[1vw] w-full items-center justify-center rounded-4xl border-1 border-gray-200 bg-gray-200'>
            <div className='bg-primary-100 absolute left-[11vw] h-[1vw] w-[10vw] border-1 border-gray-200' />
            <div className='absolute left-[10vw] size-[2.5vw] rounded-full border-1 border-gray-200 bg-gray-100' />
            <div className='absolute left-[19vw] size-[2.5vw] rounded-full border-1 border-gray-200 bg-gray-100' />
          </div>
        </div>
      </div>

      <div className='absolute top-[70vh] left-[70vw] flex w-[25vw] flex-col gap-[0.7vw]'>
        <p className='text-[1.6rem] text-gray-500'>RATING</p>
        <div className='flex flex-col gap-[1vw]'>
          <div className='flex gap-[1vw]'>
            <div className='flex size-[2vw] items-center justify-center rounded-md border-1 border-gray-200 bg-gray-100'>
              <div className='bg-primary-100 size-[1vw] rounded-sm border-1 border-gray-200' />
            </div>
            <p className='text-[2rem] text-gray-500'>ALL</p>
          </div>

          <div className='flex gap-[1vw]'>
            <div className='size-[2vw] rounded-md border-1 border-gray-200 bg-gray-100' />
            <p className='text-[2rem] text-gray-500'>4.0 - 4.5</p>
          </div>
        </div>
      </div>

      <div className='border-primary-100 absolute bottom-0 flex h-[10vh] w-screen items-center justify-center border-t-1'>
        <p className='text-primary-100 text-[3rem] font-[300]'>
          찾고 있는 와인, 이미 알고 있어요.
        </p>
      </div>
    </div>
  );
}

function LandingSection_4() {
  return (
    <div className='bg-primary-10 border-primary-100 relative flex h-screen w-screen snap-center items-center justify-center border-b-1'>
      <p className='font-archivo text-primary-100 absolute top-[13vh] text-[11vw] font-[700]'>
        REVIEW
      </p>

      <div className='absolute top-[45vh] left-[10vw] flex flex-wrap gap-3'>
        <p className='text-primary-100 h-fit w-fit rounded-full border-1 border-gray-200 bg-gray-100 px-8 py-3 text-[2rem]'>
          CHERRY
        </p>
        <p className='text-primary-100 h-fit w-fit rounded-full border-1 border-gray-200 bg-gray-100 px-8 py-3 text-[2rem]'>
          CHOCOLATE
        </p>
        <p className='text-primary-100 h-fit w-fit rounded-full border-1 border-gray-200 bg-gray-100 px-8 py-3 text-[2rem]'>
          VANILLA
        </p>
        <p className='text-primary-100 h-fit w-fit rounded-full border-1 border-gray-200 bg-gray-100 px-8 py-3 text-[2rem]'>
          BERRY
        </p>
      </div>

      <div className='absolute top-[53vh] left-[10vw] flex w-[40vw] flex-col gap-2'>
        <p className='text-[2.4rem] font-[500] text-gray-500'>
          La Vigne Noire Pinot Noir 2020
        </p>
        <p className='text-[2rem] text-gray-500'>
          Rich notes of cherry and mixed berries lead the palate, supported by
          layers of dark chocolate and smooth vanilla. The finish is long and
          balanced, leaving a soft, fruity warmth.
        </p>
      </div>

      <div className='absolute top-[74vh] left-[10vw] flex w-[40vw] flex-col gap-[4vh]'>
        <div className='relative flex h-[1vw] w-full items-center justify-center rounded-4xl border-1 border-gray-200 bg-gray-200'>
          <div className='bg-primary-100 absolute left-[40rem] size-[2.5vw] rounded-full border-1 border-gray-200' />
        </div>

        <div className='relative flex h-[1vw] w-full items-center justify-center rounded-4xl border-1 border-gray-200 bg-gray-200'>
          <div className='bg-primary-100 absolute left-[15rem] size-[2.5vw] rounded-full border-1 border-gray-200' />
        </div>
      </div>

      <div className='border-primary-100 bg-primary-10 absolute bottom-0 z-100 flex h-[10vh] w-screen items-center justify-center border-t-1'>
        <p className='text-primary-100 text-[3rem] font-[300]'>
          한 잔의 감각을 그대로 기록하세요.
        </p>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef, // 컨테이너 지정
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, -600, 400],
  );
  // const x = useTransform(
  //   scrollYProgress,
  //   [0.125, 0.375, 0.625, 0.875],
  //   [0, 0, -300, 400],
  // );

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [300, 0, 0, 100, 50],
  );

  // tablet
  const xTablet = useTransform(
    scrollYProgress,
    [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  );

  // 모바일용 x축 이동 범위 줄이기
  const xMobile = useTransform(
    scrollYProgress,
    [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    [2.1, 0.7, 0.5, 1, 1, 1, 5, 1, 2.6],
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, 135, 20], // 단위: deg (자동 적용)
  );

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 snap-y snap-mandatory [scroll-snap-stop:always] overflow-y-scroll [scroll-behavior:smooth]'
    >
      <div className='border-primary-100 bg-primary-10 fixed top-0 z-90 flex h-screen w-[5vw] flex-col items-center justify-start gap-[5vh] border-r-1 pt-[15vh]'>
        <a
          aria-label='GitHub repository'
          className='flex items-center'
          href='https://github.com/codeit-part3-team4-WINE/WINE'
          rel='noopener noreferrer'
          target='_blank'
        >
          <GitHub color='#6A42DB' />
        </a>
        <Link href='/design-system'>
          <BerryIcon color='#6A42DB' />
        </Link>
      </div>

      <div className='border-primary-100 bg-primary-10 fixed top-0 z-100 flex h-[10vh] w-screen items-center justify-between border-b-1 px-[5vw]'>
        <Link href='/wines'>
          <WineLogoIcon color='#6A42DB' />
        </Link>
        <div className='flex gap-[2vw]'>
          <p className='text-primary-100 text-[1.6rem]'>CODEIT FRONTEND 15</p>
          <p className='text-primary-100 text-[1.6rem]'>TAEILWIND</p>
          <p className='text-primary-100 text-[1.6rem]'> V20.08</p>
        </div>
      </div>

      {/* 데스크탑용 */}
      <motion.div
        className='pointer-events-none fixed top-[50vh] left-[50vw] z-50 hidden h-[60vh] w-[12vw] xl:block'
        style={{
          x,
          y,
          scale,
          rotate,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <Image
          alt='bottle'
          className='h-full w-full object-contain'
          src={bottleImage}
        />
      </motion.div>
      {/* 태블릿용 */}
      <motion.div
        className='pointer-events-none fixed top-[50vh] left-[43vw] z-50 hidden size-48 bg-purple-600 md:block xl:hidden'
        style={{
          x: xTablet,
          scale,
          y: '-50%',
          translateX: '-50%',
        }}
      />
      {/* 모바일용 */}
      <motion.div
        className='pointer-events-none fixed top-1/2 left-1/2 z-50 block size-32 bg-red-600 md:hidden'
        style={{
          x: xMobile,
          scale,
          y: '-50%',
          translateX: '-50%',
        }}
      />
      <LandingSection_1 />
      <LandingSection_2 />
      <LandingSection_3 />
      <LandingSection_4 />
      <TopButton containerRef={containerRef} />
    </div>
  );
}
