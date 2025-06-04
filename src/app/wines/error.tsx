'use client';

import ErrorFallback from '@/components/ErrorFallback';
import type { ErrorFallbackProps } from '@/types/error';

export default function Error({ error, reset }: ErrorFallbackProps) {
  return <ErrorFallback error={error} reset={reset} />;
}
