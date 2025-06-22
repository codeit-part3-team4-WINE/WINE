'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import GitHub from '../app/assets/icons/github-logo';
import ArrowIcon from './assets/icons/arrow';
import DesignIcon from './assets/icons/desgin';
import HomeIcon from './assets/icons/home';
import StarIcon from './assets/icons/star';
import WineLogoIcon from './assets/icons/wine-logo';
import bottleImage from './assets/images/bottle.png';
import bottle2Image from './assets/images/bottle2.png';

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
      className='fixed right-16 bottom-12 z-100 hidden cursor-pointer rounded-full bg-white p-6 shadow-2xs md:bottom-16 md:block'
      onClick={handleScrollToTop}
    >
      <ArrowIcon direction='top' />
    </div>
  );
}

function LandingSection_1() {
  return (
    <div className='bg-primary-10 border-primary-100 relative flex h-screen w-screen snap-center items-center justify-center border-b-1'>
      <p className='text-primary-100 font-vibur absolute left-[19vw] text-[22vw] leading-none font-[700]'>
        W
      </p>
      <p className='text-primary-100 font-vibur absolute left-[57vw] text-[22vw] leading-none font-[700]'>
        N
      </p>
      <p className='text-primary-100 font-vibur absolute left-[72vw] text-[22vw] leading-none font-[700]'>
        E
      </p>
    </div>
  );
}

const riseUp = (delay = 0) => ({
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: 'easeOut' as const,
    },
  },
});

