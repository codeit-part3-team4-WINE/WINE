import { motion } from 'framer-motion';

export default function WaveAnimation() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='absolute top-[-5rem] left-[-2rem] overflow-hidden'
      initial={{ opacity: 1, y: 50 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <motion.svg
        animate={{
          x: [0, -20, 10, 0],
          y: [0, -10, 5, 0],
        }}
        fill='none'
        height='600'
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        viewBox='0 0 2880 600'
        width='2880'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          animate={{ pathLength: 6 }}
          clipRule='evenodd'
          d='M2880.0 419.343L2784.0 428.08C2688.0 436.816 2496.0 454.289 2304.0 410.607C2112.0 366.925 1920.0 262.09 1728.0 218.408C1536.0 174.726 1344.0 192.199 1152.0 218.408C960.0 244.617 768.0 279.562 576.0 288.299C384.0 297.035 192.0 279.562 96.0 270.826L0.0 262.09V0.0H96.0C192.0 0.0 384.0 0.0 576.0 0.0C768.0 0.0 960.0 0.0 1152.0 0.0C1344.0 0.0 1536.0 0.0 1728.0 0.0C1920.0 0.0 2112.0 0.0 2304.0 0.0C2496.0 0.0 2688.0 0.0 2784.0 0.0H2880.0V419.343Z'
          fill='url(#paint0_linear_879_13601)'
          fillRule='evenodd'
          initial={{ pathLength: 2 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient
            gradientUnits='userSpaceOnUse'
            id='paint0_linear_879_13601'
            x1='960'
            x2='960'
            y1='0'
            y2='439'
          >
            <stop stopColor='#6A42DB' />
            <stop offset='1' stopColor='#392375' />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}
