'use client';

import ErrorPage from '@/components/ErrorFallback';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <ErrorPage
          description='시스템에 문제가 발생했습니다.'
          error={error}
          reset={reset}
          title='시스템 오류'
        />
      </body>
    </html>
  );
}