function LandingSection_2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? 'visible' : 'hidden'}
      className='border-primary-100 bg-primary-10 relative flex h-screen w-screen snap-center items-center justify-center border-b'
      initial='hidden'
    >
      <div className='border-primary-100 bg-primary-10 absolute bottom-0 z-20 flex h-[10vh] w-screen items-center justify-center border-t-1'>
        <p className='text-primary-100 font-gowun flex flex-col items-center text-[2rem] font-[300] md:flex-row md:text-[3rem]'>
          <span className='mr-[0.7vw]'>추천은 우리가 할게요.</span>
          <span> 당신은 고르기만 하세요.</span>
        </p>
      </div>

      <p className='font-shrikhand text-primary-100 absolute top-[20vh] text-[7vh] font-[400] md:top-[13vh] md:text-[11vw]'>
        RECOMMEND
      </p>

      {/* ⭐ 와인 1 */}
      <motion.div
        animate={isInView ? 'visible' : 'hidden'}
        className='absolute top-[67vh] left-[40vw] flex w-[19vw] flex-col items-center justify-center md:top-[40vh] xl:top-[27vh]'
        initial='hidden'
        variants={riseUp(0)}
      >
        <div className='h-[25vw] w-fit' />
        <motion.div
          className='mt-[0.3vw] flex flex-col items-center gap-3'
          variants={riseUp(0.2)}
        >
          <div className='flex gap-[0.2vw]'>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled color='#6a42db' size={20} />
            ))}
          </div>
          <p className='text-primary-100 text-[3rem]'>5.0</p>
        </motion.div>
      </motion.div>

      {/* ⭐ 와인 2 */}
      <motion.div
        animate={isInView ? 'visible' : 'hidden'}
        className='absolute top-[50vh] left-[12vw] flex w-[19vw] flex-col items-center justify-center md:top-[40vh] md:left-[10vw] xl:top-[27vh]'
        initial='hidden'
        variants={riseUp(0)}
      >
        <motion.div
          className='h-[36vh] w-[47vw] md:h-[25vw] md:w-fit'
          variants={riseUp(0)}
        >
          <Image
            alt='bottle'
            className='h-full w-full object-contain grayscale'
            src={bottle2Image}
          />
        </motion.div>
        <motion.div
          className='mt-[0.3vw] hidden flex-col items-center gap-3 md:flex'
          variants={riseUp(0.2)}
        >
          <div className='flex gap-[0.2vw]'>
            {[...Array(3)].map((_, i) => (
              <StarIcon key={i} filled color='#6a42db' size={20} />
            ))}
            {[...Array(2)].map((_, i) => (
              <StarIcon key={i + 3} color='#6a42db' size={20} />
            ))}
          </div>
          <p className='text-[2rem] text-gray-500'>3.2</p>
        </motion.div>
      </motion.div>

      {/* ⭐ 와인 3 */}
      <motion.div
        animate={isInView ? 'visible' : 'hidden'}
        className='absolute left-[25vw] hidden w-[19vw] flex-col items-center justify-center md:top-[40vh] md:flex xl:top-[27vh]'
        initial='hidden'
        variants={riseUp(0.1)}
      >
        <motion.div className='h-[25vw] w-fit' variants={riseUp(0.1)}>
          <Image
            alt='bottle'
            className='h-full w-full object-contain grayscale'
            src={bottle2Image}
          />
        </motion.div>
        <motion.div
          className='mt-[0.3vw] flex flex-col items-center gap-3'
          variants={riseUp(0.3)}
        >
          <div className='flex gap-[0.2vw]'>
            {[...Array(3)].map((_, i) => (
              <StarIcon key={i} filled color='#6a42db' size={20} />
            ))}
            {[...Array(2)].map((_, i) => (
              <StarIcon key={i + 3} color='#6a42db' size={20} />
            ))}
          </div>
          <p className='text-[2rem] text-gray-500'>3.4</p>
        </motion.div>
      </motion.div>

      {/* ⭐ 와인 4 */}
      <motion.div
        animate={isInView ? 'visible' : 'hidden'}
        className='absolute left-[55vw] hidden w-[19vw] flex-col items-center justify-center md:top-[40vh] md:flex xl:top-[27vh]'
        initial='hidden'
        variants={riseUp(0.2)}
      >
        <motion.div className='h-[25vw] w-fit' variants={riseUp(0.2)}>
          <Image
            alt='bottle'
            className='h-full w-full object-contain grayscale'
            src={bottle2Image}
          />
        </motion.div>
        <motion.div
          className='mt-[0.3vw] flex flex-col items-center gap-3'
          variants={riseUp(0.4)}
        >
          <div className='flex gap-[0.2vw]'>
            {[...Array(4)].map((_, i) => (
              <StarIcon key={i} filled color='#6a42db' size={20} />
            ))}
            <StarIcon color='#6a42db' size={20} />
          </div>
          <p className='text-[2rem] text-gray-500'>4.1</p>
        </motion.div>
      </motion.div>

      {/* ⭐ 와인 5 */}
      <motion.div
        animate={isInView ? 'visible' : 'hidden'}
        className='absolute top-[50vh] left-[70vw] flex w-[19vw] flex-col items-center justify-center md:top-[40vh] xl:top-[27vh]'
        initial='hidden'
        variants={riseUp(0.3)}
      >
        <motion.div
          className='h-[36vh] w-[47vw] md:h-[25vw] md:w-fit'
          variants={riseUp(0.3)}
        >
          <Image
            alt='bottle'
            className='h-full w-full object-contain grayscale'
            src={bottle2Image}
          />
        </motion.div>
        <motion.div
          className='mt-[0.3vw] hidden flex-col items-center gap-3 md:flex'
          variants={riseUp(0.5)}
        >
          <div className='flex gap-[0.2vw]'>
            {[...Array(3)].map((_, i) => (
              <StarIcon key={i} filled color='#6a42db' size={20} />
            ))}
            {[...Array(2)].map((_, i) => (
              <StarIcon key={i + 3} color='#6a42db' size={20} />
            ))}
          </div>
          <p className='text-[2rem] text-gray-500'>3.0</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function LandingSection_3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? 'visible' : 'hidden'}
      className='bg-primary-10 border-primary-100 relative flex h-screen w-screen snap-center items-center justify-center border-b-1'
      initial='hidden'
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
    >
      <div className='absolute top-[17vh] flex items-center gap-[1vw] md:top-[13vh]'>
        <p className='font-shrikhand text-primary-100 text-[7vh] font-[400] md:text-[11vw]'>
          SEARCH
        </p>
        <motion.div
          animate={{ opacity: [0, 0.7, 0, 0.7] }}
          className='bg-primary-100 ml-[0.7vw] h-[8.5vw] w-[0.1vw]'
          initial={{ opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>

      <motion.div
        className='absolute top-[60vh] left-[15vw] flex w-[25vw] flex-col gap-[1vh] md:top-[45vh] md:left-[63vw] md:gap-[0.7vw] xl:left-[70vw]'
        variants={{
          hidden: { x: 40, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }}
      >
        <p className='text-[1.6rem] text-gray-500'>TYPES</p>
        <div className='flex gap-[1vw]'>
          <p className='h-fit w-fit rounded-full border-1 border-gray-200 bg-gray-100 px-8 py-3 text-[1.4rem] text-gray-500 md:text-[1.8rem] xl:text-[2rem]'>
            RED
          </p>
          <p className='h-fit w-fit rounded-full border-1 border-gray-200 bg-gray-100 px-8 py-3 text-[1.4rem] text-gray-500 md:text-[1.8rem] xl:text-[2rem]'>
            WHITE
          </p>
          <p className='bg-primary-100 h-fit w-fit rounded-full border-1 border-gray-200 px-8 py-3 text-[1.4rem] text-white md:text-[1.8rem] xl:text-[2rem]'>
            SPARKLING
          </p>
        </div>
      </motion.div>

      <motion.div
        className='absolute top-[72vh] left-[15vw] flex w-[70vw] flex-col gap-[1vh] md:top-[60vh] md:left-[63vw] md:w-[30vw] md:gap-[0.7vw] xl:left-[70vw] xl:w-[25vw]'
        variants={{
          hidden: { x: 40, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
          },
        }}
      >
        <p className='text-[1.6rem] text-gray-500'>PRICE</p>
        <div className='flex gap-[1vw]'>
          <div className='relative flex h-[1vh] w-full items-center justify-center rounded-4xl border-1 border-gray-200 bg-gray-200 md:h-[1vw]'>
            <div className='bg-primary-100 absolute left-[11vw] h-[1vh] w-[20vw] border-1 border-gray-200 md:h-[1vw] md:w-[10vw]' />
            <div className='absolute left-[10vw] size-[2.5vh] rounded-full border-1 border-gray-200 bg-gray-100 md:size-[2.5vw]' />
            <div className='absolute left-[30vw] size-[2.5vh] rounded-full border-1 border-gray-200 bg-gray-100 md:left-[19vw] md:size-[2.5vw]' />
          </div>
        </div>
      </motion.div>

      <motion.div
        className='absolute top-[80vh] left-[15vw] flex w-[25vw] flex-col gap-[1vh] md:top-[70vh] md:left-[63vw] md:gap-[0.7vw] xl:left-[70vw]'
        variants={{
          hidden: { x: 40, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
          },
        }}
      >
        <p className='text-[1.6rem] text-gray-500'>RATING</p>
        <div className='flex gap-[2vh] md:flex-col md:gap-[1vw]'>
          <div className='flex items-center gap-[1vw]'>
            <div className='flex size-[2.5vh] items-center justify-center rounded-md border-1 border-gray-200 bg-gray-100 md:size-[2vw]'>
              <div className='bg-primary-100 size-[1.3vh] rounded-sm border-1 border-gray-200 md:size-[1vw]' />
            </div>
            <p className='text-[1.4rem] text-gray-500 md:text-[2rem]'>ALL</p>
          </div>

          <div className='flex items-center gap-[1vw]'>
            <div className='size-[2.5vh] rounded-md border-1 border-gray-200 bg-gray-100 md:size-[2vw]' />
            <p className='text-[1.4rem] whitespace-nowrap text-gray-500 md:text-[2rem]'>
              4.0 - 4.5
            </p>
          </div>
        </div>
      </motion.div>

      <div className='border-primary-100 bg-primary-10 absolute bottom-0 z-20 flex h-[10vh] w-screen items-center justify-center border-t-1'>
        <p className='text-primary-100 font-gowun text-[2rem] font-[300] whitespace-nowrap md:text-[3rem]'>
          찾고 있는 와인, 이미 알고 있어요.
        </p>
      </div>
    </motion.div>
  );
}

function LandingSection_4() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  const fadeLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: 'easeOut' as const,
      },
    },
  });

  return (
    <div
      ref={sectionRef}
      className='bg-primary-10 border-primary-100 relative flex h-screen w-screen snap-center items-center justify-center border-b-1'
    >
      <p className='font-shrikhand text-primary-100 absolute top-[20vh] text-[7vh] font-[400] md:top-[13vh] md:text-[11vw]'>
        REVIEW
      </p>

      <div className='absolute top-[33vh] left-[9vw] flex flex-wrap gap-[0.5vh] md:top-[45vh] md:gap-3'>
        {['CHERRY', 'CHOCOLATE', 'VANILLA', 'BERRY'].map((label, i) => (
          <motion.p
            key={label}
            animate={isInView ? 'visible' : 'hidden'}
            className={`text-primary-100 ${
              label === 'BERRY' ? 'hidden md:block' : ''
            } h-fit w-fit rounded-full border-1 border-gray-200 bg-gray-100 px-8 py-3 text-[1.4rem] md:text-[2rem]`}
            initial='hidden'
            variants={fadeLeft(0.1 * i)}
          >
            {label}
          </motion.p>
        ))}
      </div>

      <div className='absolute top-[40vh] left-[10vw] flex w-[80vw] flex-col gap-2 md:top-[53vh] md:left-[10vw] md:w-[55vw] xl:w-[40vw]'>
        <motion.p
          animate={isInView ? 'visible' : 'hidden'}
          className='text-[1.8rem] font-[500] text-gray-500 md:text-[2rem] xl:text-[2.4rem]'
          initial='hidden'
          variants={fadeLeft(0.4)}
        >
          La Vigne Noire Pinot Noir 2020
        </motion.p>

        <motion.p
          animate={isInView ? 'visible' : 'hidden'}
          className='text-[1.4rem] font-[300] text-gray-500 md:text-[1.6rem] xl:text-[2rem]'
          initial='hidden'
          variants={fadeLeft(0.5)}
        >
          Rich notes of cherry and mixed berries lead the palate, supported by
          layers of dark chocolate and smooth vanilla. The finish is long and
          balanced, leaving a soft, fruity warmth.
        </motion.p>
      </div>

      <div className='absolute top-[58vh] left-[10vw] flex w-[80vw] flex-col gap-[4vh] md:top-[68vh] md:left-[10vw] md:w-[40vw] xl:top-[74vh]'>
        {[0, 1].map((_, i) => (
          <motion.div
            key={i}
            animate={isInView ? 'visible' : 'hidden'}
            className='relative flex h-[1vh] w-full items-center justify-center rounded-4xl border-1 border-gray-200 bg-gray-200 md:h-[1vw]'
            initial='hidden'
            variants={fadeLeft(0.3 + i * 0.1)} // 순차 등장
          >
            <div
              className={`bg-primary-100 absolute size-[2.5vh] rounded-full border-1 border-gray-200 md:size-[2.5vw] ${
                i === 0
                  ? 'left-[10vw] md:left-[30vw]'
                  : 'left-[68vw] md:left-[15vw]'
              }`}
            />
          </motion.div>
        ))}
      </div>

      <div className='border-primary-100 bg-primary-10 absolute bottom-0 z-100 flex h-[10vh] w-screen items-center justify-center border-t-1'>
        <p className='text-primary-100 font-gowun text-[2rem] font-[300] md:text-[3rem]'>
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

  // PC
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, -600, 400],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [300, 0, 0, 100, 50],
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

  // tablet
  const xTablet = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, -600, 350],
  );
  const yTablet = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [150, 0, 0, 100, 50],
  );
  const scaleTablet = useTransform(
    scrollYProgress,
    [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    [2.1, 1, 1, 1, 1, 1, 8, 1, 2.8],
  );
  const rotateTablet = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, 135, 20], // 단위: deg (자동 적용)
  );

  // Mobile
  const xMobile = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, -100, 0],
  );
  const yMobile = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [180, 150, -100, 0, 150],
  );
  const scaleMobile = useTransform(
    scrollYProgress,
    [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    [2.5, 2.6, 3.3, 1, 1, 1, 7, 7, 3],
  );
  const rotateMobile = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, 100, 20], // 단위: deg (자동 적용)
  );

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 snap-y snap-mandatory [scroll-snap-stop:always] overflow-x-hidden overflow-y-scroll [scroll-behavior:smooth]'
    >
      <div className='border-primary-100 bg-primary-10 fixed top-0 z-90 flex h-screen w-[5vw] justify-center border-r-1 pt-[15vh]'>
        <div className='hidden flex-col items-center justify-start gap-[5vh] md:flex'>
          <Link href='/design-system'>
            <HomeIcon className='text-primary-100' size={30} />
          </Link>

          <Link href='/design-system'>
            <DesignIcon className='text-primary-100' size={28} />
          </Link>

          <a
            aria-label='GitHub repository'
            className='flex items-center'
            href='https://github.com/codeit-part3-team4-WINE/WINE'
            rel='noopener noreferrer'
            target='_blank'
          >
            <GitHub color='#6A42DB' />
          </a>
        </div>
      </div>

      <div className='bg-primary-10 border-primary-100 fixed right-0 z-80 h-screen w-[5vw] border-l-1 md:hidden' />

      <div className='border-primary-100 bg-primary-10 fixed top-0 z-100 flex h-[10vh] w-screen items-center justify-between border-b-1 px-[5vw]'>
        <Link href='/wines'>
          <WineLogoIcon color='#6A42DB' />
        </Link>
        <div className='hidden items-center justify-center md:flex'>
          <div className='flex gap-[2vw]'>
            {/* <p className='text-primary-100 text-[1.6rem]'>CODEIT FRONTEND 15</p> */}
            {/* <p className='text-primary-100 text-[1.6rem]'>TAEILWIND</p> */}
            {/* <p className='text-primary-100 text-[1.6rem]'> V20.08</p> */}
            <Link href='/wines'>
              <p className='text-primary-100 text-[1.6rem] hover:opacity-50'>
                HOME
              </p>
            </Link>
          </div>
        </div>

        <div className='flex items-center justify-start gap-[4vw] md:hidden'>
          <Link href='/design-system'>
            <HomeIcon className='text-primary-100' size={30} />
          </Link>

          <Link href='/design-system'>
            <DesignIcon className='text-primary-100' size={28} />
          </Link>

          <a
            aria-label='GitHub repository'
            className='flex items-center'
            href='https://github.com/codeit-part3-team4-WINE/WINE'
            rel='noopener noreferrer'
            target='_blank'
          >
            <GitHub color='#6A42DB' />
          </a>
        </div>
      </div>

      {/* 데스크탑용 */}
      <motion.div
        animate={{ opacity: 1, y: 300 }}
        className='pointer-events-none fixed top-[50vh] left-[50vw] z-50 hidden h-[60vh] w-[12vw] xl:block'
        initial={{ opacity: 0, y: 400 }}
        style={{
          x,
          y,
          scale,
          rotate,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          alt='bottle'
          className='h-full w-full object-contain'
          src={bottleImage}
        />
      </motion.div>
      {/* 태블릿용 */}
      <motion.div
        animate={{ opacity: 1, y: 150 }}
        className='pointer-events-none fixed top-[50vh] left-[50vw] z-50 hidden h-[60vh] w-[12vw] md:block xl:hidden'
        initial={{ opacity: 0, y: 250 }}
        style={{
          x: xTablet,
          y: yTablet,
          scale: scaleTablet,
          rotate: rotateTablet,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          alt='bottle'
          className='h-full w-full object-contain'
          src={bottleImage}
        />
      </motion.div>
      {/* 모바일용 */}
      <motion.div
        animate={{ opacity: 1, y: 180 }}
        className='pointer-events-none fixed top-[50vh] left-[52vw] z-50 block h-[30vh] w-[20vw] md:hidden'
        initial={{ opacity: 0, y: 280 }}
        style={{
          x: xMobile,
          y: yMobile,
          rotate: rotateMobile,
          scale: scaleMobile,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          alt='bottle'
          className='h-full w-full object-contain'
          src={bottleImage}
        />
        <div />
      </motion.div>
      <LandingSection_1 />
      <LandingSection_2 />
      <LandingSection_3 />
      <LandingSection_4 />
      <TopButton containerRef={containerRef} />
    </div>
  );
}
