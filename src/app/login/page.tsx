import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import LoginForm from './components/LoginForm';

export default async function LoginPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(`accessToken`)?.value;

  if (accessToken) {
    redirect('/');
  }
  return <LoginForm />;
}
