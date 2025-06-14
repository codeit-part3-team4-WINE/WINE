import WineLogoIcon from '@/app/assets/icons/wine-logo';

import GitHub from '../app/assets/icons/github-logo';

export default function Footer() {
  return (
    <footer className='bottom-0 m-0 w-full bg-black py-10'>
      <div className='flex max-w-[350rem] flex-col gap-8 px-[5vw] md:px-[10vw] xl:px-[15vw]'>
        <div className='flex items-center justify-between'>
          <WineLogoIcon />
          <a
            aria-label='GitHub repository'
            className='flex items-center'
            href='https://github.com/codeit-part3-team4-WINE/WINE'
            rel='noopener noreferrer'
            target='_blank'
          >
            <GitHub />
          </a>
        </div>

        {/* 날짜 + 정보 영역 */}
        <div className='flex flex-col gap-y-2 md:flex-row md:items-center md:justify-between'>
          <div className='text-md whitespace-nowrap text-gray-300'>
            <p>©2025.06</p>
          </div>
          <ul className='text-md flex flex-col flex-wrap gap-y-1 text-gray-300 md:flex-row md:gap-6'>
            <li className='break-words whitespace-normal'>Taeilwind v20.08</li>
            <li className='break-words whitespace-normal'>
              김서연 | 김태일 | 맹은빈 | 명지우 | 유용민
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
