import { reviews, user } from './components/mock/mock-data';
import ProfileSection from './components/ProfileSection';
import Tab from './components/Tab';

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='mx-[1.6rem] mt-7 max-w-[120rem] md:mx-[2rem] lg:mx-[2rem] xl:mx-[auto]'>
      <div className='flex w-full flex-col xl:flex-row xl:gap-[5rem]'>
        <ProfileSection image={user.image} nickname={user.nickname} />
        <div className='flex w-full flex-col'>
          <Tab totalCount={reviews.totalCount} />
          {children}
        </div>
      </div>
    </main>
  );
}
