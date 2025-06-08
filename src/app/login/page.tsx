import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import LoginForm from './components/LoginForm';

export default async function LoginPage() {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get(`accessToken`)?.value;

  if (accessToken) {
    redirect('/myprofile');
  }
  return <LoginForm />;
}
