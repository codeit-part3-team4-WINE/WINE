import { cookies } from 'next/headers';

import Test from './components/Test';

export default async function MyProfilePage() {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get(`accessToken`)?.value;

  return (
    <div>
      {accessToken}

      <Test />
    </div>
  );
}
