import GitHub from '../app/assets/icons/github';

export default function Footer() {
  return (
    <>
      {/* 위쪽 여백용 섹션 (ex: 테스트용) */}
      <div className='bg-[var(--color-white)] px-6 py-[33rem]' />

      {/* Footer */}
      <footer className='w-full overflow-x-hidden bg-black py-20 text-white'>
        <div className='mx-auto flex w-full max-w-[1200px] flex-col gap-y-14 px-4 sm:px-6 md:px-10'>
          {/* 로고 영역 */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <h1 className='text-2xl font-bold'>WINE</h1>
            </div>
            <a
              className='content-text flex items-center gap-2 transition-colors duration-200 hover:text-red-400'
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
              <p>2025.06</p>
            </div>
            <ul className='text-md flex flex-col flex-wrap gap-y-1 text-gray-300 md:flex-row md:gap-6'>
              <li className='break-words whitespace-normal'>
                Taeilwind v20.08
              </li>
              <li className='break-words whitespace-normal'>
                김서연 김태일 명지우 맹은빈 유용민
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
