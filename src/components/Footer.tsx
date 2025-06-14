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

        <div className='flex items-center justify-between'>
          <ul className='sub-content-text flex flex-col flex-wrap items-end gap-y-1 text-gray-300 md:flex-row md:gap-6'>
            <li className='break-words whitespace-normal'>Taeilwind v20.08</li>
            <li className='break-words whitespace-normal'>
              김서연 | 김태일 | 맹은빈 | 명지우 | 유용민
            </li>
          </ul>
          <p className='sub-content-text whitespace-nowrap text-gray-300'>
            ©2025.06
          </p>
        </div>
      </div>
    </footer>
  );
}
