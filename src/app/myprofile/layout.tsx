import ProfileSection from './components/ProfileSection/ProfileSection';

export default async function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='relative mx-[1.6rem] mt-7 max-w-[120rem] md:mx-[2rem] lg:mx-[2rem] xl:mx-[auto]'>
      <div className='flex w-full flex-col xl:flex-row xl:gap-[5rem]'>
        <div className='xl:sticky xl:top-[4rem] xl:h-fit'>
          <ProfileSection />
        </div>
        <div className='flex w-full flex-col'>{children}</div>
      </div>
    </main>
  );
}
