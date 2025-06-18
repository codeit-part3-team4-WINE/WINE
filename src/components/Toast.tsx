'use client';

import React, {
  cloneElement,
  createContext,
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';

type ToastType = 'success' | 'error' | 'message';

interface Toast {
  id: number;
  content: ReactNode;
  type?: ToastType;
  duration?: number;
}

const ToastContext = createContext<{
  showToast: (content: ReactNode, type?: ToastType, duration?: number) => void;
} | null>(null);

// ✅ 외부에서 toast 쉽게 사용하도록 커스텀 훅 제공
export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <Toast />');

  return {
    success: (node: ReactNode, duration?: number) =>
      ctx.showToast(node, 'success', duration),
    error: (node: ReactNode, duration?: number) =>
      ctx.showToast(node, 'error', duration),
    message: (node: ReactNode, duration?: number) =>
      ctx.showToast(node, 'message', duration),
  };
};

// ✅ 타입별 스타일 맵
const toastStyleMap = {
  success: {
    bg: 'bg-green-600',
    text: 'text-white',
    bar: 'bg-white/70',
    icon: '',
  },
  error: {
    bg: 'bg-red-400',
    text: 'text-white',
    bar: 'bg-yellow-300',
    icon: '',
  },
  message: {
    bg: 'bg-white',
    text: 'text-black',
    bar: 'bg-black/30',
    icon: '',
  },
} as const;

export default function Toast({ children }: { children?: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (
    content: ReactNode,
    type: ToastType = 'success',
    duration: number = 3000,
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, content, type, duration }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className='fixed top-5 right-5 z-[9999] space-y-3'>
        {toasts.map((toast) => {
          const type = toast.type ?? 'success';
          const styles = toastStyleMap[type];

          const hasCustomClass =
            isValidElement(toast.content) && toast.content.props?.className;

          return (
            <div
              key={toast.id}
              className={`relative flex w-80 items-start gap-2 overflow-hidden rounded-md px-4 py-6 text-sm shadow-md ${hasCustomClass ? toast.content.props?.className : `${styles.bg} ${styles.text}`} `}
            >
              <span className='pt-[2px]'>{styles.icon}</span>

              <div className='flex-1'>
                {isValidElement(toast.content)
                  ? cloneElement(toast.content as ReactElement)
                  : toast.content}
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 ${styles.bar}`}
                style={{
                  width: '100%',
                  animation: `progressBar ${toast.duration ?? 3000}ms linear forwards`,
                }}
              />
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
