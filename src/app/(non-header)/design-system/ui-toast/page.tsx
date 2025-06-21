'use client';
import { toast } from 'sonner';

import Button from '@/components/Button';

/**
 * Sonner 토스트 라이브러리 사용 예제 컴포넌트
 *
 * @description 다양한 종류의 토스트 알림을 보여주는 데모 페이지입니다.
 *
 * ## 토스트 타입별 사용법:
 *
 * ### 1. 기본 토스트
 * ```jsx
 * toast('메시지 내용', {
 *   description: '부가 설명',
 *   action: {
 *     label: '액션 버튼 텍스트',
 *     onClick: () => console.log('액션 실행')
 *   }
 * })
 * ```
 *
 * ### 2. 성공 토스트
 * ```jsx
 * toast.success('성공 메시지', {
 *   description: '성공에 대한 설명'
 * })
 * ```
 *
 * ### 3. 에러 토스트
 * ```jsx
 * toast.error('에러 메시지', {
 *   description: '에러에 대한 설명'
 * })
 * ```
 *
 * ### 4. 경고 토스트
 * ```jsx
 * toast.warning('경고 메시지', {
 *   description: '경고에 대한 설명'
 * })
 * ```
 *
 * ### 5. 정보 토스트
 * ```jsx
 * toast.info('정보 메시지', {
 *   description: '정보에 대한 설명'
 * })
 * ```
 *
 * ### 6. 로딩 토스트
 * ```jsx
 * toast.loading('로딩 중...')
 * ```
 *
 * ### 7. 커스텀 토스트
 * ```jsx
 * toast.custom((t) => (
 *   <div>커스텀 JSX 컴포넌트</div>
 * ))
 * ```
 *
 * ### 8. 프로미스 토스트
 * ```jsx
 * toast.promise(promiseFunction, {
 *   loading: '로딩 메시지',
 *   success: '성공 메시지',
 *   error: '실패 메시지'
 * })
 * ```
 *
 * ### 9. 토스트 제거
 * ```jsx
 * toast.dismiss() // 모든 토스트 제거
 * toast.dismiss(toastId) // 특정 토스트 제거
 * ```
 *
 * ### 10. 메시지 토스트
 * ```jsx
 * toast.message('간단한 메시지')
 * ```
 *
 * @example
 * // 컴포넌트 사용법
 * import { SonnerDemo } from './path/to/component';
 *
 * function App() {
 *   return <SonnerDemo />;
 * }
 *
 * @see {@link https://sonner.emilkowal.ski/} Sonner 공식 문서
 * @version 1.0.0
 * @author WHYNE Team
 */

export default function SonnerDemo() {
  return (
    <>
      <div>기본 토스트</div>
      <Button
        variant='outline'
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
            // 큰 글씨 토스트
            className: 'toast-large',
          })
        }
      >
        Show Toast (큰 글씨)
      </Button>
      <div>성공 토스트</div>
      <Button
        variant='outline'
        onClick={() =>
          toast.success('Success', {
            description: '나는 성공 토스트ㅋㅋㅋㅋ',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
            // 작은 글씨 스타일
            className: 'toast-small',
          })
        }
      >
        나는 성공 토스트 (작은 글씨)
      </Button>
      <div>에러 토스트</div>
      <Button
        variant='outline'
        onClick={() =>
          toast.error('Error', {
            description: '나는 에러 토스트',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        나는 에러 토스트
      </Button>
      <div>경고 토스트</div>
      <Button
        variant='outline'
        onClick={() =>
          toast.warning('Warning', {
            description: '나는 경고 토스트',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        나는 경고 토스트
      </Button>
      <div>정보 토스트</div>
      <Button
        variant='outline'
        onClick={() =>
          toast.info('Info', {
            description: '나는 정보 토스트',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        나는 정보 토스트
      </Button>
      <div>로딩 토스트</div>
      <Button
        variant='outline'
        onClick={() =>
          toast.loading('Loading...', {
            description: '데이터를 불러오는 중입니다',
          })
        }
      >
        나는 로딩 토스트
      </Button>
      <div>커스텀 토스트</div>
      <Button
        variant='outline'
        onClick={() => toast.custom((_t) => <div>나는 커스텀 토스트</div>)}
      >
        나는 커스텀 토스트
      </Button>
      <div>프로미스 토스트</div>
      <Button
        variant='outline'
        onClick={() =>
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: 'Loading...',
            success: 'Success!',
            error: 'Error!',
          })
        }
      >
        나는 프로미스 토스트
      </Button>
      <div>토스트 제거</div>
      <Button
        variant='outline'
        onClick={() => {
          toast.dismiss();
          toast.success('모든 토스트가 제거되었습니다');
        }}
      >
        나는 토스트 제거
      </Button>
      <div>메시지 토스트</div>
      <Button
        variant='outline'
        onClick={() =>
          toast.message('메시지를 여기 적으면 됨', {
            description: '이것은 메시지 토스트의 부가 설명입니다',
            action: {
              label: '확인',
              onClick: () => console.log('메시지 확인됨'),
            },
          })
        }
      >
        나는 메시지 토스트
      </Button>

      <div className='mt-8 border-t pt-4'>
        <h3 className='mb-4 text-lg font-bold'>글씨 크기별 토스트 예제</h3>

        <div className='space-y-2'>
          <Button
            variant='outline'
            onClick={() =>
              toast('매우 큰 글씨 토스트', {
                description: '설명도 큰 글씨로',
                className: 'toast-large',
              })
            }
          >
            매우 큰 글씨 (24px)
          </Button>

          <Button
            variant='outline'
            onClick={() =>
              toast('중간 글씨 토스트', {
                description: '적당한 크기의 설명',
                className: 'toast-medium',
              })
            }
          >
            중간 글씨 (16px)
          </Button>

          <Button
            variant='outline'
            onClick={() =>
              toast('작은 글씨 토스트', {
                description: '작은 크기의 설명',
                className: 'toast-small',
              })
            }
          >
            작은 글씨 (12px)
          </Button>

          <Button
            variant='outline'
            onClick={() =>
              toast('커스텀 스타일 토스트', {
                description: '색상과 크기를 모두 변경',
                className: 'toast-custom',
              })
            }
          >
            커스텀 스타일 (색상 + 크기)
          </Button>
        </div>
      </div>
    </>
  );
}
