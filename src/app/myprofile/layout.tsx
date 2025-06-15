import { createPrivateServerInstance } from '@/apis/privateServerInstance';

import ProfileSection from './components/ProfileSection/ProfileSection';

export default async function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const axios = await createPrivateServerInstance();
  const { data } = await axios.get('/users/me');
  const user = data;
  return (
    <main className='mx-[1.6rem] mt-7 max-w-[120rem] md:mx-[2rem] lg:mx-[2rem] xl:mx-[auto]'>
      <div className='flex w-full flex-col xl:flex-row xl:gap-[5rem]'>
        <ProfileSection image={user.image} nickname={user.nickname} />
        <div className='flex w-full flex-col'>{children}</div>
      </div>
    </main>
  );
}
