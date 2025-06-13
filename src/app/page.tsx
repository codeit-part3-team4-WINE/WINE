'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';

export default function LandingPage() {
  const router = useRouter();
  return (
    <div>
      <h1 className='text-primary-100 text-3xl'>Landing</h1>
      <Button onClick={() => router.push('/design-system')}>
        go to design system
      </Button>
    </div>
  );
}
