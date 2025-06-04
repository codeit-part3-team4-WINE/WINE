'use client';

import ErrorFallback from '@/components/ErrorFallback';
import type { ErrorFallbackProps } from '@/types/error';

export default function GlobalError({ error, reset }: ErrorFallbackProps) {
  return (
    <html>
      <body>
        <ErrorFallback
          description='시스템에 문제가 발생했습니다.'
          error={error}
          reset={reset}
          title='시스템 오류'
        />
      </body>
    </html>
  );
}
